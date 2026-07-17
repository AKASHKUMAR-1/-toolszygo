(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var currency = 'USD';
  var fmt = function (n) { return toolsdoAmt(n, 0, currency); };

  function calc() {
    var price = parseFloat($('al-price').value);
    var down = parseFloat($('al-down').value) || 0;
    var trade = parseFloat($('al-trade').value) || 0;
    var taxPct = parseFloat($('al-tax').value) || 0;
    var apr = parseFloat($('al-rate').value);
    var n = parseInt($('al-term').value, 10);
    if (!price || price <= 0 || isNaN(apr) || !n) return;

    var taxable = Math.max(0, price - trade);
    var taxAmt = taxable * taxPct / 100;
    var loan = Math.max(0, taxable + taxAmt - down);
    if (loan <= 0) return;

    var payment;
    if (apr === 0) {
      payment = loan / n;
    } else {
      var r = apr / 12 / 100;
      payment = loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    }
    var totalInterest = payment * n - loan;
    var totalCost = price + taxAmt + totalInterest;

    $('al-payment').textContent = fmt(Math.round(payment));
    $('al-loan').textContent = fmt(Math.round(loan));
    $('al-tax-amt').textContent = fmt(Math.round(taxAmt));
    $('al-interest').textContent = fmt(Math.round(totalInterest));
    $('al-total').textContent = fmt(Math.round(totalCost));
    lastSummary = 'Vehicle ' + fmt(price) + ', loan ' + fmt(Math.round(loan)) + ' @ ' + apr + '% APR x ' + n +
      ' months | Payment: ' + fmt(Math.round(payment)) + '/month | Total interest: ' + fmt(Math.round(totalInterest));
  }

  toolsdoCurrencyToggle('al-currency-toggle', function (c) { currency = c; calc(); }, 'USD');
  $('al-calc').addEventListener('click', calc);
  ['al-price', 'al-down', 'al-trade', 'al-tax', 'al-rate', 'al-term'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('al-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
