module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="gc-input" placeholder="Paste your English text here…" style="min-height:220px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Issues</div>
    <div id="gc-summary" style="font-size:13px;font-weight:600;"></div>
    <div id="gc-issues" style="display:flex;flex-direction:column;gap:8px;font-size:13px;overflow:auto;max-height:320px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="gc-check">Check grammar</button>
</div>`,
  howto: [
    'Paste your English text.',
    'Click <strong>Check grammar</strong> — a list of common mistakes appears.',
    'Each issue comes with a suggestion — fix the text and check again.',
  ],
  faq: [
    { q: 'What does this check for?', a: 'Repeated words (the the), lowercase "i", sentences not starting with a capital, double spaces, space before punctuation, common confusions (your/you\'re, its/it\'s patterns), and very common misspellings.' },
    { q: 'Is this like Grammarly?', a: 'No — this is a basic rule-based checker that catches common mistakes. Deep grammar (tense, prepositions) needs AI tools. For a quick check, this is fast and private.' },
    { q: 'Will this check non-English text?', a: 'No — the rules are for English. Non-English text will only get the spacing/punctuation checks.' },
  ],
};
