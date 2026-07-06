(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var MEANINGS = {
    1: 'Leader 👑 — independent, ambitious aur pioneering. Aap naye raaste banate ho, follow nahi karte.',
    2: 'Peacemaker 🕊 — cooperative, sensitive aur diplomatic. Rishton me balance lana aapki khoobi hai.',
    3: 'Creative 🎨 — expressive, social aur optimistic. Communication aur art me natural talent hai.',
    4: 'Builder 🧱 — practical, disciplined aur mehnti. Aap solid foundation banate ho har cheez me.',
    5: 'Explorer 🌍 — freedom-loving, adventurous aur adaptable. Change aapko darata nahi, excite karta hai.',
    6: 'Nurturer 💛 — responsible, caring aur family-oriented. Log aapke paas support ke liye aate hain.',
    7: 'Seeker 🔍 — analytical, spiritual aur deep thinker. Aap surface se aage ki samajh rakhte ho.',
    8: 'Achiever 💼 — ambitious, authoritative aur material success wale. Business aur management aapka field hai.',
    9: 'Humanitarian 🌟 — compassionate, generous aur idealistic. Duniya ko behtar banana aapka mission hai.',
    11: 'Master Intuitive ✨ — spiritually gifted, inspirational. Rare master number — deep intuition ke maalik.',
    22: 'Master Builder 🏛 — bade sapne, badi execution. Sabse powerful number — vision ko reality banate ho.',
    33: 'Master Teacher 📖 — selfless service aur healing. Rarest master number — logon ko upar uthate ho.',
  };

  function calc() {
    var name = $('num-name').value.trim().toUpperCase().replace(/[^A-Z]/g, '');
    if (!name) {
      $('num-result').textContent = '—';
      $('num-meaning').textContent = 'Apna naam English letters me daalo';
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
