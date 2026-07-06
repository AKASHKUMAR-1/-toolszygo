(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var yearly = parseFloat($('ppf-amount').value);
    var rate = parseFloat($('ppf-rate').value);
    var years = parseInt($('ppf-years').value, 10);
    if (!yearly || !rate || !years || yearly <= 0 || rate <= 0 || years < 15) return;
    if (yearly > 150000) yearly = 150000;
    var r = rate / 100;
    var bal = 0;
    for (var y = 1; y <= years; y++) {
      bal = (bal + yearly) * (1 + r);
    }
    var invested = yearly * years;
    var interest = bal - invested;
    $('ppf-maturity').textContent = toolsdoINR(Math.round(bal));
    $('ppf-invested').textContent = toolsdoINR(Math.round(invested));
    $('ppf-interest').textContent = toolsdoINR(Math.round(interest));
    lastSummary = 'PPF ' + toolsdoINR(yearly) + '/year @ ' + rate + '% x ' + years + 'yr | Maturity: ' +
      toolsdoINR(Math.round(bal)) + ' | Interest (tax-free): ' + toolsdoINR(Math.round(interest));
  }

  $('ppf-calc').addEventListener('click', calc);
  ['ppf-amount', 'ppf-rate', 'ppf-years'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('ppf-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
