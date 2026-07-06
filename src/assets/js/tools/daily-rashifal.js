(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var SIGNS = [
    ['Mesh (Aries)', '♈'], ['Vrishabh (Taurus)', '♉'], ['Mithun (Gemini)', '♊'],
    ['Kark (Cancer)', '♋'], ['Simha (Leo)', '♌'], ['Kanya (Virgo)', '♍'],
    ['Tula (Libra)', '♎'], ['Vrishchik (Scorpio)', '♏'], ['Dhanu (Sagittarius)', '♐'],
    ['Makar (Capricorn)', '♑'], ['Kumbh (Aquarius)', '♒'], ['Meen (Pisces)', '♓'],
  ];
  var LOVE = [
    'Aaj rishton me mithaas rahegi — partner ke saath achha waqt bitao.',
    'Kisi purane dost se mulaqat dil khush kar degi.',
    'Pyar me thoda dhairya rakho — jaldi ka kaam shaitan ka.',
    'Family ke saath waqt bitane ka din hai — sabka mood achha rahega.',
    'Aaj kisi ki taareef aapka din bana degi.',
    'Partner ki baat dhyan se suno — galatfehmi door hogi.',
  ];
  var CAREER = [
    'Kaam me nayi zimmedari mil sakti hai — mauka haath se mat jaane do.',
    'Aaj ka din mehnat ka fal dene wala hai — focus banaye rakho.',
    'Paison ke maamle me aaj soch-samajh kar faisla lo.',
    'Koi ruka hua kaam aaj poora ho sakta hai.',
    'Naye ideas ko aaj aazmao — seniors impress honge.',
    'Business me chhota sa fayda hone ke aasaar hain.',
  ];
  var HEALTH = [
    'Sehat aaj achhi rahegi — bas paani zyada piyo.',
    'Thodi walk ya exercise aaj bahut faydemand rahegi.',
    'Khaane-peene me savdhani rakho — bahar ka khana avoid karo.',
    'Neend poori karo — thakaan door ho jayegi.',
    'Aaj stress kam lo — gehri saans aur meditation try karo.',
    'Energy high rahegi — iska sahi istemaal karo.',
  ];
  var COLORS = ['Laal', 'Peela', 'Hara', 'Neela', 'Safed', 'Kesariya', 'Gulabi', 'Aasmani'];

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
      '<p><strong>💼 Career/Paisa:</strong> ' + seededPick(CAREER, seed >> 3) + '</p>' +
      '<p><strong>🍀 Sehat:</strong> ' + seededPick(HEALTH, seed >> 6) + '</p>';
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
