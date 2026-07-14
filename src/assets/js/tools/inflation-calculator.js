(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var amount = parseFloat($('inf-amount').value);
    var rate = parseFloat($('inf-rate').value);
    var years = parseFloat($('inf-years').value);
    if (!amount || !rate || !years || amount <= 0 || rate <= 0 || years <= 0) return;
    var factor = Math.pow(1 + rate / 100, years);
    var futureCost = amount * factor;
    var power = amount / factor;
    var loss = (1 - 1 / factor) * 100;
    $('inf-future').textContent = toolsdoINR(Math.round(futureCost));
    $('inf-future-label').textContent = 'Cost of today\'s ' + toolsdoINR(amount) + ' expense in ' + years + ' years';
    $('inf-power').textContent = toolsdoINR(Math.round(power));
    $('inf-loss').textContent = (Math.round(loss * 10) / 10) + '% value lost';
    lastSummary = toolsdoINR(amount) + ' @ ' + rate + '% inflation x ' + years + 'yr | Future cost: ' +
      toolsdoINR(Math.round(futureCost)) + ' | Value then: ' + toolsdoINR(Math.round(power)) +
      ' (' + (Math.round(loss * 10) / 10) + '% loss)';
  }

  $('inf-calc').addEventListener('click', calc);
  ['inf-amount', 'inf-rate', 'inf-years'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('inf-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
