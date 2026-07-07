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
    'Age, gender, height aur weight daalo.',
    'BMR turant calculate ho jayega — ye wo calories hain jo aapka body bina kuch kiye, sirf zinda rehne ke liye kharch karta hai.',
    'Alag-alag activity levels ke liye estimated daily needs bhi neeche dikh jayenge.',
  ],
  faq: [
    { q: 'BMR kya hota hai?', a: 'Basal Metabolic Rate — agar aap poora din bistar pe lete rahein, tab bhi breathing, digestion, blood circulation ke liye jitni calories chahiye, wahi BMR hai.' },
    { q: 'BMR aur TDEE me kya farak hai?', a: 'BMR sirf resting calories hai. TDEE (Total Daily Energy Expenditure) me daily activities/exercise ki calories bhi jud jaati hain — TDEE hamesha BMR se zyada hoga.' },
    { q: 'Kaunsa formula use hota hai?', a: 'Mifflin-St Jeor formula — ye Harris-Benedict se zyada accurate maana jaata hai aur aajkal dietitians isi ko recommend karte hain.' },
  ],
};
