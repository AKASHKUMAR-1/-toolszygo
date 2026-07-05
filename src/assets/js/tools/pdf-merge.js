(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var files = [];
  var resultBlob = null;

  var fmtSize = function (b) {
    if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
    return (b / 1048576).toFixed(2) + ' MB';
  };

  var drop = $('pm-drop');
  var input = $('pm-file');
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
      if (f.type === 'application/pdf' || /\.pdf$/i.test(f.name)) files.push(f);
    });
    render();
  }

  function render() {
    var listEl = $('pm-list');
    listEl.innerHTML = files.map(function (f, i) {
      return '<div class="file-item">' +
        '<span class="fname" title="' + f.name.replace(/"/g, '&quot;') + '">' + (i + 1) + '. ' + f.name + '</span>' +
        '<span class="fsize">' + fmtSize(f.size) + '</span>' +
        '<button data-act="up" data-i="' + i + '" title="Move up">↑</button>' +
        '<button data-act="down" data-i="' + i + '" title="Move down">↓</button>' +
        '<button data-act="rm" data-i="' + i + '" title="Remove">✕</button>' +
        '</div>';
    }).join('');
    $('pm-merge').disabled = files.length < 2;
  }

  $('pm-list').addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    var i = parseInt(btn.getAttribute('data-i'), 10);
    var act = btn.getAttribute('data-act');
    if (act === 'rm') files.splice(i, 1);
    if (act === 'up' && i > 0) { var t = files[i - 1]; files[i - 1] = files[i]; files[i] = t; }
    if (act === 'down' && i < files.length - 1) { var u = files[i + 1]; files[i + 1] = files[i]; files[i] = u; }
    render();
  });

  $('pm-merge').addEventListener('click', async function () {
    var btn = this;
    btn.textContent = 'Merging…';
    btn.disabled = true;
    try {
      var merged = await PDFLib.PDFDocument.create();
      var totalPages = 0;
      for (var i = 0; i < files.length; i++) {
        var bytes = await files[i].arrayBuffer();
        var doc = await PDFLib.PDFDocument.load(bytes, { ignoreEncryption: false });
        var pages = await merged.copyPages(doc, doc.getPageIndices());
        pages.forEach(function (p) { merged.addPage(p); });
        totalPages += pages.length;
      }
      var out = await merged.save();
      resultBlob = new Blob([out], { type: 'application/pdf' });
      $('pm-placeholder').style.display = 'none';
      $('pm-stats').style.display = '';
      $('pm-count').textContent = files.length;
      $('pm-pages').textContent = totalPages;
      $('pm-size').textContent = fmtSize(resultBlob.size);
      $('pm-download').disabled = false;
    } catch (err) {
      alert('Merge fail ho gaya: ' + (err && err.message ? err.message : err) + '\n(Password-protected PDF ho sakti hai)');
    }
    btn.textContent = 'Merge PDFs';
    btn.disabled = files.length < 2;
  });

  $('pm-download').addEventListener('click', function () {
    if (!resultBlob) return;
    var a = document.createElement('a');
    a.download = 'merged.pdf';
    a.href = URL.createObjectURL(resultBlob);
    a.click();
  });
})();
