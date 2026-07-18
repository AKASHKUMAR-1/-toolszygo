(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function toggleSnfMode() {
    var clr = $('mf-snf-mode').value === 'clr';
    $('mf-snf-direct-field').style.display = clr ? 'none' : '';
    $('mf-clr-field').style.display = clr ? '' : 'none';
    $('mf-snf-calc-row').style.display = clr ? '' : 'none';
  }

  function calc() {
    var fat = parseFloat($('mf-fat').value);
    var fatRate = parseFloat($('mf-fat-rate').value);
    var snfRate = parseFloat($('mf-snf-rate').value);
    var qty = parseFloat($('mf-qty').value);
    if (!fat || fat <= 0 || isNaN(fatRate) || isNaN(snfRate) || !qty || qty <= 0) return;

    var snf;
    if ($('mf-snf-mode').value === 'clr') {
      var clr = parseFloat($('mf-clr').value);
      if (!clr || clr <= 0) return;
      snf = (clr / 4) + (0.2 * fat) + 0.36;
      $('mf-snf-calculated').textContent = (Math.round(snf * 100) / 100) + '%';
    } else {
      snf = parseFloat($('mf-snf').value);
      if (!snf || snf <= 0) return;
    }

    var fatPart = fat * fatRate;
    var snfPart = snf * snfRate;
    var rate = fatPart + snfPart;
    var total = rate * qty;

    $('mf-rate').textContent = '₹' + (Math.round(rate * 100) / 100).toLocaleString('en-IN');
    $('mf-fat-part').textContent = '₹' + (Math.round(fatPart * 100) / 100).toLocaleString('en-IN');
    $('mf-snf-part').textContent = '₹' + (Math.round(snfPart * 100) / 100).toLocaleString('en-IN');
    $('mf-total').textContent = '₹' + (Math.round(total * 100) / 100).toLocaleString('en-IN');
    lastSummary = 'FAT ' + fat + '% + SNF ' + (Math.round(snf * 100) / 100) + '% | Rate: ₹' +
      (Math.round(rate * 100) / 100) + '/litre | Qty: ' + qty + 'L | Total: ₹' + (Math.round(total * 100) / 100);
  }

  $('mf-snf-mode').addEventListener('change', function () { toggleSnfMode(); calc(); });
  $('mf-calc').addEventListener('click', calc);
  ['mf-fat', 'mf-snf', 'mf-clr', 'mf-fat-rate', 'mf-snf-rate', 'mf-qty'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('mf-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
