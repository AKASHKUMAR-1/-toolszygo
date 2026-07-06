(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var initial = parseFloat($('cagr-initial').value);
    var final_ = parseFloat($('cagr-final').value);
    var years = parseFloat($('cagr-years').value);
    if (!initial || !final_ || !years || initial <= 0 || final_ <= 0 || years <= 0) return;
    var cagr = (Math.pow(final_ / initial, 1 / years) - 1) * 100;
    var growth = (final_ - initial) / initial * 100;
    $('cagr-result').textContent = (Math.round(cagr * 100) / 100) + '%';
    $('cagr-growth').textContent = (growth >= 0 ? '+' : '') + (Math.round(growth * 100) / 100) + '% (absolute)';
    $('cagr-multiple').textContent = (Math.round(final_ / initial * 100) / 100) + 'x';
    lastSummary = toolsdoINR(initial) + ' -> ' + toolsdoINR(final_) + ' in ' + years + 'yr | CAGR: ' +
      (Math.round(cagr * 100) / 100) + '% | Absolute: ' + (Math.round(growth * 100) / 100) + '%';
  }

  $('cagr-calc').addEventListener('click', calc);
  ['cagr-initial', 'cagr-final', 'cagr-years'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('cagr-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
