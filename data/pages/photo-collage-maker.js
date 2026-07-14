module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Collage Setup</div>
    <div class="field">
      <label for="col-layout">Layout</label>
      <select id="col-layout">
        <option value="2x1" selected>2 photos — side by side</option>
        <option value="1x2">2 photos — top and bottom</option>
        <option value="2x2">4 photos — 2×2 grid</option>
        <option value="3x1">3 photos — one row</option>
        <option value="3x3">9 photos — 3×3 grid</option>
      </select>
    </div>
    <div class="dropzone" id="col-drop" style="min-height:80px;">
      <div><strong>Choose photos</strong> (based on layout)</div>
      <div id="col-info" style="font-size:11.5px;">0 photos selected</div>
    </div>
    <input type="file" id="col-file" accept="image/jpeg,image/png,image/webp" multiple style="display:none;">
    <div class="field-row">
      <div class="field">
        <label>Gap: <span id="col-gap-val">8</span>px</label>
        <div class="range-row"><input type="range" id="col-gap" min="0" max="40" value="8"></div>
      </div>
      <div class="field">
        <label for="col-bg">Background</label>
        <input type="color" id="col-bg" value="#FFFFFF" style="width:100%;height:38px;border:1px solid #E8E0D2;border-radius:10px;background:#FCFAF6;padding:3px;cursor:pointer;">
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="align-items:center;">
    <div class="panel-label" style="align-self:flex-start;">Preview</div>
    <canvas id="col-canvas" style="max-width:100%;border-radius:10px;display:none;"></canvas>
    <div class="panel-placeholder" id="col-placeholder">collage preview will appear here</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="col-download" disabled>Download collage</button>
</div>`,
  howto: [
    'Choose a layout — a grid of 2, 3, 4, or 9 photos.',
    'Select photos (as many as the layout needs) — they\'re placed in order.',
    'Set the gap and background color, then click <strong>Download</strong>.',
  ],
  faq: [
    { q: 'What if the photos are different sizes?', a: 'Each photo center-crops to fit its cell (like an Instagram grid) — no photo gets stretched.' },
    { q: 'How many photos fit in one collage?', a: '2 to 9, depending on the layout. If you select more photos than needed, the first ones are used.' },
    { q: 'What size is the output?', a: 'A high-quality 2048px square/rectangle — enough for both print and social media.' },
  ],
};
