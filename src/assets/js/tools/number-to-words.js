(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function below1000(n) {
    var out = '';
    if (n >= 100) {
      out += ONES[Math.floor(n / 100)] + ' hundred';
      n %= 100;
      if (n) out += ' ';
    }
    if (n >= 20) {
      out += TENS[Math.floor(n / 10)];
      if (n % 10) out += ' ' + ONES[n % 10];
    } else if (n > 0) {
      out += ONES[n];
    }
    return out;
  }

  function indian(n) {
    if (n === 0) return 'zero';
    var parts = [];
    var crore = Math.floor(n / 10000000); n %= 10000000;
    var lakh = Math.floor(n / 100000); n %= 100000;
    var thousand = Math.floor(n / 1000); n %= 1000;
    if (crore) parts.push((crore > 99 ? indian(crore) : below1000(crore)) + ' crore');
    if (lakh) parts.push(below1000(lakh) + ' lakh');
    if (thousand) parts.push(below1000(thousand) + ' thousand');
    if (n) parts.push(below1000(n));
    return parts.join(' ');
  }

  function intl(n) {
    if (n === 0) return 'zero';
    var parts = [];
    var units = [[1000000000000, 'trillion'], [1000000000, 'billion'], [1000000, 'million'], [1000, 'thousand']];
    units.forEach(function (u) {
      if (n >= u[0]) {
        parts.push(below1000(Math.floor(n / u[0])) + ' ' + u[1]);
        n %= u[0];
      }
    });
    if (n) parts.push(below1000(n));
    return parts.join(' ');
  }

  function convert() {
    var raw = $('nw-number').value;
    var style = $('nw-style').value;
    var num = Math.abs(parseFloat(raw));
    if (isNaN(num) || num > 99999999999) {
      $('nw-result').textContent = 'Valid number daalo (99 arab tak)';
      return;
    }
    var intPart = Math.floor(num);
    var out;
    if (style === 'intl') {
      out = intl(intPart);
    } else if (style === 'rupees') {
      var paise = Math.round((num - intPart) * 100);
      out = 'Rupees ' + indian(intPart);
      if (paise) out += ' and ' + below1000(paise) + ' Paise';
      out += ' Only';
    } else {
      out = indian(intPart);
    }
    $('nw-result').textContent = out;
  }

  $('nw-convert').addEventListener('click', convert);
  $('nw-number').addEventListener('input', convert);
  $('nw-style').addEventListener('change', convert);
  $('nw-copy').addEventListener('click', function () {
    var t = $('nw-result').textContent;
    if (t && t !== '—') toolsdoCopy(t, this);
  });
  convert();
})();
