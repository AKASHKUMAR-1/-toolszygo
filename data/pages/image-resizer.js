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

    <div style="display:flex;gap:6px;margin:12px 0 10px;">
      <button type="button" class="ir-tab" id="ir-tab-size" data-mode="size" style="flex:1;padding:8px 4px;border-radius:8px;border:1px solid #D97757;background:#D97757;color:#fff;font-size:12.5px;font-weight:600;cursor:pointer;">By Size</button>
      <button type="button" class="ir-tab" id="ir-tab-percent" data-mode="percent" style="flex:1;padding:8px 4px;border-radius:8px;border:1px solid #D9CDBA;background:#fff;color:#6B5F53;font-size:12.5px;font-weight:600;cursor:pointer;">As Percentage</button>
      <button type="button" class="ir-tab" id="ir-tab-preset" data-mode="preset" style="flex:1;padding:8px 4px;border-radius:8px;border:1px solid #D9CDBA;background:#fff;color:#6B5F53;font-size:12.5px;font-weight:600;cursor:pointer;">Presets</button>
    </div>

    <div id="ir-mode-size">
      <div class="field-row">
        <div class="field">
          <label for="ir-width">Width</label>
          <input type="number" id="ir-width" min="0" step="any">
        </div>
        <div class="field">
          <label for="ir-height">Height</label>
          <input type="number" id="ir-height" min="0" step="any">
        </div>
      </div>
      <div class="field-row">
        <div class="field">
          <label for="ir-unit">Unit</label>
          <select id="ir-unit">
            <option value="px" selected>Pixels (px)</option>
            <option value="cm">Centimeters (cm)</option>
            <option value="mm">Millimeters (mm)</option>
            <option value="inch">Inches (in)</option>
          </select>
        </div>
        <div class="field" id="ir-dpi-field" style="display:none;">
          <label for="ir-dpi">DPI</label>
          <select id="ir-dpi">
            <option value="72">72 (screen)</option>
            <option value="96">96 (default)</option>
            <option value="150">150</option>
            <option value="300" selected>300 (print/documents)</option>
          </select>
        </div>
      </div>
      <div class="checks">
        <label><input type="checkbox" id="ir-lock" checked> Lock aspect ratio (don't distort shape)</label>
      </div>
    </div>

    <div id="ir-mode-percent" style="display:none;">
      <div class="field">
        <label for="ir-percent">Scale (%)</label>
        <input type="number" id="ir-percent" value="50" min="1" max="500" step="1">
      </div>
      <div style="display:flex;gap:6px;margin-bottom:10px;">
        <button type="button" class="ir-pct-quick btn btn-secondary" data-pct="25" style="flex:1;padding:6px 4px;font-size:12.5px;">25%</button>
        <button type="button" class="ir-pct-quick btn btn-secondary" data-pct="50" style="flex:1;padding:6px 4px;font-size:12.5px;">50%</button>
        <button type="button" class="ir-pct-quick btn btn-secondary" data-pct="75" style="flex:1;padding:6px 4px;font-size:12.5px;">75%</button>
        <button type="button" class="ir-pct-quick btn btn-secondary" data-pct="200" style="flex:1;padding:6px 4px;font-size:12.5px;">200%</button>
      </div>
      <div id="ir-pct-info" style="font-size:12.5px;color:#A39C8B;"></div>
    </div>

    <div id="ir-mode-preset" style="display:none;">
      <div class="field">
        <label for="ir-preset">Choose a preset size</label>
        <select id="ir-preset">
          <optgroup label="Exam / Documents (India)">
            <option value="600x600">Passport photo — 600×600 px (2×2 in)</option>
            <option value="200x230">SSC exam photo — 200×230 px</option>
            <option value="140x60">SSC signature — 140×60 px</option>
            <option value="213x213">PAN card photo — 213×213 px</option>
          </optgroup>
          <optgroup label="Social Media">
            <option value="1080x1080" selected>Instagram post — 1080×1080</option>
            <option value="1080x1920">Instagram story / Reels — 1080×1920</option>
            <option value="1280x720">YouTube thumbnail — 1280×720</option>
            <option value="820x312">Facebook cover — 820×312</option>
            <option value="1200x675">X (Twitter) post — 1200×675</option>
            <option value="1584x396">LinkedIn banner — 1584×396</option>
            <option value="500x500">WhatsApp DP — 500×500</option>
            <option value="400x400">Profile picture — 400×400</option>
          </optgroup>
        </select>
      </div>
      <div style="font-size:12px;color:#A39C8B;">The image will be resized to exactly this size (shape may change if the original ratio differs).</div>
    </div>

    <div class="panel-label" style="margin-top:14px;">Export Settings</div>
    <div class="field-row">
      <div class="field">
        <label for="ir-format">Save Image As</label>
        <select id="ir-format">
          <option value="original" selected>Original format</option>
          <option value="image/jpeg">JPG</option>
          <option value="image/png">PNG</option>
          <option value="image/webp">WEBP</option>
        </select>
      </div>
      <div class="field">
        <label for="ir-target">Target File Size (KB, optional)</label>
        <input type="number" id="ir-target" min="1" step="1" placeholder="e.g. 50">
      </div>
    </div>
    <div id="ir-target-hint" style="font-size:12px;color:#A39C8B;margin-top:-6px;margin-bottom:8px;">Target size works for JPG and WEBP output (PNG size can't be controlled this way).</div>
    <div class="field" id="ir-quality-field">
      <label for="ir-quality">Quality: <span id="ir-quality-val">92</span>%</label>
      <input type="range" id="ir-quality" min="10" max="100" value="92" step="1" style="width:100%;">
    </div>
  </div>

  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ir-placeholder">resized image will appear here</div>
    <img id="ir-preview" alt="Resized preview" style="display:none;max-width:100%;border-radius:10px;border:1px solid #F0E0CC;">
    <div class="result-rows" id="ir-stats" style="display:none;">
      <div class="result-row"><span class="k">Original</span><span class="v" id="ir-orig">—</span></div>
      <div class="result-row"><span class="k">New</span><span class="v" id="ir-new">—</span></div>
      <div class="result-row" id="ir-target-row" style="display:none;"><span class="k">Target size</span><span class="v" id="ir-target-out">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ir-resize" disabled>Resize image</button>
  <button class="btn btn-secondary" id="ir-download" disabled>⬇ Download</button>
</div>`,
  howto: [
    'Select or drag-drop an image — its current size fills the fields automatically.',
    'Pick a mode: <strong>By Size</strong> (enter exact width/height in px, cm, mm or inches), <strong>As Percentage</strong> (scale to 25%, 50% etc.), or <strong>Presets</strong> (passport photo, SSC exam, Instagram, YouTube and more).',
    'Choose the output format (keep original, or convert to JPG/PNG/WEBP) — and optionally set a target file size in KB (e.g. 50 KB for exam uploads).',
    'Click <strong>Resize image</strong>, check the preview and sizes, then download.',
  ],
  faq: [
    { q: 'Is the photo uploaded anywhere?', a: 'No — resizing happens on a canvas in the browser. The photo never leaves your device, which also makes it safe for documents like passport or exam photos.' },
    { q: 'How do I get a photo under a specific KB limit (for exam forms)?', a: 'Enter the limit in "Target File Size" (e.g. 50 for SSC\'s 20-50KB photo rule) and choose JPG output. The tool automatically adjusts compression to get as close as possible under that size — no trial and error needed.' },
    { q: 'What are the common Indian exam photo sizes?', a: 'Passport photo: 600×600 px (2×2 inch at 300 DPI). SSC: photo 200×230 px (20-50 KB), signature 140×60 px (10-20 KB). PAN card: 213×213 px. All of these are in the Presets tab — but always double-check your exam\'s current notification, as requirements can change.' },
    { q: 'When should I use cm/mm/inch instead of pixels?', a: 'When a form asks for a physical size (like "3.5cm × 4.5cm photo"). Choose the unit and a DPI — 300 DPI is the standard for printed documents. The tool converts it to exact pixels for you.' },
    { q: 'What does aspect ratio lock do?', a: 'Changing the width automatically adjusts the height proportionally (and vice versa) — so the photo isn\'t stretched. Turn it off (or use a Preset) when a form demands exact dimensions that don\'t match your photo\'s shape.' },
    { q: 'Which output format should I choose?', a: 'JPG for photos and exam uploads (smallest, universally accepted), PNG for graphics/screenshots needing sharp text or transparency, WEBP for websites (best compression). "Original" keeps whatever format you uploaded.' },
    { q: 'Will quality suffer when enlarging an image?', a: 'Yes — enlarging beyond the original (upscaling) causes blur since new pixels must be invented. Shrinking always stays sharp.' },
  ],
};
