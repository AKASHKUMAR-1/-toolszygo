module.exports = {
  libs: ['/assets/js/vendor/pdf.min.js', '/assets/js/vendor/pdf-lib.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pc2-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>PDF choose karo</strong> ya yahan drop karo</div>
      <div id="pc2-info" style="font-size:11.5px;">scanned/photo-heavy PDFs me sabse zyada compression</div>
    </div>
    <input type="file" id="pc2-file" accept="application/pdf" style="display:none;">
    <div class="field">
      <label>Quality: <span id="pc2-quality-val">70</span>% (kam = chhoti file)</label>
      <div class="range-row"><input type="range" id="pc2-quality" min="30" max="90" value="70"></div>
    </div>
    <div id="pc2-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="pc2-placeholder">compressed PDF yahan ready hoga</div>
    <div class="result-rows" id="pc2-stats" style="display:none;">
      <div class="result-row"><span class="k">Original size</span><span class="v" id="pc2-orig">—</span></div>
      <div class="result-row"><span class="k">Compressed size</span><span class="v" id="pc2-new">—</span></div>
      <div class="result-row"><span class="k">Saved</span><span class="v" id="pc2-saved">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pc2-compress" disabled>Compress PDF</button>
  <button class="btn btn-secondary" id="pc2-download" disabled>Download</button>
</div>`,
  howto: [
    'PDF select karo aur quality set karo — 60–75% me achha balance milta hai.',
    '<strong>Compress PDF</strong> dabao — har page optimize hoga (bade PDFs me thoda time lagta hai).',
    'Size comparison dekh kar download karo.',
  ],
  faq: [
    { q: 'Compression kaise hoti hai?', a: 'Har page ko render karke optimized JPEG me convert kiya jaata hai aur nayi PDF banti hai. Scanned/image-heavy PDFs me 50–80% size reduction milta hai.' },
    { q: 'Kya text select ho payega compressed PDF me?', a: 'Nahi — is method me pages images ban jaate hain, isliye text select/search nahi hoga. Form uploads (jaha size limit hai) ke liye ye trade-off theek hai.' },
    { q: 'Kya meri PDF upload hoti hai?', a: 'Nahi — poora process browser me hota hai. Aadhaar, marksheets jaise documents safe hain.' },
  ],
};
