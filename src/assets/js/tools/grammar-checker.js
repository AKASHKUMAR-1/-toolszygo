(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var esc = window.toolsdoEsc;
  var MISSPELL = {
    recieve: 'receive', seperate: 'separate', definately: 'definitely', occured: 'occurred',
    untill: 'until', wich: 'which', becuase: 'because', beleive: 'believe', freind: 'friend',
    goverment: 'government', enviroment: 'environment', tommorow: 'tomorrow', truely: 'truly',
    alot: 'a lot', thier: 'their', teh: 'the', adress: 'address', calender: 'calendar',
    embarass: 'embarrass', existance: 'existence', occassion: 'occasion', succesful: 'successful',
  };

  function check() {
    var text = $('gc-input').value;
    var issues = [];
    if (!text.trim()) {
      $('gc-summary').textContent = 'Paste text first';
      $('gc-issues').innerHTML = '';
      return;
    }
    // repeated words
    var re = /\b(\w+)\s+\1\b/gi;
    var m;
    while ((m = re.exec(text)) !== null) {
      issues.push({ type: 'Repeated word', found: m[0], fix: m[1] });
    }
    // lowercase standalone i
    var reI = /(^|[^\w])i([^\w]|$)/g;
    while ((m = reI.exec(text)) !== null) {
      issues.push({ type: 'Lowercase "i"', found: '… i …', fix: 'I (capital)' });
      break; // report once
    }
    // sentence not starting with capital
    var sentences = text.split(/(?<=[.!?])\s+/);
    sentences.forEach(function (s) {
      var first = s.trim().charAt(0);
      if (first && /[a-z]/.test(first)) {
        issues.push({ type: 'Capital missing', found: s.trim().slice(0, 30) + '…', fix: 'Start the sentence with a capital letter' });
      }
    });
    // double spaces
    if (/  +/.test(text)) issues.push({ type: 'Double space', found: 'multiple spaces in the text', fix: 'Use a single space' });
    // space before punctuation
    if (/\s+[,.!?;:]/.test(text)) issues.push({ type: 'Space before punctuation', found: 'e.g. "word ,"', fix: 'Remove the space before punctuation' });
    // missing space after comma
    var reC = /,(?=[A-Za-z])/g;
    if (reC.test(text)) issues.push({ type: 'No space after comma', found: 'e.g. "word,next"', fix: 'Add a space after the comma' });
    // misspellings
    Object.keys(MISSPELL).forEach(function (bad) {
      var rx = new RegExp('\\b' + bad + '\\b', 'gi');
      if (rx.test(text)) issues.push({ type: 'Spelling', found: bad, fix: MISSPELL[bad] });
    });
    // multiple punctuation
    if (/[!?]{2,}/.test(text)) issues.push({ type: 'Multiple punctuation', found: '!! or ??', fix: 'One is enough in formal writing' });

    if (!issues.length) {
      $('gc-summary').textContent = '✓ No common mistakes found — great!';
      $('gc-summary').style.color = '#5D8A4E';
      $('gc-issues').innerHTML = '';
      return;
    }
    $('gc-summary').textContent = issues.length + ' issue' + (issues.length > 1 ? 's' : '') + ' mile:';
    $('gc-summary').style.color = '#B84F4F';
    $('gc-issues').innerHTML = issues.slice(0, 40).map(function (i) {
      return '<div style="background:#FFF;border:1px solid #EDE6DA;border-radius:8px;padding:8px 12px;">' +
        '<strong style="color:#B84F4F;">' + i.type + ':</strong> ' + esc(i.found) +
        ' <span style="color:#5D8A4E;">→ ' + esc(i.fix) + '</span></div>';
    }).join('');
  }

  $('gc-check').addEventListener('click', check);
})();
