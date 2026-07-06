(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var PREFIXES = ['get', 'my', 'the', 'go', 'try', 'use', 'pro', 'super', 'smart', 'easy'];
  var SUFFIXES = ['hub', 'ify', 'ly', 'zone', 'spot', 'lab', 'wala', 'desk', 'box', 'kart', 'mart', 'gram', 'verse', 'nest', 'dock'];
  var lastList = '';

  function generate() {
    var kw = $('dom-keyword').value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    var ext = $('dom-ext').value;
    var box = $('dom-results');
    if (!kw) {
      box.innerHTML = '<div style="color:#A39C8B;font-family:var(--sans);">Pehle keyword daalo</div>';
      return;
    }
    var ideas = [];
    ideas.push(kw + ext);
    // shuffled prefixes/suffixes for variety
    var pre = PREFIXES.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 7);
    var suf = SUFFIXES.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 8);
    pre.forEach(function (p) { ideas.push(p + kw + ext); });
    suf.forEach(function (s) { ideas.push(kw + s + ext); });
    // a couple of combos
    ideas.push(pre[0] + kw + suf[0] + ext);
    ideas.push(kw + 'india' + ext);
    ideas.push(kw + 'online' + ext);
    ideas.push(kw + '360' + ext);
    ideas = ideas.slice(0, 20);
    box.innerHTML = ideas.map(function (d) { return '<div>🌐 ' + d + '</div>'; }).join('');
    lastList = ideas.join('\n');
  }

  $('dom-generate').addEventListener('click', generate);
  $('dom-keyword').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') generate();
  });
  $('dom-ext').addEventListener('change', generate);
  $('dom-copy').addEventListener('click', function () {
    if (lastList) toolsdoCopy(lastList, this);
  });
})();
