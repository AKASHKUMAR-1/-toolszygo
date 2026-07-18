(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function toggleMode() {
    var isRank = $('ep-mode').value === 'rank';
    $('ep-rank-field').style.display = isRank ? '' : 'none';
    $('ep-percentile-field').style.display = isRank ? 'none' : '';
    $('ep-result-label').textContent = isRank ? 'Estimated percentile' : 'Estimated rank';
  }

  function calc() {
    var total = parseInt($('ep-total').value, 10);
    if (!total || total <= 0) return;
    var mode = $('ep-mode').value;

    if (mode === 'rank') {
      var rank = parseInt($('ep-rank').value, 10);
      if (!rank || rank < 1 || rank > total) return;
      var below = total - rank + 1;
      var percentile = below / total * 100;
      $('ep-result').textContent = (Math.round(percentile * 1000) / 1000) + '';
      $('ep-below').textContent = below.toLocaleString('en-IN');
      $('ep-top-pct').textContent = 'Top ' + (Math.round((100 - percentile) * 100) / 100) + '%';
      lastSummary = 'Rank ' + rank + ' out of ' + total.toLocaleString('en-IN') + ' | Percentile: ' +
        (Math.round(percentile * 1000) / 1000) + ' (top ' + (Math.round((100 - percentile) * 100) / 100) + '%)';
    } else {
      var pct = parseFloat($('ep-percentile').value);
      if (pct === undefined || isNaN(pct) || pct < 0 || pct > 100) return;
      var belowCount = Math.round(pct / 100 * total);
      var estRank = Math.max(1, total - belowCount + 1);
      $('ep-result').textContent = '#' + estRank.toLocaleString('en-IN');
      $('ep-below').textContent = belowCount.toLocaleString('en-IN');
      $('ep-top-pct').textContent = 'Top ' + (Math.round((100 - pct) * 100) / 100) + '%';
      lastSummary = 'Percentile ' + pct + ' out of ' + total.toLocaleString('en-IN') + ' candidates | Estimated rank: #' +
        estRank.toLocaleString('en-IN');
    }
  }

  $('ep-mode').addEventListener('change', function () { toggleMode(); calc(); });
  $('ep-calc').addEventListener('click', calc);
  ['ep-rank', 'ep-percentile', 'ep-total'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('ep-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
