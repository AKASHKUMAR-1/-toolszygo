(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var SAMPLES = [
    'The quick brown fox jumps over the lazy dog while the sun sets behind the tall mountains and birds return to their nests for the night.',
    'Success is not final and failure is not fatal because it is the courage to continue that truly counts in every walk of life and work.',
    'India is a land of diverse cultures and languages where people from different backgrounds live together and celebrate festivals with great joy.',
    'Technology has changed the way we live and work today as computers and mobile phones connect people across the world in just a few seconds.',
    'Reading books every day improves your knowledge and vocabulary while regular practice of typing makes you faster and more accurate at work.',
    'A healthy lifestyle includes eating fresh fruits and vegetables along with daily exercise and proper sleep of at least seven to eight hours.',
  ];
  var sample = '';
  var started = false;
  var timeLeft = 60;
  var timer = null;

  function newTest() {
    sample = SAMPLES[Math.floor(Math.random() * SAMPLES.length)];
    $('tst-sample').textContent = sample;
    $('tst-input').value = '';
    $('tst-input').disabled = false;
    started = false;
    timeLeft = 60;
    if (timer) clearInterval(timer);
    timer = null;
    $('tst-timer').textContent = '60';
    $('tst-wpm').textContent = '0';
    $('tst-accuracy').textContent = '100%';
    $('tst-chars').textContent = '0';
    $('tst-verdict').textContent = '';
    $('tst-input').focus();
  }

  function stats() {
    var typed = $('tst-input').value;
    var correct = 0;
    for (var i = 0; i < typed.length; i++) {
      if (typed[i] === sample[i]) correct++;
    }
    var elapsed = 60 - timeLeft;
    var minutes = Math.max(elapsed, 1) / 60;
    var wpm = Math.round((correct / 5) / minutes);
    var accuracy = typed.length ? Math.round(correct / typed.length * 100) : 100;
    $('tst-wpm').textContent = wpm;
    $('tst-accuracy').textContent = accuracy + '%';
    $('tst-chars').textContent = typed.length;
    return { wpm: wpm, accuracy: accuracy };
  }

  function finish() {
    clearInterval(timer);
    timer = null;
    $('tst-input').disabled = true;
    var s = stats();
    var verdict = s.wpm >= 70 ? 'Excellent! Professional-level typing! 🏆'
      : s.wpm >= 50 ? 'Very good speed! 👏'
      : s.wpm >= 35 ? 'Above average — practice will push it higher 👍'
      : 'Practice daily — your speed will surely improve 💪';
    $('tst-verdict').textContent = 'Final: ' + s.wpm + ' WPM @ ' + s.accuracy + '% accuracy. ' + verdict;
  }

  $('tst-input').addEventListener('input', function () {
    if (!started) {
      started = true;
      timer = setInterval(function () {
        timeLeft--;
        $('tst-timer').textContent = timeLeft;
        if (timeLeft <= 0) finish();
      }, 1000);
    }
    stats();
    if ($('tst-input').value.length >= sample.length) finish();
  });
  $('tst-input').addEventListener('paste', function (e) { e.preventDefault(); });
  $('tst-restart').addEventListener('click', newTest);
  newTest();
})();
