module.exports = {
  libs: ['/assets/js/vendor/pdf.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pe-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose a PDF</strong> or drop it here</div>
      <div id="pe-info" style="font-size:11.5px;">PDFs with simple tables work best</div>
    </div>
    <input type="file" id="pe-file" accept="application/pdf" style="display:none;">
    <div id="pe-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Extracted Data (CSV)</div>
    <textarea id="pe-output" placeholder="table data will appear here — you can edit it…" spellcheck="false" style="flex:1;min-height:220px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:12.5px;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pe-download" disabled>Download CSV (opens in Excel)</button>
  <button class="btn btn-secondary" id="pe-copy">Copy data</button>
</div>`,
  howto: [
    'Select a PDF with a table — data is extracted into rows/columns.',
    'Check the CSV preview and edit it if needed.',
    'Click <strong>Download CSV</strong> — the file opens directly in Excel.',
  ],
  faq: [
    { q: 'Which PDFs work best?', a: 'Simple, clean text-based PDFs with tables (bank statements, mark lists, price lists). Complex merged-cell tables may have columns out of order — some adjustment in Excel may be needed.' },
    { q: 'Will a table extract from a scanned PDF?', a: 'No — scanned pages are images. Extract text first with our OCR tool.' },
    { q: 'How are columns detected?', a: 'Each text\'s position (x/y coordinates) is used to estimate rows and columns — gaps between text become column boundaries.' },
  ],
};
