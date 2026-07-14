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
        <option value="1.2">Sedentary (desk job, no exercise)</option>
        <option value="1.375">Light activity (exercise 1-3 days/week)</option>
        <option value="1.55" selected>Moderate activity (3-5 days/week)</option>
        <option value="1.725">Very active (6-7 days/week)</option>
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
      <div class="result-row"><span class="k">BMR (resting calories)</span><span class="v" id="cal-bmr">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Enter age, gender, height, and weight.',
    'Choose your daily activity level — from desk job to heavy exercise.',
    'Get daily calories instantly for maintenance, weight-loss, and weight-gain.',
  ],
  faq: [
    { q: 'How are calorie needs calculated?', a: 'BMR is calculated first (Mifflin-St Jeor formula), then multiplied by activity level to get TDEE (Total Daily Energy Expenditure) — this is your maintenance calories.' },
    { q: 'How many calories should I cut to lose weight?', a: 'For a healthy loss of 0.5 kg/week, eat ~500 calories below maintenance. Don\'t cut more than this — it can cause muscle loss and fatigue.' },
    { q: 'Is this number exact?', a: 'This is a scientific estimate — your actual body metabolism may differ slightly. Try it for 2 weeks, track your weight, then adjust calories based on your results.' },
  ],
};
