module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">HTML Code</div>
    <div class="field">
      <textarea id="hp-input" placeholder="<h1>Hello</h1>&#10;<p>Apna HTML yahan paste karo…</p>" spellcheck="false" style="min-height:220px;font-family:monospace;font-size:13px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Preview</div>
    <div id="hp-preview" style="flex:1;min-height:220px;max-height:400px;border:1px solid #F0E0CC;border-radius:10px;background:#FFF;font-size:14px;line-height:1.6;color:#222;padding:16px;overflow:auto;">
      <span style="color:#B98E63;font-family:monospace;font-size:12px;">rendered preview yahan dikhega</span>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="hp-print">🖨 Save as PDF</button>
</div>`,
  howto: [
    'Apna HTML code paste karo — preview live render hota hai.',
    '<strong>Save as PDF</strong> dabao — print dialog khulega.',
    'Printer me "Save as PDF" choose karke save karo.',
  ],
  faq: [
    { q: 'CSS styles chalenge?', a: 'Haan — inline styles aur &lt;style&gt; tags dono render hote hain. External stylesheets (link tags) internet se load ho jaati hain agar available hon.' },
    { q: 'JavaScript wala HTML?', a: 'Security ke liye preview me scripts execute nahi hote — sirf static HTML/CSS render hota hai.' },
    { q: 'Poori website ka PDF kaise banau?', a: 'Us website ko browser me kholkar Ctrl+P dabao — wahi print-to-PDF sabse achha hai. Ye tool aapke apne HTML code ke liye hai.' },
  ],
};
