module.exports = {
  libs: ['/assets/js/vendor/mammoth.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="wp-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>DOCX file choose karo</strong> ya yahan drop karo</div>
      <div id="wp-info" style="font-size:11.5px;">sirf .docx (naya Word format)</div>
    </div>
    <input type="file" id="wp-file" accept=".docx" style="display:none;">
    <div id="wp-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Preview</div>
    <div id="wp-preview" style="flex:1;min-height:220px;max-height:400px;border:1px solid #F0E0CC;border-radius:10px;background:#FFF;font-size:13.5px;line-height:1.6;color:#222;padding:16px;overflow:auto;">
      <span style="color:#B98E63;font-family:monospace;font-size:12px;">document preview yahan dikhega</span>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="wp-print" disabled>🖨 Save as PDF</button>
</div>`,
  howto: [
    'Apni .docx file select karo — preview turant dikhega.',
    '<strong>Save as PDF</strong> dabao — print dialog khulega.',
    'Printer me <strong>"Save as PDF"</strong> choose karke save kar lo.',
  ],
  faq: [
    { q: 'PDF kaise banti hai isme?', a: 'Document browser me render hota hai aur print dialog se "Save as PDF" karte ho — ye Chrome/Edge ka built-in high-quality PDF engine use karta hai, bilkul reliable.' },
    { q: 'Purani .doc file chalegi?', a: 'Nahi — sirf .docx (Word 2007+). Purani .doc ko pehle Word/Google Docs me kholkar .docx me save karo.' },
    { q: 'Formatting kitni sahi aati hai?', a: 'Headings, bold/italic, lists, tables aur images aate hain. Bahut complex layouts (columns, text boxes) simplified ho sakte hain.' },
  ],
};
