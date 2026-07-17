(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var currency = 'USD';
  var fmt = function (n) { return toolsdoAmt(n, 2, currency); };
  var fmt0 = function (n) { return toolsdoAmt(n, 0, currency); };

  function calc() {
    var rate = parseFloat($('hs-rate').value);
    var hours = parseFloat($('hs-hours').value);
    var weeks = parseFloat($('hs-weeks').value);
    if (!rate || !hours || !weeks || rate <= 0 || hours <= 0 || weeks <= 0) return;

    var annual = rate * hours * weeks;
    var weekly = rate * hours;
    var daily = rate * 8;

    $('hs-annual').textContent = fmt0(Math.round(annual));
    $('hs-monthly').textContent = fmt0(Math.round(annual / 12));
    $('hs-biweekly').textContent = fmt(weekly * 2);
    $('hs-weekly').textContent = fmt(weekly);
    $('hs-daily').textContent = fmt(daily);
    lastSummary = fmt(rate) + '/hour x ' + hours + ' hrs/week x ' + weeks + ' weeks = ' + fmt0(Math.round(annual)) +
      '/year (' + fmt0(Math.round(annual / 12)) + '/month, ' + fmt(weekly) + '/week)';
  }

  toolsdoCurrencyToggle('hs-currency-toggle', function (c) { currency = c; calc(); }, 'USD');
  $('hs-calc').addEventListener('click', calc);
  ['hs-rate', 'hs-hours', 'hs-weeks'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('hs-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
