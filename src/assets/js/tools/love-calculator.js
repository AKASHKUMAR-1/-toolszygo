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
    if (pct >= 90) return 'Made for each other! Rab ne bana di jodi 💍';
    if (pct >= 75) return 'Bahut strong connection hai — lucky ho dono! 💖';
    if (pct >= 60) return 'Achhi jodi hai — thodi mehnat aur masti chahiye 😊';
    if (pct >= 45) return 'Kuch to hai… dosti se shuruaat karo 😉';
    return 'Opposites attract bhi hota hai — himmat rakho! 😄';
  }

  function calc() {
    var n1 = $('love-name1').value.trim();
    var n2 = $('love-name2').value.trim();
    if (!n1 || !n2) {
      $('love-percent').textContent = '💘';
      $('love-message').textContent = 'Dono naam daalo!';
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
