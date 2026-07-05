module.exports = {
  libs: ['/assets/js/vendor/pdf-lib.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pm-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>PDF files choose karo</strong> ya yahan drop karo</div>
      <div style="font-size:11.5px;">2 ya zyada PDFs — order neeche set kar sakte ho</div>
    </div>
    <input type="file" id="pm-file" accept="application/pdf" multiple style="display:none;">
    <div class="file-list" id="pm-list"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="pm-placeholder">merged PDF yahan ready hoga</div>
    <div class="result-rows" id="pm-stats" style="display:none;">
      <div class="result-row"><span class="k">Files merged</span><span class="v" id="pm-count">—</span></div>
      <div class="result-row"><span class="k">Total pages</span><span class="v" id="pm-pages">—</span></div>
      <div class="result-row"><span class="k">Output size</span><span class="v" id="pm-size">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pm-merge" disabled>Merge PDFs</button>
  <button class="btn btn-secondary" id="pm-download" disabled>Download merged PDF</button>
</div>`,
  howto: [
    'Do ya zyada PDF files select karo ya drag-drop karo.',
    'List me ↑ ↓ buttons se files ka order set karo — isi order me merge hongi.',
    '<strong>Merge PDFs</strong> dabao — sab files ek single PDF me combine ho jayengi.',
    '"Download merged PDF" se final file save karo.',
  ],
  faq: [
    { q: 'Kya meri PDF files kahin upload hoti hain?', a: 'Nahi — merging poori tarah aapke browser me hoti hai. Files aapke device se bahar nahi jaati, isliye bank statements, Aadhaar, contracts jaise sensitive documents ke liye bhi safe hai.' },
    { q: 'Kitni files ek saath merge kar sakte hain?', a: 'Koi fixed limit nahi — 20+ files bhi merge ho jaati hain. Bahut badi files (100MB+) pe browser slow ho sakta hai kyunki processing aapke device pe hoti hai.' },
    { q: 'Password-protected PDF merge hogi?', a: 'Nahi — pehle PDF ka password remove karna hoga. Encrypted PDFs browser me directly read nahi ho sakti.' },
    { q: 'Kya merged PDF ki quality kam hoti hai?', a: 'Nahi — pages bilkul as-is copy hote hain, koi re-compression nahi hoti. Quality 100% same rehti hai.' },
  ],
};
