(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var files = [];
  var resultBlob = null;

  var fmtSize = function (b) {
    return b < 1048576 ? (b / 1024).toFixed(1) + ' KB' : (b / 1048576).toFixed(2) + ' MB';
  };

  var drop = $('ip-drop');
  var input = $('ip-file');
  drop.addEventListener('click', function () { input.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
  drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault(); drop.classList.remove('drag');
    addFiles(e.dataTransfer.files);
  });
  input.addEventListener('change', function () {
    addFiles(input.files);
    input.value = '';
  });

  function addFiles(list) {
    Array.prototype.forEach.call(list, function (f) {
      if (/^image\/(jpeg|png|webp)$/.test(f.type)) files.push(f);
    });
    render();
  }

  function render() {
    $('ip-list').innerHTML = files.map(function (f, i) {
      return '<div class="file-item"><span class="fname">' + (i + 1) + '. ' + f.name.replace(/</g, '&lt;') + '</span>' +
        '<span class="fsize">' + fmtSize(f.size) + '</span>' +
        '<button data-act="up" data-i="' + i + '">↑</button><button data-act="down" data-i="' + i + '">↓</button><button data-act="rm" data-i="' + i + '">✕</button></div>';
    }).join('');
    $('ip-convert').disabled = files.length < 1;
  }

  $('ip-list').addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    var i = parseInt(btn.getAttribute('data-i'), 10);
    var act = btn.getAttribute('data-act');
    if (act === 'rm') files.splice(i, 1);
    if (act === 'up' && i > 0) { var t = files[i - 1]; files[i - 1] = files[i]; files[i] = t; }
    if (act === 'down' && i < files.length - 1) { var u = files[i + 1]; files[i + 1] = files[i]; files[i] = u; }
    render();
  });

  async function toBytes(f) {
    if (f.type !== 'image/webp') return { bytes: await f.arrayBuffer(), png: f.type === 'image/png' };
    // convert webp via canvas to png
    var img = new Image();
    var url = URL.createObjectURL(f);
    await new Promise(function (res, rej) { img.onload = res; img.onerror = rej; img.src = url; });
    var cv = document.createElement('canvas');
    cv.width = img.naturalWidth;
    cv.height = img.naturalHeight;
    cv.getContext('2d').drawImage(img, 0, 0);
    URL.revokeObjectURL(url);
    var blob = await new Promise(function (r) { cv.toBlob(r, 'image/png'); });
    return { bytes: await blob.arrayBuffer(), png: true };
  }

  $('ip-convert').addEventListener('click', async function () {
    var btn = this;
    btn.textContent = 'Converting…';
    btn.disabled = true;
    try {
      var pdf = await PDFLib.PDFDocument.create();
      var A4 = [595.28, 841.89];
      for (var i = 0; i < files.length; i++) {
        var data = await toBytes(files[i]);
        var img = data.png ? await pdf.embedPng(data.bytes) : await pdf.embedJpg(data.bytes);
        var p = pdf.addPage(A4);
        var margin = 24;
        var scale = Math.min((A4[0] - margin * 2) / img.width, (A4[1] - margin * 2) / img.height, 1);
        var w = img.width * scale, h = img.height * scale;
        p.drawImage(img, { x: (A4[0] - w) / 2, y: (A4[1] - h) / 2, width: w, height: h });
      }
      var out = await pdf.save();
      resultBlob = new Blob([out], { type: 'application/pdf' });
      $('ip-placeholder').style.display = 'none';
      $('ip-stats').style.display = '';
      $('ip-count').textContent = files.length;
      $('ip-size').textContent = fmtSize(resultBlob.size);
      $('ip-download').disabled = false;
    } catch (e) {
      alert('Fail: ' + (e.message || e));
    }
    btn.textContent = 'Convert to PDF';
    btn.disabled = files.length < 1;
  });

  $('ip-download').addEventListener('click', function () {
    if (!resultBlob) return;
    var a = document.createElement('a');
    a.download = 'images.pdf';
    a.href = URL.createObjectURL(resultBlob);
    a.click();
  });
})();
