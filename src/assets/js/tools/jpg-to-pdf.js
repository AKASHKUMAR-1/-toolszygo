(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var files = [];
  var resultBlob = null;

  var fmtSize = window.toolsdoFmtSize;

  var drop = $('jp-drop');
  var input = $('jp-file');
  drop.addEventListener('click', function () { input.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
  drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault();
    drop.classList.remove('drag');
    addFiles(e.dataTransfer.files);
  });
  input.addEventListener('change', function () {
    addFiles(input.files);
    input.value = '';
  });

  function addFiles(list) {
    Array.prototype.forEach.call(list, function (f) {
      if (/^image\/(jpeg|png)$/.test(f.type)) files.push(f);
    });
    render();
  }

  function render() {
    $('jp-list').innerHTML = files.map(function (f, i) {
      return '<div class="file-item">' +
        '<span class="fname">' + (i + 1) + '. ' + f.name.replace(/</g, '&lt;') + '</span>' +
        '<span class="fsize">' + fmtSize(f.size) + '</span>' +
        '<button data-act="up" data-i="' + i + '">↑</button>' +
        '<button data-act="down" data-i="' + i + '">↓</button>' +
        '<button data-act="rm" data-i="' + i + '">✕</button>' +
        '</div>';
    }).join('');
    $('jp-convert').disabled = files.length < 1;
  }

  $('jp-list').addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    var i = parseInt(btn.getAttribute('data-i'), 10);
    var act = btn.getAttribute('data-act');
    if (act === 'rm') files.splice(i, 1);
    if (act === 'up' && i > 0) { var t = files[i - 1]; files[i - 1] = files[i]; files[i] = t; }
    if (act === 'down' && i < files.length - 1) { var u = files[i + 1]; files[i + 1] = files[i]; files[i] = u; }
    render();
  });

  $('jp-convert').addEventListener('click', async function () {
    var btn = this;
    btn.textContent = 'Converting…';
    btn.disabled = true;
    try {
      var pdf = await PDFLib.PDFDocument.create();
      var pageMode = $('jp-size').value;
      var A4 = [595.28, 841.89];
      for (var i = 0; i < files.length; i++) {
        var bytes = await files[i].arrayBuffer();
        var img = files[i].type === 'image/png'
          ? await pdf.embedPng(bytes)
          : await pdf.embedJpg(bytes);
        if (pageMode === 'fit') {
          var page = pdf.addPage([img.width, img.height]);
          page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
        } else {
          var p = pdf.addPage(A4);
          var margin = 24;
          var maxW = A4[0] - margin * 2;
          var maxH = A4[1] - margin * 2;
          var scale = Math.min(maxW / img.width, maxH / img.height, 1);
          var w = img.width * scale;
          var h = img.height * scale;
          p.drawImage(img, { x: (A4[0] - w) / 2, y: (A4[1] - h) / 2, width: w, height: h });
        }
      }
      var out = await pdf.save();
      resultBlob = new Blob([out], { type: 'application/pdf' });
      $('jp-placeholder').style.display = 'none';
      $('jp-stats').style.display = '';
      $('jp-count').textContent = files.length;
      $('jp-pdfsize').textContent = fmtSize(resultBlob.size);
      $('jp-download').disabled = false;
    } catch (err) {
      alert('Convert fail ho gaya: ' + (err && err.message ? err.message : err));
    }
    btn.textContent = 'Convert to PDF';
    btn.disabled = files.length < 1;
  });

  $('jp-download').addEventListener('click', function () {
    if (!resultBlob) return;
    var a = document.createElement('a');
    a.download = 'images.pdf';
    a.href = URL.createObjectURL(resultBlob);
    a.click();
  });
})();
