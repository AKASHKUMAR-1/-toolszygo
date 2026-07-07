(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function calc() {
    var male = $('iw-gender').value === 'male';
    var cm = parseFloat($('iw-height').value);
    if (!cm) return;
    var totalIn = cm / 2.54;
    var overFeet = Math.max(0, totalIn - 60); // inches over 5 feet

    var devine = male ? 50 + 2.3 * overFeet : 45.5 + 2.3 * overFeet;
    var robinson = male ? 52 + 1.9 * overFeet : 49 + 1.7 * overFeet;
    var miller = male ? 56.2 + 1.41 * overFeet : 53.1 + 1.36 * overFeet;
    var hamwi = male ? 48 + 2.7 * overFeet : 45.5 + 2.2 * overFeet;

    var vals = [devine, robinson, miller, hamwi].filter(function (v) { return v > 0; });
    var avg = vals.reduce(function (a, b) { return a + b; }, 0) / vals.length;

    var fmt = function (v) { return Math.round(v * 10) / 10 + ' kg'; };
    $('iw-devine').textContent = fmt(devine);
    $('iw-robinson').textContent = fmt(robinson);
    $('iw-miller').textContent = fmt(miller);
    $('iw-hamwi').textContent = fmt(hamwi);
    $('iw-average').textContent = fmt(avg);
  }

  ['iw-gender', 'iw-height'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  calc();
})();
