(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var SMALL = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'of', 'on', 'in', 'to', 'at', 'by', 'as', 'is'];

  function capWord(w) {
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  }

  var convert = {
    upper: function (t) { return t.toUpperCase(); },
    lower: function (t) { return t.toLowerCase(); },
    capitalize: function (t) {
      return t.replace(/\S+/g, capWord);
    },
    title: function (t) {
      return t.split('\n').map(function (line) {
        var words = line.split(/(\s+)/); // keep whitespace tokens
        var wordIdx = -1;
        var lastWordPos = -1;
        words.forEach(function (w, i) { if (/\S/.test(w)) lastWordPos = i; });
        return words.map(function (w, i) {
          if (!/\S/.test(w)) return w;
          wordIdx++;
          var lower = w.toLowerCase();
          if (wordIdx !== 0 && i !== lastWordPos && SMALL.indexOf(lower.replace(/[^a-z]/g, '')) !== -1) return lower;
          return capWord(w);
        }).join('');
      }).join('\n');
    },
    sentence: function (t) {
      var lower = t.toLowerCase();
      return lower.replace(/(^\s*[a-z])|([.!?]\s+[a-z])|(\n\s*[a-z])/g, function (m) {
        return m.toUpperCase();
      });
    },
  };

  var buttons = document.querySelectorAll('[data-case]');
  Array.prototype.forEach.call(buttons, function (btn) {
    btn.addEventListener('click', function () {
      var mode = btn.getAttribute('data-case');
      $('tc-output').value = convert[mode]($('tc-input').value);
    });
  });
  $('tc-copy').addEventListener('click', function () {
    var t = $('tc-output').value;
    if (t) toolsdoCopy(t, this);
  });
})();
