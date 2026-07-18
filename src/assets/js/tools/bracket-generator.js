(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function roundName(matches) {
    if (matches === 1) return 'Final';
    if (matches === 2) return 'Semifinals';
    if (matches === 4) return 'Quarterfinals';
    return 'Round of ' + matches * 2;
  }

  function matchBox(a, b) {
    var cell = 'padding:7px 10px;font-size:13px;font-family:Arial,Helvetica,sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:170px;';
    var byeStyle = 'color:#A3937E;font-style:italic;';
    return '<div style="border:1px solid #D9CDBA;border-radius:8px;background:#fff;margin:6px 0;">' +
      '<div style="' + cell + 'border-bottom:1px solid #EDE6DA;' + (a === 'BYE' ? byeStyle : '') + '">' + toolsdoEsc(a) + '</div>' +
      '<div style="' + cell + (b === 'BYE' ? byeStyle : '') + '">' + toolsdoEsc(b) + '</div>' +
      '</div>';
  }

  function generate() {
    var names = $('bg-names').value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
    var out = $('bg-bracket');
    if (names.length < 2) {
      out.innerHTML = '<div style="color:#B84F4F;font-size:13.5px;">Enter at least 2 names (one per line).</div>';
      return;
    }
    if (names.length > 64) {
      out.innerHTML = '<div style="color:#B84F4F;font-size:13.5px;">Maximum 64 entries — you have ' + names.length + '.</div>';
      return;
    }
    if ($('bg-shuffle').checked) {
      for (var i = names.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = names[i]; names[i] = names[j]; names[j] = t;
      }
    }
    var size = 2;
    while (size < names.length) size *= 2;
    var byes = size - names.length;

    // Pair so no match is BYE vs BYE: first `byes` teams get a bye each
    var matches = [];
    for (var b = 0; b < byes; b++) matches.push([names[b], 'BYE']);
    for (var k = byes; k < names.length; k += 2) matches.push([names[k], names[k + 1]]);

    var html = '<div style="display:flex;gap:18px;align-items:stretch;">';
    var count = matches.length;
    // Round 1 with real names
    html += '<div style="display:flex;flex-direction:column;justify-content:space-around;min-width:150px;">' +
      '<div style="font-size:12px;font-weight:700;color:#8A7A5C;text-transform:uppercase;letter-spacing:0.5px;">' + roundName(count) + '</div>' +
      matches.map(function (m) { return matchBox(m[0], m[1]); }).join('') + '</div>';
    // Later rounds: empty slots
    for (var r = count / 2; r >= 1; r = r / 2) {
      html += '<div style="display:flex;flex-direction:column;justify-content:space-around;min-width:150px;">' +
        '<div style="font-size:12px;font-weight:700;color:#8A7A5C;text-transform:uppercase;letter-spacing:0.5px;">' + roundName(r) + '</div>';
      for (var m2 = 0; m2 < r; m2++) html += matchBox('—', '—');
      html += '</div>';
      if (r === 1) break;
    }
    // Champion column
    html += '<div style="display:flex;flex-direction:column;justify-content:center;min-width:150px;">' +
      '<div style="font-size:12px;font-weight:700;color:#8A7A5C;text-transform:uppercase;letter-spacing:0.5px;">🏆 Champion</div>' +
      '<div style="border:2px solid #D97757;border-radius:8px;background:#fff;padding:12px 10px;margin:6px 0;font-size:13px;text-align:center;color:#A3937E;">—</div></div>';
    html += '</div>';
    out.innerHTML = html;
  }

  $('bg-generate').addEventListener('click', generate);
  $('bg-print').addEventListener('click', function () {
    if (!$('bg-bracket').innerHTML) generate();
    toolsdoPrint('bg-bracket', 'Tournament Bracket');
  });
})();
