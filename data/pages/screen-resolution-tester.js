module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Your Screen (live)</div>
    <div class="stat-grid">
      <div class="stat"><div class="num" id="sr-screen">—</div><div class="lbl">Screen resolution</div></div>
      <div class="stat"><div class="num" id="sr-viewport">—</div><div class="lbl">Browser viewport</div></div>
      <div class="stat"><div class="num" id="sr-dpr">—</div><div class="lbl">Pixel ratio (DPR)</div></div>
      <div class="stat"><div class="num" id="sr-depth">—</div><div class="lbl">Color depth</div></div>
    </div>
    <div class="result-rows" style="margin-top:6px;">
      <div class="result-row"><span class="k">Effective resolution (CSS × DPR)</span><span class="v" id="sr-effective">—</span></div>
      <div class="result-row"><span class="k">Available screen (excluding taskbar)</span><span class="v" id="sr-avail">—</span></div>
      <div class="result-row"><span class="k">Orientation</span><span class="v" id="sr-orientation">—</span></div>
      <div class="result-row"><span class="k">Device type (approx.)</span><span class="v" id="sr-device">—</span></div>
    </div>
    <div style="font-size:12px;color:#B98E63;margin-top:6px;">💡 Try resizing the browser window — the viewport updates live.</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="sr-copy">Copy details</button>
</div>`,
  howto: [
    'All your screen details appear as soon as the page loads.',
    'Resize the browser window — the viewport size updates live.',
    'Use "Copy details" to copy all the info and send it to support/a developer.',
  ],
  faq: [
    { q: 'What\'s the difference between screen resolution and viewport?', a: 'Screen resolution is the full display size (e.g. 1920×1080). The viewport is the area inside the browser window where the website shows — excluding the taskbar, address bar, etc. For web designers, the viewport is what matters.' },
    { q: 'What is pixel ratio (DPR)?', a: 'Device Pixel Ratio — how many physical pixels make up 1 CSS pixel. On Retina/high-DPI screens it\'s 2 or 3 — meaning a phone that looks like 1080p actually renders 2160+ pixels.' },
    { q: 'My phone says 4K but this shows less — why?', a: 'The browser shows CSS resolution (physical ÷ DPR). The "Effective resolution" row shows CSS × DPR — that\'s your true physical resolution.' },
    { q: 'What is this info useful for?', a: 'Website testing, planning screenshot sizes, giving system info to support, or verifying a monitor\'s claimed vs actual resolution.' },
  ],
};
