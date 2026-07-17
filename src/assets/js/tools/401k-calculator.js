(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var fmt = function (n) { return '$' + Number(n).toLocaleString('en-US', { maximumFractionDigits: 0 }); };

  function calc() {
    var age = parseInt($('k401-age').value, 10);
    var retire = parseInt($('k401-retire').value, 10);
    var salary = parseFloat($('k401-salary').value);
    var balance = parseFloat($('k401-balance').value) || 0;
    var contribPct = parseFloat($('k401-contrib').value) || 0;
    var annualReturn = parseFloat($('k401-return').value);
    var matchRate = parseFloat($('k401-match').value) || 0;
    var matchLimit = parseFloat($('k401-match-limit').value) || 0;
    if (!age || !retire || !salary || retire <= age || salary <= 0 || isNaN(annualReturn)) return;

    var months = (retire - age) * 12;
    var r = annualReturn / 100 / 12;
    var yourMonthly = salary / 12 * contribPct / 100;
    var employerMonthly = salary / 12 * Math.min(contribPct, matchLimit) / 100 * matchRate / 100;
    var monthly = yourMonthly + employerMonthly;

    var b = balance;
    for (var i = 0; i < months; i++) {
      b = b * (1 + r) + monthly;
    }
    var yourTotal = yourMonthly * months;
    var employerTotal = employerMonthly * months;
    var growth = b - balance - yourTotal - employerTotal;

    $('k401-result').textContent = fmt(Math.round(b));
    $('k401-your-total').textContent = fmt(Math.round(yourTotal));
    $('k401-employer-total').textContent = fmt(Math.round(employerTotal));
    $('k401-growth').textContent = fmt(Math.round(growth));
    $('k401-monthly').textContent = fmt(Math.round(monthly));
    lastSummary = '401(k) at ' + retire + ': ' + fmt(Math.round(b)) + ' | You contribute: ' + fmt(Math.round(yourTotal)) +
      ' | Employer match: ' + fmt(Math.round(employerTotal)) + ' | Growth: ' + fmt(Math.round(growth)) +
      ' (' + annualReturn + '% return)';
  }

  $('k401-calc').addEventListener('click', calc);
  ['k401-age', 'k401-retire', 'k401-salary', 'k401-balance', 'k401-contrib', 'k401-return', 'k401-match', 'k401-match-limit'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('k401-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
