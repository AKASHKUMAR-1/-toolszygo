(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var P = parseFloat($('fd-amount').value);
    var annual = parseFloat($('fd-rate').value);
    var tenure = parseFloat($('fd-tenure').value);
    if (!P || !annual || !tenure || P <= 0 || annual <= 0 || tenure <= 0) return;
    var t = $('fd-tenure-unit').value === 'years' ? tenure : tenure / 12;
    // quarterly compounding (standard for Indian bank FDs)
    var maturity = P * Math.pow(1 + annual / 400, 4 * t);
    var interest = maturity - P;
    $('fd-result').textContent = toolsdoINR(Math.round(maturity));
    $('fd-principal').textContent = toolsdoINR(Math.round(P));
    $('fd-interest').textContent = toolsdoINR(Math.round(interest));
    lastSummary = 'FD ' + toolsdoINR(P) + ' @ ' + annual + '% x ' + tenure + ' ' + $('fd-tenure-unit').value +
      ' | Maturity: ' + toolsdoINR(Math.round(maturity)) + ' | Interest: ' + toolsdoINR(Math.round(interest));
  }

  $('fd-calc').addEventListener('click', calc);
  ['fd-amount', 'fd-rate', 'fd-tenure', 'fd-tenure-unit'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('fd-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
