module.exports = {
  libs: ['/assets/js/vendor/pdf.min.js', '/assets/js/vendor/pdf-lib.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pp-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose a password-protected PDF</strong></div>
      <div id="pp-info" style="font-size:11.5px;">you must know the password</div>
    </div>
    <input type="file" id="pp-file" accept="application/pdf" style="display:none;">
    <div class="field">
      <label for="pp-password">PDF password</label>
      <input type="text" id="pp-password" placeholder="enter password here" autocomplete="off">
    </div>
    <div id="pp-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="pp-placeholder">unlocked PDF will be ready here</div>
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
    'Select a password-protected PDF.',
    'Enter the correct PDF password (that you already know — like a bank statement\'s DOB-based password).',
    'Click <strong>Remove password</strong> — download a copy without the password.',
  ],
  faq: [
    { q: 'Does this unlock a PDF without the password?', a: 'No — this doesn\'t CRACK passwords. You must already know the correct password. This is a legal tool for removing passwords from your own everyday files (like bank statements).' },
    { q: 'Does my password or file go anywhere?', a: 'No — everything happens in the browser. The file is never uploaded, and the password is never sent anywhere.' },
    { q: 'Will the output have selectable text?', a: 'Pages are rendered at high quality into a new PDF, so text won\'t be selectable. This is fine for bank statements/documents — it looks like the original for viewing and printing.' },
  ],
};
