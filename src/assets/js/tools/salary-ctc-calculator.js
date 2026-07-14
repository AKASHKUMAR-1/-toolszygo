(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  // simplified new-regime tax for salaried (FY 2025-26)
  function estimateTax(gross) {
    var ti = Math.max(0, gross - 75000);
    var slabs = [
      [0, 400000, 0], [400000, 800000, 0.05], [800000, 1200000, 0.10],
      [1200000, 1600000, 0.15], [1600000, 2000000, 0.20], [2000000, 2400000, 0.25],
      [2400000, Infinity, 0.30],
    ];
    var tax = 0;
    slabs.forEach(function (s) {
      if (ti > s[0]) tax += (Math.min(ti, s[1]) - s[0]) * s[2];
    });
    if (ti <= 1200000) tax = Math.max(0, tax - 60000);
    return tax * 1.04;
  }

  function calc() {
    var ctc = parseFloat($('ctc-amount').value);
    var basicPct = parseFloat($('ctc-basic').value) / 100;
    var hasPf = $('ctc-pf').checked;
    var withTax = $('ctc-tax').checked;
    if (!ctc || !basicPct || ctc <= 0) return;
    var basic = ctc * basicPct;
    var employerPf = hasPf ? basic * 0.12 : 0;
    var employeePf = hasPf ? basic * 0.12 : 0;
    var pt = 2400;
    var grossSalary = ctc - employerPf; // what's payable to employee before deductions
    var tax = withTax ? estimateTax(grossSalary) : 0;
    var annualInhand = grossSalary - employeePf - pt - tax;
    var monthly = annualInhand / 12;
    $('ctc-inhand').textContent = toolsdoINR(Math.round(monthly));
    $('ctc-epf').textContent = toolsdoINR(Math.round(employerPf)) + '/year';
    $('ctc-pf-ded').textContent = toolsdoINR(Math.round(employeePf)) + '/year';
    $('ctc-pt').textContent = toolsdoINR(pt) + '/year';
    $('ctc-tax-amt').textContent = withTax ? toolsdoINR(Math.round(tax / 12)) + '/month' : 'Not deducted';
    $('ctc-annual').textContent = toolsdoINR(Math.round(annualInhand));
    lastSummary = 'CTC ' + toolsdoINR(ctc) + ' (basic ' + Math.round(basicPct * 100) + '%) | In-hand: ~' +
      toolsdoINR(Math.round(monthly)) + '/month | PF: ' + toolsdoINR(Math.round(employeePf)) +
      ' | Tax: ' + toolsdoINR(Math.round(tax)) + '/yr';
  }

  $('ctc-calc').addEventListener('click', calc);
  ['ctc-amount', 'ctc-basic'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  ['ctc-pf', 'ctc-tax'].forEach(function (id) {
    $(id).addEventListener('change', calc);
  });
  $('ctc-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
