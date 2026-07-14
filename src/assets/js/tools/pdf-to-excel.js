(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/js/vendor/pdf.worker.min.js';
  var fname = 'data';

  var drop = $('pe-drop');
  var input = $('pe-file');
  drop.addEventListener('click', function () { input.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
  drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault(); drop.classList.remove('drag');
    if (e.dataTransfer.files.length) extract(e.dataTransfer.files[0]);
  });
  input.addEventListener('change', function () {
    if (input.files.length) extract(input.files[0]);
  });

  function csvCell(v) {
    v = String(v).trim();
    if (/[",\n]/.test(v)) v = '"' + v.replace(/"/g, '""') + '"';
    return v;
  }

  async function extract(file) {
    fname = file.name.replace(/\.pdf$/i, '');
    $('pe-status').textContent = 'Extracting table data…';
    try {
      var pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
      var allRows = [];
      for (var p = 1; p <= pdf.numPages; p++) {
        $('pe-status').textContent = 'Page ' + p + ' / ' + pdf.numPages + '…';
        var page = await pdf.getPage(p);
        var content = await page.getTextContent();
        // group by y (rows), sort by x, split cells on big gaps
        var lines = {};
        content.items.forEach(function (it) {
          if (!it.str.trim()) return;
          var y = Math.round(it.transform[5] / 3) * 3; // tolerance banding
          if (!lines[y]) lines[y] = [];
          lines[y].push({ x: it.transform[4], str: it.str, w: it.width });
        });
        var ys = Object.keys(lines).map(Number).sort(function (a, b) { return b - a; });
        ys.forEach(function (y) {
          var items = lines[y].sort(function (a, b) { return a.x - b.x; });
          var cells = [];
          var cur = items[0].str;
          for (var i = 1; i < items.length; i++) {
            var gap = items[i].x - (items[i - 1].x + items[i - 1].w);
            if (gap > 12) { cells.push(cur); cur = items[i].str; }
            else cur += (gap > 1 ? ' ' : '') + items[i].str;
          }
          cells.push(cur);
          allRows.push(cells.map(csvCell).join(','));
        });
        if (p < pdf.numPages) allRows.push('');
      }
      $('pe-output').value = allRows.join('\n');
      $('pe-status').textContent = '✓ ' + allRows.filter(Boolean).length + ' rows extracted — review and download';
      $('pe-download').disabled = false;
    } catch (e) {
      $('pe-status').textContent = 'Fail: ' + (e.message || 'password-protected ya scanned PDF?');
    }
  }

  $('pe-download').addEventListener('click', function () {
    var t = $('pe-output').value;
    if (!t) return;
    var a = document.createElement('a');
    a.download = fname + '.csv';
    a.href = URL.createObjectURL(new Blob(['﻿' + t], { type: 'text/csv;charset=utf-8' }));
    a.click();
  });
  $('pe-copy').addEventListener('click', function () {
    var t = $('pe-output').value;
    if (t) toolsdoCopy(t, this);
  });
})();
