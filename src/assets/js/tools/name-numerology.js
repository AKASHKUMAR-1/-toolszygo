(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var MEANINGS = {
    1: 'Leader 👑 — independent, ambitious and pioneering. You forge new paths rather than follow.',
    2: 'Peacemaker 🕊 — cooperative, sensitive and diplomatic. Bringing balance to relationships is your strength.',
    3: 'Creative 🎨 — expressive, social and optimistic. You have a natural talent for communication and art.',
    4: 'Builder 🧱 — practical, disciplined and hardworking. You build a solid foundation in everything.',
    5: 'Explorer 🌍 — freedom-loving, adventurous and adaptable. Change doesn\'t scare you, it excites you.',
    6: 'Nurturer 💛 — responsible, caring and family-oriented. People come to you for support.',
    7: 'Seeker 🔍 — analytical, spiritual and a deep thinker. You see beyond the surface.',
    8: 'Achiever 💼 — ambitious, authoritative and materially successful. Business and management are your field.',
    9: 'Humanitarian 🌟 — compassionate, generous and idealistic. Making the world better is your mission.',
    11: 'Master Intuitive ✨ — spiritually gifted, inspirational. A rare master number — blessed with deep intuition.',
    22: 'Master Builder 🏛 — big dreams, big execution. The most powerful number — you turn vision into reality.',
    33: 'Master Teacher 📖 — selfless service and healing. The rarest master number — you lift others up.',
  };

  function calc() {
    var name = $('num-name').value.trim().toUpperCase().replace(/[^A-Z]/g, '');
    if (!name) {
      $('num-result').textContent = '—';
      $('num-meaning').textContent = 'Enter your name in English letters';
      return;
    }
    var sum = 0;
    for (var i = 0; i < name.length; i++) {
      sum += ((name.charCodeAt(i) - 65) % 9) + 1;
    }
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      var s = 0;
      String(sum).split('').forEach(function (d) { s += parseInt(d, 10); });
      sum = s;
    }
    $('num-result').textContent = sum;
    $('num-meaning').textContent = MEANINGS[sum] || '';
  }

  $('num-calc').addEventListener('click', calc);
  $('num-name').addEventListener('input', calc);
})();
