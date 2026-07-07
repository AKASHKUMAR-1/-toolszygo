(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function calc1() {
    var h1 = parseFloat($('ht-h1').value) || 0;
    var m1 = parseFloat($('ht-m1').value) || 0;
    var h2 = parseFloat($('ht-h2').value) || 0;
    var m2 = parseFloat($('ht-m2').value) || 0;
    var op = $('ht-op').value;
    var total1 = h1 * 60 + m1;
    var total2 = h2 * 60 + m2;
    var result = op === '+' ? total1 + total2 : total1 - total2;
    var neg = result < 0;
    result = Math.abs(result);
    var h = Math.floor(result / 60);
    var m = result % 60;
    $('ht-result1').textContent = (neg ? '-' : '') + h + 'h ' + m + 'm';
  }

  function calc2() {
    var start = $('ht-start').value;
    var end = $('ht-end').value;
    if (!start || !end) return;
    var sMin = parseInt(start.slice(0, 2), 10) * 60 + parseInt(start.slice(3, 5), 10);
    var eMin = parseInt(end.slice(0, 2), 10) * 60 + parseInt(end.slice(3, 5), 10);
    var diff = eMin - sMin;
    if (diff < 0) diff += 24 * 60; // crosses midnight
    var h = Math.floor(diff / 60);
    var m = diff % 60;
    $('ht-duration').textContent = h + 'h ' + m + 'm';
    $('ht-decimal').textContent = (Math.round((diff / 60) * 100) / 100) + ' hours';
  }

  ['ht-h1', 'ht-m1', 'ht-op', 'ht-h2', 'ht-m2'].forEach(function (id) {
    $(id).addEventListener('input', calc1);
    $(id).addEventListener('change', calc1);
  });
  ['ht-start', 'ht-end'].forEach(function (id) {
    $(id).addEventListener('input', calc2);
  });
  calc1();
  calc2();
})();
