(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function updateUnitLabels() {
    var metric = $('cc2-unit').value === 'metric';
    document.querySelectorAll('.cc2-unit-big').forEach(function (el) {
      el.textContent = metric ? 'm' : 'ft';
    });
    $('cc2-unit-small').textContent = metric ? 'cm' : 'inches';
    if (metric) {
      $('cc2-length').value = 3; $('cc2-width').value = 3; $('cc2-thick').value = 10;
    } else {
      $('cc2-length').value = 10; $('cc2-width').value = 10; $('cc2-thick').value = 4;
    }
  }

  function calc() {
    var L = parseFloat($('cc2-length').value);
    var W = parseFloat($('cc2-width').value);
    var T = parseFloat($('cc2-thick').value);
    if (!L || !W || !T || L <= 0 || W <= 0 || T <= 0) return;

    var metric = $('cc2-unit').value === 'metric';
    var cubicMeters;
    if (metric) {
      cubicMeters = L * W * (T / 100);
    } else {
      var cubicFeet = L * W * (T / 12);
      cubicMeters = cubicFeet * 0.0283168;
    }
    if ($('cc2-waste').checked) cubicMeters *= 1.1;

    var cubicYards = cubicMeters * 1.30795;
    var cf = cubicMeters * 35.3147;
    var bags80 = Math.ceil(cf / 0.60);
    var bags60 = Math.ceil(cf / 0.45);

    $('cc2-yards').textContent = (Math.round(cubicYards * 100) / 100).toLocaleString('en-US');
    $('cc2-meters').textContent = (Math.round(cubicMeters * 100) / 100).toLocaleString('en-US') + ' m³';
    $('cc2-bags80').textContent = bags80.toLocaleString('en-US') + ' bags';
    $('cc2-bags60').textContent = bags60.toLocaleString('en-US') + ' bags';
    lastSummary = 'Slab ' + L + ' x ' + W + ' ' + (metric ? 'm' : 'ft') + ', ' + T + (metric ? ' cm' : '"') + ' thick' +
      ($('cc2-waste').checked ? ' (+10% waste)' : '') + ' | ' + (Math.round(cubicYards * 100) / 100) + ' cubic yards (' +
      (Math.round(cubicMeters * 100) / 100) + ' m³) | ' + bags80 + ' x 80lb bags or ' + bags60 + ' x 60lb bags';
  }

  $('cc2-unit').addEventListener('change', function () { updateUnitLabels(); calc(); });
  $('cc2-calc').addEventListener('click', calc);
  ['cc2-length', 'cc2-width', 'cc2-thick', 'cc2-waste'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('cc2-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
