(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function count() {
    var t = $('ew-text').value;
    var target = parseInt($('ew-target').value, 10) || 500;
    var trimmed = t.trim();
    var words = trimmed ? trimmed.split(/\s+/).length : 0;
    var chars = t.length;
    var paras = trimmed ? trimmed.split(/\n\s*\n+/).filter(function (p) { return p.trim(); }).length : 0;
    var remaining = target - words;
    var pct = Math.min(100, Math.round(words / target * 100));

    $('ew-words').textContent = words.toLocaleString('en-IN');
    $('ew-remaining').textContent = remaining >= 0 ? remaining.toLocaleString('en-IN') : '+' + Math.abs(remaining).toLocaleString('en-IN');
    $('ew-chars').textContent = chars.toLocaleString('en-IN');
    $('ew-paras').textContent = paras;
    $('ew-bar').style.width = pct + '%';

    var status = $('ew-status');
    if (words === 0) {
      status.textContent = '';
    } else if (remaining > 0) {
      status.textContent = pct + '% ho gaya — ' + remaining + ' words aur chahiye';
      status.style.color = '#A98423';
    } else if (remaining >= -Math.ceil(target * 0.1)) {
      status.textContent = '✓ Target ke andar/paas ho — perfect!';
      status.style.color = '#5D8A4E';
    } else {
      status.textContent = '⚠ Limit se ' + Math.abs(remaining) + ' words zyada — kaat-chhaant karo';
      status.style.color = '#B84F4F';
    }
  }

  $('ew-text').addEventListener('input', count);
  $('ew-target').addEventListener('input', count);
  count();
})();
