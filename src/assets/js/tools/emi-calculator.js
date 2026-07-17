(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var currency = 'INR';
  var fmt = function (n) { return toolsdoAmt(n, 0, currency); };

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
    $('emi-result').textContent = fmt(Math.round(emi));
    $('emi-principal').textContent = fmt(Math.round(P));
    $('emi-interest').textContent = fmt(Math.round(interest));
    $('emi-total').textContent = fmt(Math.round(total));
    lastSummary = 'EMI: ' + fmt(Math.round(emi)) + '/month | Principal: ' + fmt(P) +
      ' | Total interest: ' + fmt(Math.round(interest)) + ' | Total payment: ' + fmt(Math.round(total));
  }

  toolsdoCurrencyToggle('emi-currency-toggle', function (c) { currency = c; calc(); });
  $('emi-calc').addEventListener('click', calc);
  ['emi-amount', 'emi-rate', 'emi-tenure', 'emi-tenure-unit'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('emi-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
