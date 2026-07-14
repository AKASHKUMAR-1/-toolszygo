module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pp2-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose your photo</strong></div>
      <div style="font-size:11.5px;">a front-facing photo with a plain background works best</div>
    </div>
    <input type="file" id="pp2-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <div class="field">
      <label for="pp2-size">Photo size</label>
      <select id="pp2-size">
        <option value="passport" selected>Passport 2×2 inch (600×600 px)</option>
        <option value="visa">Visa 35×45 mm (413×531 px)</option>
        <option value="stamp">Stamp size 2×2.5 cm (236×295 px)</option>
      </select>
    </div>
    <div class="field">
      <label>Zoom: <span id="pp2-zoom-val">100</span>%</label>
      <div class="range-row"><input type="range" id="pp2-zoom" min="100" max="300" value="100"></div>
    </div>
    <div class="field-row">
      <div class="field">
        <label>Left–Right</label>
        <div class="range-row"><input type="range" id="pp2-x" min="0" max="100" value="50"></div>
      </div>
      <div class="field">
        <label>Up–Down</label>
        <div class="range-row"><input type="range" id="pp2-y" min="0" max="100" value="30"></div>
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="align-items:center;">
    <div class="panel-label" style="align-self:flex-start;">Preview</div>
    <canvas id="pp2-canvas" style="border:1px solid #F0E0CC;border-radius:6px;background:#FFF;max-width:220px;display:none;"></canvas>
    <div class="panel-placeholder" id="pp2-placeholder">passport photo preview here</div>
    <div id="pp2-dims" style="font-size:12px;color:#B98E63;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pp2-download" disabled>Download JPG (print-ready)</button>
</div>`,
  howto: [
    'Upload your photo and choose a size (passport/visa/stamp).',
    'Use the zoom and position sliders to frame the face — it should fill 70-80% of the photo.',
    'Click <strong>Download</strong> — get a 300 DPI print-ready JPG.',
  ],
  faq: [
    { q: 'What are the rules for an Indian passport photo?', a: '2×2 inch (51×51mm), white background, face looking straight ahead filling 70–80% of the photo, neutral expression, no glasses. This tool gives you the correct size — keeping the background white depends on your photo.' },
    { q: 'How do I make the background white?', a: 'Take the photo against a white wall, or first remove the background with our Background Remover to make it white, then crop here.' },
    { q: 'How do I get this printed?', a: 'Give the downloaded JPG to any photo studio or online print service — 300 DPI ensures a sharp print. A 4×6 inch sheet fits 6-8 passport photos.' },
  ],
};
