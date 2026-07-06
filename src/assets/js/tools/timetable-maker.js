(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var DAYS = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  var KEY = 'toolsdo-timetable';
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}

  function build() {
    var periods = Math.min(12, Math.max(2, parseInt($('tt-periods').value, 10) || 6));
    var table = $('tt-table');
    var html = '<tr>' + DAYS.map(function (d, i) {
      return '<th style="border:1px solid #E8E0D2;background:#F3EDE2;padding:8px 6px;font-size:11px;letter-spacing:0.05em;color:#8A7A5C;">' + d + '</th>';
    }).join('') + '</tr>';
    for (var p = 0; p < periods; p++) {
      html += '<tr>';
      for (var c = 0; c < DAYS.length; c++) {
        var key = p + '-' + c;
        var val = saved[key] || (c === 0 ? '' : '');
        var isTime = c === 0;
        html += '<td contenteditable="true" data-key="' + key + '" style="border:1px solid #E8E0D2;padding:8px 6px;min-width:70px;background:' + (isTime ? '#FCFAF6;font-weight:600;color:#8A7A5C;' : '#FFF;') + 'font-size:12px;text-align:center;">' + (val || (isTime ? (8 + p) + ':00' : '')) + '</td>';
      }
      html += '</tr>';
    }
    table.innerHTML = html;
    table.querySelectorAll('td').forEach(function (td) {
      td.addEventListener('input', function () {
        saved[td.getAttribute('data-key')] = td.textContent;
        try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) {}
      });
    });
  }

  $('tt-periods').addEventListener('change', build);
  $('tt-clear').addEventListener('click', function () {
    saved = {};
    try { localStorage.removeItem(KEY); } catch (e) {}
    build();
  });
  $('tt-print').addEventListener('click', function () {
    var area = $('tt-print-area');
    area.innerHTML = '<h2 style="text-align:center;font-family:Arial,sans-serif;">' +
      ($('tt-title').value || 'Timetable').replace(/</g, '&lt;') + '</h2>' +
      '<table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:12px;">' +
      $('tt-table').innerHTML.replace(/contenteditable="true"/g, '') + '</table>';
    toolsdoPrint('tt-print-area', $('tt-title').value || 'Timetable');
  });
  build();
})();
