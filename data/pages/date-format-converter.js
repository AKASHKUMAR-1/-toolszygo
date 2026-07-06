module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="df-date">Date</label>
      <input type="date" id="df-date">
    </div>
    <div class="field">
      <label for="df-time">Time (optional)</label>
      <input type="time" id="df-time">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">All Formats</div>
    <div class="result-rows" id="df-results">
      <div class="result-row"><span class="k">DD/MM/YYYY</span><span class="v" id="df-dmy">—</span></div>
      <div class="result-row"><span class="k">MM/DD/YYYY (US)</span><span class="v" id="df-mdy">—</span></div>
      <div class="result-row"><span class="k">YYYY-MM-DD (ISO)</span><span class="v" id="df-iso">—</span></div>
      <div class="result-row"><span class="k">DD-MMM-YYYY</span><span class="v" id="df-dmmm">—</span></div>
      <div class="result-row"><span class="k">Long format</span><span class="v" id="df-long">—</span></div>
      <div class="result-row"><span class="k">Day of week</span><span class="v" id="df-day">—</span></div>
      <div class="result-row"><span class="k">ISO 8601 (full)</span><span class="v" id="df-iso-full" style="font-size:12px;">—</span></div>
      <div class="result-row"><span class="k">Unix timestamp</span><span class="v" id="df-unix">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="df-today">Aaj ki date</button>
  <button class="btn btn-secondary" id="df-copy">Copy all</button>
</div>`,
  howto: [
    'Date select karo (time optional hai).',
    'Saare common formats ek saath dikh jayenge — DD/MM/YYYY, US format, ISO, long format, Unix timestamp.',
    'Jo format chahiye copy kar lo.',
  ],
  faq: [
    { q: 'DD/MM/YYYY aur MM/DD/YYYY me confusion kaise bache?', a: 'India/UK me DD/MM/YYYY chalta hai, US me MM/DD/YYYY. 04/07/2026 India me 4 July hai, US me April 7! International documents me confusion se bachne ke liye ISO format (2026-07-04) ya "4 Jul 2026" likho.' },
    { q: 'ISO 8601 format kya hai?', a: 'International standard: YYYY-MM-DD (e.g. 2026-07-04). Sorting me sahi order me aata hai aur duniya me kahin bhi ambiguous nahi hai. Databases aur APIs isi format ko use karte hain.' },
    { q: 'Unix timestamp kya hota hai?', a: '1 January 1970 UTC se ab tak ke seconds. Programming me time store karne ka standard tarika. E.g. 1782172800 = 23 June 2026.' },
    { q: 'Time optional kyun hai?', a: 'Sirf date chahiye to time chhod do — timestamp midnight (00:00) ka banega. Exact moment ka timestamp chahiye to time bhi daalo.' },
  ],
};
