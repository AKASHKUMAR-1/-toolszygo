module.exports = {
  libs: ['/assets/js/vendor/tesseract.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="ocr-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose an image</strong> — photo, screenshot, scanned page</div>
      <div style="font-size:11.5px;">a clean, straight, well-lit image works best</div>
    </div>
    <input type="file" id="ocr-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <div class="field">
      <label for="ocr-lang">Language</label>
      <select id="ocr-lang">
        <option value="eng" selected>English</option>
        <option value="hin">Hindi (हिन्दी)</option>
        <option value="eng+hin">English + Hindi mixed</option>
      </select>
    </div>
    <img id="ocr-preview" alt="" style="display:none;max-width:100%;border-radius:10px;border:1px solid #E8E0D2;">
    <div id="ocr-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Extracted Text</div>
    <textarea id="ocr-output" placeholder="extracted text will appear here…" style="flex:1;min-height:220px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.6;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ocr-run" disabled>Extract text</button>
  <button class="btn btn-secondary" id="ocr-copy">Copy text</button>
</div>`,
  howto: [
    'Upload an image containing text — printed text works best.',
    'Choose the language (English/Hindi) and click <strong>Extract text</strong>.',
    'The language model downloads the first time (~10-15 MB) — after that, processing happens entirely in the browser.',
  ],
  faq: [
    { q: 'Will this read handwriting?', a: 'Clean handwriting (block letters) gives decent results, cursive/fast handwriting will have errors. Printed text (books, documents) gets 95%+ accuracy.' },
    { q: 'Why is the first run slow?', a: 'The language model (~10-15 MB) downloads the first time. After that it stays in the browser cache — it\'ll be fast next time. Processing itself happens on your device.' },
    { q: 'How do I improve accuracy?', a: 'A straight (untilted) photo, good lighting, sharp focus. Use full resolution for screenshots. Crop to just the text if it\'s small.' },
  ],
};
