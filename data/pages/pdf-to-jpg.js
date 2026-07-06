module.exports = {
  libs: ['/assets/js/vendor/pdf.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pj-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>PDF choose karo</strong> ya yahan drop karo</div>
      <div id="pj-info" style="font-size:11.5px;">har page ki alag JPG banegi</div>
    </div>
    <input type="file" id="pj-file" accept="application/pdf" style="display:none;">
    <div class="field">
      <label for="pj-scale">Quality / Size</label>
      <select id="pj-scale">
        <option value="1.5">Normal (screen ke liye)</option>
        <option value="2" selected>High (share karne ke liye)</option>
        <option value="3">Very High (print ke liye)</option>
      </select>
    </div>
    <div id="pj-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Pages</div>
    <div id="pj-results" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:10px;overflow:auto;max-height:340px;">
      <div class="panel-placeholder" style="grid-column:1/-1;">page images yahan aayengi</div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pj-convert" disabled>Convert to JPG</button>
  <button class="btn btn-secondary" id="pj-download-all" disabled>Download all</button>
</div>`,
  howto: [
    'PDF select karo aur quality choose karo.',
    '<strong>Convert to JPG</strong> dabao — har page ki thumbnail dikhegi.',
    'Kisi page pe click karke akela download karo, ya "Download all" se saare.',
  ],
  faq: [
    { q: 'Har page ki alag image banti hai?', a: 'Haan — 5-page PDF se 5 JPG files milengi (page-1.jpg, page-2.jpg…). "Download all" ek-ek karke sab download karta hai.' },
    { q: 'Image ki quality kaisi hogi?', a: '"High" me ~150 DPI aur "Very High" me ~220 DPI equivalent milta hai — WhatsApp/print dono ke liye kaafi sharp.' },
    { q: 'Kya PDF upload hoti hai?', a: 'Nahi — rendering browser me pdf.js se hoti hai, file bahar nahi jaati.' },
  ],
};
