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
    <div class="panel-label">Ideal Weight (formula ke hisaab se)</div>
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
    'Gender aur height daalo.',
    '4 standard medical formulas se ideal weight turant calculate ho jayegi — sabka average bhi dikhega.',
  ],
  faq: [
    { q: 'Ye 4 formulas alag result kyun dete hain?', a: 'Har formula alag dashak me alag population data se banaya gaya tha — thoda variation normal hai. Isliye average lena sabse balanced approach hai.' },
    { q: 'Kya body frame (patla/moti haddi) ka effect hota hai?', a: 'Haan — ye formulas sirf height pe based hain, body frame/muscle mass consider nahi karte. Athletic build wale logo ka "ideal" weight formula se zyada ho sakta hai aur ye bilkul normal hai.' },
    { q: 'BMI aur ideal weight me kya farak hai?', a: 'BMI ek range deta hai (healthy 18.5-24.9), ideal weight calculators ek specific number dete hain. Dono ko saath me dekhna better hota hai.' },
  ],
};
