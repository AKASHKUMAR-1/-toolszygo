(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var P = parseFloat($('emi-amount').value);
    var annual = parseFloat($('emi-rate').value);
    var tenure = parseFloat($('emi-tenure').value);
    if (!P || !annual || !tenure || P <= 0 || annual <= 0 || tenure <= 0) return;
    var n = $('emi-tenure-unit').value === 'years' ? tenure * 12 : tenure;
    var r = annual / 12 / 100;
    var emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    var total = emi * n;
    var interest = total - P;
    $('emi-result').textContent = toolsdoINR(Math.round(emi));
    $('emi-principal').textContent = toolsdoINR(Math.round(P));
    $('emi-interest').textContent = toolsdoINR(Math.round(interest));
    $('emi-total').textContent = toolsdoINR(Math.round(total));
    lastSummary = 'EMI: ' + toolsdoINR(Math.round(emi)) + '/month | Principal: ' + toolsdoINR(P) +
      ' | Total interest: ' + toolsdoINR(Math.round(interest)) + ' | Total payment: ' + toolsdoINR(Math.round(total));
  }

  $('emi-calc').addEventListener('click', calc);
  ['emi-amount', 'emi-rate', 'emi-tenure', 'emi-tenure-unit'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('emi-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
