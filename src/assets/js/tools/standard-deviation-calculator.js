(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function calc() {
    var raw = $('sd-numbers').value.split(/[,\s]+/).map(function (s) { return parseFloat(s); }).filter(function (n) { return !isNaN(n); });
    if (!raw.length) return;
    var n = raw.length;
    var sum = raw.reduce(function (a, b) { return a + b; }, 0);
    var mean = sum / n;
    var sqDiffSum = raw.reduce(function (a, v) { return a + (v - mean) * (v - mean); }, 0);
    var isSample = $('sd-type').value === 'sample';
    var divisor = isSample ? (n - 1 || 1) : n;
    var variance = sqDiffSum / divisor;
    var sd = Math.sqrt(variance);

    var round = function (v) { return Math.round(v * 10000) / 10000; };
    $('sd-result').textContent = round(sd);
    $('sd-count').textContent = n;
    $('sd-mean').textContent = round(mean);
    $('sd-variance').textContent = round(variance);
    $('sd-sum').textContent = round(sum);
  }

  $('sd-numbers').addEventListener('input', calc);
  $('sd-type').addEventListener('change', calc);
})();
