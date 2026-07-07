(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  $('bf-gender').addEventListener('change', function () {
    $('bf-hip-row').style.display = this.value === 'female' ? '' : 'none';
    calc();
  });

  function log10(x) { return Math.log(x) / Math.LN10; }

  function calc() {
    var male = $('bf-gender').value === 'male';
    var height = parseFloat($('bf-height').value);
    var neck = parseFloat($('bf-neck').value);
    var waist = parseFloat($('bf-waist').value);
    var hip = parseFloat($('bf-hip').value);
    if (!height || !neck || !waist || (!male && !hip)) return;

    var bf;
    if (male) {
      bf = 495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height)) - 450;
    } else {
      bf = 495 / (1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(height)) - 450;
    }
    bf = Math.max(2, Math.min(60, bf));
    $('bf-result').textContent = (Math.round(bf * 10) / 10) + '%';

    var cat, color;
    if (male) {
      cat = bf < 6 ? 'Essential fat' : bf < 14 ? 'Athletic' : bf < 18 ? 'Fitness' : bf < 25 ? 'Average' : 'Obese';
    } else {
      cat = bf < 14 ? 'Essential fat' : bf < 21 ? 'Athletic' : bf < 25 ? 'Fitness' : bf < 32 ? 'Average' : 'Obese';
    }
    color = cat === 'Obese' ? '#B84F4F' : cat === 'Average' ? '#A98423' : '#5D8A4E';
    $('bf-category').textContent = cat;
    $('bf-category').style.color = color;
  }

  ['bf-height', 'bf-neck', 'bf-waist', 'bf-hip'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  calc();
})();
