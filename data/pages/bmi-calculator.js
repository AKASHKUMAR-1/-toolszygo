module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field-row">
      <div class="field">
        <label for="bmi-height">Height</label>
        <input type="number" id="bmi-height" value="170" min="50" max="272" step="0.5">
      </div>
      <div class="field">
        <label for="bmi-height-unit">Unit</label>
        <select id="bmi-height-unit">
          <option value="cm" selected>cm</option>
          <option value="ftin">feet + inches</option>
        </select>
      </div>
    </div>
    <div class="field-row" id="bmi-ftin-row" style="display:none;">
      <div class="field">
        <label for="bmi-feet">Feet</label>
        <input type="number" id="bmi-feet" value="5" min="1" max="8" step="1">
      </div>
      <div class="field">
        <label for="bmi-inches">Inches</label>
        <input type="number" id="bmi-inches" value="7" min="0" max="11" step="1">
      </div>
    </div>
    <div class="field">
      <label for="bmi-weight">Weight (kg)</label>
      <input type="number" id="bmi-weight" value="65" min="10" max="400" step="0.5">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="bmi-result">—</div>
    <div style="font-size:14px;font-weight:600;" id="bmi-category">—</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Healthy BMI range</span><span class="v">18.5 – 24.9</span></div>
      <div class="result-row"><span class="k">Healthy weight for your height</span><span class="v" id="bmi-healthy">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="bmi-calc">Calculate BMI</button>
</div>`,
  howto: [
    'Enter your height — in cm or feet+inches (you can switch units).',
    'Enter your weight in kg.',
    'Click <strong>Calculate BMI</strong> — get your BMI, category, and a healthy weight range for your height.',
  ],
  faq: [
    { q: 'How is BMI calculated?', a: 'BMI = weight (kg) ÷ height² (meters). E.g. 65 kg, 1.70 m: 65 ÷ 2.89 = 22.5. WHO categories: under 18.5 underweight, 18.5–24.9 normal, 25–29.9 overweight, 30+ obese.' },
    { q: 'Is BMI always accurate?', a: 'BMI is a screening tool, not a diagnosis. Muscular people can have a higher BMI without excess fat. Some guidelines for Asian populations consider 23+ as overweight. See a doctor for a proper assessment.' },
    { q: 'How is ideal weight calculated?', a: 'Healthy weight range = 18.5 × height² to 24.9 × height² (in meters). This tool automatically shows this range for your height.' },
    { q: 'Can I use this for a child\'s BMI?', a: 'The formula is the same, but for children (2–18 years) the category is determined by age and gender percentiles, not adult cutoffs. This calculator is for adults.' },
  ],
};
