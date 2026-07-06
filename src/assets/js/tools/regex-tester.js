(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  var esc = window.toolsdoEsc;

  function run() {
    var pattern = $('rx-pattern').value;
    var text = $('rx-text').value;
    var status = $('rx-status');
    var highlight = $('rx-highlight');
    var matchesEl = $('rx-matches');
    if (!pattern || !text) {
      status.textContent = pattern ? 'Test text daalo' : 'Pattern daalo';
      status.style.color = '#A39C8B';
      highlight.innerHTML = '';
      matchesEl.innerHTML = '';
      return;
    }
    var flags = ($('rx-g').checked ? 'g' : '') + ($('rx-i').checked ? 'i' : '') + ($('rx-m').checked ? 'm' : '');
    var re;
    try {
      re = new RegExp(pattern, flags);
    } catch (e) {
      status.textContent = '✕ Invalid regex: ' + e.message;
      status.style.color = '#B84F4F';
      highlight.innerHTML = '';
      matchesEl.innerHTML = '';
      return;
    }
    var matches = [];
    var out = '';
    var last = 0;
    var m;
    if (flags.indexOf('g') !== -1) {
      var guard = 0;
      while ((m = re.exec(text)) !== null && guard < 10000) {
        matches.push(m);
        out += esc(text.slice(last, m.index)) + '<mark style="background:#F3E7D7;color:#8A4B2A;border-radius:3px;">' + esc(m[0] || '∅') + '</mark>';
        last = m.index + m[0].length;
        if (m[0] === '') re.lastIndex++;
        guard++;
      }
      out += esc(text.slice(last));
    } else {
      m = re.exec(text);
      if (m) {
        matches.push(m);
        out = esc(text.slice(0, m.index)) + '<mark style="background:#F3E7D7;color:#8A4B2A;border-radius:3px;">' + esc(m[0]) + '</mark>' + esc(text.slice(m.index + m[0].length));
      } else {
        out = esc(text);
      }
    }
    if (!matches.length) {
      status.textContent = 'Koi match nahi mila';
      status.style.color = '#B84F4F';
      highlight.innerHTML = esc(text);
      matchesEl.innerHTML = '';
      return;
    }
    status.textContent = '✓ ' + matches.length + ' match' + (matches.length > 1 ? 'es' : '') + ' mila';
    status.style.color = '#5D8A4E';
    highlight.innerHTML = out;
    matchesEl.innerHTML = matches.slice(0, 50).map(function (mm, idx) {
      var groups = '';
      if (mm.length > 1) {
        groups = ' — groups: ' + Array.prototype.slice.call(mm, 1).map(function (g, gi) {
          return '$' + (gi + 1) + '=' + esc(String(g));
        }).join(', ');
      }
      return '<div>' + (idx + 1) + '. "' + esc(mm[0]) + '" @ ' + mm.index + groups + '</div>';
    }).join('') + (matches.length > 50 ? '<div>… aur ' + (matches.length - 50) + ' matches</div>' : '');
  }

  ['rx-pattern', 'rx-text'].forEach(function (id) {
    $(id).addEventListener('input', run);
  });
  ['rx-g', 'rx-i', 'rx-m'].forEach(function (id) {
    $(id).addEventListener('change', run);
  });
})();
