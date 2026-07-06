(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var P = parseFloat($('kvp-amount').value);
    var rate = parseFloat($('kvp-rate').value);
    if (!P || !rate || P <= 0 || rate <= 0) return;
    var years = Math.log(2) / Math.log(1 + rate / 100);
    var months = Math.ceil(years * 12);
    var y = Math.floor(months / 12), mo = months % 12;
    $('kvp-maturity').textContent = toolsdoINR(P * 2);
    $('kvp-time').textContent = y + ' saal ' + (mo ? mo + ' mahine' : '') + ' me (' + months + ' months)';
    $('kvp-interest').textContent = toolsdoINR(P);
    lastSummary = 'KVP ' + toolsdoINR(P) + ' @ ' + rate + '% | Double: ' + toolsdoINR(P * 2) +
      ' in ' + y + 'y ' + mo + 'm (' + months + ' months)';
  }

  $('kvp-calc').addEventListener('click', calc);
  ['kvp-amount', 'kvp-rate'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('kvp-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
