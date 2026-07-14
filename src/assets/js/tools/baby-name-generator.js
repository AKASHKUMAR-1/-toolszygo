(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var esc = window.toolsdoEsc;

  var NAMES = {
    boy: {
      hindu: [['Aarav', 'Peaceful, wise'], ['Vihaan', 'Dawn, beginning of new era'], ['Reyansh', 'Ray of light'], ['Advait', 'Unique, one without a second'], ['Kabir', 'Great, powerful'], ['Arjun', 'Bright, shining, white'], ['Dhruv', 'Pole star, fixed/constant'], ['Ishaan', 'Sun, one direction'], ['Krishna', 'Dark, all-attractive'], ['Rudra', 'Fierce form of Shiva'], ['Shaurya', 'Bravery, valor'], ['Vivaan', 'Full of life, energetic']],
      muslim: [['Ayaan', 'Gift of God'], ['Zayn', 'Beauty, grace'], ['Rehan', 'Fragrant basil, sweet'], ['Imran', 'Prosperity, long life'], ['Yusuf', 'God increases'], ['Adeel', 'Just, fair'], ['Farhan', 'Happy, joyful'], ['Zaid', 'Growth, abundance']],
      sikh: [['Gurbaaz', 'One with the falcon-like guru'], ['Harman', 'One who wins hearts'], ['Jaspreet', 'One who loves virtue'], ['Manpreet', 'One who loves the mind/heart'], ['Simran', 'Meditation, remembrance of God'], ['Amanpreet', 'One who loves peace']],
      modern: [['Aryan', 'Noble, of Aryan descent'], ['Kian', 'King, ancient'], ['Zayan', 'Beautiful, graceful'], ['Neil', 'Champion, cloud'], ['Rian', 'Little king'], ['Vian', 'Full of life']],
    },
    girl: {
      hindu: [['Aanya', 'Inexhaustible, limitless'], ['Diya', 'Lamp, light'], ['Ishita', 'Desired, one who has mastery'], ['Kiara', 'Dark-haired, bright, princess'], ['Myra', 'Admirable, beautiful'], ['Saanvi', 'Goddess Lakshmi'], ['Anika', 'Grace, one face'], ['Riya', 'Singer, graceful'], ['Sara', 'Princess, pure'], ['Trisha', 'Thirst, desire'], ['Vanya', 'Gracious gift of God']],
      muslim: [['Aaliyah', 'Exalted, noble'], ['Ayesha', 'Alive, prosperous'], ['Fatima', 'Captivating, one who abstains'], ['Zara', 'Princess, blooming flower'], ['Amira', 'Princess, leader'], ['Sana', 'Brilliance, radiance'], ['Noor', 'Light']],
      sikh: [['Gurleen', 'Absorbed in the guru'], ['Harleen', 'Absorbed in God\'s love'], ['Jasleen', 'One absorbed in God\'s praise'], ['Simarpreet', 'One who loves meditation'], ['Manjot', 'Light of the mind']],
      modern: [['Aria', 'Melody, song, air'], ['Ivana', 'Gift of God'], ['Kyra', 'Sun, lord'], ['Zara', 'Princess, blossom'], ['Myra', 'Beautiful'], ['Nyra', 'Ray of light']],
    },
  };

  function fillLetters() {
    var gender = $('bn2-gender').value;
    var all = Object.values(NAMES[gender]).flat();
    var letters = Array.from(new Set(all.map(function (n) { return n[0][0]; }))).sort();
    $('bn2-letter').innerHTML = '<option value="">Koi bhi</option>' + letters.map(function (l) {
      return '<option value="' + l + '">' + l + '</option>';
    }).join('');
  }

  function generate() {
    var gender = $('bn2-gender').value;
    var letter = $('bn2-letter').value;
    var religion = $('bn2-religion').value;
    var pool = religion === 'all' ? Object.values(NAMES[gender]).flat() : (NAMES[gender][religion] || []);
    var filtered = letter ? pool.filter(function (n) { return n[0][0] === letter; }) : pool;
    // shuffle and take up to 15
    var shuffled = filtered.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 15);
    var box = $('bn2-results');
    if (!shuffled.length) {
      box.innerHTML = '<div style="color:#A39C8B;">No names found for this filter — try something else</div>';
      return;
    }
    box.innerHTML = shuffled.map(function (n) {
      return '<div style="background:#FFF;border:1px solid #EDE6DA;border-radius:10px;padding:10px 14px;">' +
        '<div style="font-family:var(--serif);font-size:16px;font-weight:600;color:#8A4B2A;">' + esc(n[0]) + '</div>' +
        '<div style="font-size:12.5px;color:#6E6552;">' + esc(n[1]) + '</div></div>';
    }).join('');
  }

  $('bn2-gender').addEventListener('change', function () { fillLetters(); generate(); });
  $('bn2-letter').addEventListener('change', generate);
  $('bn2-religion').addEventListener('change', generate);
  $('bn2-generate').addEventListener('click', generate);
  fillLetters();
  generate();
})();
