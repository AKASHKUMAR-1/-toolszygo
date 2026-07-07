module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Assignments</div>
    <div id="gr2-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="gr2-add">+ Assignment add karo</button>
    </div>
  </div>
</div>
<div class="workspace" style="margin-top:16px;">
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Current Grade</div>
    <div class="result-big" id="gr2-current">—</div>
    <div style="font-size:12.5px;color:#B98E63;">Ab tak ke assignments ke hisaab se</div>
  </div>
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Target Grade Planner</div>
    <div class="field">
      <label for="gr2-target">Final grade kitna chahiye? (%)</label>
      <input type="number" id="gr2-target" value="90" min="0" max="100">
    </div>
    <div class="field">
      <label for="gr2-remaining-weight">Bache hue kaam ka weight (%)</label>
      <input type="number" id="gr2-remaining-weight" value="30" min="0" max="100">
    </div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Bache hue kaam me chahiye</span><span class="v" id="gr2-needed">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Har assignment/exam ka naam, marks % aur weight (poore grade ka kitna hissa) daalo.',
    'Current weighted grade turant dikh jayega.',
    'Neeche target grade daalo — bache hue kaam me kitna % chahiye, wo calculate ho jayega.',
  ],
  faq: [
    { q: 'Weighted grade kaise calculate hota hai?', a: 'Har assignment ka (marks% × weight) jodo, phir total weight se divide karo. E.g. Midterm 80% (weight 30%) + Final 90% (weight 70%) = (80×30 + 90×70)/100 = 87%.' },
    { q: '"Bache hue kaam me kitna chahiye" kaise nikalta hai?', a: 'Target grade ke liye required total points minus ab tak kamaye points, divide by remaining weight — batata hai bache hue assignments/exams me average kitna % lana hoga.' },
    { q: 'Agar result 100% se zyada aaye to?', a: 'Matlab target grade ab possible nahi hai bache hue weight ke saath — realistic target set karo ya professor se extra credit ke baare me poochho.' },
  ],
};
