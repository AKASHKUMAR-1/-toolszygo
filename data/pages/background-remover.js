module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="br-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Image choose karo</strong> — solid background wali best</div>
      <div style="font-size:11.5px;">product photos, logos, white-bg photos</div>
    </div>
    <input type="file" id="br-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <div style="font-size:12.5px;color:#6E6552;">👇 Neeche image pe <strong>background wale hisse pe click karo</strong> — wo color transparent ho jayega</div>
    <canvas id="br-canvas" style="max-width:100%;border-radius:10px;border:1px solid #E8E0D2;cursor:crosshair;display:none;"></canvas>
    <div class="field">
      <label>Tolerance: <span id="br-tolerance-val">30</span> (zyada = aas-paas ke shades bhi hatenge)</label>
      <div class="range-row"><input type="range" id="br-tolerance" min="5" max="100" value="30"></div>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result (transparent)</div>
    <div class="panel-placeholder" id="br-placeholder">transparent image yahan dikhegi</div>
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
    'Solid background wali image upload karo (white/plain background best hai).',
    'Image me background wale hisse pe click karo — wo color transparent ho jayega.',
    'Tolerance badha kar aas-paas ke shades bhi hata sakte ho. Phir transparent PNG download karo.',
  ],
  faq: [
    { q: 'Kya ye AI background remover hai?', a: 'Nahi — ye color-based remover hai jo solid/plain backgrounds ke liye perfect hai (product photos, documents, logos). Complex backgrounds (crowd, nature) ke liye AI tools chahiye hote hain jo bade models use karte hain.' },
    { q: 'Best result kaise milega?', a: 'Plain background ke aage li gayi photo use karo. Tolerance kam se shuru karke dheere-dheere badhao. Kai jagah click karke alag-alag shades hata sakte ho.' },
    { q: 'Photo kahin upload hoti hai?', a: 'Nahi — sab browser me canvas pe hota hai. 100% private.' },
  ],
};
