module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Enter any 2, get the third</div>
    <div class="field">
      <label for="rp-distance">Distance (km)</label>
      <input type="number" id="rp-distance" placeholder="e.g. 5" step="0.01">
    </div>
    <div class="field-row">
      <div class="field"><label for="rp-hours">Time — Hours</label><input type="number" id="rp-hours" placeholder="0" min="0"></div>
      <div class="field"><label for="rp-mins">Minutes</label><input type="number" id="rp-mins" placeholder="25" min="0" max="59"></div>
      <div class="field"><label for="rp-secs">Seconds</label><input type="number" id="rp-secs" placeholder="0" min="0" max="59"></div>
    </div>
    <div class="field">
      <label for="rp-pace">Pace (min per km)</label>
      <input type="text" id="rp-pace" placeholder="e.g. 5:00">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-rows">
      <div class="result-row"><span class="k">Pace</span><span class="v" id="rp-out-pace">—</span></div>
      <div class="result-row"><span class="k">Total Time</span><span class="v" id="rp-out-time">—</span></div>
      <div class="result-row"><span class="k">Distance</span><span class="v" id="rp-out-dist">—</span></div>
    </div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">5K predicted time</span><span class="v" id="rp-5k">—</span></div>
      <div class="result-row"><span class="k">10K predicted time</span><span class="v" id="rp-10k">—</span></div>
      <div class="result-row"><span class="k">Half Marathon (21.1K)</span><span class="v" id="rp-half">—</span></div>
      <div class="result-row"><span class="k">Full Marathon (42.2K)</span><span class="v" id="rp-full">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Enter Distance and Time — pace is calculated automatically (or fill any 2 fields).',
    'Your current pace also gives predicted times for 5K, 10K, Half, and Full marathon.',
    'Perfect for race planning — find out what speed to run for your target time.',
  ],
  faq: [
    { q: 'What is pace?', a: 'Pace is how long it takes to run 1 km (or 1 mile) — like "5:30 min/km". It\'s the inverse of speed (km/h).' },
    { q: 'How accurate are the predicted times?', a: 'This is an estimate based on the Riegel formula — it assumes you can maintain consistent effort. In longer races, endurance/fueling also play a role, so the actual time may differ slightly.' },
    { q: 'What\'s a good pace for beginners?', a: 'There\'s no "right" pace — start at your conversational pace (where you can still talk) and gradually increase speed. Consistency matters more than speed at the start.' },
  ],
};
