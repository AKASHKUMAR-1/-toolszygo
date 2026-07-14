(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var DAY = 86400000;

  $('pdd-method').addEventListener('change', function () {
    $('pdd-date-label').textContent = this.value === 'lmp' ? 'Last Period ki pehli tarikh' : 'Conception ki date';
    calc();
  });

  function calc() {
    var val = $('pdd-date').value;
    if (!val) return;
    var d = new Date(val + 'T00:00:00');
    var cycle = parseInt($('pdd-cycle').value, 10) || 28;
    var method = $('pdd-method').value;

    var lmp, conception;
    if (method === 'lmp') {
      lmp = d;
      var ovulationOffset = cycle - 14;
      conception = new Date(lmp.getTime() + ovulationOffset * DAY);
    } else {
      conception = d;
      lmp = new Date(conception.getTime() - (cycle - 14) * DAY);
    }
    var dueDate = new Date(lmp.getTime() + 280 * DAY);

    var today = new Date();
    var daysPregnant = Math.floor((today - lmp) / DAY);
    var weeks = Math.floor(daysPregnant / 7);
    var days = daysPregnant % 7;
    var trimester = weeks < 13 ? 'First' : weeks < 27 ? 'Second' : 'Third';
    var remaining = Math.ceil((dueDate - today) / DAY);

    var fmtDate = function (dt) {
      return dt.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    $('pdd-duedate').textContent = fmtDate(dueDate);
    if (daysPregnant >= 0 && daysPregnant < 300) {
      $('pdd-weeks').textContent = weeks + ' weeks ' + days + ' days';
      $('pdd-trimester').textContent = trimester + ' trimester';
    } else {
      $('pdd-weeks').textContent = '—';
      $('pdd-trimester').textContent = '—';
    }
    $('pdd-conception').textContent = fmtDate(conception);
    $('pdd-remaining').textContent = remaining > 0 ? remaining + ' days' : 'Due date has passed';
  }

  $('pdd-date').addEventListener('change', calc);
  $('pdd-cycle').addEventListener('input', calc);
})();
