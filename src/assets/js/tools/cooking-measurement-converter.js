(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  // volume units in ml
  var VOLUME = {
    Cup: 240, Tablespoon: 15, Teaspoon: 5, Millilitre: 1, Litre: 1000, 'Fluid Ounce': 29.5735,
  };
  // density g/ml per ingredient (for weight<->volume)
  var DENSITY = { water: 1, flour: 0.53, sugar: 0.85, butter: 0.96, rice: 0.85 };
  var WEIGHT = { Gram: 1, Kilogram: 1000, Ounce: 28.3495, Pound: 453.592 };

  function fill() {
    var all = Object.keys(VOLUME).concat(Object.keys(WEIGHT));
    var opts = all.map(function (u) { return '<option value="' + u + '">' + u + '</option>'; }).join('');
    $('cm-from').innerHTML = opts;
    $('cm-to').innerHTML = opts;
    $('cm-from').value = 'Cup';
    $('cm-to').value = 'Gram';
  }

  function toMl(value, unit) { return VOLUME[unit] !== undefined ? value * VOLUME[unit] : null; }
  function toGrams(value, unit) { return WEIGHT[unit] !== undefined ? value * WEIGHT[unit] : null; }

  function convert() {
    var value = parseFloat($('cm-value').value);
    var from = $('cm-from').value;
    var to = $('cm-to').value;
    var density = DENSITY[$('cm-ingredient').value];
    if (isNaN(value)) return;

    var grams = null;
    if (WEIGHT[from] !== undefined) grams = toGrams(value, from);
    else if (VOLUME[from] !== undefined) grams = toMl(value, from) * density;

    var result;
    if (WEIGHT[to] !== undefined) result = grams / WEIGHT[to];
    else result = (grams / density) / VOLUME[to];

    var rounded = Math.round(result * 1000) / 1000;
    $('cm-result').textContent = rounded.toLocaleString('en-IN', { maximumFractionDigits: 3 }) + ' ' + to;
    $('cm-formula').textContent = value + ' ' + from + ' = ' + rounded + ' ' + to + ' (' + $('cm-ingredient').selectedOptions[0].text + ')';
  }

  $('cm-value').addEventListener('input', convert);
  ['cm-from', 'cm-to', 'cm-ingredient'].forEach(function (id) {
    $(id).addEventListener('change', convert);
  });
  fill();
  convert();
})();
