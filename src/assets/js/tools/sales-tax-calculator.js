(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function calc() {
    var amount = parseFloat($('stx-amount').value);
    var rate = parseFloat($('stx-rate').value);
    var mode = $('stx-mode').value;
    if (isNaN(amount) || isNaN(rate) || amount < 0) return;

    var pretax, tax, total;
    if (mode === 'add') {
      pretax = amount;
      tax = amount * rate / 100;
      total = amount + tax;
      $('stx-result').textContent = toolsdoINR(total, 2);
      $('stx-label').textContent = 'Total (tax ke saath)';
    } else {
      total = amount;
      pretax = amount / (1 + rate / 100);
      tax = total - pretax;
      $('stx-result').textContent = toolsdoINR(pretax, 2);
      $('stx-label').textContent = 'Pre-tax amount';
    }
    $('stx-pretax').textContent = toolsdoINR(pretax, 2);
    $('stx-tax').textContent = toolsdoINR(tax, 2);
  }

  ['stx-amount', 'stx-rate', 'stx-mode'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  calc();
})();
