(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var currency = 'INR';
  var fmt = function (n) { return toolsdoAmt(n, 2, currency); };

  function calc() {
    var price = parseFloat($('dc-price').value);
    var off = parseFloat($('dc-off').value);
    var extra = parseFloat($('dc-extra').value) || 0;
    if (isNaN(price) || isNaN(off) || price < 0 || off < 0 || off > 100 || extra < 0 || extra > 100) return;
    var afterFirst = price * (1 - off / 100);
    var final = afterFirst * (1 - extra / 100);
    var saved = price - final;
    var eff = price > 0 ? (saved / price) * 100 : 0;
    $('dc-result').textContent = fmt(final);
    $('dc-save').textContent = fmt(saved);
    $('dc-eff').textContent = (Math.round(eff * 100) / 100) + '%';
    lastSummary = 'Original: ' + fmt(price) + ' | Discount: ' + off + '%' + (extra ? ' + extra ' + extra + '%' : '') +
      ' | Final: ' + fmt(final) + ' | Saved: ' + fmt(saved) + ' (' + (Math.round(eff * 100) / 100) + '%)';
  }

  toolsdoCurrencyToggle('dc-currency-toggle', function (c) { currency = c; calc(); });
  $('dc-calc').addEventListener('click', calc);
  ['dc-price', 'dc-off', 'dc-extra'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('dc-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
