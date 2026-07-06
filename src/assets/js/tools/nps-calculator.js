(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var age = parseInt($('nps-age').value, 10);
    var P = parseFloat($('nps-amount').value);
    var annual = parseFloat($('nps-return').value);
    var annuityPct = Math.min(100, Math.max(40, parseFloat($('nps-annuity').value) || 40));
    if (!age || !P || !annual || age < 18 || age >= 60 || P <= 0 || annual <= 0) return;
    var years = 60 - age;
    var i = annual / 12 / 100;
    var n = years * 12;
    var corpus = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    var invested = P * n;
    var annuityAmt = corpus * annuityPct / 100;
    var lumpsum = corpus - annuityAmt;
    var pension = annuityAmt * 0.06 / 12;
    $('nps-corpus').textContent = toolsdoINR(Math.round(corpus));
    $('nps-invested').textContent = toolsdoINR(Math.round(invested));
    $('nps-lumpsum').textContent = toolsdoINR(Math.round(lumpsum)) + ' (' + (100 - annuityPct) + '%)';
    $('nps-annuity-amt').textContent = toolsdoINR(Math.round(annuityAmt)) + ' (' + annuityPct + '%)';
    $('nps-pension').textContent = toolsdoINR(Math.round(pension)) + '/month';
    lastSummary = 'NPS ' + toolsdoINR(P) + '/month, age ' + age + '-60 @ ' + annual + '% | Corpus: ' +
      toolsdoINR(Math.round(corpus)) + ' | Lump sum: ' + toolsdoINR(Math.round(lumpsum)) +
      ' | Pension: ~' + toolsdoINR(Math.round(pension)) + '/month';
  }

  $('nps-calc').addEventListener('click', calc);
  ['nps-age', 'nps-amount', 'nps-return', 'nps-annuity'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('nps-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
