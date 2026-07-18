(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function gcd(a, b) { return b ? gcd(b, a % b) : a; }

  function toFraction(x) {
    // best simple fraction for x with denominator <= 100
    var bestN = 1, bestD = 1, bestErr = Infinity;
    for (var d = 1; d <= 100; d++) {
      var n = Math.round(x * d);
      if (n < 1) continue;
      var err = Math.abs(x - n / d);
      if (err < bestErr - 1e-12) { bestErr = err; bestN = n; bestD = d; }
    }
    var g = gcd(bestN, bestD);
    return (bestN / g) + '/' + (bestD / g);
  }

  function parseToDecimal() {
    var format = $('oc-format').value;
    var raw = $('oc-odds').value.trim();
    if (!raw) return null;
    if (format === 'american') {
      var a = parseFloat(raw.replace('+', ''));
      if (isNaN(a) || a === 0) return null;
      if (Math.abs(a) < 100 && raw.indexOf('-') === 0) return null; // -50 is not valid American odds
      return a > 0 ? 1 + a / 100 : 1 + 100 / Math.abs(a);
    }
    if (format === 'decimal') {
      var d = parseFloat(raw);
      return d > 1 ? d : null;
    }
    // fractional
    var parts = raw.split('/');
    if (parts.length !== 2) return null;
    var n = parseFloat(parts[0]), den = parseFloat(parts[1]);
    if (!n || !den || n <= 0 || den <= 0) return null;
    return 1 + n / den;
  }

  function calc() {
    var dec = parseToDecimal();
    if (!dec) {
      $('oc-prob').textContent = '—';
      ['oc-american', 'oc-decimal', 'oc-fractional', 'oc-profit', 'oc-return'].forEach(function (id) {
        $(id).textContent = 'Invalid odds';
      });
      lastSummary = '';
      return;
    }
    var american;
    if (dec >= 2) {
      american = '+' + Math.round((dec - 1) * 100);
    } else {
      american = String(-Math.round(100 / (dec - 1)));
    }
    var frac = toFraction(dec - 1);
    var prob = 100 / dec;
    var stake = parseFloat($('oc-stake').value) || 0;
    var profit = stake * (dec - 1);

    $('oc-prob').textContent = (Math.round(prob * 10) / 10) + '%';
    $('oc-american').textContent = american;
    $('oc-decimal').textContent = String(Math.round(dec * 100) / 100);
    $('oc-fractional').textContent = frac;
    $('oc-profit').textContent = stake > 0 ? '$' + (Math.round(profit * 100) / 100).toLocaleString('en-US') : '—';
    $('oc-return').textContent = stake > 0 ? '$' + (Math.round(stake * dec * 100) / 100).toLocaleString('en-US') : '—';
    lastSummary = 'Odds: ' + american + ' (American) = ' + (Math.round(dec * 100) / 100) + ' (decimal) = ' + frac +
      ' (fractional) | Implied probability: ' + (Math.round(prob * 10) / 10) + '%' +
      (stake > 0 ? ' | $' + stake + ' stake returns $' + (Math.round(stake * dec * 100) / 100) : '');
  }

  $('oc-calc').addEventListener('click', calc);
  ['oc-format', 'oc-odds', 'oc-stake'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('oc-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
