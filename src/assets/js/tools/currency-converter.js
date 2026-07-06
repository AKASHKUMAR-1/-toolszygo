(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var CURRENCIES = ['INR', 'USD', 'EUR', 'GBP', 'AED', 'AUD', 'CAD', 'SGD', 'JPY', 'CNY', 'CHF', 'HKD', 'NZD', 'SEK', 'KRW', 'NOK', 'MXN', 'BRL', 'ZAR', 'TRY', 'THB', 'MYR', 'IDR', 'PHP', 'DKK', 'PLN', 'CZK', 'HUF', 'ILS', 'BGN'];
  var lastResult = '';

  function fill() {
    var opts = CURRENCIES.map(function (c) { return '<option value="' + c + '">' + c + '</option>'; }).join('');
    $('cur-from').innerHTML = opts;
    $('cur-to').innerHTML = opts;
    $('cur-from').value = 'USD';
    $('cur-to').value = 'INR';
  }

  function convert() {
    var amount = parseFloat($('cur-amount').value);
    var from = $('cur-from').value;
    var to = $('cur-to').value;
    if (isNaN(amount) || amount < 0) return;
    if (from === to) {
      $('cur-result').textContent = amount.toLocaleString('en-IN') + ' ' + to;
      $('cur-rate').textContent = 'Same currency';
      return;
    }
    $('cur-result').textContent = '…';
    $('cur-rate').textContent = 'Rate fetch ho raha hai…';
    fetch('https://api.frankfurter.dev/v1/latest?amount=' + amount + '&from=' + from + '&to=' + to)
      .then(function (r) { if (!r.ok) throw new Error('network'); return r.json(); })
      .then(function (d) {
        var val = d.rates[to];
        $('cur-result').textContent = val.toLocaleString('en-IN', { maximumFractionDigits: 2 }) + ' ' + to;
        var unit = (val / amount);
        $('cur-rate').textContent = '1 ' + from + ' = ' + unit.toLocaleString('en-IN', { maximumFractionDigits: 4 }) + ' ' + to;
        $('cur-date').textContent = 'Rate date: ' + d.date + ' (ECB reference)';
        lastResult = amount + ' ' + from + ' = ' + val.toLocaleString('en-IN', { maximumFractionDigits: 2 }) + ' ' + to;
      })
      .catch(function () {
        $('cur-result').textContent = '—';
        $('cur-rate').textContent = 'Rate nahi mila — internet check karke dobara try karo';
      });
  }

  $('cur-convert').addEventListener('click', convert);
  $('cur-swap').addEventListener('click', function () {
    var f = $('cur-from').value;
    $('cur-from').value = $('cur-to').value;
    $('cur-to').value = f;
    convert();
  });
  $('cur-copy').addEventListener('click', function () {
    if (lastResult) toolsdoCopy(lastResult, this);
  });
  fill();
  convert();
})();
