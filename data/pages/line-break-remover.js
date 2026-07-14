module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="lb-input" placeholder="Paste text copied from a PDF or email here…" style="min-height:200px;"></textarea>
    </div>
    <div class="field">
      <label for="lb-mode">Mode</label>
      <select id="lb-mode">
        <option value="space" selected>Replace line breaks with a space</option>
        <option value="none">Remove line breaks completely (join)</option>
        <option value="para">Keep paragraphs, remove breaks inside them</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <textarea id="lb-output" readonly placeholder="clean text will appear here…" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.5;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="lb-run">Remove line breaks</button>
  <button class="btn btn-secondary" id="lb-copy">Copy result</button>
</div>`,
  howto: [
    'Paste text copied from a PDF, email, or anywhere.',
    'Choose a mode — turn all breaks into spaces, remove them entirely, or keep paragraphs and remove breaks inside them.',
    'Click <strong>Remove line breaks</strong> and copy the clean text.',
  ],
  faq: [
    { q: 'Why does every line have a break when copying from a PDF?', a: 'PDFs store text visually in lines, so copying adds a newline after every visual line. This tool removes those unwanted breaks to create natural flowing text.' },
    { q: 'How does "keep paragraphs" mode work?', a: 'Two or more consecutive line breaks (a blank line) are treated as a paragraph boundary — those are preserved. Only single breaks inside a paragraph become spaces.' },
    { q: 'Will this create double spaces?', a: 'No — after replacing, the tool collapses multiple spaces into a single space.' },
    { q: 'Will formatting stay correct when pasting into Word/Docs?', a: 'Yes — the output is plain text, so you can paste it anywhere and the destination\'s formatting will apply.' },
  ],
};
