(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var fmt = function (n) { return '₹' + Math.round(n).toLocaleString('en-IN'); };

  function calc() {
    var N = parseInt($('cf-members').value, 10);
    var amount = parseFloat($('cf-amount').value);
    var turn = parseInt($('cf-turn').value, 10);
    var rate = parseFloat($('cf-rate').value);
    if (!N || !amount || !turn || N < 2 || amount <= 0 || turn < 1 || turn > N || isNaN(rate)) return;

    var pool = N * amount;
    var totalPaid = N * amount;
    var remaining = N - turn; // months left after your turn
    var advance = remaining * amount;
    var monthlyRate = rate / 100 / 12;
    // sum of declining outstanding balance: (remaining + (remaining-1) + ... + 1) * amount, discounted at monthlyRate
    var benefit = monthlyRate * amount * (remaining * (remaining + 1) / 2);

    $('cf-pool').textContent = fmt(pool);
    $('cf-total-paid').textContent = fmt(totalPaid);
    $('cf-advance').textContent = fmt(advance);
    $('cf-months').textContent = remaining + (remaining === 1 ? ' month' : ' months');
    $('cf-benefit').textContent = fmt(benefit);
    $('cf-benefit-label').textContent = turn === N ? 'Value of taking your turn early (you took it last — no benefit)' : 'Value of taking your turn early';

    lastSummary = N + ' members, ₹' + amount + '/month, your turn: ' + turn + '/' + N + ' | Pool: ' + fmt(pool) +
      ' | Advance: ' + fmt(advance) + ' for ' + remaining + ' months | Interest-equivalent value: ' + fmt(benefit) +
      ' (at ' + rate + '% reference rate)';
  }

  $('cf-calc').addEventListener('click', calc);
  ['cf-members', 'cf-amount', 'cf-turn', 'cf-rate'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('cf-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
