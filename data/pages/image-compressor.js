module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="ic-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Image choose karo</strong> ya yahan drop karo</div>
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
        <option value="image/jpeg" selected>JPG (photos ke liye best)</option>
        <option value="image/webp">WEBP (sabse chhota size)</option>
        <option value="image/png">PNG (lossless — size kam nahi hoga)</option>
      </select>
    </div>
    <div id="ic-png-note" style="display:none;font-size:12px;color:#A98423;background:#FDF3D8;border-radius:8px;padding:8px 10px;">⚠ PNG lossless format hai — quality slider kaam nahi karta aur size kam nahi hoga (kabhi thoda badh bhi sakta hai). Real compression ke liye JPG ya WEBP choose karo.</div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ic-placeholder">compressed image yahan dikhegi</div>
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
    'Apni JPG, PNG ya WEBP image select karo ya drag-drop karo.',
    'Quality slider set karo — 70–80% me quality bhi achhi rehti hai aur size bhi kaafi kam ho jaata hai.',
    'Output format choose karo — WEBP sabse chhota size deta hai.',
    '<strong>Compress image</strong> dabao, phir "Download" se save karo.',
  ],
  faq: [
    { q: 'Kya meri photo kahin upload hoti hai?', a: 'Nahi — compression poori tarah aapke browser me hoti hai (HTML5 canvas se). Photo aapke device se bahar kabhi nahi jaati, isliye private documents/photos ke liye bhi 100% safe hai.' },
    { q: 'Kitna size kam ho sakta hai?', a: 'Photos me aam taur pe 60–90% size reduction milta hai quality slider ke hisaab se. Screenshots aur graphics me PNG→WEBP conversion se bhi bada difference aata hai.' },
    { q: 'Best quality setting kya hai?', a: 'WhatsApp/web ke liye 70–80% sweet spot hai. Printing ke liye 85–95% rakho. 50% se neeche visible quality loss ho sakta hai.' },
    { q: 'PNG compress karne pe transparent background ka kya hoga?', a: 'PNG output me transparency preserve hoti hai. JPG me transparent area white ho jaata hai kyunki JPG transparency support nahi karta.' },
  ],
};
