(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var income = parseFloat($('le-income').value);
    var existing = parseFloat($('le-emis').value) || 0;
    var rate = parseFloat($('le-rate').value);
    var years = parseFloat($('le-tenure').value);
    var foir = parseFloat($('le-foir').value) / 100;
    if (!income || !rate || !years || income <= 0 || rate <= 0 || years <= 0) return;
    var maxEmi = income * foir - existing;
    if (maxEmi <= 0) {
      $('le-amount').textContent = 'Eligibility nahi banti';
      $('le-emi').textContent = 'Existing EMIs bahut zyada hain';
      $('le-total').textContent = '—';
      lastSummary = '';
      return;
    }
    var r = rate / 12 / 100;
    var n = years * 12;
    var loan = maxEmi * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
    $('le-amount').textContent = toolsdoINR(Math.round(loan / 10000) * 10000);
    $('le-emi').textContent = toolsdoINR(Math.round(maxEmi)) + '/month';
    $('le-total').textContent = toolsdoINR(Math.round(maxEmi * n));
    lastSummary = 'Income ' + toolsdoINR(income) + '/mo, existing EMI ' + toolsdoINR(existing) +
      ' @ ' + rate + '% x ' + years + 'yr (FOIR ' + (foir * 100) + '%) | Eligible: ~' +
      toolsdoINR(Math.round(loan / 10000) * 10000) + ' | Max EMI: ' + toolsdoINR(Math.round(maxEmi));
  }

  $('le-calc').addEventListener('click', calc);
  ['le-income', 'le-emis', 'le-rate', 'le-tenure', 'le-foir'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('le-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
