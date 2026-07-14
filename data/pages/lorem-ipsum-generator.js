module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Options</div>
    <div class="field-row">
      <div class="field">
        <label for="li-count">How many?</label>
        <input type="number" id="li-count" value="3" min="1" max="50" step="1">
      </div>
      <div class="field">
        <label for="li-type">Type</label>
        <select id="li-type">
          <option value="paragraphs" selected>Paragraphs</option>
          <option value="sentences">Sentences</option>
          <option value="words">Words</option>
        </select>
      </div>
    </div>
    <div class="checks">
      <label><input type="checkbox" id="li-start" checked> Start with "Lorem ipsum dolor sit amet…"</label>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <textarea id="li-result" readonly style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.6;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="li-generate">Generate text</button>
  <button class="btn btn-secondary" id="li-copy">Copy text</button>
</div>`,
  howto: [
    'Set how many paragraphs, sentences, or words you need.',
    'Choose whether to start with the classic "Lorem ipsum dolor…" using the checkbox.',
    'Click <strong>Generate</strong> and copy the text into your design/mockup.',
  ],
  faq: [
    { q: 'What is Lorem ipsum and where is it used?', a: 'Lorem ipsum has been the printing industry\'s standard dummy text since the 1500s. It\'s used as a placeholder in designs, websites, and mockups so attention stays on the layout, not the content.' },
    { q: 'Is this real Latin?', a: 'It\'s scrambled from Cicero\'s "De finibus bonorum et malorum" (45 BC) — it looks like Latin but isn\'t meaningful. That\'s exactly why it doesn\'t distract.' },
    { q: 'Why Lorem ipsum and not any random text?', a: 'With real text, people start reading the content and lose focus on the design. Lorem ipsum has a natural distribution of letters, so the layout looks realistic.' },
    { q: 'How much text can I generate?', a: 'Up to 50 paragraphs at once — generate again and append if you need more.' },
  ],
};
