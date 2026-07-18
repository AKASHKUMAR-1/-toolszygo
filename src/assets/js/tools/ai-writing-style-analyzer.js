(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  var GENERIC_PHRASES = [
    'moreover', 'furthermore', 'in conclusion', 'in summary', 'it is important to note',
    'it is worth noting', 'additionally', 'overall', 'on the other hand', 'as a result',
    "in today's world", "in today's fast-paced world", 'in this article', 'in this blog post',
    'dive into', 'delve into', "let's explore", 'unlock the power of', 'unlock the potential',
    'in the realm of', 'navigate the complexities', 'navigate the world of', 'plays a crucial role',
    'plays a vital role', 'cannot be overstated', 'game changer', 'game-changer',
    'testament to', 'a rich tapestry', 'ever-evolving', 'ever changing landscape',
    'in the digital age', 'in the fast-paced world', 'when it comes to', 'at the end of the day',
    "it's important to remember", 'stands as a', 'serves as a', 'in an increasingly',
  ];

  function splitSentences(text) {
    return text.replace(/\s+/g, ' ').trim().split(/(?<=[.!?])\s+(?=[A-Z0-9"'])/).filter(function (s) {
      return s.trim().length > 0;
    });
  }

  function wordsOf(s) {
    var m = s.toLowerCase().match(/[a-z0-9']+/g);
    return m || [];
  }

  function mean(arr) {
    return arr.reduce(function (a, b) { return a + b; }, 0) / arr.length;
  }

  function stdDev(arr, avg) {
    var variance = arr.reduce(function (a, b) { return a + (b - avg) * (b - avg); }, 0) / arr.length;
    return Math.sqrt(variance);
  }

  function findRepeatedTrigrams(words) {
    var counts = {};
    for (var i = 0; i < words.length - 2; i++) {
      var tri = words[i] + ' ' + words[i + 1] + ' ' + words[i + 2];
      counts[tri] = (counts[tri] || 0) + 1;
    }
    var repeated = 0;
    for (var key in counts) {
      if (counts[key] > 1) repeated++;
    }
    return repeated;
  }

  function analyze() {
    var text = $('wa-input').value;
    var sentences = splitSentences(text);
    var allWords = wordsOf(text);

    if (allWords.length < 30 || sentences.length < 3) {
      $('wa-summary').textContent = 'Please paste at least a few sentences (30+ words) for a meaningful reading.';
      ['wa-burstiness', 'wa-repetition', 'wa-transitions', 'wa-vocab', 'wa-avglen'].forEach(function (id) { $(id).textContent = '—'; });
      $('wa-details').innerHTML = '';
      return;
    }

    var sentLengths = sentences.map(function (s) { return wordsOf(s).length; }).filter(function (n) { return n > 0; });
    var avgLen = mean(sentLengths);
    var sd = stdDev(sentLengths, avgLen);
    var burstiness = avgLen > 0 ? sd / avgLen : 0;

    var repeatedTrigrams = findRepeatedTrigrams(allWords);

    var lowerText = text.toLowerCase();
    var transitionHits = 0;
    var foundPhrases = [];
    GENERIC_PHRASES.forEach(function (p) {
      var re = new RegExp('\\b' + p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
      var m = lowerText.match(re);
      if (m) { transitionHits += m.length; foundPhrases.push(p + ' (' + m.length + '×)'); }
    });

    var uniqueWords = {};
    allWords.forEach(function (w) { uniqueWords[w] = true; });
    var vocabRatio = Object.keys(uniqueWords).length / allWords.length;

    var burstinessLabel = burstiness > 0.5 ? 'High (varied — a common human-writing pattern)' :
      burstiness > 0.3 ? 'Moderate' : 'Low (uniform sentence lengths)';
    var vocabLabel = vocabRatio > 0.55 ? 'High' : vocabRatio > 0.4 ? 'Moderate' : 'Low (repetitive vocabulary)';

    $('wa-burstiness').textContent = (Math.round(burstiness * 100) / 100) + ' — ' + burstinessLabel;
    $('wa-repetition').textContent = repeatedTrigrams + (repeatedTrigrams === 1 ? ' phrase repeated' : ' phrases repeated');
    $('wa-transitions').textContent = transitionHits + ' found';
    $('wa-vocab').textContent = (Math.round(vocabRatio * 1000) / 10) + '% — ' + vocabLabel;
    $('wa-avglen').textContent = (Math.round(avgLen * 10) / 10) + ' words/sentence';

    $('wa-summary').textContent = 'Analyzed ' + allWords.length + ' words across ' + sentences.length + ' sentences.';

    var details = [];
    if (foundPhrases.length) {
      details.push('<strong>Generic phrases found:</strong> ' + foundPhrases.slice(0, 8).join(', ') + (foundPhrases.length > 8 ? '…' : ''));
    }
    details.push('<strong>Remember:</strong> these are stylistic signals, not proof of anything. Well-edited AI text and heavily-formal human writing can both score "AI-like" here — use this as one small data point, not a verdict.');
    $('wa-details').innerHTML = details.join('<br><br>');
  }

  $('wa-analyze').addEventListener('click', analyze);
})();
