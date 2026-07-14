module.exports = {
  libs: ['/assets/js/vendor/pdf-lib.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="ps-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose a PDF</strong> or drop it here</div>
      <div id="ps-fileinfo" style="font-size:11.5px;">no file selected</div>
    </div>
    <input type="file" id="ps-file" accept="application/pdf" style="display:none;">
    <div class="field">
      <label for="ps-range">Which pages do you need? (e.g. 1-3,5,8-10)</label>
      <input type="text" id="ps-range" placeholder="1-3,5" style="font-family:monospace;">
    </div>
    <div id="ps-error" style="display:none;font-size:13px;font-weight:600;color:#B84F4F;"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ps-placeholder">extracted PDF will be ready here</div>
    <div class="result-rows" id="ps-stats" style="display:none;">
      <div class="result-row"><span class="k">Original pages</span><span class="v" id="ps-orig">—</span></div>
      <div class="result-row"><span class="k">Extracted pages</span><span class="v" id="ps-extracted">—</span></div>
      <div class="result-row"><span class="k">Output size</span><span class="v" id="ps-size">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ps-split" disabled>Split PDF</button>
  <button class="btn btn-secondary" id="ps-download" disabled>Download PDF</button>
</div>`,
  howto: [
    'Select a PDF file — total pages are shown.',
    'Write the pages you need — e.g. <code>1-3,5</code> means pages 1,2,3, and 5.',
    'Click <strong>Split PDF</strong> — download a new PDF with only the selected pages.',
  ],
  faq: [
    { q: 'How do I write a page range?', a: 'Separate with commas: "1-3,5,8-10" = pages 1,2,3,5,8,9,10. Just "2" = page 2 alone. Order matters — writing "5,1" puts page 5 first.' },
    { q: 'Is my PDF uploaded anywhere?', a: 'No — splitting happens in the browser. Bank statements, contracts, everything stays private.' },
    { q: 'What if I need a separate PDF per page?', a: 'Split repeatedly with a single-page range each time (1, then 2, then 3…). A bulk single-page split feature is coming soon.' },
    { q: 'Can I split a password-protected PDF?', a: 'No — remove the password first. Encrypted PDFs won\'t open in the browser.' },
  ],
};
