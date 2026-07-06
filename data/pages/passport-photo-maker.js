module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pp2-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Apni photo choose karo</strong></div>
      <div style="font-size:11.5px;">saamne se li gayi, plain background wali best</div>
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
    <div class="panel-placeholder" id="pp2-placeholder">passport photo preview yahan</div>
    <div id="pp2-dims" style="font-size:12px;color:#B98E63;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pp2-download" disabled>Download JPG (print-ready)</button>
</div>`,
  howto: [
    'Apni photo upload karo aur size choose karo (passport/visa/stamp).',
    'Zoom aur position sliders se chehra frame me set karo — chehra photo ka 70-80% hona chahiye.',
    '<strong>Download</strong> dabao — 300 DPI print-ready JPG milegi.',
  ],
  faq: [
    { q: 'Indian passport photo ke rules kya hain?', a: '2×2 inch (51×51mm), white background, saamne dekhta hua chehra jo photo ka 70–80% ho, neutral expression, bina chashme ke. Ye tool sahi size deta hai — background white rakhna aapki photo pe depend karta hai.' },
    { q: 'Background white kaise karoon?', a: 'White deewar ke saamne photo lo, ya pehle hamare Background Remover se background hata kar white bana lo, phir yahan crop karo.' },
    { q: 'Print kaise karau?', a: 'Downloaded JPG kisi bhi photo studio ya online print service ko do — 300 DPI hone se print sharp aayega. 4×6 inch sheet pe 6-8 passport photos aa jaati hain.' },
  ],
};
