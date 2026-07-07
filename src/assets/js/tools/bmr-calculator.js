(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function calc() {
    var age = parseFloat($('bmr-age').value);
    var h = parseFloat($('bmr-height').value);
    var w = parseFloat($('bmr-weight').value);
    var male = $('bmr-gender').value === 'male';
    if (!age || !h || !w) return;
    var b = male ? (10 * w + 6.25 * h - 5 * age + 5) : (10 * w + 6.25 * h - 5 * age - 161);
    $('bmr-result').textContent = Math.round(b).toLocaleString('en-IN');
    $('bmr-sed').textContent = Math.round(b * 1.2).toLocaleString('en-IN') + ' cal';
    $('bmr-mod').textContent = Math.round(b * 1.55).toLocaleString('en-IN') + ' cal';
    $('bmr-active').textContent = Math.round(b * 1.725).toLocaleString('en-IN') + ' cal';
  }

  ['bmr-age', 'bmr-gender', 'bmr-height', 'bmr-weight'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  calc();
})();
