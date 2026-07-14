module.exports = {
  libs: ['/assets/js/vendor/pdf-lib.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="ip-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose images</strong> or drop them here</div>
      <div style="font-size:11.5px;">JPG, PNG, WEBP — one or more</div>
    </div>
    <input type="file" id="ip-file" accept="image/jpeg,image/png,image/webp" multiple style="display:none;">
    <div class="file-list" id="ip-list"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ip-placeholder">PDF will be ready here</div>
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
    'Select one or more images (JPG/PNG/WEBP).',
    'Set the order with ↑↓ — A4 pages are created in that order.',
    'Click <strong>Convert to PDF</strong> and download.',
  ],
  faq: [
    { q: 'Do WEBP images work too?', a: 'Yes — WEBP is first converted to PNG in the browser, then goes into the PDF. JPG/PNG embed directly.' },
    { q: 'I want to scan documents into a PDF?', a: 'Take photos with your phone (straight-on, good light), select them all here to make one PDF — no scanner needed.' },
    { q: 'Are the images uploaded anywhere?', a: 'No — the PDF is built in the browser, images never leave your device.' },
  ],
};
