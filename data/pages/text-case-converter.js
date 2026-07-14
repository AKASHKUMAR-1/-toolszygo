module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="tc-input" placeholder="Paste your text here…" style="min-height:200px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <textarea id="tc-output" readonly placeholder="converted text will appear here…" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.5;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" data-case="upper">UPPERCASE</button>
  <button class="btn btn-primary" data-case="lower">lowercase</button>
  <button class="btn btn-primary" data-case="title">Title Case</button>
  <button class="btn btn-primary" data-case="sentence">Sentence case</button>
  <button class="btn btn-primary" data-case="capitalize">Capitalize Each Word</button>
  <button class="btn btn-secondary" id="tc-copy">Copy result</button>
</div>`,
  howto: [
    'Paste your text in the input box.',
    'Click the button for the case you want — UPPERCASE, lowercase, Title Case, Sentence case, or Capitalize Each Word.',
    'Use "Copy result" to copy the converted text.',
  ],
  faq: [
    { q: 'What\'s the difference between Title Case and Capitalize Each Word?', a: 'Capitalize Each Word capitalizes the first letter of every word. Title Case keeps small words (a, an, the, of, in…) lowercase — as in book titles. The first and last words are always capitalized.' },
    { q: 'How does Sentence case work?', a: 'The first letter of each sentence is capitalized, the rest lowercase. Sentences are detected after ., !, or ?.' },
    { q: 'Does it work on non-English text?', a: 'Case only applies to scripts that have upper/lowercase (English, European languages). Scripts like Devanagari have no case, so that text stays unchanged.' },
    { q: 'Is formatting (line breaks) preserved?', a: 'Yes — only the case of letters changes; line breaks and spacing stay exactly the same.' },
  ],
};
