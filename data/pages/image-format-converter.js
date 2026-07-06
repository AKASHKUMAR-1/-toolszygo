module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="ifc-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Image choose karo</strong> ya yahan drop karo</div>
      <div style="font-size:11.5px;">PNG, JPG, WEBP — koi bhi</div>
    </div>
    <input type="file" id="ifc-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <div class="field">
      <label for="ifc-format">Convert to</label>
      <select id="ifc-format">
        <option value="image/png">PNG (lossless, transparency)</option>
        <option value="image/jpeg" selected>JPG (photos, chhota size)</option>
        <option value="image/webp">WEBP (sabse chhota, modern)</option>
      </select>
    </div>
    <div class="field" id="ifc-quality-row">
      <label>Quality: <span id="ifc-quality-val">85</span>%</label>
      <div class="range-row"><input type="range" id="ifc-quality" min="10" max="100" value="85"></div>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ifc-placeholder">converted image yahan dikhegi</div>
    <img id="ifc-preview" alt="Converted preview" style="display:none;max-width:100%;border-radius:10px;border:1px solid #F0E0CC;">
    <div class="result-rows" id="ifc-stats" style="display:none;">
      <div class="result-row"><span class="k">Original</span><span class="v" id="ifc-orig">—</span></div>
      <div class="result-row"><span class="k">Converted</span><span class="v" id="ifc-new">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ifc-convert" disabled>Convert image</button>
  <button class="btn btn-secondary" id="ifc-download" disabled>Download</button>
</div>`,
  howto: [
    'Koi bhi image select karo (PNG/JPG/WEBP).',
    'Target format choose karo aur JPG/WEBP ke liye quality set karo.',
    '<strong>Convert</strong> dabao aur nayi format me download karo.',
  ],
  faq: [
    { q: 'PNG, JPG aur WEBP me kya difference hai?', a: 'PNG lossless hai, transparency support karta hai — logos/screenshots ke liye. JPG photos ke liye chhota size deta hai lekin transparency nahi. WEBP dono ka best hai — sabse chhota size, transparency bhi — lekin purane software me nahi khulta.' },
    { q: 'PNG ko JPG banane pe transparent area ka kya hoga?', a: 'JPG transparency support nahi karta — transparent hissa white ho jaata hai. Transparency chahiye to PNG ya WEBP me raho.' },
    { q: 'WhatsApp DP/status ke liye kaunsa format?', a: 'JPG best hai — WhatsApp waise bhi compress karta hai. Sticker jaisa transparent image chahiye to PNG.' },
    { q: 'HEIC (iPhone) photos convert hongi?', a: 'Browser HEIC directly nahi padhta. iPhone me Settings > Camera > Formats me "Most Compatible" karo to photos JPG me aayengi, phir yahan convert kar sakte ho.' },
  ],
};
