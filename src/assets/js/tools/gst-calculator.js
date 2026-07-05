(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var fmt = function (n) { return '₹' + n.toLocaleString('en-IN', { maximumFractionDigits: 2 }); };

  function calc() {
    var amount = parseFloat($('gst-amount').value);
    var rate = parseFloat($('gst-rate').value);
    var mode = $('gst-mode').value;
    if (!amount || amount <= 0) return;
    var base, tax, total;
    if (mode === 'add') {
      base = amount;
      tax = amount * rate / 100;
      total = amount + tax;
      $('gst-result').textContent = fmt(total);
      $('gst-result-label').textContent = 'Total (with GST)';
    } else {
      total = amount;
      base = amount / (1 + rate / 100);
      tax = total - base;
      $('gst-result').textContent = fmt(base);
      $('gst-result-label').textContent = 'Base amount (without GST)';
    }
    $('gst-base').textContent = fmt(base);
    $('gst-tax').textContent = fmt(tax) + ' (' + rate + '%)';
    $('gst-cgst').textContent = fmt(tax / 2) + ' (' + rate / 2 + '%)';
    $('gst-sgst').textContent = fmt(tax / 2) + ' (' + rate / 2 + '%)';
    lastSummary = 'Base: ' + fmt(base) + ' | GST (' + rate + '%): ' + fmt(tax) +
      ' | CGST: ' + fmt(tax / 2) + ' | SGST: ' + fmt(tax / 2) + ' | Total: ' + fmt(total);
  }

  $('gst-calc').addEventListener('click', calc);
  ['gst-amount', 'gst-rate', 'gst-mode'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('gst-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
