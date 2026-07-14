module.exports = {
  libs: ['/assets/js/vendor/pdf-lib.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="jp-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose images</strong> or drop them here</div>
      <div style="font-size:11.5px;">JPG, PNG — one or more, you can set the order</div>
    </div>
    <input type="file" id="jp-file" accept="image/jpeg,image/png" multiple style="display:none;">
    <div class="file-list" id="jp-list"></div>
    <div class="field">
      <label for="jp-size">Page size</label>
      <select id="jp-size">
        <option value="a4" selected>A4 (image will fit)</option>
        <option value="fit">Page sized to image</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="jp-placeholder">PDF will be ready here</div>
    <div class="result-rows" id="jp-stats" style="display:none;">
      <div class="result-row"><span class="k">Images</span><span class="v" id="jp-count">—</span></div>
      <div class="result-row"><span class="k">PDF size</span><span class="v" id="jp-pdfsize">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="jp-convert" disabled>Convert to PDF</button>
  <button class="btn btn-secondary" id="jp-download" disabled>Download PDF</button>
</div>`,
  howto: [
    'Select one or more images (JPG/PNG).',
    'Set the order with ↑↓ buttons — pages are created in that order.',
    'Click <strong>Convert to PDF</strong> and download.',
  ],
  faq: [
    { q: 'Are my photos uploaded anywhere?', a: 'No — the PDF is built in your browser. Photos of documents, IDs, mark sheets are all completely safe.' },
    { q: 'What\'s the difference between A4 and "page sized to image"?', a: 'With A4, each image is centered and fit onto an A4 page — best for printing. With "image size", the page is exactly the image\'s size — for screenshots/digital use.' },
    { q: 'How many images can go into one PDF?', a: 'No limit — even 50+ pages work fine. Processing may take slightly longer with very large images.' },
    { q: 'How do I scan documents into a PDF?', a: 'Take photos of documents with your phone (good lighting, straight-on), then select them all here to make one PDF — no scanner needed.' },
  ],
};
