(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var age = parseInt($('rc-age').value, 10);
    var retireAge = parseInt($('rc-retire').value, 10);
    var expense = parseFloat($('rc-expense').value);
    var inflation = parseFloat($('rc-inflation').value) / 100;
    var lifeExp = parseInt($('rc-life').value, 10);
    if (!age || !retireAge || !expense || retireAge <= age || lifeExp <= retireAge || expense <= 0) return;

    var yearsToRetire = retireAge - age;
    var retirementYears = lifeExp - retireAge;
    var postRetReturn = 0.07; // conservative post-retirement return

    // expenses at retirement (monthly)
    var futureMonthly = expense * Math.pow(1 + inflation, yearsToRetire);
    var annualExp = futureMonthly * 12;

    // corpus with growing withdrawals (real return method)
    var corpus;
    if (Math.abs(postRetReturn - inflation) < 0.0001) {
      corpus = annualExp * retirementYears;
    } else {
      var g = inflation, r = postRetReturn;
      corpus = annualExp * (1 - Math.pow((1 + g) / (1 + r), retirementYears)) / (r - g);
    }

    // SIP needed @12% to build corpus
    var i = 0.12 / 12;
    var n = yearsToRetire * 12;
    var sip = corpus / (((Math.pow(1 + i, n) - 1) / i) * (1 + i));

    var fmtCr = function (v) {
      if (v >= 10000000) return '₹' + (Math.round(v / 100000) / 100).toLocaleString('en-IN') + ' crore';
      return toolsdoINR(Math.round(v));
    };

    $('rc-corpus').textContent = fmtCr(corpus);
    $('rc-future-exp').textContent = toolsdoINR(Math.round(futureMonthly)) + '/month';
    $('rc-sip').textContent = toolsdoINR(Math.round(sip)) + '/month';
    lastSummary = 'Age ' + age + '->' + retireAge + ', expenses ' + toolsdoINR(expense) + '/mo @ ' +
      (inflation * 100) + '% inflation | Corpus needed: ' + fmtCr(corpus) + ' | SIP @12%: ' + toolsdoINR(Math.round(sip)) + '/mo';
  }

  $('rc-calc').addEventListener('click', calc);
  ['rc-age', 'rc-retire', 'rc-expense', 'rc-inflation', 'rc-life'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('rc-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
