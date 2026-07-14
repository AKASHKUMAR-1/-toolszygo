module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Measurements (cm me)</div>
    <div class="field">
      <label for="bf-gender">Gender</label>
      <select id="bf-gender"><option value="male" selected>Male</option><option value="female">Female</option></select>
    </div>
    <div class="field-row">
      <div class="field"><label for="bf-height">Height</label><input type="number" id="bf-height" value="170" min="100" max="250"></div>
      <div class="field"><label for="bf-neck">Neck</label><input type="number" id="bf-neck" value="38" min="20" max="60"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="bf-waist">Waist (at navel)</label><input type="number" id="bf-waist" value="85" min="40" max="200"></div>
      <div class="field" id="bf-hip-row" style="display:none;"><label for="bf-hip">Hip</label><input type="number" id="bf-hip" value="95" min="40" max="200"></div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="bf-result">—</div>
    <div style="font-size:14px;font-weight:600;" id="bf-category">—</div>
    <div style="font-size:12px;color:#A39C8B;margin-top:8px;">Method: US Navy Body Fat Formula</div>
  </div>
</div>`,
  howto: [
    'Choose gender — the measurements needed differ.',
    'Measure your height, neck, and waist (around the navel) in cm. Women also need hip measurement.',
    'The result instantly shows body fat % and category.',
  ],
  faq: [
    { q: 'What is the US Navy method?', a: 'This is the US Navy\'s official body-fat estimation formula, calculated from the circumference of the neck, waist (and hip for women) — using just a measuring tape, no machine or caliper needed.' },
    { q: 'How accurate is it?', a: 'It can be off by ~3-4% compared to lab methods like a DEXA scan, but it\'s considered the most reliable of the home-measurement methods.' },
    { q: 'What is a healthy body fat percentage?', a: 'Men: 10-20% is a healthy range. Women: 18-28% is a healthy range (women naturally have more essential fat). Athletes can be lower than this.' },
  ],
};
