module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Image</div>
    <div class="dropzone" id="icp-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Image choose karo</strong> phir uspe click karke color pick karo</div>
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
    'Image upload karo — dominant colors ki palette turant dikh jayegi.',
    'Image pe kahin bhi click karo — us exact pixel ka HEX/RGB/HSL code milega.',
    'Palette ke swatches pe click karke bhi color select kar sakte ho.',
  ],
  faq: [
    { q: 'Dominant colors kaise nikalte hain?', a: 'Image ko sample karke similar colors ke groups banaye jaate hain — jo colors sabse zyada area cover karte hain wahi palette me aate hain. Design inspiration ke liye perfect.' },
    { q: 'Kya website ke screenshot se brand color nikal sakta hoon?', a: 'Haan — screenshot lo, yahan upload karo aur logo/button pe click karke exact HEX code le lo.' },
    { q: 'Image kahin upload hoti hai?', a: 'Nahi — sab browser me canvas pe hota hai.' },
  ],
};
