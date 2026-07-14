module.exports = {
  libs: ['/assets/js/vendor/pdf.min.js', '/assets/js/vendor/pdf-lib.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pc2-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose a PDF</strong> or drop it here</div>
      <div id="pc2-info" style="font-size:11.5px;">scanned/photo-heavy PDFs get the most compression</div>
    </div>
    <input type="file" id="pc2-file" accept="application/pdf" style="display:none;">
    <div class="field">
      <label>Quality: <span id="pc2-quality-val">70</span>% (lower = smaller file)</label>
      <div class="range-row"><input type="range" id="pc2-quality" min="30" max="90" value="70"></div>
    </div>
    <div id="pc2-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="pc2-placeholder">compressed PDF will be ready here</div>
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
    'Select a PDF and set the quality — 60–75% gives a good balance.',
    'Click <strong>Compress PDF</strong> — every page is optimized (larger PDFs take a bit longer).',
    'Check the size comparison and download.',
  ],
  faq: [
    { q: 'How does compression work?', a: 'Each page is rendered and converted into an optimized JPEG, and a new PDF is built. Scanned/image-heavy PDFs see 50–80% size reduction.' },
    { q: 'Will text be selectable in the compressed PDF?', a: 'No — this method turns pages into images, so text can\'t be selected/searched. This trade-off is fine for form uploads with size limits.' },
    { q: 'Is my PDF uploaded anywhere?', a: 'No — the entire process happens in the browser. Documents like IDs and mark sheets stay safe.' },
  ],
};
