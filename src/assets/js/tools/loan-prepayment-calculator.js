(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var P = parseFloat($('lp-outstanding').value);
    var annual = parseFloat($('lp-rate').value);
    var years = parseFloat($('lp-tenure').value);
    var prepay = parseFloat($('lp-prepay').value) || 0;
    if (!P || !annual || !years || P <= 0 || annual <= 0 || years <= 0) return;
    if (prepay >= P) {
      $('lp-saved').textContent = 'Keep the prepayment below the outstanding';
      return;
    }
    var r = annual / 12 / 100;
    var n = Math.round(years * 12);
    var emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    var oldInterest = emi * n - P;

    // after prepayment, same EMI, new principal
    var P2 = P - prepay;
    var n2 = Math.log(emi / (emi - P2 * r)) / Math.log(1 + r);
    var n2Ceil = Math.ceil(n2);
    var newInterest = emi * n2 - P2; // approx with fractional last EMI
    var saved = oldInterest - newInterest;

    var fmtMonths = function (m) {
      var y = Math.floor(m / 12), mo = Math.round(m % 12);
      if (mo === 12) { y++; mo = 0; }
      return (y ? y + ' years ' : '') + (mo ? mo + ' months' : (y ? '' : '0 months'));
    };

    $('lp-saved').textContent = toolsdoINR(Math.round(saved));
    $('lp-emi').textContent = toolsdoINR(Math.round(emi)) + '/month';
    $('lp-old-tenure').textContent = fmtMonths(n);
    $('lp-new-tenure').textContent = fmtMonths(n2Ceil);
    $('lp-emis-cut').textContent = (n - n2Ceil) + ' EMIs (' + fmtMonths(n - n2Ceil) + ')';
    lastSummary = 'Prepay ' + toolsdoINR(prepay) + ' on ' + toolsdoINR(P) + ' @ ' + annual + '% | Interest saved: ' +
      toolsdoINR(Math.round(saved)) + ' | Tenure: ' + fmtMonths(n) + ' -> ' + fmtMonths(n2Ceil);
  }

  $('lp-calc').addEventListener('click', calc);
  ['lp-outstanding', 'lp-rate', 'lp-tenure', 'lp-prepay'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('lp-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
