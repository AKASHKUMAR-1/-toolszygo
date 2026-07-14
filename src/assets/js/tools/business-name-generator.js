(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastList = '';
  var BANKS = {
    modern: { pre: ['Nova', 'Zen', 'Flux', 'Peak', 'Bold', 'Next', 'Alta', 'Uno'], suf: ['ly', 'io', 'ify', 'Labs', 'HQ', 'Works', 'Hub', 'Base'] },
    indian: { pre: ['Shree', 'Bharat', 'Desi', 'Apna', 'Sona', 'Ratna', 'Veda', 'Surya'], suf: ['Bhandar', 'Mart', 'Wala', 'Ghar', 'Kendra', 'Udyog', 'Sadan', 'Enterprises'] },
    classic: { pre: ['Royal', 'Prime', 'Elite', 'Grand', 'Global', 'United', 'Supreme', 'Pioneer'], suf: ['Corp', 'Group', '& Co', 'Industries', 'Solutions', 'Associates', 'International', 'Ventures'] },
  };

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function shuffle(a) { return a.slice().sort(function () { return Math.random() - 0.5; }); }

  function generate() {
    var kw = cap($('bn-keyword').value.trim().toLowerCase().replace(/[^a-z0-9 ]/g, ''));
    var style = $('bn-style').value;
    var box = $('bn-results');
    if (!kw) {
      box.innerHTML = '<div style="color:#A39C8B;font-weight:400;">Enter a keyword first</div>';
      return;
    }
    var pools = style === 'all' ? ['modern', 'indian', 'classic'] : [style];
    var ideas = [];
    pools.forEach(function (p) {
      var b = BANKS[p];
      shuffle(b.pre).slice(0, style === 'all' ? 3 : 8).forEach(function (pre) {
        ideas.push(pre + ' ' + kw);
      });
      shuffle(b.suf).slice(0, style === 'all' ? 4 : 9).forEach(function (suf) {
        ideas.push(/^[a-z]/.test(suf) ? kw + suf : kw + ' ' + suf);
      });
    });
    ideas = shuffle(Array.from(new Set(ideas))).slice(0, 20);
    box.innerHTML = ideas.map(function (n) { return '<div>✨ ' + n + '</div>'; }).join('');
    lastList = ideas.join('\n');
  }

  $('bn-generate').addEventListener('click', generate);
  $('bn-keyword').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') generate();
  });
  $('bn-style').addEventListener('change', generate);
  $('bn-copy').addEventListener('click', function () {
    if (lastList) toolsdoCopy(lastList, this);
  });
})();
