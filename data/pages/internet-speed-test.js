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
    '<strong>Start speed test</strong> dabao — pehle ping, phir download speed measure hoti hai (~15 second).',
    'Test ke dauraan downloads/streaming band rakho — sahi reading milegi.',
    'Result Mbps me aata hai — wahi unit jo internet plans me hoti hai.',
  ],
  faq: [
    { q: 'Mbps aur MB/s me kya difference hai?', a: 'Mbps = megaBITS per second (internet plans ki unit), MB/s = megaBYTES per second (download manager wali). 8 Mbps = 1 MB/s. 100 Mbps plan = max ~12.5 MB/s download.' },
    { q: 'Plan 100 Mbps ka hai, speed kam kyun aa rahi?', a: 'WiFi distance/interference, purana router, ek saath kai devices, ya server load. Router ke paas jaakar ya LAN cable se test karo. 80-90% speed milna normal hai.' },
    { q: 'Ye test kaise kaam karta hai?', a: 'Cloudflare ke speed test servers se data download karke time measure hota hai. Ping chhoti requests ki latency se nikalti hai.' },
  ],
};
