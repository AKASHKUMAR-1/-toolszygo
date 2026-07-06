(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/js/vendor/pdf.worker.min.js';
  var file = null;
  var resultBlob = null;

  var fmtSize = window.toolsdoFmtSize;

  var drop = $('pp-drop');
  var input = $('pp-file');
  drop.addEventListener('click', function () { input.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
  drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault(); drop.classList.remove('drag');
    if (e.dataTransfer.files.length) setFile(e.dataTransfer.files[0]);
  });
  input.addEventListener('change', function () {
    if (input.files.length) setFile(input.files[0]);
  });

  function setFile(f) {
    file = f;
    $('pp-info').textContent = f.name;
    $('pp-unlock').disabled = false;
  }

  $('pp-unlock').addEventListener('click', async function () {
    if (!file) return;
    var password = $('pp-password').value;
    var btn = this;
    btn.disabled = true;
    try {
      var pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer(), password: password }).promise;
      var out = await PDFLib.PDFDocument.create();
      for (var p = 1; p <= pdf.numPages; p++) {
        $('pp-status').textContent = 'Page ' + p + ' / ' + pdf.numPages + ' unlock ho raha hai…';
        var page = await pdf.getPage(p);
        var viewport = page.getViewport({ scale: 2 });
        var canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvasContext: ctx, viewport: viewport }).promise;
        var jpg = await new Promise(function (r) { canvas.toBlob(r, 'image/jpeg', 0.85); });
        var img = await out.embedJpg(await jpg.arrayBuffer());
        var pg = out.addPage([viewport.width / 2, viewport.height / 2]);
        pg.drawImage(img, { x: 0, y: 0, width: viewport.width / 2, height: viewport.height / 2 });
      }
      var bytes = await out.save();
      resultBlob = new Blob([bytes], { type: 'application/pdf' });
      $('pp-placeholder').style.display = 'none';
      $('pp-stats').style.display = '';
      $('pp-pages').textContent = pdf.numPages;
      $('pp-size').textContent = fmtSize(resultBlob.size);
      $('pp-status').textContent = '✓ Password hat gaya';
      $('pp-download').disabled = false;
    } catch (e) {
      $('pp-status').textContent = (e.name === 'PasswordException' || /password/i.test(e.message || ''))
        ? '✕ Password galat hai — sahi password daalo'
        : 'Fail: ' + (e.message || e);
    }
    btn.disabled = false;
  });

  $('pp-download').addEventListener('click', function () {
    if (!resultBlob) return;
    var a = document.createElement('a');
    a.download = file.name.replace(/\.pdf$/i, '') + '-unlocked.pdf';
    a.href = URL.createObjectURL(resultBlob);
    a.click();
  });
})();
