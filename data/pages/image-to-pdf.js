module.exports = {
  libs: ['/assets/js/vendor/pdf-lib.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="ip-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Images choose karo</strong> ya yahan drop karo</div>
      <div style="font-size:11.5px;">JPG, PNG, WEBP — ek ya zyada</div>
    </div>
    <input type="file" id="ip-file" accept="image/jpeg,image/png,image/webp" multiple style="display:none;">
    <div class="file-list" id="ip-list"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ip-placeholder">PDF yahan ready hoga</div>
    <div class="result-rows" id="ip-stats" style="display:none;">
      <div class="result-row"><span class="k">Images</span><span class="v" id="ip-count">—</span></div>
      <div class="result-row"><span class="k">PDF size</span><span class="v" id="ip-size">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ip-convert" disabled>Convert to PDF</button>
  <button class="btn btn-secondary" id="ip-download" disabled>Download PDF</button>
</div>`,
  howto: [
    'Ek ya zyada images select karo (JPG/PNG/WEBP).',
    '↑↓ se order set karo — isi order me A4 pages banenge.',
    '<strong>Convert to PDF</strong> dabao aur download karo.',
  ],
  faq: [
    { q: 'WEBP images bhi chalengi?', a: 'Haan — WEBP pehle browser me PNG me convert hoti hai, phir PDF me jaati hai. JPG/PNG direct embed hote hain.' },
    { q: 'Documents scan karke PDF banana hai?', a: 'Phone se photos lo (seedha, achhi light me), yahan sab select karke ek PDF bana lo — scanner ki zaroorat nahi.' },
    { q: 'Kya images upload hoti hain?', a: 'Nahi — PDF browser me banta hai, images bahar nahi jaati.' },
  ],
};
