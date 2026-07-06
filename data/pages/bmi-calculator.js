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
      <div class="result-row"><span class="k">Aapke height ke liye healthy weight</span><span class="v" id="bmi-healthy">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="bmi-calc">Calculate BMI</button>
</div>`,
  howto: [
    'Apni height daalo — cm me ya feet+inches me (unit switch kar sakte ho).',
    'Apna weight kg me daalo.',
    '<strong>Calculate BMI</strong> dabao — BMI, category aur aapke height ke liye healthy weight range dikh jayegi.',
  ],
  faq: [
    { q: 'BMI kaise calculate hota hai?', a: 'BMI = weight (kg) ÷ height² (meters). E.g. 65 kg, 1.70 m: 65 ÷ 2.89 = 22.5. WHO categories: <18.5 underweight, 18.5–24.9 normal, 25–29.9 overweight, 30+ obese.' },
    { q: 'Kya BMI hamesha sahi hota hai?', a: 'BMI ek screening tool hai, diagnosis nahi. Muscular logo ka BMI zyada aa sakta hai bina fat ke. Asian populations ke liye kuch guidelines 23+ ko overweight maanti hain. Sahi assessment ke liye doctor se milo.' },
    { q: 'Ideal weight kaise nikale?', a: 'Healthy weight range = 18.5 × height² se 24.9 × height² (meters me). Ye tool aapke height ke liye ye range automatically dikha deta hai.' },
    { q: 'Bachon ka BMI isi se nikal sakte hain?', a: 'Formula same hai, lekin bachon (2–18 saal) me category age aur gender percentiles se decide hoti hai, adult cutoffs se nahi. Ye calculator adults ke liye hai.' },
  ],
};
