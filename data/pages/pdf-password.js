module.exports = {
  libs: ['/assets/js/vendor/pdf.min.js', '/assets/js/vendor/pdf-lib.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pp-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Password wali PDF choose karo</strong></div>
      <div id="pp-info" style="font-size:11.5px;">password aapko pata hona chahiye</div>
    </div>
    <input type="file" id="pp-file" accept="application/pdf" style="display:none;">
    <div class="field">
      <label for="pp-password">PDF ka password</label>
      <input type="text" id="pp-password" placeholder="password yahan daalo" autocomplete="off">
    </div>
    <div id="pp-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="pp-placeholder">unlocked PDF yahan ready hoga</div>
    <div class="result-rows" id="pp-stats" style="display:none;">
      <div class="result-row"><span class="k">Pages</span><span class="v" id="pp-pages">—</span></div>
      <div class="result-row"><span class="k">Output size</span><span class="v" id="pp-size">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pp-unlock" disabled>🔓 Remove password</button>
  <button class="btn btn-secondary" id="pp-download" disabled>Download unlocked PDF</button>
</div>`,
  howto: [
    'Password-protected PDF select karo.',
    'PDF ka sahi password daalo (jo aapko pata hai — jaise bank statement ka DOB wala).',
    '<strong>Remove password</strong> dabao — bina password wali copy download karo.',
  ],
  faq: [
    { q: 'Kya ye bina password ke PDF unlock karta hai?', a: 'Nahi — ye password CRACK nahi karta. Aapko sahi password pata hona chahiye. Ye legal tool hai apni files se roz-roz password hatane ke liye (jaise bank statements).' },
    { q: 'Mera password ya file kahin jaati hai?', a: 'Nahi — sab browser me hota hai. Na file upload hoti hai, na password kahin bheja jaata hai.' },
    { q: 'Output me text select hoga?', a: 'Pages high-quality render hoke nayi PDF banti hai, isliye text select nahi hoga. Bank statements/documents ke liye ye theek hai — dekhne aur print karne me original jaisa lagta hai.' },
  ],
};
