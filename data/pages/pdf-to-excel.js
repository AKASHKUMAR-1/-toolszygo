module.exports = {
  libs: ['/assets/js/vendor/pdf.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pe-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>PDF choose karo</strong> ya yahan drop karo</div>
      <div id="pe-info" style="font-size:11.5px;">simple tables wali PDF best kaam karti hai</div>
    </div>
    <input type="file" id="pe-file" accept="application/pdf" style="display:none;">
    <div id="pe-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Extracted Data (CSV)</div>
    <textarea id="pe-output" placeholder="table data yahan aayega — edit kar sakte ho…" spellcheck="false" style="flex:1;min-height:220px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:12.5px;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pe-download" disabled>Download CSV (Excel me khulega)</button>
  <button class="btn btn-secondary" id="pe-copy">Copy data</button>
</div>`,
  howto: [
    'Table wali PDF select karo — data rows/columns me extract hoga.',
    'CSV preview check karo, chaho to edit karo.',
    '<strong>Download CSV</strong> dabao — file seedha Excel me khul jayegi.',
  ],
  faq: [
    { q: 'Kaunsi PDFs best kaam karti hain?', a: 'Simple, saaf tables wali text-based PDFs (bank statements, mark lists, price lists). Complex merged-cell tables me columns aage-peeche ho sakte hain — Excel me thoda adjust karna pad sakta hai.' },
    { q: 'Scanned PDF ka table niklega?', a: 'Nahi — scanned pages images hoti hain. Pehle OCR tool se text nikalo.' },
    { q: 'Columns kaise detect hote hain?', a: 'Har text ki position (x/y coordinates) se rows aur columns ka andaza lagaya jaata hai — text ke beech ke gaps column boundaries bante hain.' },
  ],
};
