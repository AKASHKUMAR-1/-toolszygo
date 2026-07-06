(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  // Unicode-safe character reverse (handles emoji, matras via grapheme segmentation when available)
  function reverseChars(s) {
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      var seg = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
      var parts = [];
      for (var it = seg.segment(s)[Symbol.iterator](), r = it.next(); !r.done; r = it.next()) parts.push(r.value.segment);
      return parts.reverse().join('');
    }
    return Array.from(s).reverse().join('');
  }

  function run() {
    var t = $('tr-input').value;
    var mode = $('tr-mode').value;
    var out;
    if (mode === 'chars') out = reverseChars(t);
    else if (mode === 'words') out = t.split('\n').map(function (l) { return l.split(/\s+/).reverse().join(' '); }).join('\n');
    else if (mode === 'lines') out = t.split('\n').reverse().join('\n');
    else out = t.split('\n').map(function (l) {
      return l.split(/(\s+)/).map(function (w) { return /\S/.test(w) ? reverseChars(w) : w; }).join('');
    }).join('\n');
    $('tr-output').value = out;
  }

  $('tr-run').addEventListener('click', run);
  $('tr-input').addEventListener('input', run);
  $('tr-mode').addEventListener('change', run);
  $('tr-copy').addEventListener('click', function () {
    var t = $('tr-output').value;
    if (t) toolsdoCopy(t, this);
  });
})();
