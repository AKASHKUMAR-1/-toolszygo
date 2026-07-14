module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="ic-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose an image</strong> or drop it here</div>
      <div style="font-size:11.5px;">JPG, PNG, WEBP — max 25 MB</div>
    </div>
    <input type="file" id="ic-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <div class="field" id="ic-quality-row">
      <label>Quality: <span id="ic-quality-val">75</span>%</label>
      <div class="range-row"><input type="range" id="ic-quality" min="10" max="95" value="75"></div>
    </div>
    <div class="field">
      <label for="ic-format">Output format</label>
      <select id="ic-format">
        <option value="image/jpeg" selected>JPG (best for photos)</option>
        <option value="image/webp">WEBP (smallest size)</option>
        <option value="image/png">PNG (lossless — size won't reduce)</option>
      </select>
    </div>
    <div id="ic-png-note" style="display:none;font-size:12px;color:#A98423;background:#FDF3D8;border-radius:8px;padding:8px 10px;">⚠ PNG is a lossless format — the quality slider has no effect and size won't reduce (it can even grow slightly). Choose JPG or WEBP for real compression.</div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ic-placeholder">compressed image will appear here</div>
    <img id="ic-preview" alt="Compressed preview" style="display:none;max-width:100%;border-radius:10px;border:1px solid #F0E0CC;">
    <div class="result-rows" id="ic-stats" style="display:none;">
      <div class="result-row"><span class="k">Original size</span><span class="v" id="ic-orig">—</span></div>
      <div class="result-row"><span class="k">Compressed size</span><span class="v" id="ic-comp">—</span></div>
      <div class="result-row"><span class="k">Saved</span><span class="v" id="ic-saved">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ic-compress" disabled>Compress image</button>
  <button class="btn btn-secondary" id="ic-download" disabled>Download</button>
</div>`,
  howto: [
    'Select or drag-drop your JPG, PNG, or WEBP image.',
    'Set the quality slider — 70–80% keeps good quality while reducing size significantly.',
    'Choose the output format — WEBP gives the smallest size.',
    'Click <strong>Compress image</strong>, then save it with "Download".',
  ],
  faq: [
    { q: 'Is my photo uploaded anywhere?', a: 'No — compression happens entirely in your browser (via HTML5 canvas). Your photo never leaves your device, so it\'s 100% safe even for private documents/photos.' },
    { q: 'How much can the size be reduced?', a: 'Photos typically see a 60–90% size reduction depending on the quality slider. Screenshots and graphics see an even bigger difference with PNG→WEBP conversion.' },
    { q: 'What\'s the best quality setting?', a: '70–80% is the sweet spot for WhatsApp/web. Keep 85–95% for printing. Below 50% may cause visible quality loss.' },
    { q: 'What happens to transparent backgrounds when compressing PNG?', a: 'Transparency is preserved in PNG output. In JPG, transparent areas turn white since JPG doesn\'t support transparency.' },
  ],
};
