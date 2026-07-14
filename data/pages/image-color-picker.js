module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Image</div>
    <div class="dropzone" id="icp-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose an image</strong> then click on it to pick a color</div>
    </div>
    <input type="file" id="icp-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <canvas id="icp-canvas" style="max-width:100%;border-radius:10px;border:1px solid #E8E0D2;cursor:crosshair;display:none;"></canvas>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Picked Color</div>
    <div id="icp-swatch" style="height:52px;border-radius:10px;border:1px solid #F0E0CC;background:#FCFAF6;"></div>
    <div class="result-rows">
      <div class="result-row"><span class="k">HEX</span><span class="v" style="font-family:monospace;" id="icp-hex">—</span></div>
      <div class="result-row"><span class="k">RGB</span><span class="v" style="font-family:monospace;" id="icp-rgb">—</span></div>
      <div class="result-row"><span class="k">HSL</span><span class="v" style="font-family:monospace;" id="icp-hsl">—</span></div>
    </div>
    <div class="panel-label" style="margin-top:6px;">Dominant Colors</div>
    <div id="icp-palette" style="display:flex;gap:8px;flex-wrap:wrap;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="icp-copy-hex">Copy HEX</button>
  <button class="btn btn-secondary" id="icp-copy-rgb">Copy RGB</button>
</div>`,
  howto: [
    'Upload an image — a dominant color palette appears instantly.',
    'Click anywhere on the image — get the HEX/RGB/HSL code for that exact pixel.',
    'You can also click a swatch in the palette to select a color.',
  ],
  faq: [
    { q: 'How are dominant colors extracted?', a: 'The image is sampled and similar colors are grouped — the colors covering the most area make it into the palette. Perfect for design inspiration.' },
    { q: 'Can I extract a brand color from a website screenshot?', a: 'Yes — take a screenshot, upload it here, and click on the logo/button to get the exact HEX code.' },
    { q: 'Is the image uploaded anywhere?', a: 'No — everything happens on a canvas in your browser.' },
  ],
};
