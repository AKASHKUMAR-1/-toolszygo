(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var P = parseFloat($('scss-amount').value);
    var rate = parseFloat($('scss-rate').value);
    if (!P || !rate || P <= 0 || rate <= 0) return;
    if (P > 3000000) P = 3000000;
    var yearly = P * rate / 100;
    var quarterly = yearly / 4;
    var total5 = yearly * 5;
    $('scss-quarterly').textContent = toolsdoINR(Math.round(quarterly));
    $('scss-monthly').textContent = toolsdoINR(Math.round(yearly / 12));
    $('scss-yearly').textContent = toolsdoINR(Math.round(yearly));
    $('scss-total').textContent = toolsdoINR(Math.round(total5));
    lastSummary = 'SCSS ' + toolsdoINR(P) + ' @ ' + rate + '% | Quarterly payout: ' +
      toolsdoINR(Math.round(quarterly)) + ' | 5yr total interest: ' + toolsdoINR(Math.round(total5));
  }

  $('scss-calc').addEventListener('click', calc);
  ['scss-amount', 'scss-rate'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('scss-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
