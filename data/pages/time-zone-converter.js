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
    'Date aur time daalo (default abhi ka time hai).',
    'From/To timezones choose karo — IST, EST, GMT, Dubai, Singapore, 25+ zones.',
    '<strong>Convert</strong> dabao — doosre zone ka exact time aur difference dikh jayega.',
  ],
  faq: [
    { q: 'IST aur EST me kitna difference hai?', a: 'IST, EST (New York winter) se 10.5 ghante aage hai; daylight saving (EDT, summer) me 9.5 ghante. Ye tool DST automatically handle karta hai — isliye manual +/- karne se zyada accurate hai.' },
    { q: 'Daylight saving time (DST) handle hota hai?', a: 'Haan — browser ka timezone database use hota hai jo DST rules janta hai. US/Europe ke zones me summer-winter ka difference khud adjust ho jaata hai.' },
    { q: 'Meeting time plan karne ke liye kaise use karein?', a: 'Apna proposed time IST me daalo, To me client ka zone choose karo — unka local time dikh jayega. 9 AM–6 PM me aata hai to meeting set karo.' },
    { q: 'India me DST kyun nahi hota?', a: 'India equator ke paas hai isliye seasons me daylight ka difference kam hota hai — DST ka fayda nahi. IST saal bhar UTC+5:30 rehta hai.' },
  ],
};
