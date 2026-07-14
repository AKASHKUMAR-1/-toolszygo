(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function parse() {
    var raw = $('json-input').value.trim();
    if (!raw) {
      setStatus('Paste JSON first', false);
      return null;
    }
    try {
      var obj = JSON.parse(raw);
      return { obj: obj };
    } catch (e) {
      var msg = e.message;
      // add line/col info if position is present
      var m = msg.match(/position (\d+)/);
      if (m) {
        var pos = parseInt(m[1], 10);
        var before = raw.slice(0, pos);
        var line = before.split('\n').length;
        var col = pos - before.lastIndexOf('\n');
        msg += ' (line ' + line + ', column ' + col + ')';
      }
      setStatus('✕ Invalid JSON: ' + msg, false);
      return null;
    }
  }

  function setStatus(msg, ok) {
    var el = $('json-status');
    el.textContent = msg;
    el.style.color = ok ? '#5D8A4E' : '#B84F4F';
  }

  $('json-format').addEventListener('click', function () {
    var r = parse();
    if (!r) return;
    $('json-output').value = JSON.stringify(r.obj, null, 2);
    setStatus('✓ Valid JSON — formatted', true);
  });
  $('json-minify').addEventListener('click', function () {
    var r = parse();
    if (!r) return;
    $('json-output').value = JSON.stringify(r.obj);
    setStatus('✓ Valid JSON — minified', true);
  });
  $('json-validate').addEventListener('click', function () {
    var r = parse();
    if (!r) return;
    setStatus('✓ Valid JSON', true);
  });
  $('json-copy').addEventListener('click', function () {
    var t = $('json-output').value;
    if (t) toolsdoCopy(t, this);
  });
})();
