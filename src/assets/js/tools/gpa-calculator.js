(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var GRADES = { 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0 };

  function addRow() {
    var row = document.createElement('div');
    row.className = 'field-row gpa-item';
    row.style.alignItems = 'flex-end';
    row.innerHTML = '<div class="field"><label>Course</label><input type="text" class="gpa-name" placeholder="e.g. Calculus"></div>' +
      '<div class="field"><label>Grade</label><select class="gpa-grade">' +
      Object.keys(GRADES).map(function (g) { return '<option value="' + g + '"' + (g === 'A' ? ' selected' : '') + '>' + g + '</option>'; }).join('') +
      '</select></div>' +
      '<div class="field"><label>Credit Hours</label><input type="number" class="gpa-credits" value="3" min="0" step="0.5"></div>' +
      '<button class="btn btn-secondary gpa-rm" style="padding:10px 12px;">✕</button>';
    $('gpa-items').appendChild(row);
    row.querySelectorAll('input,select').forEach(function (el) {
      el.addEventListener('input', calc);
      el.addEventListener('change', calc);
    });
    row.querySelector('.gpa-rm').addEventListener('click', function () { row.remove(); calc(); });
    calc();
  }

  function calc() {
    var totalCredits = 0, totalPoints = 0;
    document.querySelectorAll('.gpa-item').forEach(function (row) {
      var grade = row.querySelector('.gpa-grade').value;
      var credits = parseFloat(row.querySelector('.gpa-credits').value) || 0;
      totalCredits += credits;
      totalPoints += (GRADES[grade] || 0) * credits;
    });
    var gpa = totalCredits ? totalPoints / totalCredits : 0;
    $('gpa-result').textContent = totalCredits ? (Math.round(gpa * 100) / 100) : '—';
    $('gpa-credits').textContent = totalCredits;
    $('gpa-points').textContent = Math.round(totalPoints * 100) / 100;
  }

  $('gpa-add').addEventListener('click', addRow);
  addRow();
})();
