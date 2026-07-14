(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var ta = $('cc-text');

  function limit(el, used, max) {
    var left = max - used;
    if (used === 0) { el.textContent = '—'; el.style.color = ''; return; }
    if (left >= 0) {
      el.textContent = left.toLocaleString('en-IN') + ' left';
      el.style.color = '#5D8A4E';
    } else {
      el.textContent = Math.abs(left).toLocaleString('en-IN') + ' over';
      el.style.color = '#B84F4F';
    }
  }

  function count() {
    var t = ta.value;
    var trimmed = t.trim();
    var chars = t.length;
    var charsNs = t.replace(/\s/g, '').length;
    var words = trimmed ? trimmed.split(/\s+/).length : 0;
    var lines = t ? t.split('\n').length : 0;
    $('cc-chars').textContent = chars.toLocaleString('en-IN');
    $('cc-chars-ns').textContent = charsNs.toLocaleString('en-IN');
    $('cc-words').textContent = words.toLocaleString('en-IN');
    $('cc-lines').textContent = (t ? lines : 0).toLocaleString('en-IN');
    limit($('cc-twitter'), chars, 280);
    limit($('cc-insta'), chars, 2200);
    limit($('cc-sms'), chars, 160);
    limit($('cc-meta'), chars, 160);
  }

  ta.addEventListener('input', count);
  $('cc-clear').addEventListener('click', function () {
    ta.value = '';
    count();
    ta.focus();
  });
  count();
})();
