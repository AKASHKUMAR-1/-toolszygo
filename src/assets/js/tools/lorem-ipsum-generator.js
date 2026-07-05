(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  var WORDS = ('lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
    'enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in ' +
    'reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa ' +
    'qui officia deserunt mollit anim id est laborum perspiciatis unde omnis iste natus error voluptatem accusantium doloremque ' +
    'laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis quasi architecto beatae vitae dicta explicabo nemo ' +
    'ipsam quia voluptas aspernatur aut odit fugit consequuntur magni dolores eos ratione sequi nesciunt neque porro quisquam').split(' ');

  var CLASSIC = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  function rand(n) { return Math.floor(Math.random() * n); }
  function word() { return WORDS[rand(WORDS.length)]; }

  function sentence() {
    var len = 8 + rand(9); // 8–16 words
    var w = [];
    for (var i = 0; i < len; i++) w.push(word());
    var s = w.join(' ');
    // sprinkle a comma in longer sentences
    if (len > 11) {
      var parts = s.split(' ');
      parts[Math.floor(len / 2)] += ',';
      s = parts.join(' ');
    }
    return s.charAt(0).toUpperCase() + s.slice(1) + '.';
  }

  function paragraph() {
    var len = 4 + rand(4); // 4–7 sentences
    var out = [];
    for (var i = 0; i < len; i++) out.push(sentence());
    return out.join(' ');
  }

  function generate() {
    var count = Math.min(50, Math.max(1, parseInt($('li-count').value, 10) || 1));
    var type = $('li-type').value;
    var startClassic = $('li-start').checked;
    var result;
    if (type === 'words') {
      var w = [];
      for (var i = 0; i < count; i++) w.push(word());
      result = w.join(' ');
      if (startClassic) result = 'Lorem ipsum dolor sit amet ' + result;
    } else if (type === 'sentences') {
      var s = [];
      for (var j = 0; j < count; j++) s.push(sentence());
      if (startClassic) s[0] = CLASSIC;
      result = s.join(' ');
    } else {
      var p = [];
      for (var k = 0; k < count; k++) p.push(paragraph());
      if (startClassic) p[0] = CLASSIC + ' ' + p[0];
      result = p.join('\n\n');
    }
    $('li-result').value = result;
  }

  $('li-generate').addEventListener('click', generate);
  ['li-count', 'li-type', 'li-start'].forEach(function (id) {
    $(id).addEventListener('change', generate);
  });
  $('li-copy').addEventListener('click', function () {
    var t = $('li-result').value;
    if (t) toolsdoCopy(t, this);
  });
  generate();
})();
