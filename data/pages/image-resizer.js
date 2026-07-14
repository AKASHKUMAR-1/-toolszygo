module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="ir-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose an image</strong> or drop it here</div>
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
      <label><input type="checkbox" id="ir-lock" checked> Lock aspect ratio (don't distort shape)</label>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ir-placeholder">resized image will appear here</div>
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
    'Select or drag-drop an image — its current size fills the width/height fields.',
    'Enter a new width or height — the other value auto-adjusts if aspect lock is on.',
    'Click <strong>Resize</strong> and download.',
  ],
  faq: [
    { q: 'Is the photo uploaded anywhere?', a: 'No — resizing happens on a canvas in the browser. The photo never leaves your device.' },
    { q: 'What does aspect ratio lock do?', a: 'Changing the width automatically adjusts the height proportionally (and vice versa) — so the photo isn\'t stretched/squeezed. Turn the lock off if you need exact dimensions (like 800×600 exactly).' },
    { q: 'Will quality suffer when enlarging an image?', a: 'Yes — enlarging beyond the original (upscaling) causes blur since new pixels must be invented. Shrinking (downscaling) always stays sharp.' },
    { q: 'What size should a passport photo be?', a: 'An Indian passport photo is 2×2 inch = 600×600 px @300 DPI. Enter this size to resize. The background should be white.' },
  ],
};
