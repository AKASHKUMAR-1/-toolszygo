module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Koi bhi 2 daalo, teesra mil jayega</div>
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
    'Distance aur Time daalo — pace khud calculate ho jayega (ya koi bhi 2 fields bharo).',
    'Aapke current pace se 5K, 10K, Half aur Full marathon ka predicted time bhi dikh jayega.',
    'Race planning ke liye perfect — pata chalega kis speed pe daudna hai target time ke liye.',
  ],
  faq: [
    { q: 'Pace kya hota hai?', a: 'Pace matlab 1 km (ya 1 mile) daudne me kitna time lagta hai — jaise "5:30 min/km". Speed (km/h) ka ulta concept hai.' },
    { q: 'Predicted times kitne accurate hain?', a: 'Ye Riegel formula pe based estimate hai — assume karta hai ki aap consistent effort maintain kar sakte ho. Lambi races me endurance/fueling ka bhi role hota hai, isliye actual time thoda alag ho sakta hai.' },
    { q: 'Beginners ke liye achha pace kya hai?', a: 'Koi "sahi" pace nahi hota — apni conversation pace (jaha baat kar sako) se shuru karo, dheere-dheere speed badhao. Consistency speed se zyada important hai shuru me.' },
  ],
};
