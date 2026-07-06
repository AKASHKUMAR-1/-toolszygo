(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var file = null;
  var totalPages = 0;
  var resultBlob = null;

  var fmtSize = function (b) {
    return b < 1048576 ? (b / 1024).toFixed(1) + ' KB' : (b / 1048576).toFixed(2) + ' MB';
  };

  var drop = $('ps-drop');
  var input = $('ps-file');
  drop.addEventListener('click', function () { input.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
  drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault();
    drop.classList.remove('drag');
    if (e.dataTransfer.files.length) setFile(e.dataTransfer.files[0]);
  });
  input.addEventListener('change', function () {
    if (input.files.length) setFile(input.files[0]);
  });

  async function setFile(f) {
    if (f.type !== 'application/pdf' && !/\.pdf$/i.test(f.name)) {
      alert('Sirf PDF files supported hain.');
      return;
    }
    file = f;
    try {
      var doc = await PDFLib.PDFDocument.load(await f.arrayBuffer(), { ignoreEncryption: false });
      totalPages = doc.getPageCount();
      $('ps-fileinfo').textContent = f.name + ' — ' + totalPages + ' pages';
      $('ps-split').disabled = false;
      if (!$('ps-range').value) $('ps-range').value = '1-' + totalPages;
    } catch (e) {
      $('ps-fileinfo').textContent = 'PDF nahi khul payi (password-protected?)';
      file = null;
    }
  }

  function parseRange(str, max) {
    var pages = [];
    var parts = str.split(',');
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i].trim();
      if (!p) continue;
      var m = p.match(/^(\d+)\s*-\s*(\d+)$/);
      if (m) {
        var a = parseInt(m[1], 10), b = parseInt(m[2], 10);
        if (a < 1 || b > max || a > b) return null;
        for (var k = a; k <= b; k++) pages.push(k - 1);
      } else if (/^\d+$/.test(p)) {
        var n = parseInt(p, 10);
        if (n < 1 || n > max) return null;
        pages.push(n - 1);
      } else {
        return null;
      }
    }
    return pages.length ? pages : null;
  }

  $('ps-split').addEventListener('click', async function () {
    if (!file) return;
    var err = $('ps-error');
    err.style.display = 'none';
    var pages = parseRange($('ps-range').value, totalPages);
    if (!pages) {
      err.style.display = '';
      err.textContent = 'Range sahi nahi hai — 1 se ' + totalPages + ' ke beech likho, jaise "1-3,5"';
      return;
    }
    var btn = this;
    btn.textContent = 'Splitting…';
    btn.disabled = true;
    try {
      var src = await PDFLib.PDFDocument.load(await file.arrayBuffer());
      var out = await PDFLib.PDFDocument.create();
      var copied = await out.copyPages(src, pages);
      copied.forEach(function (p) { out.addPage(p); });
      var bytes = await out.save();
      resultBlob = new Blob([bytes], { type: 'application/pdf' });
      $('ps-placeholder').style.display = 'none';
      $('ps-stats').style.display = '';
      $('ps-orig').textContent = totalPages;
      $('ps-extracted').textContent = pages.length;
      $('ps-size').textContent = fmtSize(resultBlob.size);
      $('ps-download').disabled = false;
    } catch (e) {
      err.style.display = '';
      err.textContent = 'Split fail ho gaya: ' + (e && e.message ? e.message : e);
    }
    btn.textContent = 'Split PDF';
    btn.disabled = false;
  });

  $('ps-download').addEventListener('click', function () {
    if (!resultBlob) return;
    var a = document.createElement('a');
    a.download = 'split.pdf';
    a.href = URL.createObjectURL(resultBlob);
    a.click();
  });
})();
