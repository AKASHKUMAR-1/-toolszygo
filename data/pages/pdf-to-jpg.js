module.exports = {
  libs: ['/assets/js/vendor/pdf.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pj-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose a PDF</strong> or drop it here</div>
      <div id="pj-info" style="font-size:11.5px;">a separate JPG is created per page</div>
    </div>
    <input type="file" id="pj-file" accept="application/pdf" style="display:none;">
    <div class="field">
      <label for="pj-scale">Quality / Size</label>
      <select id="pj-scale">
        <option value="1.5">Normal (for screens)</option>
        <option value="2" selected>High (for sharing)</option>
        <option value="3">Very High (for printing)</option>
      </select>
    </div>
    <div id="pj-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Pages</div>
    <div id="pj-results" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:10px;overflow:auto;max-height:340px;">
      <div class="panel-placeholder" style="grid-column:1/-1;">page images will appear here</div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pj-convert" disabled>Convert to JPG</button>
  <button class="btn btn-secondary" id="pj-download-all" disabled>Download all</button>
</div>`,
  howto: [
    'Select the PDF and choose the quality.',
    'Click <strong>Convert to JPG</strong> — a thumbnail appears for every page.',
    'Click a page to download it alone, or use "Download all" for everything.',
  ],
  faq: [
    { q: 'Does each page become a separate image?', a: 'Yes — a 5-page PDF gives 5 JPG files (page-1.jpg, page-2.jpg…). "Download all" downloads them one by one.' },
    { q: 'What quality will the images be?', a: '"High" gives ~150 DPI and "Very High" gives ~220 DPI equivalent — sharp enough for both WhatsApp and printing.' },
    { q: 'Is the PDF uploaded anywhere?', a: 'No — rendering happens in the browser via pdf.js, the file never leaves your device.' },
  ],
};
