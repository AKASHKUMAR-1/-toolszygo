(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  var esc = window.toolsdoEsc;

  function inline(s) {
    return s
      .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1">')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
      .replace(/`([^`]+)`/g, function (m, c) { return '<code>' + c + '</code>'; })
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }

  function mdToHtml(md) {
    var lines = md.replace(/\r/g, '').split('\n');
    var html = [];
    var i = 0;
    var listType = null;

    function closeList() {
      if (listType) { html.push('</' + listType + '>'); listType = null; }
    }

    while (i < lines.length) {
      var line = lines[i];

      // code block
      if (/^```/.test(line)) {
        closeList();
        var code = [];
        i++;
        while (i < lines.length && !/^```/.test(lines[i])) { code.push(lines[i]); i++; }
        i++; // skip closing ```
        html.push('<pre><code>' + esc(code.join('\n')) + '</code></pre>');
        continue;
      }
      // heading
      var h = line.match(/^(#{1,6})\s+(.*)/);
      if (h) {
        closeList();
        var lvl = h[1].length;
        html.push('<h' + lvl + '>' + inline(esc(h[2])) + '</h' + lvl + '>');
        i++;
        continue;
      }
      // hr
      if (/^(---|\*\*\*|___)\s*$/.test(line)) {
        closeList();
        html.push('<hr>');
        i++;
        continue;
      }
      // blockquote
      if (/^>\s?/.test(line)) {
        closeList();
        var quote = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) {
          quote.push(lines[i].replace(/^>\s?/, ''));
          i++;
        }
        html.push('<blockquote>' + inline(esc(quote.join(' '))) + '</blockquote>');
        continue;
      }
      // unordered list
      if (/^\s*[-*+]\s+/.test(line)) {
        if (listType !== 'ul') { closeList(); html.push('<ul>'); listType = 'ul'; }
        html.push('<li>' + inline(esc(line.replace(/^\s*[-*+]\s+/, ''))) + '</li>');
        i++;
        continue;
      }
      // ordered list
      if (/^\s*\d+\.\s+/.test(line)) {
        if (listType !== 'ol') { closeList(); html.push('<ol>'); listType = 'ol'; }
        html.push('<li>' + inline(esc(line.replace(/^\s*\d+\.\s+/, ''))) + '</li>');
        i++;
        continue;
      }
      // blank
      if (!line.trim()) {
        closeList();
        i++;
        continue;
      }
      // paragraph (gather consecutive lines)
      closeList();
      var para = [line];
      i++;
      while (i < lines.length && lines[i].trim() && !/^(#{1,6}\s|>|```|[-*+]\s|\d+\.\s|---)/.test(lines[i])) {
        para.push(lines[i]);
        i++;
      }
      html.push('<p>' + inline(esc(para.join(' '))) + '</p>');
    }
    closeList();
    return html.join('\n');
  }

  var showingPreview = false;

  function convert() {
    var out = mdToHtml($('md-input').value);
    $('md-output').value = out;
    $('md-preview').innerHTML = out;
  }

  $('md-convert').addEventListener('click', convert);
  $('md-input').addEventListener('input', convert);
  $('md-toggle').addEventListener('click', function () {
    showingPreview = !showingPreview;
    $('md-output').style.display = showingPreview ? 'none' : '';
    $('md-preview').style.display = showingPreview ? '' : 'none';
    $('md-view-label').textContent = showingPreview ? 'Preview' : 'HTML Code';
    this.textContent = showingPreview ? '</> HTML dekho' : '👁 Preview dekho';
  });
  $('md-copy').addEventListener('click', function () {
    var t = $('md-output').value;
    if (t) toolsdoCopy(t, this);
  });
})();
