(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = null;
  var listening = false;
  var finalText = '';

  if (!SR) {
    $('stt-unsupported').style.display = '';
    $('stt-start').disabled = true;
    return;
  }

  function start() {
    if (listening) return;
    recognition = new SR();
    recognition.lang = $('stt-lang').value;
    recognition.continuous = true;
    recognition.interimResults = true;
    finalText = $('stt-output').value ? $('stt-output').value + ' ' : '';

    recognition.onstart = function () {
      listening = true;
      $('stt-status').textContent = '🔴 Listening… speak!';
      $('stt-status').style.color = '#B84F4F';
    };
    recognition.onresult = function (e) {
      var interim = '';
      for (var i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
          finalText += e.results[i][0].transcript + ' ';
        } else {
          interim += e.results[i][0].transcript;
        }
      }
      $('stt-output').value = finalText + interim;
    };
    recognition.onerror = function (e) {
      if (e.error === 'not-allowed') {
        $('stt-status').textContent = 'Mic permission needed — allow it in the browser';
      } else if (e.error === 'no-speech') {
        $('stt-status').textContent = 'Didn\'t catch anything — speak again';
      } else {
        $('stt-status').textContent = 'Error: ' + e.error;
      }
      $('stt-status').style.color = '#B84F4F';
    };
    recognition.onend = function () {
      if (listening) {
        // auto-restart (continuous listening across pauses)
        try { recognition.start(); } catch (e) { listening = false; }
      } else {
        $('stt-status').textContent = 'Mic band hai';
        $('stt-status').style.color = '#A39C8B';
      }
    };
    recognition.start();
  }

  function stop() {
    listening = false;
    if (recognition) recognition.stop();
    $('stt-status').textContent = 'Mic band hai';
    $('stt-status').style.color = '#A39C8B';
  }

  $('stt-start').addEventListener('click', start);
  $('stt-stop').addEventListener('click', stop);
  $('stt-lang').addEventListener('change', function () {
    if (listening) { stop(); setTimeout(start, 300); }
  });
  $('stt-copy').addEventListener('click', function () {
    var t = $('stt-output').value;
    if (t) toolsdoCopy(t, this);
  });
  $('stt-clear').addEventListener('click', function () {
    $('stt-output').value = '';
    finalText = '';
  });
})();
