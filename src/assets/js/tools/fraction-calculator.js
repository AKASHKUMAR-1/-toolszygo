(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); return b === 0 ? a : gcd(b, a % b); }

  function calc() {
    var n1 = parseInt($('fr-n1').value, 10);
    var d1 = parseInt($('fr-d1').value, 10);
    var n2 = parseInt($('fr-n2').value, 10);
    var d2 = parseInt($('fr-d2').value, 10);
    var op = $('fr-op').value;
    if (!d1 || !d2 || isNaN(n1) || isNaN(n2)) { $('fr-result').textContent = '—'; return; }

    var rn, rd;
    if (op === '+') { rn = n1 * d2 + n2 * d1; rd = d1 * d2; }
    else if (op === '-') { rn = n1 * d2 - n2 * d1; rd = d1 * d2; }
    else if (op === '*') { rn = n1 * n2; rd = d1 * d2; }
    else { if (n2 === 0) { $('fr-result').textContent = 'Error'; return; } rn = n1 * d2; rd = d1 * n2; }

    if (rd < 0) { rd = -rd; rn = -rn; }
    var g = gcd(rn, rd) || 1;
    rn /= g; rd /= g;

    $('fr-result').textContent = rd === 1 ? String(rn) : (rn + '/' + rd);
    $('fr-decimal').textContent = '= ' + (Math.round((rn / rd) * 10000) / 10000);
  }

  ['fr-n1', 'fr-d1', 'fr-op', 'fr-n2', 'fr-d2'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
})();
