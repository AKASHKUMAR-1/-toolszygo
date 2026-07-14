module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="ifc-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose an image</strong> or drop it here</div>
      <div style="font-size:11.5px;">PNG, JPG, WEBP — any</div>
    </div>
    <input type="file" id="ifc-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <div class="field">
      <label for="ifc-format">Convert to</label>
      <select id="ifc-format">
        <option value="image/png">PNG (lossless, transparency)</option>
        <option value="image/jpeg" selected>JPG (photos, smaller size)</option>
        <option value="image/webp">WEBP (smallest, modern)</option>
      </select>
    </div>
    <div class="field" id="ifc-quality-row">
      <label>Quality: <span id="ifc-quality-val">85</span>%</label>
      <div class="range-row"><input type="range" id="ifc-quality" min="10" max="100" value="85"></div>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ifc-placeholder">converted image will appear here</div>
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
    'Select any image (PNG/JPG/WEBP).',
    'Choose the target format and set quality for JPG/WEBP.',
    'Click <strong>Convert</strong> and download in the new format.',
  ],
  faq: [
    { q: 'What\'s the difference between PNG, JPG, and WEBP?', a: 'PNG is lossless and supports transparency — for logos/screenshots. JPG gives a smaller size for photos but no transparency. WEBP is the best of both — smallest size, with transparency — but doesn\'t open in older software.' },
    { q: 'What happens to a transparent area when converting PNG to JPG?', a: 'JPG doesn\'t support transparency — the transparent part turns white. Stick with PNG or WEBP if you need transparency.' },
    { q: 'Which format for a WhatsApp profile picture/status?', a: 'JPG is best — WhatsApp compresses anyway. Use PNG if you need a transparent, sticker-like image.' },
    { q: 'Will HEIC (iPhone) photos convert?', a: 'Browsers can\'t read HEIC directly. On iPhone, go to Settings > Camera > Formats and choose "Most Compatible" so photos save as JPG, then convert them here.' },
  ],
};
