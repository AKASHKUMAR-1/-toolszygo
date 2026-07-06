(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  async function ping() {
    var times = [];
    for (var i = 0; i < 5; i++) {
      var t0 = performance.now();
      try {
        await fetch('https://speed.cloudflare.com/__down?bytes=0&r=' + Math.random(), { cache: 'no-store' });
        times.push(performance.now() - t0);
      } catch (e) { /* skip */ }
    }
    if (!times.length) return null;
    times.sort(function (a, b) { return a - b; });
    return Math.round(times[0]);
  }

  async function download() {
    // progressive: 1MB warmup, then 10MB, then 25MB if fast
    var sizes = [1000000, 10000000];
    var bestMbps = 0;
    for (var i = 0; i < sizes.length; i++) {
      var bytes = sizes[i];
      $('st-status').textContent = 'Download test ' + (i + 1) + '/2 chal raha hai…';
      var t0 = performance.now();
      var res = await fetch('https://speed.cloudflare.com/__down?bytes=' + bytes + '&r=' + Math.random(), { cache: 'no-store' });
      var reader = res.body.getReader();
      var received = 0;
      while (true) {
        var chunk = await reader.read();
        if (chunk.done) break;
        received += chunk.value.length;
      }
      var secs = (performance.now() - t0) / 1000;
      var mbps = (received * 8) / secs / 1000000;
      if (mbps > bestMbps) bestMbps = mbps;
      // if slow connection, don't download more
      if (mbps < 5) break;
    }
    return bestMbps;
  }

  $('st-start').addEventListener('click', async function () {
    var btn = this;
    btn.disabled = true;
    $('st-speed').textContent = '…';
    $('st-ping').textContent = '—';
    $('st-mbs').textContent = '—';
    $('st-verdict').textContent = '—';
    try {
      $('st-status').textContent = 'Ping check ho raha hai…';
      var p = await ping();
      if (p !== null) $('st-ping').textContent = p;
      var mbps = await download();
      var rounded = mbps >= 100 ? Math.round(mbps) : Math.round(mbps * 10) / 10;
      $('st-speed').textContent = rounded;
      $('st-mbs').textContent = (Math.round(mbps / 8 * 10) / 10);
      var verdict = mbps >= 100 ? 'Zabardast 🚀' : mbps >= 40 ? 'Bahut achhi 👍' : mbps >= 15 ? 'Theek-thaak' : mbps >= 5 ? 'Slow 🐢' : 'Bahut slow';
      $('st-verdict').textContent = verdict;
      $('st-status').textContent = '✓ Test complete — dobara chala kar average dekh sakte ho';
    } catch (e) {
      $('st-status').textContent = 'Test fail ho gaya — internet check karke dobara try karo';
      $('st-speed').textContent = '—';
    }
    btn.disabled = false;
  });
})();
