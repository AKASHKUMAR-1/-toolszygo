(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function run() {
    var input = $('url-input').value;
    var mode = $('url-mode').value;
    var out = $('url-output');
    if (!input) { out.value = ''; return; }
    try {
      if (mode === 'encodeComponent') out.value = encodeURIComponent(input);
      else if (mode === 'encode') out.value = encodeURI(input);
      else out.value = decodeURIComponent(input.replace(/\+/g, '%20'));
      out.style.color = '#8A4B2A';
    } catch (e) {
      out.value = 'Error: invalid encoding — ' + e.message;
      out.style.color = '#B84F4F';
    }
  }

  $('url-run').addEventListener('click', run);
  $('url-input').addEventListener('input', run);
  $('url-mode').addEventListener('change', run);
  $('url-copy').addEventListener('click', function () {
    var t = $('url-output').value;
    if (t && t.indexOf('Error:') !== 0) toolsdoCopy(t, this);
  });
  $('url-swap').addEventListener('click', function () {
    var t = $('url-output').value;
    if (!t || t.indexOf('Error:') === 0) return;
    $('url-input').value = t;
    // encode -> decode toggle for convenience
    var m = $('url-mode');
    m.value = m.value === 'decode' ? 'encodeComponent' : 'decode';
    run();
  });
})();
