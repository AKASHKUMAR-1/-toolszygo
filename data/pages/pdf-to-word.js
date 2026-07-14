module.exports = {
  libs: ['/assets/js/vendor/pdf.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pw2-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose a PDF</strong> or drop it here</div>
      <div id="pw2-info" style="font-size:11.5px;">text-based PDFs work best</div>
    </div>
    <input type="file" id="pw2-file" accept="application/pdf" style="display:none;">
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Extracted Text</div>
    <div id="pw2-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
    <textarea id="pw2-output" placeholder="the PDF's text will appear here — you can edit it too…" style="flex:1;min-height:220px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.6;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pw2-download" disabled>Download Word (.doc)</button>
  <button class="btn btn-secondary" id="pw2-copy">Copy text</button>
</div>`,
  howto: [
    'Select a PDF file — text is extracted automatically.',
    'You can edit the text here too.',
    'Click <strong>Download Word</strong> — get a .doc file that opens in MS Word/Google Docs.',
  ],
  faq: [
    { q: 'Will formatting (tables, images) come through too?', a: 'This tool extracts text — paragraphs and line breaks come through, but not complex formatting/images. This is enough for most cases (letters, reports, notes).' },
    { q: 'Will text extract from a scanned PDF?', a: 'No — a scanned PDF has an image, not text. Use our Image to Text (OCR) tool for that.' },
    { q: 'Is my PDF uploaded anywhere?', a: 'No — extraction happens in the browser via pdf.js. Confidential documents stay safe too.' },
  ],
};
