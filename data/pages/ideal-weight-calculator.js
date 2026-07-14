module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="iw-gender">Gender</label>
      <select id="iw-gender"><option value="male" selected>Male</option><option value="female">Female</option></select>
    </div>
    <div class="field">
      <label for="iw-height">Height (cm)</label>
      <input type="number" id="iw-height" value="170" min="120" max="230">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Ideal Weight (by formula)</div>
    <div class="result-rows">
      <div class="result-row"><span class="k">Devine Formula</span><span class="v" id="iw-devine">—</span></div>
      <div class="result-row"><span class="k">Robinson Formula</span><span class="v" id="iw-robinson">—</span></div>
      <div class="result-row"><span class="k">Miller Formula</span><span class="v" id="iw-miller">—</span></div>
      <div class="result-row"><span class="k">Hamwi Formula</span><span class="v" id="iw-hamwi">—</span></div>
    </div>
    <div class="result-big" id="iw-average" style="margin-top:10px;">—</div>
    <div style="font-size:12.5px;color:#B98E63;">Average estimate</div>
  </div>
</div>`,
  howto: [
    'Enter gender and height.',
    'Ideal weight is calculated instantly using 4 standard medical formulas — with an average shown too.',
  ],
  faq: [
    { q: 'Why do these 4 formulas give different results?', a: 'Each formula was built in a different decade using different population data — some variation is normal. Taking the average is the most balanced approach.' },
    { q: 'Does body frame (small/large) matter?', a: 'Yes — these formulas are based only on height and don\'t account for body frame/muscle mass. An athletic build person\'s "ideal" weight can exceed the formula\'s number, and that\'s completely normal.' },
    { q: 'What\'s the difference between BMI and ideal weight?', a: 'BMI gives a range (healthy 18.5-24.9), ideal weight calculators give a specific number. It\'s better to look at both together.' },
  ],
};
