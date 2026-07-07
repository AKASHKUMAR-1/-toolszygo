module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="ov-lastperiod">Last Period ki pehli tarikh</label>
      <input type="date" id="ov-lastperiod">
    </div>
    <div class="field">
      <label for="ov-cycle">Average cycle length (days)</label>
      <input type="number" id="ov-cycle" value="28" min="20" max="45">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="ov-date">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Estimated ovulation date</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Fertile window (sabse zyada chance)</span><span class="v" id="ov-window">—</span></div>
      <div class="result-row"><span class="k">Agla expected period</span><span class="v" id="ov-nextperiod">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Last period ki pehli tarikh daalo aur average cycle length set karo.',
    'Ovulation date, fertile window (jab conceive hone ke chances sabse zyada hote hain) aur agla period turant mil jayega.',
  ],
  faq: [
    { q: 'Ovulation kya hai?', a: 'Ovary se ek matured egg release hona — ye typically agle period se 14 din pehle hota hai. Isi ke around 5-6 din conceive hone ke liye sabse best hote hain.' },
    { q: 'Fertile window kya hota hai?', a: 'Ovulation se 5 din pehle se ovulation ke din tak — sperm 5 din tak zinda reh sakta hai, isliye ye poora window fertile maana jaata hai.' },
    { q: 'Irregular cycles wale iska use kar sakte hain?', a: 'Irregular cycles me estimate kam accurate hota hai. Basal body temperature ya ovulation kits zyada reliable rahenge — ye tool ek starting point ke liye hai.' },
  ],
};
