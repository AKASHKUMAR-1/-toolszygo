(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var R = parseFloat($('rd-amount').value);
    var rate = parseFloat($('rd-rate').value);
    var n = parseInt($('rd-months').value, 10);
    if (!R || !rate || !n || R <= 0 || rate <= 0 || n <= 0) return;
    var rq = rate / 400; // quarterly rate
    // each deposit k (1..n) stays for (n - k + 1) months => quarterly compounding on each
    var maturity = 0;
    for (var k = 1; k <= n; k++) {
      var monthsHeld = n - k + 1;
      maturity += R * Math.pow(1 + rq, 4 * monthsHeld / 12);
    }
    var invested = R * n;
    var interest = maturity - invested;
    $('rd-maturity').textContent = toolsdoINR(Math.round(maturity));
    $('rd-invested').textContent = toolsdoINR(Math.round(invested));
    $('rd-interest').textContent = toolsdoINR(Math.round(interest));
    lastSummary = 'RD ' + toolsdoINR(R) + '/month @ ' + rate + '% x ' + n + ' months | Maturity: ' +
      toolsdoINR(Math.round(maturity)) + ' | Interest: ' + toolsdoINR(Math.round(interest));
  }

  $('rd-calc').addEventListener('click', calc);
  ['rd-amount', 'rd-rate', 'rd-months'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('rd-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
