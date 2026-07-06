(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/js/vendor/pdf.worker.min.js';
  var file = null;
  var resultBlob = null;

  var fmtSize = window.toolsdoFmtSize;

  var drop = $('pc2-drop');
  var input = $('pc2-file');
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
    $('pc2-info').textContent = f.name + ' (' + fmtSize(f.size) + ')';
    $('pc2-compress').disabled = false;
  }

  $('pc2-quality').addEventListener('input', function () {
    $('pc2-quality-val').textContent = this.value;
  });

  $('pc2-compress').addEventListener('click', async function () {
    if (!file) return;
    var btn = this;
    btn.disabled = true;
    var quality = parseInt($('pc2-quality').value, 10) / 100;
    try {
      var pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
      var out = await PDFLib.PDFDocument.create();
      for (var p = 1; p <= pdf.numPages; p++) {
        $('pc2-status').textContent = 'Page ' + p + ' / ' + pdf.numPages + ' compress ho raha hai…';
        var page = await pdf.getPage(p);
        var viewport = page.getViewport({ scale: 1.5 });
        var canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvasContext: ctx, viewport: viewport }).promise;
        var jpgBlob = await new Promise(function (r) { canvas.toBlob(r, 'image/jpeg', quality); });
        var img = await out.embedJpg(await jpgBlob.arrayBuffer());
        var pg = out.addPage([viewport.width, viewport.height]);
        pg.drawImage(img, { x: 0, y: 0, width: viewport.width, height: viewport.height });
      }
      var bytes = await out.save();
      resultBlob = new Blob([bytes], { type: 'application/pdf' });
      $('pc2-placeholder').style.display = 'none';
      $('pc2-stats').style.display = '';
      $('pc2-orig').textContent = fmtSize(file.size);
      $('pc2-new').textContent = fmtSize(resultBlob.size);
      var saved = Math.round((1 - resultBlob.size / file.size) * 100);
      $('pc2-saved').textContent = saved > 0 ? saved + '% chhoti' : 'Compression nahi hui (PDF pehle se optimized hai)';
      $('pc2-status').textContent = '✓ Ho gaya';
      $('pc2-download').disabled = false;
    } catch (e) {
      $('pc2-status').textContent = 'Fail ho gaya: ' + (e.message || 'password-protected PDF?');
    }
    btn.disabled = false;
  });

  $('pc2-download').addEventListener('click', function () {
    if (!resultBlob) return;
    var a = document.createElement('a');
    a.download = file.name.replace(/\.pdf$/i, '') + '-compressed.pdf';
    a.href = URL.createObjectURL(resultBlob);
    a.click();
  });
})();
