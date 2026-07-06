module.exports = {
  libs: ['/assets/js/vendor/pdf-lib.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="jp-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Images choose karo</strong> ya yahan drop karo</div>
      <div style="font-size:11.5px;">JPG, PNG — ek ya zyada, order set kar sakte ho</div>
    </div>
    <input type="file" id="jp-file" accept="image/jpeg,image/png" multiple style="display:none;">
    <div class="file-list" id="jp-list"></div>
    <div class="field">
      <label for="jp-size">Page size</label>
      <select id="jp-size">
        <option value="a4" selected>A4 (image fit hogi)</option>
        <option value="fit">Image ke size ka page</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="jp-placeholder">PDF yahan ready hoga</div>
    <div class="result-rows" id="jp-stats" style="display:none;">
      <div class="result-row"><span class="k">Images</span><span class="v" id="jp-count">—</span></div>
      <div class="result-row"><span class="k">PDF size</span><span class="v" id="jp-pdfsize">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="jp-convert" disabled>Convert to PDF</button>
  <button class="btn btn-secondary" id="jp-download" disabled>Download PDF</button>
</div>`,
  howto: [
    'Ek ya zyada images select karo (JPG/PNG).',
    '↑↓ buttons se order set karo — isi order me pages banenge.',
    '<strong>Convert to PDF</strong> dabao aur download karo.',
  ],
  faq: [
    { q: 'Kya meri photos upload hoti hain?', a: 'Nahi — PDF aapke browser me banta hai. Documents, Aadhaar, marksheets ki photos bilkul safe hain.' },
    { q: 'A4 aur "image ke size ka page" me kya difference hai?', a: 'A4 me har image A4 page pe center hokar fit hoti hai — printing ke liye best. "Image size" me page exactly image jitna hota hai — screenshots/digital use ke liye.' },
    { q: 'Kitni images ek PDF me daal sakte hain?', a: 'Koi limit nahi — 50+ pages bhi ban jaate hain. Bahut badi images pe processing me thoda time lag sakta hai.' },
    { q: 'Documents scan karke PDF kaise banayein?', a: 'Phone se documents ki photos lo (achhi lighting me, seedha upar se), phir yahan sab select karke ek PDF bana lo — scanner ki zaroorat nahi.' },
  ],
};
