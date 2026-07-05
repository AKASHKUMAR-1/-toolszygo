(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  // default "age on" = today
  var today = new Date();
  var iso = function (d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  };
  $('age-on').value = iso(today);

  function calc() {
    var dobVal = $('age-dob').value;
    var onVal = $('age-on').value || iso(today);
    if (!dobVal) return;
    var dob = new Date(dobVal + 'T00:00:00');
    var on = new Date(onVal + 'T00:00:00');
    if (on < dob) {
      $('age-result').textContent = 'DOB baad ki date hai';
      return;
    }
    var years = on.getFullYear() - dob.getFullYear();
    var months = on.getMonth() - dob.getMonth();
    var days = on.getDate() - dob.getDate();
    if (days < 0) {
      months--;
      var prevMonth = new Date(on.getFullYear(), on.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) { years--; months += 12; }

    var totalDays = Math.floor((on - dob) / 86400000);
    var totalMonths = years * 12 + months;
    var totalWeeks = Math.floor(totalDays / 7);

    // next birthday
    var next = new Date(on.getFullYear(), dob.getMonth(), dob.getDate());
    // handle 29 Feb -> 1 Mar in non-leap years
    if (dob.getMonth() === 1 && dob.getDate() === 29 && next.getMonth() !== 1) {
      next = new Date(on.getFullYear(), 2, 1);
    }
    if (next <= on) {
      next = new Date(on.getFullYear() + 1, dob.getMonth(), dob.getDate());
      if (dob.getMonth() === 1 && dob.getDate() === 29 && next.getMonth() !== 1) {
        next = new Date(on.getFullYear() + 1, 2, 1);
      }
    }
    var toNext = Math.round((next - on) / 86400000);

    $('age-result').textContent = years + 'y ' + months + 'm ' + days + 'd';
    $('age-months').textContent = totalMonths.toLocaleString('en-IN');
    $('age-weeks').textContent = totalWeeks.toLocaleString('en-IN');
    $('age-days').textContent = totalDays.toLocaleString('en-IN');
    $('age-next').textContent = toNext === 0 ? 'Aaj hi hai! 🎂' : toNext + ' din baad';
  }

  $('age-calc').addEventListener('click', calc);
  $('age-dob').addEventListener('change', calc);
  $('age-on').addEventListener('change', calc);
})();
