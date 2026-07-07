(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var DAY = 86400000;

  function calc() {
    var val = $('ov-lastperiod').value;
    if (!val) return;
    var lastPeriod = new Date(val + 'T00:00:00');
    var cycle = parseInt($('ov-cycle').value, 10) || 28;

    var ovulation = new Date(lastPeriod.getTime() + (cycle - 14) * DAY);
    var fertileStart = new Date(ovulation.getTime() - 5 * DAY);
    var fertileEnd = ovulation;
    var nextPeriod = new Date(lastPeriod.getTime() + cycle * DAY);

    var fmtDate = function (dt) {
      return dt.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    $('ov-date').textContent = fmtDate(ovulation);
    $('ov-window').textContent = fmtDate(fertileStart) + ' – ' + fmtDate(fertileEnd);
    $('ov-nextperiod').textContent = fmtDate(nextPeriod);
  }

  $('ov-lastperiod').addEventListener('change', calc);
  $('ov-cycle').addEventListener('input', calc);
})();
