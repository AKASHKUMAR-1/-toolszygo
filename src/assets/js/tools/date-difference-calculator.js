(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var DAY = 86400000;

  function calc() {
    var fromVal = $('dd-from').value;
    var toVal = $('dd-to').value;
    if (!fromVal || !toVal) return;
    var from = new Date(fromVal + 'T00:00:00');
    var to = new Date(toVal + 'T00:00:00');
    var swap = to < from;
    var start = swap ? to : from;
    var end = swap ? from : to;

    var years = end.getFullYear() - start.getFullYear();
    var months = end.getMonth() - start.getMonth();
    var days = end.getDate() - start.getDate();
    if (days < 0) { months--; days += new Date(end.getFullYear(), end.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }

    var totalDays = Math.round((end - start) / DAY);
    var totalWeeks = Math.floor(totalDays / 7);
    var totalMonths = years * 12 + months;

    var workdays = 0;
    var cur = new Date(start);
    for (var i = 0; i < totalDays; i++) {
      var day = cur.getDay();
      if (day !== 0 && day !== 6) workdays++;
      cur.setDate(cur.getDate() + 1);
    }

    $('dd-main').textContent = years + 'y ' + months + 'm ' + days + 'd';
    $('dd-days').textContent = totalDays.toLocaleString('en-IN');
    $('dd-weeks').textContent = totalWeeks.toLocaleString('en-IN');
    $('dd-months').textContent = totalMonths.toLocaleString('en-IN');
    $('dd-workdays').textContent = workdays.toLocaleString('en-IN');
  }

  $('dd-from').addEventListener('change', calc);
  $('dd-to').addEventListener('change', calc);

  var today = new Date();
  $('dd-from').value = today.toISOString().slice(0, 10);
  var future = new Date(today.getTime() + 30 * DAY);
  $('dd-to').value = future.toISOString().slice(0, 10);
  calc();
})();
