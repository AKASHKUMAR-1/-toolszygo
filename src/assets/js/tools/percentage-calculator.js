(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var round = function (n) { return Math.round(n * 10000) / 10000; };

  function bind(a, b, out, fn) {
    function run() {
      var x = parseFloat($(a).value);
      var y = parseFloat($(b).value);
      $(out).textContent = (isNaN(x) || isNaN(y)) ? '—' : fn(x, y);
    }
    $(a).addEventListener('input', run);
    $(b).addEventListener('input', run);
  }

  // X% of Y
  bind('pc1-x', 'pc1-y', 'pc1-res', function (x, y) {
    return String(round(x * y / 100));
  });
  // X is what % of Y
  bind('pc2-x', 'pc2-y', 'pc2-res', function (x, y) {
    if (y === 0) return '—';
    return round(x / y * 100) + '%';
  });
  // % change from X to Y
  bind('pc3-x', 'pc3-y', 'pc3-res', function (x, y) {
    if (x === 0) return '—';
    var ch = round((y - x) / Math.abs(x) * 100);
    return (ch >= 0 ? '+' : '') + ch + '%';
  });
})();
