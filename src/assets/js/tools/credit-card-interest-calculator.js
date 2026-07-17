(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var currency = 'INR';
  var fmt = function (n) { return toolsdoAmt(n, 0, currency); };

  function calc() {
    var bal = parseFloat($('cci-balance').value);
    var rate = parseFloat($('cci-rate').value);
    var pay = parseFloat($('cci-payment').value);
    if (!bal || !rate || !pay || bal <= 0 || rate <= 0 || pay <= 0) return;
    var r = rate / 100;
    var warning = $('cci-warning');
    $('cci-apr').textContent = (Math.round(rate * 12 * 10) / 10) + '% per year';

    var firstInterest = bal * r;
    if (pay <= firstInterest) {
      $('cci-months').textContent = 'Never!';
      $('cci-total').textContent = '∞';
      $('cci-interest').textContent = '∞';
      warning.style.display = '';
      warning.textContent = '⚠ Your payment (' + fmt(pay) + ') is less than or equal to just the interest (' + fmt(Math.round(firstInterest)) +
        '/month) — the balance will never clear. Increase your payment!';
      lastSummary = '';
      return;
    }
    warning.style.display = 'none';

    var b = bal, months = 0, totalInterest = 0;
    while (b > 0 && months < 1200) {
      var interest = b * r;
      totalInterest += interest;
      b = b + interest - pay;
      months++;
    }
    var totalPaid = bal + totalInterest;
    var y = Math.floor(months / 12), mo = months % 12;
    var dur = (y ? y + ' years ' : '') + (mo ? mo + ' months' : '');
    $('cci-months').textContent = dur.trim();
    $('cci-total').textContent = fmt(Math.round(totalPaid));
    $('cci-interest').textContent = fmt(Math.round(totalInterest)) + ' (' + Math.round(totalInterest / bal * 100) + '% of balance)';
    lastSummary = 'Balance ' + fmt(bal) + ' @ ' + rate + '%/month, paying ' + fmt(pay) +
      '/month | Payoff: ' + dur.trim() + ' | Interest: ' + fmt(Math.round(totalInterest));
  }

  toolsdoCurrencyToggle('cci-currency-toggle', function (c) { currency = c; calc(); });
  $('cci-calc').addEventListener('click', calc);
  ['cci-balance', 'cci-rate', 'cci-payment'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('cci-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
