(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastResult = '';

  function randInt(max) {
    var buf = new Uint32Array(1);
    var limit = Math.floor(4294967296 / max) * max;
    do { crypto.getRandomValues(buf); } while (buf[0] >= limit);
    return buf[0] % max;
  }

  function pick() {
    var names = $('rnp-names').value.split('\n')
      .map(function (n) { return n.trim(); })
      .filter(function (n) { return n; });
    var count = Math.max(1, parseInt($('rnp-count').value, 10) || 1);
    if (!names.length) {
      $('rnp-result').textContent = 'Pehle names daalo!';
      $('rnp-result').style.fontSize = '18px';
      return;
    }
    if (count > names.length) {
      $('rnp-result').textContent = 'List me sirf ' + names.length + ' naam hain';
      $('rnp-result').style.fontSize = '18px';
      return;
    }
    // partial Fisher–Yates, without replacement
    var pool = names.slice();
    var winners = [];
    for (var i = 0; i < count; i++) {
      var j = i + randInt(pool.length - i);
      var t = pool[i]; pool[i] = pool[j]; pool[j] = t;
      winners.push(pool[i]);
    }
    $('rnp-result').textContent = winners.join(', ');
    $('rnp-result').style.fontSize = count === 1 ? '30px' : '20px';
    $('rnp-info').textContent = names.length + ' names me se ' + count + ' winner' + (count > 1 ? 's' : '') + ' 🎉';
    lastResult = 'Winner' + (count > 1 ? 's' : '') + ': ' + winners.join(', ') + ' (out of ' + names.length + ')';
  }

  $('rnp-pick').addEventListener('click', pick);
  $('rnp-copy').addEventListener('click', function () {
    if (lastResult) toolsdoCopy(lastResult, this);
  });
})();
