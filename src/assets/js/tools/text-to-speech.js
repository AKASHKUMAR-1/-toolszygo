(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var synth = window.speechSynthesis;
  var voices = [];

  function loadVoices() {
    voices = synth ? synth.getVoices() : [];
    if (!voices.length) return;
    // prefer Indian voices first
    voices.sort(function (a, b) {
      var score = function (v) {
        if (/hi-IN/i.test(v.lang)) return 0;
        if (/en-IN/i.test(v.lang)) return 1;
        if (/^en/i.test(v.lang)) return 2;
        return 3;
      };
      return score(a) - score(b);
    });
    $('tts-voice').innerHTML = voices.map(function (v, i) {
      return '<option value="' + i + '">' + v.name + ' (' + v.lang + ')</option>';
    }).join('');
  }

  if (!synth) {
    $('tts-status').textContent = '⚠ Browser TTS support nahi karta';
  } else {
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  $('tts-rate').addEventListener('input', function () {
    $('tts-rate-val').textContent = this.value;
  });
  $('tts-pitch').addEventListener('input', function () {
    $('tts-pitch-val').textContent = this.value;
  });

  $('tts-speak').addEventListener('click', function () {
    if (!synth) return;
    var text = $('tts-text').value.trim();
    if (!text) {
      $('tts-status').textContent = 'Pehle kuch likho!';
      return;
    }
    synth.cancel();
    var u = new SpeechSynthesisUtterance(text);
    var vi = parseInt($('tts-voice').value, 10);
    if (voices[vi]) u.voice = voices[vi];
    u.rate = parseFloat($('tts-rate').value);
    u.pitch = parseFloat($('tts-pitch').value);
    u.onstart = function () { $('tts-status').textContent = 'Bol raha hoon… 🗣'; };
    u.onend = function () { $('tts-status').textContent = 'Ho gaya ✓'; };
    u.onerror = function () { $('tts-status').textContent = 'Error aa gaya — dobara try karo'; };
    synth.speak(u);
  });

  $('tts-pause').addEventListener('click', function () {
    if (!synth) return;
    if (synth.paused) {
      synth.resume();
      $('tts-status').textContent = 'Bol raha hoon… 🗣';
      this.textContent = '⏸ Pause';
    } else if (synth.speaking) {
      synth.pause();
      $('tts-status').textContent = 'Paused ⏸';
      this.textContent = '▶ Resume';
    }
  });

  $('tts-stop').addEventListener('click', function () {
    if (!synth) return;
    synth.cancel();
    $('tts-status').textContent = 'Ready 🔊';
    $('tts-pause').textContent = '⏸ Pause';
  });
})();
