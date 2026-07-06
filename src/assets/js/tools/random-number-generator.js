(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function randInt(min, max) {
    var range = max - min + 1;
    var buf = new Uint32Array(1);
    var limit = Math.floor(4294967296 / range) * range;
    do { crypto.getRandomValues(buf); } while (buf[0] >= limit);
    return min + (buf[0] % range);
  }

  function generate() {
    var min = parseInt($('rn-min').value, 10);
    var max = parseInt($('rn-max').value, 10);
    var count = Math.min(1000, Math.max(1, parseInt($('rn-count').value, 10) || 1));
    var unique = $('rn-unique').checked;
    var out = $('rn-result');
    if (isNaN(min) || isNaN(max) || min > max) {
      out.textContent = 'Min, Max se chhota ya barabar hona chahiye';
      out.style.fontSize = '15px';
      return;
    }
    var range = max - min + 1;
    if (unique && count > range) {
      out.textContent = 'Is range me sirf ' + range + ' unique numbers hain — count kam karo';
      out.style.fontSize = '15px';
      return;
    }
    var nums = [];
    if (unique) {
      // partial Fisher–Yates over the range (fine for typical ranges)
      if (range <= 100000) {
        var pool = new Array(range);
        for (var i = 0; i < range; i++) pool[i] = min + i;
        for (var j = 0; j < count; j++) {
          var k = j + randInt(0, range - 1 - j);
          var tmp = pool[j]; pool[j] = pool[k]; pool[k] = tmp;
          nums.push(pool[j]);
        }
      } else {
        var seen = {};
        while (nums.length < count) {
          var v = randInt(min, max);
          if (!seen[v]) { seen[v] = true; nums.push(v); }
        }
      }
    } else {
      for (var c = 0; c < count; c++) nums.push(randInt(min, max));
    }
    out.textContent = nums.join(', ');
    out.style.fontSize = count === 1 ? '34px' : '20px';
  }

  $('rn-generate').addEventListener('click', generate);
  $('rn-copy').addEventListener('click', function () {
    var t = $('rn-result').textContent;
    if (t && t !== '—' && !/chahiye|karo/.test(t)) toolsdoCopy(t, this);
  });
  generate();
})();
