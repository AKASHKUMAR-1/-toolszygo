(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var yearly = parseFloat($('ssy-amount').value);
    var rate = parseFloat($('ssy-rate').value);
    if (!yearly || !rate || yearly <= 0 || rate <= 0) return;
    if (yearly > 150000) yearly = 150000;
    var r = rate / 100;
    var bal = 0;
    // deposits years 1-15, account matures at 21 years
    for (var y = 1; y <= 21; y++) {
      if (y <= 15) bal += yearly;
      bal = bal * (1 + r);
    }
    var invested = yearly * 15;
    var interest = bal - invested;
    $('ssy-maturity').textContent = toolsdoINR(Math.round(bal));
    $('ssy-invested').textContent = toolsdoINR(Math.round(invested));
    $('ssy-interest').textContent = toolsdoINR(Math.round(interest));
    lastSummary = 'SSY ' + toolsdoINR(yearly) + '/year @ ' + rate + '% | Maturity (21 yr): ' +
      toolsdoINR(Math.round(bal)) + ' | Deposited: ' + toolsdoINR(invested) + ' | Interest: ' + toolsdoINR(Math.round(interest));
  }

  $('ssy-calc').addEventListener('click', calc);
  ['ssy-amount', 'ssy-rate'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('ssy-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
