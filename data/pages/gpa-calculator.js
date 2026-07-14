module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Courses</div>
    <div id="gpa-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="gpa-add">+ Add course</button>
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
    'Enter each course\'s letter grade and credit hours.',
    'Use "+ Add course" to add more rows.',
    'Overall GPA (4.0 scale) is calculated live.',
  ],
  faq: [
    { q: 'What are the points for letter grades?', a: 'A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D=1.0, F=0.0 — this is the standard US 4.0 scale.' },
    { q: 'How is GPA calculated?', a: 'Multiply each course\'s grade points by its credit hours (quality points), sum them all, then divide by total credit hours.' },
    { q: 'How is this different from India\'s CGPA?', a: 'India mostly uses a 10-point scale, the US uses 4.0-point. Our CGPA to Percentage tool is for India-style scoring; this one is for US-style universities.' },
  ],
};
