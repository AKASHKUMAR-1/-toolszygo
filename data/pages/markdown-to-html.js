module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Markdown Input</div>
    <div class="field">
      <textarea id="md-input" placeholder="# Heading&#10;&#10;This is **bold** and this is *italic*.&#10;&#10;- List item&#10;- [Link](https://example.com)" spellcheck="false" style="min-height:220px;font-family:monospace;font-size:13px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label"><span id="md-view-label">HTML Code</span></div>
    <textarea id="md-output" readonly spellcheck="false" style="flex:1;min-height:220px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:12.5px;color:#3D3929;padding:12px;resize:vertical;"></textarea>
    <div id="md-preview" style="display:none;flex:1;min-height:220px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:14px;line-height:1.6;color:#3D3929;padding:14px;overflow:auto;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="md-convert">Convert</button>
  <button class="btn btn-secondary" id="md-toggle">👁 View preview</button>
  <button class="btn btn-secondary" id="md-copy">Copy HTML</button>
</div>`,
  howto: [
    'Paste or write Markdown text.',
    'Click <strong>Convert</strong> — get the HTML code.',
    'Use "View preview" to check the rendered output, then copy the HTML.',
  ],
  faq: [
    { q: 'Which Markdown features are supported?', a: 'Headings (#), bold (**), italic (*), inline code (\`), code blocks (\`\`\`), links, images, bullet/numbered lists, blockquotes (>), horizontal rules (---), and paragraphs. Tables aren\'t supported yet.' },
    { q: 'What is Markdown?', a: 'A simple way to write formatting in plain text — # for a heading, ** for bold. Used across GitHub, Reddit, Discord, and documentation.' },
    { q: 'Can I use this HTML in WordPress?', a: 'Yes — paste it into the WordPress editor\'s "Custom HTML" block. Works in Blogger and email templates too.' },
    { q: 'Can HTML be converted back to Markdown?', a: 'This tool only does MD→HTML. The reverse would need a separate tool — let us know if you need it, we\'ll add it.' },
  ],
};
