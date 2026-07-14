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
  <button class="btn btn-secondary" id="df-today">Today's date</button>
  <button class="btn btn-secondary" id="df-copy">Copy all</button>
</div>`,
  howto: [
    'Select a date (time is optional).',
    'All common formats appear at once — DD/MM/YYYY, US format, ISO, long format, Unix timestamp.',
    'Copy whichever format you need.',
  ],
  faq: [
    { q: 'How do I avoid confusion between DD/MM/YYYY and MM/DD/YYYY?', a: 'India/UK use DD/MM/YYYY, the US uses MM/DD/YYYY. 04/07/2026 is July 4 in India, but April 7 in the US! To avoid confusion in international documents, write the ISO format (2026-07-04) or "4 Jul 2026".' },
    { q: 'What is ISO 8601 format?', a: 'The international standard: YYYY-MM-DD (e.g. 2026-07-04). It sorts correctly and is unambiguous anywhere in the world. Databases and APIs use this format.' },
    { q: 'What is a Unix timestamp?', a: 'Seconds elapsed since January 1, 1970 UTC. The standard way programming stores time. E.g. 1782172800 = June 23, 2026.' },
    { q: 'Why is time optional?', a: 'If you only need the date, leave time blank — the timestamp will be for midnight (00:00). Add the time if you need the timestamp for an exact moment.' },
  ],
};
