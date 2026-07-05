(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var P = parseFloat($('ci-principal').value);
    var r = parseFloat($('ci-rate').value);
    var t = parseFloat($('ci-years').value);
    var n = parseInt($('ci-freq').value, 10);
    if (!P || !r || !t || P <= 0 || r <= 0 || t <= 0) return;
    var amount = P * Math.pow(1 + r / (n * 100), n * t);
    var interest = amount - P;
    $('ci-result').textContent = toolsdoINR(Math.round(amount));
    $('ci-p').textContent = toolsdoINR(Math.round(P));
    $('ci-interest').textContent = toolsdoINR(Math.round(interest));
    lastSummary = toolsdoINR(P) + ' @ ' + r + '% x ' + t + 'yr (' + $('ci-freq').selectedOptions[0].text +
      ') | Amount: ' + toolsdoINR(Math.round(amount)) + ' | CI: ' + toolsdoINR(Math.round(interest));
  }

  $('ci-calc').addEventListener('click', calc);
  ['ci-principal', 'ci-rate', 'ci-years', 'ci-freq'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('ci-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
