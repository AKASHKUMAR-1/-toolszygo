(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function encodeB64(str) {
    var bytes = new TextEncoder().encode(str);
    var bin = '';
    bytes.forEach(function (b) { bin += String.fromCharCode(b); });
    return btoa(bin);
  }
  function decodeB64(str) {
    var bin = atob(str.replace(/\s/g, ''));
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }

  function run() {
    var input = $('b64-input').value;
    var out = $('b64-output');
    if (!input) { out.value = ''; return; }
    try {
      out.value = $('b64-mode').value === 'encode' ? encodeB64(input) : decodeB64(input);
      out.style.color = '#8A4B2A';
    } catch (e) {
      out.value = 'Error: not valid Base64 — check the input';
      out.style.color = '#B84F4F';
    }
  }

  $('b64-run').addEventListener('click', run);
  $('b64-input').addEventListener('input', run);
  $('b64-mode').addEventListener('change', run);
  $('b64-swap').addEventListener('click', function () {
    var t = $('b64-output').value;
    if (!t || t.indexOf('Error:') === 0) return;
    $('b64-input').value = t;
    var m = $('b64-mode');
    m.value = m.value === 'encode' ? 'decode' : 'encode';
    run();
  });
  $('b64-copy').addEventListener('click', function () {
    var t = $('b64-output').value;
    if (t && t.indexOf('Error:') !== 0) toolsdoCopy(t, this);
  });
})();
