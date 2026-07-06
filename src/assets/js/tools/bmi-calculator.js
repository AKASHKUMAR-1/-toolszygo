(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  $('bmi-height-unit').addEventListener('change', function () {
    var ftin = this.value === 'ftin';
    $('bmi-ftin-row').style.display = ftin ? '' : 'none';
    $('bmi-height').parentElement.style.display = ftin ? 'none' : '';
    calc();
  });

  function heightMeters() {
    if ($('bmi-height-unit').value === 'ftin') {
      var ft = parseFloat($('bmi-feet').value) || 0;
      var inch = parseFloat($('bmi-inches').value) || 0;
      return (ft * 12 + inch) * 0.0254;
    }
    return (parseFloat($('bmi-height').value) || 0) / 100;
  }

  function calc() {
    var h = heightMeters();
    var w = parseFloat($('bmi-weight').value);
    if (!h || !w || h <= 0 || w <= 0) return;
    var bmi = w / (h * h);
    var rounded = Math.round(bmi * 10) / 10;
    var cat, color;
    if (bmi < 18.5) { cat = 'Underweight'; color = '#3E7D8F'; }
    else if (bmi < 25) { cat = 'Normal — healthy weight 👍'; color = '#5D8A4E'; }
    else if (bmi < 30) { cat = 'Overweight'; color = '#A98423'; }
    else { cat = 'Obese'; color = '#B84F4F'; }
    $('bmi-result').textContent = rounded;
    $('bmi-category').textContent = cat;
    $('bmi-category').style.color = color;
    var lo = 18.5 * h * h, hi = 24.9 * h * h;
    $('bmi-healthy').textContent = (Math.round(lo * 10) / 10) + ' – ' + (Math.round(hi * 10) / 10) + ' kg';
  }

  $('bmi-calc').addEventListener('click', calc);
  ['bmi-height', 'bmi-feet', 'bmi-inches', 'bmi-weight'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  calc();
})();
