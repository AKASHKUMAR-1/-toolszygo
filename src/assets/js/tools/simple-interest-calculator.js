(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var fmt = function (n) { return '₹' + n.toLocaleString('en-IN', { maximumFractionDigits: 2 }); };

  function calc() {
    var P = parseFloat($('si-principal').value);
    var R = parseFloat($('si-rate').value);
    var time = parseFloat($('si-time').value);
    if (!P || !R || !time || P <= 0 || R <= 0 || time <= 0) return;
    var T = $('si-time-unit').value === 'years' ? time : time / 12;
    var si = P * R * T / 100;
    var total = P + si;
    $('si-result').textContent = fmt(si);
    $('si-p').textContent = fmt(P);
    $('si-total').textContent = fmt(total);
    lastSummary = fmt(P) + ' @ ' + R + '% x ' + time + ' ' + $('si-time-unit').value +
      ' | SI: ' + fmt(si) + ' | Total: ' + fmt(total);
  }

  $('si-calc').addEventListener('click', calc);
  ['si-principal', 'si-rate', 'si-time', 'si-time-unit'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('si-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
