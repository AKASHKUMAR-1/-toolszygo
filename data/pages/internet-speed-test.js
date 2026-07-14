module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel panel-result" style="min-height:0;align-items:center;">
    <div class="panel-label" style="align-self:flex-start;">Speed Test</div>
    <div class="result-big" id="st-speed" style="font-size:48px;">—</div>
    <div style="font-size:13px;color:#B98E63;">Mbps download</div>
    <div class="stat-grid" style="width:100%;margin-top:10px;">
      <div class="stat"><div class="num" id="st-ping">—</div><div class="lbl">Ping (ms)</div></div>
      <div class="stat"><div class="num" id="st-mbs">—</div><div class="lbl">MB/s</div></div>
      <div class="stat"><div class="num" id="st-verdict" style="font-size:15px;">—</div><div class="lbl">Verdict</div></div>
    </div>
    <div id="st-status" style="font-size:13px;font-weight:600;color:#B98E63;margin-top:8px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="st-start">▶ Start speed test</button>
</div>`,
  howto: [
    'Click <strong>Start speed test</strong> — ping is measured first, then download speed (~15 seconds).',
    'Pause downloads/streaming during the test for an accurate reading.',
    'The result is in Mbps — the same unit used by internet plans.',
  ],
  faq: [
    { q: 'What\'s the difference between Mbps and MB/s?', a: 'Mbps = megaBITS per second (the unit internet plans use), MB/s = megaBYTES per second (used by download managers). 8 Mbps = 1 MB/s. A 100 Mbps plan = max ~12.5 MB/s download.' },
    { q: 'My plan is 100 Mbps, why is the speed lower?', a: 'WiFi distance/interference, an old router, multiple devices at once, or server load. Test near the router or with a LAN cable. Getting 80-90% of your plan speed is normal.' },
    { q: 'How does this test work?', a: 'It downloads data from Cloudflare\'s speed test servers and measures the time taken. Ping is derived from the latency of small requests.' },
  ],
};
