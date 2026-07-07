(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function calc() {
    var price = parseFloat($('mtg-price').value) || 0;
    var down = parseFloat($('mtg-down').value) || 0;
    var rate = parseFloat($('mtg-rate').value);
    var years = parseFloat($('mtg-years').value);
    var tax = parseFloat($('mtg-tax').value) || 0;
    var insurance = parseFloat($('mtg-insurance').value) || 0;
    var loan = Math.max(0, price - down);
    if (!loan || !rate || !years) return;

    var r = rate / 12 / 100;
    var n = years * 12;
    var emi = loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    var taxMonth = tax / 12;
    var insMonth = insurance / 12;
    var total = emi + taxMonth + insMonth;
    var totalInterest = emi * n - loan;

    $('mtg-total').textContent = toolsdoINR(Math.round(total));
    $('mtg-loan').textContent = toolsdoINR(Math.round(loan));
    $('mtg-emi').textContent = toolsdoINR(Math.round(emi));
    $('mtg-tax-month').textContent = toolsdoINR(Math.round(taxMonth));
    $('mtg-ins-month').textContent = toolsdoINR(Math.round(insMonth));
    $('mtg-total-interest').textContent = toolsdoINR(Math.round(totalInterest));
  }

  ['mtg-price', 'mtg-down', 'mtg-rate', 'mtg-years', 'mtg-tax', 'mtg-insurance'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  calc();
})();
