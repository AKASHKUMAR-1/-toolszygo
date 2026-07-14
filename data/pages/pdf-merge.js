module.exports = {
  libs: ['/assets/js/vendor/pdf-lib.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pm-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose PDF files</strong> or drop them here</div>
      <div style="font-size:11.5px;">2 or more PDFs — you can set the order below</div>
    </div>
    <input type="file" id="pm-file" accept="application/pdf" multiple style="display:none;">
    <div class="file-list" id="pm-list"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="pm-placeholder">merged PDF will be ready here</div>
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
    'Select or drag-drop two or more PDF files.',
    'Use the ↑ ↓ buttons in the list to set the file order — they\'ll merge in that order.',
    'Click <strong>Merge PDFs</strong> — all files combine into a single PDF.',
    'Use "Download merged PDF" to save the final file.',
  ],
  faq: [
    { q: 'Are my PDF files uploaded anywhere?', a: 'No — merging happens entirely in your browser. Files never leave your device, so it\'s safe even for sensitive documents like bank statements, ID documents, and contracts.' },
    { q: 'How many files can I merge at once?', a: 'No fixed limit — even 20+ files can be merged. Very large files (100MB+) may slow the browser down since processing happens on your device.' },
    { q: 'Can I merge password-protected PDFs?', a: 'No — you\'ll need to remove the PDF\'s password first. Encrypted PDFs can\'t be read directly in the browser.' },
    { q: 'Does the merged PDF lose quality?', a: 'No — pages are copied exactly as-is, with no re-compression. Quality stays 100% the same.' },
  ],
};
