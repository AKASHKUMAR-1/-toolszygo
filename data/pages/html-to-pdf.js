module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">HTML Code</div>
    <div class="field">
      <textarea id="hp-input" placeholder="<h1>Hello</h1>&#10;<p>Paste your HTML here…</p>" spellcheck="false" style="min-height:220px;font-family:monospace;font-size:13px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Preview</div>
    <div id="hp-preview" style="flex:1;min-height:220px;max-height:400px;border:1px solid #F0E0CC;border-radius:10px;background:#FFF;font-size:14px;line-height:1.6;color:#222;padding:16px;overflow:auto;">
      <span style="color:#B98E63;font-family:monospace;font-size:12px;">rendered preview will appear here</span>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="hp-print">🖨 Save as PDF</button>
</div>`,
  howto: [
    'Paste your HTML code — the preview renders live.',
    'Click <strong>Save as PDF</strong> — the print dialog opens.',
    'Choose "Save as PDF" as the printer and save.',
  ],
  faq: [
    { q: 'Will CSS styles work?', a: 'Yes — both inline styles and &lt;style&gt; tags render. External stylesheets (link tags) load from the internet if available.' },
    { q: 'What about HTML with JavaScript?', a: 'For security, scripts don\'t execute in the preview — only static HTML/CSS renders.' },
    { q: 'How do I make a PDF of a whole website?', a: 'Open that website in your browser and press Ctrl+P — that\'s the best print-to-PDF method. This tool is for your own HTML code.' },
  ],
};
