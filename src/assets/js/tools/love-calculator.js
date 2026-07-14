(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  // deterministic + order-independent fun score
  function score(a, b) {
    var names = [a.toLowerCase().replace(/\s+/g, ''), b.toLowerCase().replace(/\s+/g, '')].sort().join('❤');
    var h = 0;
    for (var i = 0; i < names.length; i++) {
      h = (h * 31 + names.charCodeAt(i)) >>> 0;
    }
    return 35 + (h % 66); // 35–100 (thoda positive bias — fun tool hai!)
  }

  function message(pct) {
    if (pct >= 90) return 'Made for each other! A match made in heaven 💍';
    if (pct >= 75) return 'A very strong connection — you\'re both lucky! 💖';
    if (pct >= 60) return 'A good match — a little effort and fun needed 😊';
    if (pct >= 45) return 'There\'s something there… start with friendship 😉';
    return 'Opposites attract too — keep your chin up! 😄';
  }

  function calc() {
    var n1 = $('love-name1').value.trim();
    var n2 = $('love-name2').value.trim();
    if (!n1 || !n2) {
      $('love-percent').textContent = '💘';
      $('love-message').textContent = 'Enter both names!';
      return;
    }
    var pct = score(n1, n2);
    $('love-percent').textContent = pct + '%';
    $('love-message').textContent = n1 + ' + ' + n2 + ' — ' + message(pct);
  }

  $('love-calc').addEventListener('click', calc);
  ['love-name1', 'love-name2'].forEach(function (id) {
    $(id).addEventListener('keydown', function (e) {
      if (e.key === 'Enter') calc();
    });
  });
})();
