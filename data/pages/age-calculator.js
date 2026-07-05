module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="age-dob">Date of Birth</label>
      <input type="date" id="age-dob">
    </div>
    <div class="field">
      <label for="age-on">Age on date (default: aaj)</label>
      <input type="date" id="age-on">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="age-result">—</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total months</span><span class="v" id="age-months">—</span></div>
      <div class="result-row"><span class="k">Total weeks</span><span class="v" id="age-weeks">—</span></div>
      <div class="result-row"><span class="k">Total days</span><span class="v" id="age-days">—</span></div>
      <div class="result-row"><span class="k">Next birthday</span><span class="v" id="age-next">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="age-calc">Calculate age</button>
</div>`,
  howto: [
    'Apni date of birth select karo.',
    'Agar kisi specific date pe age chahiye to "Age on date" bhi set karo — warna aaj ki date default hai.',
    '<strong>Calculate age</strong> dabao — exact age years, months, days me + next birthday countdown mil jayega.',
  ],
  faq: [
    { q: 'Age kaise calculate hoti hai?', a: 'Calendar-accurate method se: pehle poore years count hote hain, phir bache hue poore months, phir bache hue din — leap years automatically handle hote hain.' },
    { q: 'Kya ye government forms ke liye sahi age deta hai?', a: 'Haan — ye wahi standard calendar age hai jo forms, exams aur official documents me use hoti hai (completed years as on date).' },
    { q: 'Leap year (29 Feb) wale birthday ka kya?', a: '29 Feb ko born logo ka next birthday non-leap years me 1 March count hota hai — tool ye automatically handle karta hai.' },
    { q: 'Kya main future date pe age nikal sakta hoon?', a: 'Haan — "Age on date" me koi bhi future date daalo, e.g. exam ki cutoff date pe aapki exact age.' },
  ],
};
