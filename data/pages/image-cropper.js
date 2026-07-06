module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="cr-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Image choose karo</strong> ya yahan drop karo</div>
      <div style="font-size:11.5px;">phir crop box drag karke select karo</div>
    </div>
    <input type="file" id="cr-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <div class="field">
      <label for="cr-ratio">Crop ratio</label>
      <select id="cr-ratio">
        <option value="free" selected>Free (kuch bhi)</option>
        <option value="1">1:1 (square — DP ke liye)</option>
        <option value="1.3333">4:3</option>
        <option value="1.7778">16:9 (widescreen)</option>
        <option value="0.75">3:4 (portrait)</option>
      </select>
    </div>
    <div id="cr-stage" style="position:relative;display:none;user-select:none;touch-action:none;max-width:100%;">
      <canvas id="cr-canvas" style="max-width:100%;display:block;border-radius:10px;"></canvas>
      <div id="cr-box" style="position:absolute;border:2px dashed #D97757;background:rgba(217,119,87,0.12);cursor:move;box-sizing:border-box;">
        <div id="cr-handle" style="position:absolute;right:-8px;bottom:-8px;width:16px;height:16px;background:#D97757;border-radius:50%;cursor:nwse-resize;"></div>
      </div>
    </div>
    <div id="cr-info" style="font-size:12.5px;color:#A39C8B;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="cr-crop" disabled>✂ Crop &amp; Download</button>
</div>`,
  howto: [
    'Image upload karo — uspe crop box dikhega.',
    'Box ko drag karke position set karo, corner ke handle se size badlo. Fixed ratio chahiye to dropdown se choose karo.',
    '<strong>Crop &amp; Download</strong> dabao — cropped image download ho jayegi.',
  ],
  faq: [
    { q: 'DP/profile picture ke liye kaunsa ratio?', a: '1:1 (square) choose karo — WhatsApp, Instagram, LinkedIn sab me profile photos square hoti hain.' },
    { q: 'Cropped image ki quality kam hogi?', a: 'Nahi — crop original resolution pe hota hai, preview chahe chhota dikhe. Jo pixels select kiye wahi full quality me milte hain.' },
    { q: 'Mobile pe kaam karega?', a: 'Haan — touch se box drag aur resize dono hote hain.' },
  ],
};
