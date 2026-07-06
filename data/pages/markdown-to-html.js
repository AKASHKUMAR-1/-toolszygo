module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Markdown Input</div>
    <div class="field">
      <textarea id="md-input" placeholder="# Heading&#10;&#10;Ye **bold** hai aur ye *italic*.&#10;&#10;- List item&#10;- [Link](https://example.com)" spellcheck="false" style="min-height:220px;font-family:monospace;font-size:13px;"></textarea>
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
  <button class="btn btn-secondary" id="md-toggle">👁 Preview dekho</button>
  <button class="btn btn-secondary" id="md-copy">Copy HTML</button>
</div>`,
  howto: [
    'Markdown text paste karo ya likho.',
    '<strong>Convert</strong> dabao — HTML code mil jayega.',
    '"Preview dekho" se rendered output check karo, phir HTML copy karo.',
  ],
  faq: [
    { q: 'Kaunse Markdown features supported hain?', a: 'Headings (#), bold (**), italic (*), inline code (\`), code blocks (\`\`\`), links, images, bullet/numbered lists, blockquotes (>), horizontal rules (---) aur paragraphs. Tables abhi supported nahi hain.' },
    { q: 'Markdown kya hota hai?', a: 'Plain text me formatting likhne ka simple tarika — # heading ke liye, ** bold ke liye. GitHub, Reddit, Discord, documentation sab me use hota hai.' },
    { q: 'Ye HTML WordPress me use kar sakta hoon?', a: 'Haan — WordPress editor ke "Custom HTML" block me paste kar do. Blogger, email templates me bhi chalega.' },
    { q: 'Kya HTML wapas Markdown me convert hota hai?', a: 'Ye tool sirf MD→HTML karta hai. Ulta karne ke liye alag tool chahiye hoga — zaroorat ho to batao, add kar denge.' },
  ],
};
