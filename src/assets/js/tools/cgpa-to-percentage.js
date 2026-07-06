(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function getMultiplier() {
    var sel = $('cg-multiplier').value;
    if (sel === 'custom') return parseFloat($('cg-custom').value) || 9.5;
    return parseFloat(sel);
  }

  function calc() {
    var val = parseFloat($('cg-value').value);
    var mode = $('cg-mode').value;
    var m = getMultiplier();
    $('cg-custom-row').style.display = $('cg-multiplier').value === 'custom' ? '' : 'none';
    if (isNaN(val) || val < 0 || !m) return;
    if (mode === 'c2p') {
      var pct = Math.round(val * m * 100) / 100;
      $('cg-result').textContent = pct + '%';
      $('cg-label').textContent = 'Percentage';
      $('cg-formula').textContent = val + ' × ' + m + ' = ' + pct + '%';
    } else {
      var cgpa = Math.round(val / m * 100) / 100;
      $('cg-result').textContent = String(cgpa);
      $('cg-label').textContent = 'CGPA';
      $('cg-formula').textContent = val + ' ÷ ' + m + ' = ' + cgpa;
    }
  }

  ['cg-value', 'cg-custom'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  ['cg-mode', 'cg-multiplier'].forEach(function (id) {
    $(id).addEventListener('change', calc);
  });
  calc();
})();
