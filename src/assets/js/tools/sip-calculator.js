(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var P = parseFloat($('sip-amount').value);
    var annual = parseFloat($('sip-rate').value);
    var years = parseFloat($('sip-years').value);
    if (!P || !annual || !years || P <= 0 || annual <= 0 || years <= 0) return;
    var i = annual / 12 / 100;
    var n = years * 12;
    var fv = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    var invested = P * n;
    var gain = fv - invested;
    $('sip-result').textContent = toolsdoINR(Math.round(fv));
    $('sip-invested').textContent = toolsdoINR(Math.round(invested));
    $('sip-gain').textContent = toolsdoINR(Math.round(gain));
    lastSummary = 'SIP ' + toolsdoINR(P) + '/month @ ' + annual + '% x ' + years + 'yr | Maturity: ' +
      toolsdoINR(Math.round(fv)) + ' | Invested: ' + toolsdoINR(Math.round(invested)) + ' | Gain: ' + toolsdoINR(Math.round(gain));
  }

  $('sip-calc').addEventListener('click', calc);
  ['sip-amount', 'sip-rate', 'sip-years'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('sip-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
