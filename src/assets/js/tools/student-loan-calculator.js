(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var currency = 'USD';
  var fmt = function (n) { return toolsdoAmt(n, 0, currency); };

  function payoffWithExtra(balance, monthlyRate, payment) {
    var b = balance, months = 0, interestPaid = 0;
    while (b > 0 && months < 1200) {
      var interest = b * monthlyRate;
      interestPaid += interest;
      b = b + interest - payment;
      months++;
    }
    return { months: months, interest: interestPaid };
  }

  function duration(months) {
    var y = Math.floor(months / 12), mo = months % 12;
    return ((y ? y + ' yr ' : '') + (mo ? mo + ' mo' : '')).trim() || '0 mo';
  }

  function calc() {
    var balance = parseFloat($('sl-balance').value);
    var rate = parseFloat($('sl-rate').value);
    var years = parseFloat($('sl-term').value);
    var extra = parseFloat($('sl-extra').value) || 0;
    if (!balance || !rate || !years || balance <= 0 || rate <= 0 || years <= 0) return;

    var r = rate / 12 / 100;
    var n = years * 12;
    var payment = balance * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    var standardInterest = payment * n - balance;

    $('sl-payment').textContent = fmt(Math.round(payment)) + '/month';
    $('sl-interest').textContent = fmt(Math.round(standardInterest));

    if (extra > 0) {
      var withExtra = payoffWithExtra(balance, r, payment + extra);
      var saved = standardInterest - withExtra.interest;
      $('sl-extra-time').textContent = duration(withExtra.months) + ' (vs ' + duration(n) + ')';
      $('sl-saved').textContent = fmt(Math.round(saved));
      lastSummary = fmt(balance) + ' @ ' + rate + '% x ' + years + 'yr | Payment: ' + fmt(Math.round(payment)) +
        '/mo | With +' + fmt(extra) + '/mo extra: paid off in ' + duration(withExtra.months) +
        ', interest saved ' + fmt(Math.round(saved));
    } else {
      $('sl-extra-time').textContent = '— (enter an extra payment)';
      $('sl-saved').textContent = '—';
      lastSummary = fmt(balance) + ' @ ' + rate + '% x ' + years + 'yr | Payment: ' + fmt(Math.round(payment)) +
        '/mo | Total interest: ' + fmt(Math.round(standardInterest));
    }
  }

  toolsdoCurrencyToggle('sl-currency-toggle', function (c) {
    ['sl-balance', 'sl-extra'].forEach(function (id) {
      $(id).value = toolsdoConvertAmount(parseFloat($(id).value) || 0, currency, c) || '';
    });
    currency = c;
    var symbol = c === 'USD' ? '$' : '₹';
    $('sl-unit1').textContent = symbol;
    $('sl-unit2').textContent = symbol;
    calc();
  }, 'USD');
  $('sl-calc').addEventListener('click', calc);
  ['sl-balance', 'sl-rate', 'sl-term', 'sl-extra'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('sl-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
