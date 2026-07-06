(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  // simple CSV parser with quote support
  function parseCSV(text, delim) {
    var rows = [];
    var row = [];
    var cur = '';
    var inQuotes = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (inQuotes) {
        if (c === '"') {
          if (text[i + 1] === '"') { cur += '"'; i++; }
          else inQuotes = false;
        } else cur += c;
      } else {
        if (c === '"') inQuotes = true;
        else if (c === delim) { row.push(cur); cur = ''; }
        else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
        else if (c === '\r') { /* skip */ }
        else cur += c;
      }
    }
    if (cur !== '' || row.length) { row.push(cur); rows.push(row); }
    return rows.filter(function (r) { return r.length > 1 || (r[0] && r[0].trim()); });
  }

  function convert() {
    var raw = $('cj-input').value;
    var status = $('cj-status');
    if (!raw.trim()) {
      status.textContent = 'Pehle CSV paste karo';
      status.style.color = '#B84F4F';
      return;
    }
    // auto-detect delimiter: tab (Excel paste) vs comma
    var firstLine = raw.split('\n')[0];
    var delim = (firstLine.split('\t').length > firstLine.split(',').length) ? '\t' : ',';
    var rows = parseCSV(raw, delim);
    if (!rows.length) return;
    var useHeaders = $('cj-headers').checked;
    var toNum = $('cj-numbers').checked;
    var castVal = function (v) {
      if (toNum && v !== '' && !isNaN(v)) return parseFloat(v);
      return v;
    };
    var result;
    if (useHeaders) {
      var headers = rows[0].map(function (h) { return h.trim(); });
      result = rows.slice(1).map(function (r) {
        var obj = {};
        headers.forEach(function (h, i) { obj[h] = castVal(r[i] !== undefined ? r[i] : ''); });
        return obj;
      });
    } else {
      result = rows.map(function (r) { return r.map(castVal); });
    }
    $('cj-output').value = JSON.stringify(result, null, 2);
    status.textContent = '✓ ' + result.length + ' rows converted' + (delim === '\t' ? ' (tab-separated detect hua)' : '');
    status.style.color = '#5D8A4E';
  }

  $('cj-convert').addEventListener('click', convert);
  $('cj-copy').addEventListener('click', function () {
    var t = $('cj-output').value;
    if (t) toolsdoCopy(t, this);
  });
  $('cj-download').addEventListener('click', function () {
    var t = $('cj-output').value;
    if (!t) return;
    var a = document.createElement('a');
    a.download = 'data.json';
    a.href = URL.createObjectURL(new Blob([t], { type: 'application/json' }));
    a.click();
  });
})();
