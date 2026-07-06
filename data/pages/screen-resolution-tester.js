module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Aapki Screen (live)</div>
    <div class="stat-grid">
      <div class="stat"><div class="num" id="sr-screen">—</div><div class="lbl">Screen resolution</div></div>
      <div class="stat"><div class="num" id="sr-viewport">—</div><div class="lbl">Browser viewport</div></div>
      <div class="stat"><div class="num" id="sr-dpr">—</div><div class="lbl">Pixel ratio (DPR)</div></div>
      <div class="stat"><div class="num" id="sr-depth">—</div><div class="lbl">Color depth</div></div>
    </div>
    <div class="result-rows" style="margin-top:6px;">
      <div class="result-row"><span class="k">Effective resolution (CSS × DPR)</span><span class="v" id="sr-effective">—</span></div>
      <div class="result-row"><span class="k">Available screen (taskbar chhod kar)</span><span class="v" id="sr-avail">—</span></div>
      <div class="result-row"><span class="k">Orientation</span><span class="v" id="sr-orientation">—</span></div>
      <div class="result-row"><span class="k">Device type (approx.)</span><span class="v" id="sr-device">—</span></div>
    </div>
    <div style="font-size:12px;color:#B98E63;margin-top:6px;">💡 Browser window resize karke dekho — viewport live update hota hai.</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="sr-copy">Copy details</button>
</div>`,
  howto: [
    'Page kholte hi aapki screen ki saari details dikh jaati hain.',
    'Browser window resize karo — viewport size live update hota hai.',
    '"Copy details" se saari info copy karke support/developer ko bhej sakte ho.',
  ],
  faq: [
    { q: 'Screen resolution aur viewport me kya difference hai?', a: 'Screen resolution poori display ka size hai (e.g. 1920×1080). Viewport browser window ka andar wala area hai jisme website dikhti hai — taskbar, address bar wagera hata kar. Web designers ke liye viewport hi matter karta hai.' },
    { q: 'Pixel ratio (DPR) kya hota hai?', a: 'Device Pixel Ratio — 1 CSS pixel me kitne physical pixels hain. Retina/high-DPI screens me 2 ya 3 hota hai — matlab 1080p jaisa dikhne wala phone asal me 2160+ pixels render karta hai.' },
    { q: 'Mera phone 4K bolta hai lekin yahan kam kyun dikha raha?', a: 'Browser CSS resolution dikhata hai (physical ÷ DPR). "Effective resolution" row me CSS × DPR — wahi aapka asli physical resolution hai.' },
    { q: 'Ye info kis kaam ki hai?', a: 'Website testing, screenshot sizes plan karne, support ko system info dene, ya monitor ki claimed vs actual resolution verify karne me.' },
  ],
};
