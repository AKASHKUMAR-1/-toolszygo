(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var fmt = function (n) { return '₹' + n.toLocaleString('en-IN', { maximumFractionDigits: 2 }); };

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
    $('tip-person').textContent = people > 1 ? fmt(per) + ' × ' + people + ' log' : fmt(per);
    lastSummary = 'Bill: ' + fmt(bill) + ' | Tip ' + pct + '%: ' + fmt(tip) + ' | Total: ' + fmt(total) +
      (people > 1 ? ' | Per person (' + people + '): ' + fmt(per) : '');
  }

  $('tip-calc').addEventListener('click', calc);
  ['tip-bill', 'tip-pct', 'tip-people'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('tip-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
