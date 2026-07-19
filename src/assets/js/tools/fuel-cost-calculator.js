(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var currency = 'INR';
  var fmt = function (n) { return toolsdoAmt(n, 0, currency); };

  function calc() {
    var dist = parseFloat($('fc-distance').value);
    var mil = parseFloat($('fc-mileage').value);
    var price = parseFloat($('fc-price').value);
    if (!dist || !mil || !price || dist <= 0 || mil <= 0 || price <= 0) return;
    if ($('fc-round').checked) dist *= 2;
    var litres = dist / mil;
    var cost = litres * price;
    $('fc-cost').textContent = fmt(cost);
    $('fc-litres').textContent = (Math.round(litres * 100) / 100).toLocaleString('en-IN') + ' litre';
    $('fc-perkm').textContent = fmt(Math.round(price / mil * 100) / 100) + '/km';
    lastSummary = dist + ' km @ ' + mil + ' km/l, fuel ' + fmt(price) + '/l | Fuel: ' +
      (Math.round(litres * 100) / 100) + 'L | Cost: ' + fmt(cost);
  }

  toolsdoCurrencyToggle('fc-currency-toggle', function (c) {
    $('fc-price').value = toolsdoConvertAmount(parseFloat($('fc-price').value) || 0, currency, c);
    currency = c;
    $('fc-unit').textContent = c === 'USD' ? '$' : '₹';
    calc();
  });
  $('fc-calc').addEventListener('click', calc);
  ['fc-distance', 'fc-mileage', 'fc-price', 'fc-round'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('fc-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
