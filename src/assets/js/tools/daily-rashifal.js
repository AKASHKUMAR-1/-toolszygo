(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var SIGNS = [
    ['Aries', '♈'], ['Taurus', '♉'], ['Gemini', '♊'],
    ['Cancer', '♋'], ['Leo', '♌'], ['Virgo', '♍'],
    ['Libra', '♎'], ['Scorpio', '♏'], ['Sagittarius', '♐'],
    ['Capricorn', '♑'], ['Aquarius', '♒'], ['Pisces', '♓'],
  ];
  var LOVE = [
    'Sweetness fills your relationships today — spend quality time with your partner.',
    'Meeting an old friend will bring a smile to your heart.',
    'Be a little patient in love — haste makes waste.',
    'A day to spend with family — everyone will be in a good mood.',
    'A compliment from someone will make your day.',
    'Listen to your partner carefully — a misunderstanding will clear up.',
  ];
  var CAREER = [
    'You may get a new responsibility at work — don\'t let the chance slip.',
    'Today rewards your hard work — stay focused.',
    'Think carefully before making money decisions today.',
    'A stalled task may finally get completed today.',
    'Try out new ideas today — seniors will be impressed.',
    'There are signs of a small gain in business.',
  ];
  var HEALTH = [
    'Your health will be good today — just drink more water.',
    'A short walk or workout will be very beneficial today.',
    'Be careful with what you eat — avoid outside food.',
    'Get enough sleep — your fatigue will fade away.',
    'Take less stress today — try deep breathing and meditation.',
    'Your energy will be high — put it to good use.',
  ];
  var COLORS = ['Red', 'Yellow', 'Green', 'Blue', 'White', 'Saffron', 'Pink', 'Sky Blue'];

  function seededPick(arr, seed) {
    return arr[seed % arr.length];
  }

  function daySeed(signIdx) {
    var d = new Date();
    var dateNum = d.getFullYear() * 372 + (d.getMonth() + 1) * 31 + d.getDate();
    var h = dateNum * 31 + signIdx * 97;
    return Math.abs(h);
  }

  function show(idx) {
    var seed = daySeed(idx);
    $('rf-result-panel').style.display = '';
    $('rf-sign-name').textContent = SIGNS[idx][1] + ' ' + SIGNS[idx][0];
    $('rf-date').textContent = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    $('rf-text').innerHTML =
      '<p><strong>💕 Love/Family:</strong> ' + seededPick(LOVE, seed) + '</p>' +
      '<p><strong>💼 Career/Money:</strong> ' + seededPick(CAREER, seed >> 3) + '</p>' +
      '<p><strong>🍀 Health:</strong> ' + seededPick(HEALTH, seed >> 6) + '</p>';
    $('rf-lucky-num').textContent = (seed % 9) + 1;
    $('rf-lucky-color').textContent = seededPick(COLORS, seed >> 2);
    $('rf-rating').textContent = '★'.repeat(3 + (seed % 3));
    $('rf-result-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  $('rf-signs').innerHTML = SIGNS.map(function (s, i) {
    return '<button data-i="' + i + '" style="background:#FFF;border:1px solid #EDE6DA;border-radius:12px;padding:12px 8px;cursor:pointer;font-family:var(--sans);text-align:center;">' +
      '<div style="font-size:26px;">' + s[1] + '</div>' +
      '<div style="font-size:12px;font-weight:600;color:#4E4636;margin-top:4px;">' + s[0].split(' ')[0] + '</div></button>';
  }).join('');

  $('rf-signs').addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (btn) show(parseInt(btn.getAttribute('data-i'), 10));
  });
})();
