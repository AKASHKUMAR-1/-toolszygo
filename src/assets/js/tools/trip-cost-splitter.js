(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var travel = parseFloat($('tcs-travel').value) || 0;
    var stay = parseFloat($('tcs-stay').value) || 0;
    var food = parseFloat($('tcs-food').value) || 0;
    var other = parseFloat($('tcs-other').value) || 0;
    var people = Math.max(1, parseInt($('tcs-people').value, 10) || 1);
    var total = travel + stay + food + other;
    var per = total / people;
    $('tcs-person').textContent = toolsdoINR(Math.ceil(per));
    $('tcs-total').textContent = toolsdoINR(total);
    $('tcs-breakdown').textContent = 'Travel ' + toolsdoINR(travel) + ' + Stay ' + toolsdoINR(stay) +
      ' + Food ' + toolsdoINR(food) + ' + Other ' + toolsdoINR(other);
    lastSummary = '🧳 Trip ka hisaab:\nTravel: ' + toolsdoINR(travel) + '\nHotel: ' + toolsdoINR(stay) +
      '\nKhana: ' + toolsdoINR(food) + '\nBaaki: ' + toolsdoINR(other) +
      '\nTotal: ' + toolsdoINR(total) + ' ÷ ' + people + ' log\n👉 Har bande ka hissa: ' + toolsdoINR(Math.ceil(per));
  }

  ['tcs-travel', 'tcs-stay', 'tcs-food', 'tcs-other', 'tcs-people'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('tcs-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
