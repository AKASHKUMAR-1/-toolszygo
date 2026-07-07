module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field-row">
      <div class="field"><label for="cal-age">Age</label><input type="number" id="cal-age" value="28" min="10" max="100"></div>
      <div class="field"><label for="cal-gender">Gender</label><select id="cal-gender"><option value="male" selected>Male</option><option value="female">Female</option></select></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="cal-height">Height (cm)</label><input type="number" id="cal-height" value="170" min="100" max="250"></div>
      <div class="field"><label for="cal-weight">Weight (kg)</label><input type="number" id="cal-weight" value="65" min="30" max="250"></div>
    </div>
    <div class="field">
      <label for="cal-activity">Activity Level</label>
      <select id="cal-activity">
        <option value="1.2">Sedentary (kaam desk pe, exercise nahi)</option>
        <option value="1.375">Light activity (hafte me 1-3 din exercise)</option>
        <option value="1.55" selected>Moderate activity (hafte me 3-5 din)</option>
        <option value="1.725">Very active (hafte me 6-7 din)</option>
        <option value="1.9">Extra active (physical job + daily exercise)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="cal-maintain">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maintenance calories/day</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Weight loss (0.5 kg/week)</span><span class="v" id="cal-lose">—</span></div>
      <div class="result-row"><span class="k">Weight gain (0.5 kg/week)</span><span class="v" id="cal-gain">—</span></div>
      <div class="result-row"><span class="k">BMR (aaraam ki calories)</span><span class="v" id="cal-bmr">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Age, gender, height aur weight daalo.',
    'Apni daily activity level choose karo — desk job se lekar heavy exercise tak.',
    'Maintenance, weight-loss aur weight-gain — teeno ke liye daily calories turant mil jayengi.',
  ],
  faq: [
    { q: 'Calorie needs kaise calculate hoti hain?', a: 'Pehle BMR (Mifflin-St Jeor formula) nikalta hai, phir activity level se multiply karke TDEE (Total Daily Energy Expenditure) milta hai — yehi aapki maintenance calories hai.' },
    { q: 'Weight kam karne ke liye kitni calories kam karein?', a: '0.5 kg/week healthy loss ke liye maintenance se ~500 calories kam khao. Isse zyada kam mat karo — muscle loss aur thakaan ho sakti hai.' },
    { q: 'Kya ye number bilkul exact hai?', a: 'Ye ek scientific estimate hai — asli body metabolism thoda alag ho sakta hai. 2 hafte try karo, weight track karo, phir calories adjust karo apne result ke hisaab se.' },
  ],
};
