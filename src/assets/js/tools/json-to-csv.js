(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function csvCell(v) {
    if (v === null || v === undefined) return '';
    if (typeof v === 'object') v = JSON.stringify(v);
    v = String(v);
    if (/[",\n\r]/.test(v)) v = '"' + v.replace(/"/g, '""') + '"';
    return v;
  }

  function convert() {
    var raw = $('jc-input').value.trim();
    var status = $('jc-status');
    if (!raw) {
      status.textContent = 'Paste JSON first';
      status.style.color = '#B84F4F';
      return;
    }
    var data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      status.textContent = '✕ Invalid JSON: ' + e.message;
      status.style.color = '#B84F4F';
      return;
    }
    if (!Array.isArray(data)) data = [data];
    if (!data.length) {
      status.textContent = 'JSON array khaali hai';
      status.style.color = '#B84F4F';
      return;
    }
    // collect all keys across objects
    var headers = [];
    data.forEach(function (item) {
      if (item && typeof item === 'object' && !Array.isArray(item)) {
        Object.keys(item).forEach(function (k) {
          if (headers.indexOf(k) === -1) headers.push(k);
        });
      }
    });
    var lines;
    if (headers.length) {
      lines = [headers.map(csvCell).join(',')];
      data.forEach(function (item) {
        lines.push(headers.map(function (h) { return csvCell(item ? item[h] : ''); }).join(','));
      });
    } else {
      // array of arrays/primitives
      lines = data.map(function (item) {
        return Array.isArray(item) ? item.map(csvCell).join(',') : csvCell(item);
      });
    }
    $('jc-output').value = lines.join('\n');
    status.textContent = '✓ ' + data.length + ' rows, ' + (headers.length || 1) + ' columns';
    status.style.color = '#5D8A4E';
  }

  $('jc-convert').addEventListener('click', convert);
  $('jc-copy').addEventListener('click', function () {
    var t = $('jc-output').value;
    if (t) toolsdoCopy(t, this);
  });
  $('jc-download').addEventListener('click', function () {
    var t = $('jc-output').value;
    if (!t) return;
    var a = document.createElement('a');
    a.download = 'data.csv';
    // UTF-8 BOM so Excel opens Hindi text correctly
    a.href = URL.createObjectURL(new Blob(['﻿' + t], { type: 'text/csv;charset=utf-8' }));
    a.click();
  });
})();
