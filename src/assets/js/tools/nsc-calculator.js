(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var P = parseFloat($('nsc-amount').value);
    var rate = parseFloat($('nsc-rate').value);
    if (!P || !rate || P <= 0 || rate <= 0) return;
    var maturity = P * Math.pow(1 + rate / 100, 5);
    var interest = maturity - P;
    $('nsc-maturity').textContent = toolsdoINR(Math.round(maturity));
    $('nsc-invested').textContent = toolsdoINR(Math.round(P));
    $('nsc-interest').textContent = toolsdoINR(Math.round(interest));
    lastSummary = 'NSC ' + toolsdoINR(P) + ' @ ' + rate + '% x 5yr | Maturity: ' +
      toolsdoINR(Math.round(maturity)) + ' | Interest: ' + toolsdoINR(Math.round(interest));
  }

  $('nsc-calc').addEventListener('click', calc);
  ['nsc-amount', 'nsc-rate'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('nsc-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
