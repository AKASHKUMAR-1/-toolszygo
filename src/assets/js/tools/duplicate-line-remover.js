(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function run() {
    var lines = $('dl-input').value.split('\n');
    var caseIns = $('dl-case').checked;
    var trim = $('dl-trim').checked;
    var dropEmpty = $('dl-empty').checked;
    var sort = $('dl-sort').checked;

    var seen = {};
    var out = [];
    var removed = 0;
    lines.forEach(function (line) {
      var display = trim ? line.trim() : line;
      if (dropEmpty && display.trim() === '') { removed++; return; }
      var key = caseIns ? display.toLowerCase() : display;
      if (Object.prototype.hasOwnProperty.call(seen, key)) { removed++; return; }
      seen[key] = true;
      out.push(display);
    });
    if (sort) out.sort(function (a, b) { return a.localeCompare(b); });

    $('dl-output').value = out.join('\n');
    $('dl-summary').textContent = out.length.toLocaleString('en-IN') + ' unique lines bachi · ' +
      removed.toLocaleString('en-IN') + ' hatayi gayi';
  }

  $('dl-run').addEventListener('click', run);
  $('dl-copy').addEventListener('click', function () {
    var t = $('dl-output').value;
    if (t) toolsdoCopy(t, this);
  });
})();
