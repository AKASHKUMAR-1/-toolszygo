(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var MAP = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
    [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  var VALS = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  function toRoman(n) {
    var out = '';
    MAP.forEach(function (p) {
      while (n >= p[0]) { out += p[1]; n -= p[0]; }
    });
    return out;
  }

  function fromRoman(s) {
    s = s.toUpperCase().trim();
    if (!/^[IVXLCDM]+$/.test(s)) return null;
    var total = 0;
    for (var i = 0; i < s.length; i++) {
      var cur = VALS[s[i]];
      var next = VALS[s[i + 1]] || 0;
      total += cur < next ? -cur : cur;
    }
    // validate: round-trip must match (catches invalid forms like IIII, VX)
    if (toRoman(total) !== s) return null;
    return total;
  }

  function num2roman() {
    var n = parseInt($('rn2-number').value, 10);
    $('rn2-roman').textContent = (n >= 1 && n <= 3999) ? toRoman(n) : 'Range: 1–3999';
  }

  function roman2num() {
    var input = $('rn2-input').value.trim();
    var err = $('rn2-error');
    if (!input) { $('rn2-value').textContent = '—'; err.textContent = ''; return; }
    var v = fromRoman(input);
    if (v === null) {
      $('rn2-value').textContent = '—';
      err.textContent = 'Not a valid Roman numeral (e.g. XIV, MMXXVI)';
    } else {
      $('rn2-value').textContent = v.toLocaleString('en-IN');
      err.textContent = '';
    }
  }

  $('rn2-number').addEventListener('input', num2roman);
  $('rn2-input').addEventListener('input', roman2num);
  num2roman();
  roman2num();
})();
