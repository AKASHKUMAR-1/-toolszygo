(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var P = parseFloat($('ls-amount').value);
    var rate = parseFloat($('ls-rate').value);
    var years = parseFloat($('ls-years').value);
    if (!P || !rate || !years || P <= 0 || rate <= 0 || years <= 0) return;
    var fv = P * Math.pow(1 + rate / 100, years);
    var gain = fv - P;
    $('ls-maturity').textContent = toolsdoINR(Math.round(fv));
    $('ls-invested').textContent = toolsdoINR(Math.round(P));
    $('ls-gain').textContent = toolsdoINR(Math.round(gain));
    $('ls-multiple').textContent = (Math.round(fv / P * 100) / 100) + 'x';
    lastSummary = 'Lumpsum ' + toolsdoINR(P) + ' @ ' + rate + '% x ' + years + 'yr | Maturity: ' +
      toolsdoINR(Math.round(fv)) + ' (' + (Math.round(fv / P * 100) / 100) + 'x) | Gain: ' + toolsdoINR(Math.round(gain));
  }

  $('ls-calc').addEventListener('click', calc);
  ['ls-amount', 'ls-rate', 'ls-years'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('ls-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
