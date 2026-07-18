(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var fmt = function (n) { return '₹' + (Math.round(n * 100) / 100).toLocaleString('en-IN'); };

  function updateMakingLabel() {
    var mode = $('gj-making-mode').value;
    var label = $('gj-making-label');
    if (mode === 'percent') label.textContent = 'Making Charges (%)';
    else if (mode === 'flat') label.textContent = 'Making Charges (₹ per gram)';
    else label.textContent = 'Making Charges (fixed ₹)';
  }

  function calc() {
    var rate = parseFloat($('gj-rate').value);
    var weight = parseFloat($('gj-weight').value);
    var makingMode = $('gj-making-mode').value;
    var makingInput = parseFloat($('gj-making').value) || 0;
    var other = parseFloat($('gj-other').value) || 0;
    if (!rate || !weight || rate <= 0 || weight <= 0) return;

    var goldValue = rate * weight;
    var making;
    if (makingMode === 'percent') making = goldValue * makingInput / 100;
    else if (makingMode === 'flat') making = makingInput * weight;
    else making = makingInput;

    var gstGold = goldValue * 0.03;
    var gstMaking = making * 0.05;
    var total = goldValue + making + gstGold + gstMaking + other;

    $('gj-gold-value').textContent = fmt(goldValue);
    $('gj-making-value').textContent = fmt(making);
    $('gj-gst-gold').textContent = fmt(gstGold);
    $('gj-gst-making').textContent = fmt(gstMaking);
    $('gj-other-out').textContent = fmt(other);
    $('gj-total').textContent = fmt(total);

    lastSummary = weight + 'g @ ₹' + rate + '/g = ' + fmt(goldValue) + ' gold | Making: ' + fmt(making) +
      ' | GST: ' + fmt(gstGold) + ' (3% gold) + ' + fmt(gstMaking) + ' (5% making) | Total: ' + fmt(total);
  }

  $('gj-making-mode').addEventListener('change', function () { updateMakingLabel(); calc(); });
  $('gj-calc').addEventListener('click', calc);
  ['gj-rate', 'gj-weight', 'gj-making', 'gj-other'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('gj-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
