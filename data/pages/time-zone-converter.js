module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="tz-datetime">Date &amp; Time</label>
      <input type="datetime-local" id="tz-datetime">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="tz-from">From timezone</label>
        <select id="tz-from"></select>
      </div>
      <div class="field">
        <label for="tz-to">To timezone</label>
        <select id="tz-to"></select>
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="tz-result" style="font-size:26px;">—</div>
    <div style="font-size:13px;color:#B98E63;" id="tz-detail"></div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Time difference</span><span class="v" id="tz-diff">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="tz-convert">Convert time</button>
  <button class="btn btn-secondary" id="tz-swap">⇄ Swap zones</button>
</div>`,
  howto: [
    'Enter the date and time (defaults to the current time).',
    'Choose the From/To timezones — IST, EST, GMT, Dubai, Singapore, 25+ zones.',
    'Click <strong>Convert</strong> — see the exact time in the other zone and the difference.',
  ],
  faq: [
    { q: 'What\'s the difference between IST and EST?', a: 'IST is 10.5 hours ahead of EST (New York winter); 9.5 hours ahead during daylight saving (EDT, summer). This tool handles DST automatically — so it\'s more accurate than manually adding/subtracting.' },
    { q: 'Is daylight saving time (DST) handled?', a: 'Yes — the browser\'s timezone database is used, which knows DST rules. The summer-winter difference in US/Europe zones adjusts automatically.' },
    { q: 'How do I use this to plan a meeting time?', a: 'Enter your proposed time in IST, choose the client\'s zone in To — their local time appears. If it falls within 9 AM–6 PM, set the meeting.' },
    { q: 'Why doesn\'t India observe DST?', a: 'India is close to the equator, so the seasonal difference in daylight is small — DST offers no benefit. IST stays UTC+5:30 all year.' },
  ],
};
