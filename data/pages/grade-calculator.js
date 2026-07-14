module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Assignments</div>
    <div id="gr2-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="gr2-add">+ Add assignment</button>
    </div>
  </div>
</div>
<div class="workspace" style="margin-top:16px;">
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Current Grade</div>
    <div class="result-big" id="gr2-current">—</div>
    <div style="font-size:12.5px;color:#B98E63;">Based on assignments so far</div>
  </div>
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Target Grade Planner</div>
    <div class="field">
      <label for="gr2-target">What final grade do you want? (%)</label>
      <input type="number" id="gr2-target" value="90" min="0" max="100">
    </div>
    <div class="field">
      <label for="gr2-remaining-weight">Weight of remaining work (%)</label>
      <input type="number" id="gr2-remaining-weight" value="30" min="0" max="100">
    </div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Needed on remaining work</span><span class="v" id="gr2-needed">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Enter each assignment/exam\'s name, marks %, and weight (its share of the overall grade).',
    'The current weighted grade appears instantly.',
    'Enter a target grade below — see what % you need on remaining work.',
  ],
  faq: [
    { q: 'How is weighted grade calculated?', a: 'Sum each assignment\'s (marks% × weight), then divide by total weight. E.g. Midterm 80% (weight 30%) + Final 90% (weight 70%) = (80×30 + 90×70)/100 = 87%.' },
    { q: 'How is "needed on remaining work" calculated?', a: 'Required total points for the target grade minus points earned so far, divided by remaining weight — this shows the average % needed on the remaining assignments/exams.' },
    { q: 'What if the result is over 100%?', a: 'It means the target grade is no longer achievable with the remaining weight — set a realistic target or ask your professor about extra credit.' },
  ],
};
