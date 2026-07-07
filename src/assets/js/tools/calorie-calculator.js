(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function bmr() {
    var age = parseFloat($('cal-age').value);
    var h = parseFloat($('cal-height').value);
    var w = parseFloat($('cal-weight').value);
    var male = $('cal-gender').value === 'male';
    if (!age || !h || !w) return null;
    return male ? (10 * w + 6.25 * h - 5 * age + 5) : (10 * w + 6.25 * h - 5 * age - 161);
  }

  function calc() {
    var b = bmr();
    if (!b) return;
    var activity = parseFloat($('cal-activity').value);
    var maintain = b * activity;
    $('cal-maintain').textContent = Math.round(maintain).toLocaleString('en-IN');
    $('cal-lose').textContent = Math.round(maintain - 500).toLocaleString('en-IN') + ' cal/day';
    $('cal-gain').textContent = Math.round(maintain + 500).toLocaleString('en-IN') + ' cal/day';
    $('cal-bmr').textContent = Math.round(b).toLocaleString('en-IN') + ' cal/day';
  }

  ['cal-age', 'cal-gender', 'cal-height', 'cal-weight', 'cal-activity'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  calc();
})();
