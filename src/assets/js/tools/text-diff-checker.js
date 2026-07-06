(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  var esc = window.toolsdoEsc;

  // LCS-based line diff
  function diff(aLines, bLines) {
    var n = aLines.length, m = bLines.length;
    // dp table (n+1 x m+1)
    var dp = [];
    for (var i = 0; i <= n; i++) dp.push(new Int32Array(m + 1));
    for (var x = n - 1; x >= 0; x--) {
      for (var y = m - 1; y >= 0; y--) {
        dp[x][y] = aLines[x] === bLines[y] ? dp[x + 1][y + 1] + 1 : Math.max(dp[x + 1][y], dp[x][y + 1]);
      }
    }
    var ops = [];
    var p = 0, q = 0;
    while (p < n && q < m) {
      if (aLines[p] === bLines[q]) { ops.push(['=', aLines[p]]); p++; q++; }
      else if (dp[p + 1][q] >= dp[p][q + 1]) { ops.push(['-', aLines[p]]); p++; }
      else { ops.push(['+', bLines[q]]); q++; }
    }
    while (p < n) { ops.push(['-', aLines[p++]]); }
    while (q < m) { ops.push(['+', bLines[q++]]); }
    return ops;
  }

  $('diff-run').addEventListener('click', function () {
    var a = $('diff-a').value.split('\n');
    var b = $('diff-b').value.split('\n');
    if (a.length * b.length > 4000000) {
      $('diff-summary').textContent = 'Text bahut bada hai — 2000 lines tak compare karo.';
      $('diff-output').innerHTML = '';
      return;
    }
    var ops = diff(a, b);
    var removed = 0, added = 0;
    var html = ops.map(function (op) {
      if (op[0] === '-') { removed++; return '<div style="background:#FBE4E4;color:#8A3535;border-radius:4px;padding:1px 8px;">− ' + esc(op[1]) + '</div>'; }
      if (op[0] === '+') { added++; return '<div style="background:#E9F2E4;color:#3F6B33;border-radius:4px;padding:1px 8px;">+ ' + esc(op[1]) + '</div>'; }
      return '<div style="padding:1px 8px;color:#6E6552;">&nbsp;&nbsp;' + esc(op[1]) + '</div>';
    }).join('');
    if (removed === 0 && added === 0) {
      $('diff-summary').textContent = '✓ Dono texts bilkul same hain';
      $('diff-output').innerHTML = '';
      return;
    }
    $('diff-summary').textContent = removed + ' line(s) hati (laal) · ' + added + ' line(s) nayi (hari)';
    $('diff-output').innerHTML = html;
  });
})();
