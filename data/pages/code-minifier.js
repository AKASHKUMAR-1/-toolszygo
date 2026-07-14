module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="min-type">Code Type</label>
      <select id="min-type">
        <option value="css" selected>CSS</option>
        <option value="js">JavaScript</option>
        <option value="html">HTML</option>
      </select>
    </div>
    <div class="field">
      <textarea id="min-input" placeholder="Paste your code here…" spellcheck="false" style="min-height:200px;font-family:monospace;font-size:13px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Minified Output</div>
    <div id="min-stats" style="font-size:13px;font-weight:600;color:#5D8A4E;"></div>
    <textarea id="min-output" readonly spellcheck="false" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:12.5px;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="min-run">Minify code</button>
  <button class="btn btn-secondary" id="min-copy">Copy result</button>
</div>`,
  howto: [
    'Choose the code type — CSS, JavaScript, or HTML.',
    'Paste your code.',
    'Click <strong>Minify</strong> — comments and extra whitespace are removed, and you\'ll see the size saved.',
  ],
  faq: [
    { q: 'What are the benefits of minifying?', a: 'File size drops 20–60% — pages load faster, which is good for both SEO and user experience. The browser doesn\'t need formatted code.' },
    { q: 'Can minified code change behavior?', a: 'This tool does safe minification — it removes comments and whitespace, not variable names. Still, test JS edge cases involving ASI (missing semicolons). For production builds, you might also look at tools like Terser/cssnano.' },
    { q: 'How do I make minified code readable again?', a: 'This is one-way — keep the original safely. If you need the formatted version back, use a "beautifier" tool.' },
    { q: 'What does HTML minifying do?', a: 'It removes HTML comments and extra whitespace between tags. Content inside &lt;pre&gt; and &lt;textarea&gt; is preserved.' },
  ],
};
