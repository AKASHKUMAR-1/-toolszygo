(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function minifyCSS(code) {
    return code
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\s+/g, ' ')
      .replace(/\s*([{}:;,>~+])\s*/g, '$1')
      .replace(/;}/g, '}')
      .trim();
  }

  function minifyJS(code) {
    // conservative: strip comments + collapse blank lines/indentation (keeps line breaks for ASI safety)
    var out = '';
    var i = 0;
    var inStr = null;
    var inLineComment = false;
    var inBlockComment = false;
    var inRegexHint = false;
    while (i < code.length) {
      var c = code[i], n = code[i + 1];
      if (inLineComment) {
        if (c === '\n') { inLineComment = false; out += c; }
        i++;
        continue;
      }
      if (inBlockComment) {
        if (c === '*' && n === '/') { inBlockComment = false; i += 2; }
        else i++;
        continue;
      }
      if (inStr) {
        out += c;
        if (c === '\\') { out += n || ''; i += 2; continue; }
        if (c === inStr) inStr = null;
        i++;
        continue;
      }
      if (c === '"' || c === "'" || c === '`') { inStr = c; out += c; i++; continue; }
      if (c === '/' && n === '/') { inLineComment = true; i += 2; continue; }
      if (c === '/' && n === '*') { inBlockComment = true; i += 2; continue; }
      out += c;
      i++;
    }
    return out
      .split('\n')
      .map(function (l) { return l.trim(); })
      .filter(function (l) { return l !== ''; })
      .join('\n');
  }

  function minifyHTML(code) {
    // preserve pre/textarea blocks
    var stash = [];
    code = code.replace(/<(pre|textarea)[\s\S]*?<\/\1>/gi, function (m) {
      stash.push(m);
      return '___STASH' + (stash.length - 1) + '___';
    });
    code = code
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/>\s+</g, '><')
      .replace(/\s{2,}/g, ' ')
      .trim();
    stash.forEach(function (s, i) {
      code = code.replace('___STASH' + i + '___', s);
    });
    return code;
  }

  var fmtSize = window.toolsdoFmtSize;

  function run() {
    var input = $('min-input').value;
    if (!input.trim()) return;
    var type = $('min-type').value;
    var out = type === 'css' ? minifyCSS(input) : type === 'js' ? minifyJS(input) : minifyHTML(input);
    $('min-output').value = out;
    var origSize = new Blob([input]).size;
    var newSize = new Blob([out]).size;
    var saved = origSize ? Math.round((1 - newSize / origSize) * 100) : 0;
    $('min-stats').textContent = '✓ ' + fmtSize(origSize) + ' → ' + fmtSize(newSize) + ' (' + saved + '% chhota)';
  }

  $('min-run').addEventListener('click', run);
  $('min-copy').addEventListener('click', function () {
    var t = $('min-output').value;
    if (t) toolsdoCopy(t, this);
  });
})();
