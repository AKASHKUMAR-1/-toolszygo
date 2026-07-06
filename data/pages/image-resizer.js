module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="ir-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Image choose karo</strong> ya yahan drop karo</div>
      <div style="font-size:11.5px;">JPG, PNG, WEBP</div>
    </div>
    <input type="file" id="ir-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <div class="field-row">
      <div class="field">
        <label for="ir-width">Width (px)</label>
        <input type="number" id="ir-width" min="1" max="10000" step="1">
      </div>
      <div class="field">
        <label for="ir-height">Height (px)</label>
        <input type="number" id="ir-height" min="1" max="10000" step="1">
      </div>
    </div>
    <div class="checks">
      <label><input type="checkbox" id="ir-lock" checked> Aspect ratio lock rakho (shape na bigde)</label>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ir-placeholder">resized image yahan dikhegi</div>
    <img id="ir-preview" alt="Resized preview" style="display:none;max-width:100%;border-radius:10px;border:1px solid #F0E0CC;">
    <div class="result-rows" id="ir-stats" style="display:none;">
      <div class="result-row"><span class="k">Original size</span><span class="v" id="ir-orig">—</span></div>
      <div class="result-row"><span class="k">New size</span><span class="v" id="ir-new">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ir-resize" disabled>Resize image</button>
  <button class="btn btn-secondary" id="ir-download" disabled>Download</button>
</div>`,
  howto: [
    'Image select karo ya drag-drop karo — uska current size width/height me aa jayega.',
    'Nayi width ya height daalo — aspect lock on hai to doosri value khud adjust hogi.',
    '<strong>Resize</strong> dabao aur download karo.',
  ],
  faq: [
    { q: 'Kya photo upload hoti hai kahin?', a: 'Nahi — resizing browser me canvas se hoti hai. Photo aapke device se bahar nahi jaati.' },
    { q: 'Aspect ratio lock kya karta hai?', a: 'Width badalne pe height automatically proportion me adjust hoti hai (aur ulta) — taaki photo stretched/squeezed na lage. Exact dimensions chahiye (jaise 800×600 hi) to lock off kar do.' },
    { q: 'Image badi karne pe quality kharab hogi?', a: 'Haan — original se bada karne (upscaling) pe blur aata hai kyunki naye pixels invent karne padte hain. Chhota karna (downscaling) hamesha sharp rehta hai.' },
    { q: 'Passport photo size kya rakhein?', a: 'Indian passport photo 2×2 inch = 600×600 px @300 DPI. Ye size daal kar resize karo. Background white chahiye hota hai.' },
  ],
};
