module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Courses</div>
    <div id="gpa-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="gpa-add">+ Course add karo</button>
    </div>
  </div>
</div>
<div class="panel panel-result" style="margin-top:16px;min-height:0;">
  <div class="panel-label">Result</div>
  <div class="result-big" id="gpa-result">—</div>
  <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">GPA (4.0 scale)</div>
  <div class="result-rows" style="margin-top:8px;">
    <div class="result-row"><span class="k">Total credit hours</span><span class="v" id="gpa-credits">—</span></div>
    <div class="result-row"><span class="k">Total quality points</span><span class="v" id="gpa-points">—</span></div>
  </div>
</div>`,
  howto: [
    'Har course ka letter grade aur credit hours daalo.',
    '"+ Course add karo" se aur rows add karo.',
    'Overall GPA (4.0 scale) live calculate hota rahega.',
  ],
  faq: [
    { q: 'Letter grades ke points kya hain?', a: 'A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D=1.0, F=0.0 — ye standard US 4.0 scale hai.' },
    { q: 'GPA kaise calculate hoti hai?', a: 'Har course ke grade-points ko uske credit hours se multiply karo (quality points), sabko jodo, phir total credit hours se divide karo.' },
    { q: 'India ki CGPA se ye alag kaise hai?', a: 'India me zyada tar 10-point scale use hoti hai, US me 4.0-point. Humara CGPA to Percentage tool India-style ke liye hai, ye tool US-style universities ke liye hai.' },
  ],
};
