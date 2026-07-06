(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function run() {
    var t = $('lb-input').value;
    var mode = $('lb-mode').value;
    var out;
    if (mode === 'para') {
      // preserve paragraph boundaries (2+ newlines), join lines inside each paragraph
      out = t.split(/\n\s*\n+/).map(function (para) {
        return para.split('\n').join(' ').replace(/[ \t]+/g, ' ').trim();
      }).filter(function (p) { return p; }).join('\n\n');
    } else if (mode === 'none') {
      out = t.replace(/\r?\n/g, '').replace(/[ \t]+/g, ' ').trim();
    } else {
      out = t.replace(/\r?\n/g, ' ').replace(/[ \t]+/g, ' ').trim();
    }
    $('lb-output').value = out;
  }

  $('lb-run').addEventListener('click', run);
  $('lb-input').addEventListener('input', run);
  $('lb-mode').addEventListener('change', run);
  $('lb-copy').addEventListener('click', function () {
    var t = $('lb-output').value;
    if (t) toolsdoCopy(t, this);
  });
})();
