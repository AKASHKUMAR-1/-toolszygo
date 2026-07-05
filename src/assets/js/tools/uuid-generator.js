(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function uuidv4() {
    if (crypto.randomUUID) return crypto.randomUUID();
    // fallback: RFC 4122 v4 from getRandomValues
    var b = new Uint8Array(16);
    crypto.getRandomValues(b);
    b[6] = (b[6] & 0x0f) | 0x40;
    b[8] = (b[8] & 0x3f) | 0x80;
    var h = Array.prototype.map.call(b, function (x) { return x.toString(16).padStart(2, '0'); }).join('');
    return h.slice(0, 8) + '-' + h.slice(8, 12) + '-' + h.slice(12, 16) + '-' + h.slice(16, 20) + '-' + h.slice(20);
  }

  function generate() {
    var count = parseInt($('uuid-count').value, 10);
    var list = [];
    for (var i = 0; i < count; i++) {
      var u = uuidv4();
      if ($('uuid-nodash').checked) u = u.replace(/-/g, '');
      if ($('uuid-upper').checked) u = u.toUpperCase();
      list.push(u);
    }
    $('uuid-result').value = list.join('\n');
  }

  $('uuid-generate').addEventListener('click', generate);
  ['uuid-count', 'uuid-upper', 'uuid-nodash'].forEach(function (id) {
    $(id).addEventListener('change', generate);
  });
  $('uuid-copy').addEventListener('click', function () {
    var t = $('uuid-result').value;
    if (t) toolsdoCopy(t, this);
  });
  generate();
})();
