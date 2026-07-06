module.exports = {
  libs: ['/assets/js/vendor/pdf.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pw2-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>PDF choose karo</strong> ya yahan drop karo</div>
      <div id="pw2-info" style="font-size:11.5px;">text-based PDF best kaam karti hai</div>
    </div>
    <input type="file" id="pw2-file" accept="application/pdf" style="display:none;">
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Extracted Text</div>
    <div id="pw2-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
    <textarea id="pw2-output" placeholder="PDF ka text yahan aayega — edit bhi kar sakte ho…" style="flex:1;min-height:220px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.6;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pw2-download" disabled>Download Word (.doc)</button>
  <button class="btn btn-secondary" id="pw2-copy">Copy text</button>
</div>`,
  howto: [
    'PDF file select karo — text automatically extract ho jayega.',
    'Text ko yahan edit bhi kar sakte ho.',
    '<strong>Download Word</strong> dabao — .doc file milegi jo MS Word/Google Docs me khulti hai.',
  ],
  faq: [
    { q: 'Kya formatting (tables, images) bhi aayegi?', a: 'Ye tool text extract karta hai — paragraphs aur line breaks aate hain, lekin complex formatting/images nahi. Zyada tar cases (letters, reports, notes) ke liye kaafi hai.' },
    { q: 'Scanned PDF se text niklega?', a: 'Nahi — scanned PDF me text nahi, image hoti hai. Uske liye hamara Image to Text (OCR) tool use karo.' },
    { q: 'Kya meri PDF upload hoti hai?', a: 'Nahi — extraction browser me pdf.js se hota hai. Confidential documents bhi safe hain.' },
  ],
};
