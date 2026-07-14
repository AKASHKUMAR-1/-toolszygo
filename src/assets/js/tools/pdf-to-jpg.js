(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/js/vendor/pdf.worker.min.js';
  var file = null;
  var pages = []; // {url, name}

  var drop = $('pj-drop');
  var input = $('pj-file');
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
    $('pj-info').textContent = f.name;
    $('pj-convert').disabled = false;
  }

  $('pj-convert').addEventListener('click', async function () {
    if (!file) return;
    var btn = this;
    btn.disabled = true;
    var scale = parseFloat($('pj-scale').value);
    var box = $('pj-results');
    box.innerHTML = '';
    pages = [];
    try {
      var pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
      var base = file.name.replace(/\.pdf$/i, '');
      for (var p = 1; p <= pdf.numPages; p++) {
        $('pj-status').textContent = 'Page ' + p + ' / ' + pdf.numPages + '…';
        var page = await pdf.getPage(p);
        var viewport = page.getViewport({ scale: scale });
        var canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvasContext: ctx, viewport: viewport }).promise;
        var url = canvas.toDataURL('image/jpeg', 0.88);
        pages.push({ url: url, name: base + '-page-' + p + '.jpg' });
        var thumb = document.createElement('a');
        thumb.href = url;
        thumb.download = base + '-page-' + p + '.jpg';
        thumb.title = 'Click to download';
        thumb.innerHTML = '<img src="' + url + '" style="width:100%;border-radius:8px;border:1px solid #F0E0CC;"><div style="font-size:10px;text-align:center;color:#B98E63;">Page ' + p + '</div>';
        box.appendChild(thumb);
      }
      $('pj-status').textContent = '✓ ' + pdf.numPages + ' pages ready — click a thumbnail to download';
      $('pj-download-all').disabled = false;
    } catch (e) {
      $('pj-status').textContent = 'Fail: ' + (e.message || 'password-protected PDF?');
    }
    btn.disabled = false;
  });

  $('pj-download-all').addEventListener('click', function () {
    pages.forEach(function (pg, i) {
      setTimeout(function () {
        var a = document.createElement('a');
        a.download = pg.name;
        a.href = pg.url;
        a.click();
      }, i * 400);
    });
  });
})();
