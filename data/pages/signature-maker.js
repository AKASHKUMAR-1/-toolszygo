module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Make a Signature</div>
    <div class="field">
      <label for="sig-mode">Mode</label>
      <select id="sig-mode">
        <option value="draw" selected>✍ Draw (with mouse/finger)</option>
        <option value="type">⌨ Type (in a stylish font)</option>
      </select>
    </div>
    <div id="sig-draw-area">
      <canvas id="sig-canvas" width="500" height="200" style="width:100%;background:#FFF;border:1.5px dashed #E4D9C6;border-radius:10px;cursor:crosshair;touch-action:none;"></canvas>
      <div class="field-row" style="margin-top:8px;">
        <div class="field">
          <label for="sig-color">Pen color</label>
          <select id="sig-color">
            <option value="#1a1a2e" selected>Blue-black (pen-like)</option>
            <option value="#000000">Black</option>
            <option value="#1B4F72">Blue</option>
          </select>
        </div>
        <div class="field">
          <label>Pen width: <span id="sig-width-val">2.5</span></label>
          <div class="range-row"><input type="range" id="sig-width" min="1" max="6" step="0.5" value="2.5"></div>
        </div>
      </div>
    </div>
    <div id="sig-type-area" style="display:none;">
      <div class="field">
        <label for="sig-text">Your name</label>
        <input type="text" id="sig-text" placeholder="Akash Kumar">
      </div>
      <div class="field">
        <label for="sig-font">Style</label>
        <select id="sig-font">
          <option value="'Segoe Script', cursive" selected>Segoe Script</option>
          <option value="'Brush Script MT', cursive">Brush Script</option>
          <option value="'Lucida Handwriting', cursive">Lucida Handwriting</option>
          <option value="'Freestyle Script', cursive">Freestyle Script</option>
        </select>
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="align-items:center;justify-content:center;">
    <div class="panel-label" style="align-self:flex-start;">Preview (transparent)</div>
    <div style="background:repeating-conic-gradient(#EEE 0% 25%, #FFF 0% 50%) 0 0/14px 14px;border-radius:10px;padding:8px;max-width:100%;">
      <canvas id="sig-preview" width="500" height="200" style="max-width:100%;display:block;"></canvas>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="sig-clear">↻ Clear</button>
  <button class="btn btn-primary" id="sig-download">Download PNG (transparent)</button>
</div>`,
  howto: [
    'In Draw mode, sign inside the box with your mouse/finger; or in Type mode, enter your name and choose a stylish font.',
    'Set the pen color and width to your preference.',
    'Click <strong>Download PNG</strong> — get a transparent-background signature you can paste into documents.',
  ],
  faq: [
    { q: 'What\'s the benefit of a transparent PNG?', a: 'With a transparent background, the signature sits naturally on any document (Word, PDF, image) — no white box shows.' },
    { q: 'Is this a legally valid digital signature?', a: 'This is an image like a scanned signature — fine for normal documents and forms. A legal digital signature (DSC) is different and comes from a certificate authority.' },
    { q: 'How do I add the signature to a PDF?', a: 'Download the PNG and insert the image in a PDF editor (Adobe, or online). In Word, use Insert > Picture and save as PDF.' },
  ],
};
