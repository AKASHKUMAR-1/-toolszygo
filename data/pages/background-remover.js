module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="br-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose an image</strong> — solid background works best</div>
      <div style="font-size:11.5px;">product photos, logos, white-bg photos</div>
    </div>
    <input type="file" id="br-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <div style="font-size:12.5px;color:#6E6552;">👇 <strong>Click on the background area</strong> in the image below — that color will become transparent</div>
    <canvas id="br-canvas" style="max-width:100%;border-radius:10px;border:1px solid #E8E0D2;cursor:crosshair;display:none;"></canvas>
    <div class="field">
      <label>Tolerance: <span id="br-tolerance-val">30</span> (higher = removes nearby shades too)</label>
      <div class="range-row"><input type="range" id="br-tolerance" min="5" max="100" value="30"></div>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result (transparent)</div>
    <div class="panel-placeholder" id="br-placeholder">transparent image will appear here</div>
    <div id="br-result-wrap" style="display:none;background:repeating-conic-gradient(#EEE 0% 25%, #FFF 0% 50%) 0 0/16px 16px;border-radius:10px;border:1px solid #F0E0CC;padding:6px;">
      <img id="br-preview" alt="Background removed" style="max-width:100%;display:block;">
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="br-reset" disabled>↻ Reset</button>
  <button class="btn btn-primary" id="br-download" disabled>Download PNG</button>
</div>`,
  howto: [
    'Upload an image with a solid background (white/plain background works best).',
    'Click on the background area in the image — that color becomes transparent.',
    'Increase tolerance to remove nearby shades too. Then download the transparent PNG.',
  ],
  faq: [
    { q: 'Is this an AI background remover?', a: 'No — this is a color-based remover, perfect for solid/plain backgrounds (product photos, documents, logos). Complex backgrounds (crowds, nature) need AI tools that use large models.' },
    { q: 'How do I get the best result?', a: 'Use a photo taken against a plain background. Start with low tolerance and increase gradually. You can click multiple spots to remove different shades.' },
    { q: 'Is my photo uploaded anywhere?', a: 'No — everything happens on a canvas in your browser. 100% private.' },
  ],
};
