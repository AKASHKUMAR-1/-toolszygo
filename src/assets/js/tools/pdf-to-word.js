(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/js/vendor/pdf.worker.min.js';
  var fname = 'document';

  var drop = $('pw2-drop');
  var input = $('pw2-file');
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

  async function extract(file) {
    fname = file.name.replace(/\.pdf$/i, '');
    $('pw2-status').textContent = 'Text nikal rahe hain…';
    try {
      var pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
      var out = [];
      for (var p = 1; p <= pdf.numPages; p++) {
        $('pw2-status').textContent = 'Page ' + p + ' / ' + pdf.numPages + '…';
        var page = await pdf.getPage(p);
        var content = await page.getTextContent();
        // group items into lines by y position
        var lines = {};
        content.items.forEach(function (it) {
          var y = Math.round(it.transform[5]);
          if (!lines[y]) lines[y] = [];
          lines[y].push(it);
        });
        var ys = Object.keys(lines).map(Number).sort(function (a, b) { return b - a; });
        var pageText = ys.map(function (y) {
          return lines[y].sort(function (a, b) { return a.transform[4] - b.transform[4]; })
            .map(function (it) { return it.str; }).join(' ').replace(/\s{2,}/g, ' ').trim();
        }).filter(Boolean).join('\n');
        out.push(pageText);
      }
      $('pw2-output').value = out.join('\n\n');
      $('pw2-status').textContent = '✓ ' + pdf.numPages + ' pages ka text nikal gaya';
      $('pw2-download').disabled = false;
    } catch (e) {
      $('pw2-status').textContent = 'PDF nahi padh paye — ' + (e.message || 'password-protected ho sakti hai');
    }
  }

  $('pw2-download').addEventListener('click', function () {
    var text = $('pw2-output').value;
    if (!text) return;
    var esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    var html = '<html xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="utf-8"></head><body>' +
      esc.split('\n').map(function (l) { return '<p>' + (l || '&nbsp;') + '</p>'; }).join('') + '</body></html>';
    var a = document.createElement('a');
    a.download = fname + '.doc';
    a.href = URL.createObjectURL(new Blob(['﻿' + html], { type: 'application/msword' }));
    a.click();
  });
  $('pw2-copy').addEventListener('click', function () {
    var t = $('pw2-output').value;
    if (t) toolsdoCopy(t, this);
  });
})();
