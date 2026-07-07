(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function addRow() {
    var row = document.createElement('div');
    row.className = 'field-row gr2-item';
    row.style.alignItems = 'flex-end';
    row.innerHTML = '<div class="field"><label>Assignment</label><input type="text" class="gr2-name" placeholder="e.g. Midterm"></div>' +
      '<div class="field"><label>Score (%)</label><input type="number" class="gr2-score" value="85" min="0" max="100"></div>' +
      '<div class="field"><label>Weight (%)</label><input type="number" class="gr2-weight" value="20" min="0" max="100"></div>' +
      '<button class="btn btn-secondary gr2-rm" style="padding:10px 12px;">✕</button>';
    $('gr2-items').appendChild(row);
    row.querySelectorAll('input').forEach(function (el) { el.addEventListener('input', calc); });
    row.querySelector('.gr2-rm').addEventListener('click', function () { row.remove(); calc(); });
    calc();
  }

  function calc() {
    var totalWeight = 0, earnedPoints = 0;
    document.querySelectorAll('.gr2-item').forEach(function (row) {
      var score = parseFloat(row.querySelector('.gr2-score').value) || 0;
      var weight = parseFloat(row.querySelector('.gr2-weight').value) || 0;
      totalWeight += weight;
      earnedPoints += score * weight / 100;
    });
    var currentGrade = totalWeight ? (earnedPoints / (totalWeight / 100)) : 0;
    $('gr2-current').textContent = totalWeight ? (Math.round(currentGrade * 100) / 100) + '%' : '—';

    var target = parseFloat($('gr2-target').value) || 0;
    var remWeight = parseFloat($('gr2-remaining-weight').value) || 0;
    if (remWeight > 0 && totalWeight + remWeight <= 100.01) {
      var neededTotalPoints = target; // target is % of full 100 weight
      var neededInRemaining = (neededTotalPoints - earnedPoints) / (remWeight / 100);
      $('gr2-needed').textContent = neededInRemaining > 100
        ? (Math.round(neededInRemaining * 100) / 100) + '% (possible nahi lag raha)'
        : neededInRemaining < 0
          ? '0% (already target se aage ho!)'
          : (Math.round(neededInRemaining * 100) / 100) + '%';
    } else {
      $('gr2-needed').textContent = '—';
    }
  }

  $('gr2-add').addEventListener('click', addRow);
  $('gr2-target').addEventListener('input', calc);
  $('gr2-remaining-weight').addEventListener('input', calc);
  addRow();
})();
