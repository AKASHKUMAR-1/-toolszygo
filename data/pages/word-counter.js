module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="wc-text" placeholder="Paste or type your text here…" style="min-height:220px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="stat-grid">
      <div class="stat"><div class="num" id="wc-words">0</div><div class="lbl">Words</div></div>
      <div class="stat"><div class="num" id="wc-chars">0</div><div class="lbl">Characters</div></div>
      <div class="stat"><div class="num" id="wc-chars-ns">0</div><div class="lbl">Chars (no spaces)</div></div>
      <div class="stat"><div class="num" id="wc-sentences">0</div><div class="lbl">Sentences</div></div>
      <div class="stat"><div class="num" id="wc-paras">0</div><div class="lbl">Paragraphs</div></div>
      <div class="stat"><div class="num" id="wc-read">0 min</div><div class="lbl">Reading time</div></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="wc-clear">Clear text</button>
</div>`,
  howto: [
    'Paste or type your text in the box above.',
    'Words, characters, sentences, paragraphs, and reading time update live.',
    'Click "Clear text" to check new text.',
  ],
  faq: [
    { q: 'How is reading time calculated?', a: 'Assuming an average reading speed of 200 words per minute: reading time = words ÷ 200. This is a standard estimate used for blogs and articles.' },
    { q: 'Is my text uploaded anywhere?', a: 'No. Text is counted entirely in your browser — no data is sent to any server, so it\'s safe for confidential documents too.' },
    { q: 'How are hyphenated words counted?', a: 'Anything separated by a space counts as one word — "state-of-the-art" counts as one word, just like in MS Word.' },
    { q: 'Is there a character limit?', a: 'No limit — you can paste long essays, articles, and even book chapters.' },
  ],
};
