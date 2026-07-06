(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var fmt = function (n) { return '₹' + n.toLocaleString('en-IN', { maximumFractionDigits: 0 }); };

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
    $('fc-perkm').textContent = '₹' + (Math.round(price / mil * 100) / 100).toLocaleString('en-IN') + '/km';
    lastSummary = dist + ' km @ ' + mil + ' km/l, fuel ' + fmt(price) + '/l | Fuel: ' +
      (Math.round(litres * 100) / 100) + 'L | Cost: ' + fmt(cost);
  }

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
