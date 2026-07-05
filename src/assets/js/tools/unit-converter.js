(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  var UNITS = {
    length: {
      // factor = meters per unit
      Millimeter: 0.001, Centimeter: 0.01, Meter: 1, Kilometer: 1000,
      Inch: 0.0254, Foot: 0.3048, Yard: 0.9144, Mile: 1609.344,
    },
    weight: {
      // factor = grams per unit
      Milligram: 0.001, Gram: 1, Kilogram: 1000, Quintal: 100000, Tonne: 1000000,
      Ounce: 28.349523125, Pound: 453.59237,
    },
    temp: { Celsius: 1, Fahrenheit: 1, Kelvin: 1 },
  };
  var DEFAULTS = { length: ['Kilometer', 'Mile'], weight: ['Kilogram', 'Pound'], temp: ['Celsius', 'Fahrenheit'] };

  function fillUnits() {
    var cat = $('uc-cat').value;
    var names = Object.keys(UNITS[cat]);
    var opts = names.map(function (n) { return '<option value="' + n + '">' + n + '</option>'; }).join('');
    $('uc-from').innerHTML = opts;
    $('uc-to').innerHTML = opts;
    $('uc-from').value = DEFAULTS[cat][0];
    $('uc-to').value = DEFAULTS[cat][1];
    convert();
  }

  function toCelsius(v, unit) {
    if (unit === 'Celsius') return v;
    if (unit === 'Fahrenheit') return (v - 32) * 5 / 9;
    return v - 273.15; // Kelvin
  }
  function fromCelsius(c, unit) {
    if (unit === 'Celsius') return c;
    if (unit === 'Fahrenheit') return c * 9 / 5 + 32;
    return c + 273.15;
  }

  function convert() {
    var cat = $('uc-cat').value;
    var v = parseFloat($('uc-value').value);
    var from = $('uc-from').value;
    var to = $('uc-to').value;
    if (isNaN(v)) { $('uc-result').textContent = '—'; $('uc-formula').textContent = ''; return; }
    var out;
    if (cat === 'temp') {
      out = fromCelsius(toCelsius(v, from), to);
    } else {
      out = v * UNITS[cat][from] / UNITS[cat][to];
    }
    var rounded = Math.abs(out) >= 1 ? Math.round(out * 1000000) / 1000000 : parseFloat(out.toPrecision(6));
    $('uc-result').textContent = rounded.toLocaleString('en-IN', { maximumFractionDigits: 6 });
    $('uc-formula').textContent = v + ' ' + from + ' = ' + rounded.toLocaleString('en-IN', { maximumFractionDigits: 6 }) + ' ' + to;
  }

  $('uc-cat').addEventListener('change', fillUnits);
  $('uc-value').addEventListener('input', convert);
  $('uc-from').addEventListener('change', convert);
  $('uc-to').addEventListener('change', convert);
  $('uc-swap').addEventListener('click', function () {
    var f = $('uc-from').value;
    $('uc-from').value = $('uc-to').value;
    $('uc-to').value = f;
    convert();
  });
  $('uc-copy').addEventListener('click', function () {
    var t = $('uc-formula').textContent;
    if (t) toolsdoCopy(t, this);
  });
  fillUnits();
})();
