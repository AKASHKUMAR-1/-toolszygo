(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var currency = 'INR';
  var fmt = function (n) { return toolsdoAmt(n, 2, currency); };

  function calc() {
    var bill = parseFloat($('tip-bill').value);
    var pct = parseInt($('tip-pct').value, 10);
    var people = Math.max(1, parseInt($('tip-people').value, 10) || 1);
    $('tip-pct-val').textContent = pct;
    if (isNaN(bill) || bill < 0) return;
    var tip = bill * pct / 100;
    var total = bill + tip;
    var per = total / people;
    $('tip-total').textContent = fmt(total);
    $('tip-amount').textContent = fmt(tip) + ' (' + pct + '%)';
    $('tip-person').textContent = people > 1 ? fmt(per) + ' × ' + people + ' people' : fmt(per);
    lastSummary = 'Bill: ' + fmt(bill) + ' | Tip ' + pct + '%: ' + fmt(tip) + ' | Total: ' + fmt(total) +
      (people > 1 ? ' | Per person (' + people + '): ' + fmt(per) : '');
  }

  toolsdoCurrencyToggle('tip-currency-toggle', function (c) {
    $('tip-bill').value = toolsdoConvertAmount(parseFloat($('tip-bill').value) || 0, currency, c);
    currency = c;
    $('tip-unit').textContent = c === 'USD' ? '$' : '₹';
    calc();
  });
  $('tip-calc').addEventListener('click', calc);
  ['tip-bill', 'tip-pct', 'tip-people'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('tip-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
