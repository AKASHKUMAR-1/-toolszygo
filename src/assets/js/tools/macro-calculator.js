(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function updateUnits() {
    var metric = $('mc-unit').value === 'metric';
    $('mc-height-imperial').style.display = metric ? 'none' : '';
    $('mc-height-metric').style.display = metric ? '' : 'none';
    $('mc-weight-unit').textContent = metric ? 'kg' : 'lbs';
    $('mc-weight').value = metric ? 77 : 170;
  }

  function calc() {
    var metric = $('mc-unit').value === 'metric';
    var gender = $('mc-gender').value;
    var age = parseInt($('mc-age').value, 10);
    var weight = parseFloat($('mc-weight').value);
    if (!age || !weight || age <= 0 || weight <= 0) return;

    var kg, cm;
    if (metric) {
      kg = weight;
      cm = parseFloat($('mc-cm').value);
      if (!cm || cm <= 0) return;
    } else {
      kg = weight * 0.453592;
      var feet = parseFloat($('mc-feet').value) || 0;
      var inches = parseFloat($('mc-inches').value) || 0;
      cm = (feet * 12 + inches) * 2.54;
      if (cm <= 0) return;
    }

    // Mifflin-St Jeor
    var bmr = 10 * kg + 6.25 * cm - 5 * age + (gender === 'male' ? 5 : -161);
    var tdee = bmr * parseFloat($('mc-activity').value);

    var goal = $('mc-goal').value;
    var calories = tdee + (goal === 'cut' ? -500 : goal === 'bulk' ? 300 : 0);
    calories = Math.max(1200, calories);

    var lbs = kg / 0.453592;
    var proteinG = Math.round(lbs * 0.8);
    var fatG = Math.round(calories * 0.25 / 9);
    var carbsG = Math.round((calories - proteinG * 4 - fatG * 9) / 4);
    if (carbsG < 0) carbsG = 0;

    $('mc-calories').textContent = Math.round(calories).toLocaleString('en-US');
    $('mc-protein').textContent = proteinG + ' g (' + (proteinG * 4).toLocaleString('en-US') + ' cal)';
    $('mc-fat').textContent = fatG + ' g (' + (fatG * 9).toLocaleString('en-US') + ' cal)';
    $('mc-carbs').textContent = carbsG + ' g (' + (carbsG * 4).toLocaleString('en-US') + ' cal)';
    $('mc-tdee').textContent = Math.round(tdee).toLocaleString('en-US') + ' cal';
    var goalText = goal === 'cut' ? 'cut' : goal === 'bulk' ? 'bulk' : 'maintain';
    lastSummary = 'Goal: ' + goalText + ' | ' + Math.round(calories) + ' cal/day | Protein ' + proteinG +
      'g, Fat ' + fatG + 'g, Carbs ' + carbsG + 'g | TDEE: ' + Math.round(tdee) + ' cal';
  }

  $('mc-unit').addEventListener('change', function () { updateUnits(); calc(); });
  $('mc-calc').addEventListener('click', calc);
  ['mc-gender', 'mc-age', 'mc-feet', 'mc-inches', 'mc-cm', 'mc-weight', 'mc-activity', 'mc-goal'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('mc-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
