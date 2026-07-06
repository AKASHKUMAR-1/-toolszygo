module.exports = {
  libs: ['/assets/js/vendor/tesseract.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="ocr-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Image choose karo</strong> — photo, screenshot, scanned page</div>
      <div style="font-size:11.5px;">saaf, seedhi, achhi lighting wali image best</div>
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
    <textarea id="ocr-output" placeholder="nikala hua text yahan aayega…" style="flex:1;min-height:220px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.6;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ocr-run" disabled>Extract text</button>
  <button class="btn btn-secondary" id="ocr-copy">Copy text</button>
</div>`,
  howto: [
    'Text wali image upload karo — printed text best kaam karta hai.',
    'Language choose karo (English/Hindi) aur <strong>Extract text</strong> dabao.',
    'Pehli baar language model download hota hai (~10-15 MB) — phir process browser me hi hota hai.',
  ],
  faq: [
    { q: 'Handwriting padh lega?', a: 'SAAF handwriting (block letters) me theek results milte hain, cursive/jaldi wali likhawat me galtiyan hongi. Printed text (books, documents) me accuracy 95%+ hai.' },
    { q: 'Pehli baar slow kyun hai?', a: 'Language model (~10-15 MB) download hota hai pehli baar. Uske baad browser cache me rehta hai — agli baar fast chalega. Processing khud aapke device pe hoti hai.' },
    { q: 'Accuracy kaise badhaye?', a: 'Seedhi (bina tilt) photo, achhi lighting, sharp focus. Screenshot ho to full resolution wala. Chhota text ho to crop karke sirf text wala hissa do.' },
  ],
};
