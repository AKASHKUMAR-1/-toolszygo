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
      <div class="field"><label for="bf-waist">Waist (navel se)</label><input type="number" id="bf-waist" value="85" min="40" max="200"></div>
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
    'Gender choose karo — measurements alag hote hain.',
    'Height, neck aur waist (navel ke around) measure karo (cm me). Female ho to hip bhi chahiye.',
    'Result turant body fat % aur category dikha dega.',
  ],
  faq: [
    { q: 'US Navy method kya hai?', a: 'Ye US Navy ka official body-fat estimation formula hai jo neck, waist (aur females ke liye hip) ke circumference se calculate hota hai — bina kisi machine/caliper ke, sirf measuring tape se.' },
    { q: 'Kitna accurate hai?', a: 'DEXA scan jaisi lab methods se ~3-4% margin ho sakta hai, lekin home-measurement methods me ye sabse reliable maana jaata hai.' },
    { q: 'Healthy body fat % kitna hota hai?', a: 'Men: 10-20% healthy range. Women: 18-28% healthy range (women ka essential fat naturally zyada hota hai). Athletes isse kam bhi ho sakte hain.' },
  ],
};
