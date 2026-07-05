(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var ta = $('wc-text');

  function count() {
    var t = ta.value;
    var trimmed = t.trim();
    var words = trimmed ? trimmed.split(/\s+/).length : 0;
    var chars = t.length;
    var charsNs = t.replace(/\s/g, '').length;
    var sentences = trimmed ? (trimmed.match(/[.!?।]+(?=\s|$)/g) || []).length || (trimmed ? 1 : 0) : 0;
    var paras = trimmed ? trimmed.split(/\n\s*\n+/).filter(function (p) { return p.trim(); }).length : 0;
    var mins = words / 200;
    var read = words === 0 ? '0 min' : mins < 1 ? '< 1 min' : Math.ceil(mins) + ' min';
    $('wc-words').textContent = words.toLocaleString('en-IN');
    $('wc-chars').textContent = chars.toLocaleString('en-IN');
    $('wc-chars-ns').textContent = charsNs.toLocaleString('en-IN');
    $('wc-sentences').textContent = sentences.toLocaleString('en-IN');
    $('wc-paras').textContent = paras.toLocaleString('en-IN');
    $('wc-read').textContent = read;
  }

  ta.addEventListener('input', count);
  $('wc-clear').addEventListener('click', function () {
    ta.value = '';
    count();
    ta.focus();
  });
  count();
})();
