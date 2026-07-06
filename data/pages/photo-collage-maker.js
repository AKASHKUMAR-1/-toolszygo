module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Collage Setup</div>
    <div class="field">
      <label for="col-layout">Layout</label>
      <select id="col-layout">
        <option value="2x1" selected>2 photos — side by side</option>
        <option value="1x2">2 photos — upar neeche</option>
        <option value="2x2">4 photos — 2×2 grid</option>
        <option value="3x1">3 photos — ek row</option>
        <option value="3x3">9 photos — 3×3 grid</option>
      </select>
    </div>
    <div class="dropzone" id="col-drop" style="min-height:80px;">
      <div><strong>Photos choose karo</strong> (layout ke hisaab se)</div>
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
    <div class="panel-placeholder" id="col-placeholder">collage preview yahan dikhega</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="col-download" disabled>Download collage</button>
</div>`,
  howto: [
    'Layout choose karo — 2, 3, 4 ya 9 photos ka grid.',
    'Photos select karo (jitne layout me chahiye) — order me lagti hain.',
    'Gap aur background color set karke <strong>Download</strong> dabao.',
  ],
  faq: [
    { q: 'Photos alag-alag size ki hain to?', a: 'Har photo apne cell me center-crop hokar fit hoti hai (jaise Instagram grid) — koi photo stretch nahi hoti.' },
    { q: 'Kitni photos ek collage me?', a: 'Layout ke hisaab se 2 se 9 tak. Zyada photos select karoge to pehli wali use hongi.' },
    { q: 'Output ka size kya hota hai?', a: '2048px ka high-quality square/rectangle — print aur social media dono ke liye kaafi.' },
  ],
};
