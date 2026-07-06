(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var fmt = function (n) { return '₹' + Math.round(n).toLocaleString('en-IN'); };

  function slabTax(income, slabs) {
    var tax = 0;
    for (var i = 0; i < slabs.length; i++) {
      var lo = slabs[i][0], hi = slabs[i][1], rate = slabs[i][2];
      if (income > lo) tax += (Math.min(income, hi) - lo) * rate;
    }
    return tax;
  }

  // FY 2025-26 new regime slabs
  var NEW_SLABS = [
    [0, 400000, 0], [400000, 800000, 0.05], [800000, 1200000, 0.10],
    [1200000, 1600000, 0.15], [1600000, 2000000, 0.20], [2000000, 2400000, 0.25],
    [2400000, Infinity, 0.30],
  ];
  // old regime slabs (below 60)
  var OLD_SLABS = [
    [0, 250000, 0], [250000, 500000, 0.05], [500000, 1000000, 0.20], [1000000, Infinity, 0.30],
  ];

  function newRegimeTax(gross, salaried) {
    var ti = Math.max(0, gross - (salaried ? 75000 : 0));
    var tax = slabTax(ti, NEW_SLABS);
    // 87A rebate: taxable income up to 12L => rebate up to 60k
    if (ti <= 1200000) tax = Math.max(0, tax - 60000);
    return tax * 1.04; // cess
  }

  function oldRegimeTax(gross, salaried, deductions) {
    var ti = Math.max(0, gross - (salaried ? 50000 : 0) - deductions);
    var tax = slabTax(ti, OLD_SLABS);
    if (ti <= 500000) tax = Math.max(0, tax - 12500);
    return tax * 1.04;
  }

  function calc() {
    var income = parseFloat($('tax-income').value);
    var salaried = $('tax-salaried').checked;
    var ded = parseFloat($('tax-deductions').value) || 0;
    if (isNaN(income) || income < 0) return;
    var nt = newRegimeTax(income, salaried);
    var ot = oldRegimeTax(income, salaried, ded);
    var best = Math.min(nt, ot);
    $('tax-best').textContent = fmt(best);
    $('tax-new').textContent = fmt(nt);
    $('tax-old').textContent = fmt(ot);
    if (Math.round(nt) === Math.round(ot)) {
      $('tax-verdict').textContent = 'Dono regimes me tax same hai';
      $('tax-diff').textContent = '—';
    } else if (nt < ot) {
      $('tax-verdict').textContent = '✓ New regime better hai';
      $('tax-diff').textContent = fmt(ot - nt) + ' bachega (new me)';
    } else {
      $('tax-verdict').textContent = '✓ Old regime better hai';
      $('tax-diff').textContent = fmt(nt - ot) + ' bachega (old me)';
    }
    lastSummary = 'Income ' + fmt(income) + (salaried ? ' (salaried)' : '') + ' | New regime: ' + fmt(nt) +
      ' | Old regime (ded ' + fmt(ded) + '): ' + fmt(ot) + ' | Best: ' + (nt <= ot ? 'New' : 'Old');
  }

  $('tax-calc').addEventListener('click', calc);
  ['tax-income', 'tax-deductions'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('tax-salaried').addEventListener('change', calc);
  $('tax-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
