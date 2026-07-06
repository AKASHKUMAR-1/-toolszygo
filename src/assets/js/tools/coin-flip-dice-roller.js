(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var DICE = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  var history = [];

  function randInt(max) {
    var buf = new Uint32Array(1);
    var limit = Math.floor(4294967296 / max) * max;
    do { crypto.getRandomValues(buf); } while (buf[0] >= limit);
    return buf[0] % max;
  }

  function addHistory(entry) {
    history.unshift(entry);
    if (history.length > 10) history.pop();
    $('cfd-history').innerHTML = history.join('<br>');
  }

  $('coin-flip').addEventListener('click', function () {
    var heads = randInt(2) === 0;
    $('coin-result').textContent = heads ? '🙂' : '🦁';
    $('coin-text').textContent = heads ? 'HEADS!' : 'TAILS!';
    addHistory('🪙 Coin: <strong>' + (heads ? 'Heads' : 'Tails') + '</strong>');
  });

  $('dice-roll').addEventListener('click', function () {
    var n = parseInt($('dice-count').value, 10);
    var rolls = [];
    var total = 0;
    for (var i = 0; i < n; i++) {
      var v = randInt(6) + 1;
      rolls.push(v);
      total += v;
    }
    $('dice-result').textContent = rolls.map(function (v) { return DICE[v - 1]; }).join(' ');
    $('dice-total').textContent = n > 1 ? rolls.join(' + ') + ' = ' + total : 'Aaya: ' + total;
    addHistory('🎲 Dice (' + n + '): <strong>' + rolls.join(', ') + '</strong>' + (n > 1 ? ' (total ' + total + ')' : ''));
  });
})();
