(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var SETS = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    nums: '0123456789',
    syms: '!@#$%^&*()-_=+[]{};:,.<>?',
  };
  var current = '';

  function randInt(max) {
    var buf = new Uint32Array(1);
    var limit = Math.floor(4294967296 / max) * max;
    do { crypto.getRandomValues(buf); } while (buf[0] >= limit);
    return buf[0] % max;
  }

  function generate() {
    var len = parseInt($('pw-length').value, 10);
    var pools = [];
    if ($('pw-upper').checked) pools.push(SETS.upper);
    if ($('pw-lower').checked) pools.push(SETS.lower);
    if ($('pw-nums').checked) pools.push(SETS.nums);
    if ($('pw-syms').checked) pools.push(SETS.syms);
    if (!pools.length) {
      $('pw-result').textContent = 'Kam se kam ek character type choose karo';
      $('pw-strength').textContent = '—';
      current = '';
      return;
    }
    var all = pools.join('');
    var chars = [];
    // ensure at least one char from each selected set
    pools.forEach(function (p) { chars.push(p[randInt(p.length)]); });
    for (var i = chars.length; i < len; i++) chars.push(all[randInt(all.length)]);
    // shuffle (Fisher–Yates with crypto random)
    for (var j = chars.length - 1; j > 0; j--) {
      var k = randInt(j + 1);
      var tmp = chars[j]; chars[j] = chars[k]; chars[k] = tmp;
    }
    current = chars.join('');
    $('pw-result').textContent = current;

    var entropy = len * Math.log2(all.length);
    var label = entropy >= 90 ? 'Very strong 💪' : entropy >= 60 ? 'Strong' : entropy >= 40 ? 'Medium' : 'Weak';
    $('pw-strength').textContent = label + ' (~' + Math.round(entropy) + ' bits)';
  }

  $('pw-length').addEventListener('input', function () {
    $('pw-length-val').textContent = this.value;
    generate();
  });
  ['pw-upper', 'pw-lower', 'pw-nums', 'pw-syms'].forEach(function (id) {
    $(id).addEventListener('change', generate);
  });
  $('pw-generate').addEventListener('click', generate);
  $('pw-copy').addEventListener('click', function () {
    if (current) toolsdoCopy(current, this);
  });
  generate();
})();
