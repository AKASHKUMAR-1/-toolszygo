module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Your Stats</div>
    <div class="field-row">
      <div class="field">
        <label for="mc-gender">Gender</label>
        <select id="mc-gender">
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div class="field">
        <label for="mc-age">Age</label>
        <input type="number" id="mc-age" value="28" min="15" max="90" step="1">
      </div>
    </div>
    <div class="field">
      <label for="mc-unit">Units</label>
      <select id="mc-unit">
        <option value="imperial" selected>Pounds &amp; feet/inches (US)</option>
        <option value="metric">Kilograms &amp; centimeters</option>
      </select>
    </div>
    <div class="field-row" id="mc-height-imperial">
      <div class="field">
        <label for="mc-feet">Height (feet)</label>
        <input type="number" id="mc-feet" value="5" min="3" max="8" step="1">
      </div>
      <div class="field">
        <label for="mc-inches">+ inches</label>
        <input type="number" id="mc-inches" value="10" min="0" max="11" step="1">
      </div>
    </div>
    <div class="field" id="mc-height-metric" style="display:none;">
      <label for="mc-cm">Height (cm)</label>
      <input type="number" id="mc-cm" value="178" min="100" max="250" step="1">
    </div>
    <div class="field">
      <label for="mc-weight">Weight (<span id="mc-weight-unit">lbs</span>)</label>
      <input type="number" id="mc-weight" value="170" min="50" step="1">
    </div>
    <div class="field">
      <label for="mc-activity">Activity Level</label>
      <select id="mc-activity">
        <option value="1.2">Sedentary (desk job, little exercise)</option>
        <option value="1.375" selected>Light (exercise 1-3 days/week)</option>
        <option value="1.55">Moderate (exercise 3-5 days/week)</option>
        <option value="1.725">Active (exercise 6-7 days/week)</option>
        <option value="1.9">Very active (physical job + training)</option>
      </select>
    </div>
    <div class="field">
      <label for="mc-goal">Goal</label>
      <select id="mc-goal">
        <option value="cut">Lose fat (cut) — −500 cal/day</option>
        <option value="maintain" selected>Maintain weight</option>
        <option value="bulk">Build muscle (bulk) — +300 cal/day</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Your Daily Targets</div>
    <div class="result-big" id="mc-calories">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Calories per day</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Protein</span><span class="v" id="mc-protein">—</span></div>
      <div class="result-row"><span class="k">Fat</span><span class="v" id="mc-fat">—</span></div>
      <div class="result-row"><span class="k">Carbs</span><span class="v" id="mc-carbs">—</span></div>
      <div class="result-row"><span class="k">Maintenance calories (TDEE)</span><span class="v" id="mc-tdee">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="mc-calc">Calculate macros</button>
  <button class="btn btn-secondary" id="mc-copy">Copy result</button>
</div>`,
  howto: [
    'Enter your gender, age, height and weight — in US units (lbs, feet/inches) or metric.',
    'Choose your real activity level (be honest — most people overestimate).',
    'Pick your goal: cut (lose fat), maintain, or bulk (build muscle).',
    'Click <strong>Calculate macros</strong> — get daily calories plus protein, fat and carb targets in grams.',
  ],
  faq: [
    { q: 'How are the macros calculated?', a: 'First your BMR is found with the Mifflin-St Jeor formula, multiplied by your activity level to get TDEE (maintenance calories). Your goal adjusts calories (−500 cut / +300 bulk). Then: protein = 0.8 g per lb of body weight, fat = 25% of calories, and carbs fill the remaining calories.' },
    { q: 'Why is protein so high?', a: 'A protein target near 0.7–1 g per lb of body weight helps preserve or build muscle — especially important in a calorie deficit. Protein is also the most filling macro, which makes dieting easier.' },
    { q: 'How fast will I lose weight on a 500-calorie deficit?', a: 'About 1 lb (0.45 kg) per week, since a pound of fat is roughly 3,500 calories. It\'s a sustainable pace that preserves muscle better than crash diets.' },
    { q: 'Do I need to hit these numbers exactly?', a: 'No — treat them as daily targets, not rules. Getting within ±5-10% consistently matters far more than nailing exact grams on any single day. Prioritize calories and protein; carbs and fat can flex.' },
  ],
};
