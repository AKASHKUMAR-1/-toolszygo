(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var corpus = parseFloat($('swp-corpus').value);
    var w = parseFloat($('swp-withdraw').value);
    var rate = parseFloat($('swp-rate').value);
    if (!corpus || !w || !rate || corpus <= 0 || w <= 0 || rate <= 0) return;
    var i = rate / 12 / 100;
    var monthlyReturn = corpus * i;
    $('swp-vs').textContent = toolsdoINR(Math.round(monthlyReturn)) + ' return vs ' + toolsdoINR(w) + ' withdrawal';

    if (w <= monthlyReturn) {
      $('swp-duration').textContent = 'Never runs out! 🎉';
      $('swp-duration-label').textContent = 'Withdrawal is below returns — the corpus keeps growing';
      $('swp-total').textContent = toolsdoINR(w * 12) + '/year, forever';
      lastSummary = 'SWP: ' + toolsdoINR(corpus) + ' corpus @ ' + rate + '%, withdrawing ' + toolsdoINR(w) +
        '/month — corpus never depletes (monthly return ' + toolsdoINR(Math.round(monthlyReturn)) + ')';
      return;
    }
    var bal = corpus, months = 0, total = 0;
    while (bal > 0 && months < 1200) {
      bal = bal * (1 + i);
      var take = Math.min(w, bal);
      bal -= take;
      total += take;
      months++;
    }
    var y = Math.floor(months / 12), mo = months % 12;
    var dur = (y ? y + ' years ' : '') + (mo ? mo + ' months' : '');
    $('swp-duration').textContent = months >= 1200 ? '100+ years' : dur.trim();
    $('swp-duration-label').textContent = 'How long the corpus lasts';
    $('swp-total').textContent = toolsdoINR(Math.round(total));
    lastSummary = 'SWP: ' + toolsdoINR(corpus) + ' @ ' + rate + '%, ' + toolsdoINR(w) + '/month | Lasts: ' +
      dur.trim() + ' | Total withdrawn: ' + toolsdoINR(Math.round(total));
  }

  $('swp-calc').addEventListener('click', calc);
  ['swp-corpus', 'swp-withdraw', 'swp-rate'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('swp-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
