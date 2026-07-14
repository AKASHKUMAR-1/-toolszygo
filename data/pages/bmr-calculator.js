module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field-row">
      <div class="field"><label for="bmr-age">Age</label><input type="number" id="bmr-age" value="28" min="10" max="100"></div>
      <div class="field"><label for="bmr-gender">Gender</label><select id="bmr-gender"><option value="male" selected>Male</option><option value="female">Female</option></select></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="bmr-height">Height (cm)</label><input type="number" id="bmr-height" value="170" min="100" max="250"></div>
      <div class="field"><label for="bmr-weight">Weight (kg)</label><input type="number" id="bmr-weight" value="65" min="30" max="250"></div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="bmr-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Calories/day (BMR)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Sedentary lifestyle</span><span class="v" id="bmr-sed">—</span></div>
      <div class="result-row"><span class="k">Moderately active</span><span class="v" id="bmr-mod">—</span></div>
      <div class="result-row"><span class="k">Very active</span><span class="v" id="bmr-active">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Enter age, gender, height, and weight.',
    'BMR is calculated instantly — this is the calories your body burns just to stay alive, without doing anything.',
    'Estimated daily needs for different activity levels appear below too.',
  ],
  faq: [
    { q: 'What is BMR?', a: 'Basal Metabolic Rate — the calories your body needs for breathing, digestion, and blood circulation even if you stayed in bed all day.' },
    { q: 'What\'s the difference between BMR and TDEE?', a: 'BMR is just resting calories. TDEE (Total Daily Energy Expenditure) adds calories from daily activities/exercise on top — TDEE is always higher than BMR.' },
    { q: 'Which formula is used?', a: 'The Mifflin-St Jeor formula — considered more accurate than Harris-Benedict, and the one dietitians recommend today.' },
  ],
};
