module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Marks</div>
    <div class="field">
      <label for="rp-obtained">Obtained Marks (total)</label>
      <input type="number" id="rp-obtained" value="425" min="0" step="1">
    </div>
    <div class="field">
      <label for="rp-total">Maximum Marks (total)</label>
      <input type="number" id="rp-total" value="500" min="1" step="1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="rp-percent">—</div>
    <div style="font-size:14px;font-weight:600;" id="rp-division">—</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Marks</span><span class="v" id="rp-marks">—</span></div>
      <div class="result-row"><span class="k">Equivalent CGPA (÷9.5)</span><span class="v" id="rp-cgpa">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Add up and enter the obtained marks across all subjects.',
    'Enter the total maximum marks (e.g. 5 subjects × 100 = 500).',
    'Percentage, division, and equivalent CGPA are shown live.',
  ],
  faq: [
    { q: 'How is percentage calculated?', a: 'Percentage = (obtained ÷ maximum) × 100. E.g. 425/500 = 85%. It\'s calculated from the total of all subjects\' marks.' },
    { q: 'How is division decided?', a: 'Standard: 75%+ = Distinction, 60–74.9% = First Division, 45–59.9% = Second Division, 33–44.9% = Third Division/Pass, below 33% = Fail. This can vary slightly by board.' },
    { q: 'How do I calculate best-of-5?', a: 'Add up marks from your best 5 subjects and enter 500 (5×100) as the total. CBSE class 10 usually counts best-of-5.' },
    { q: 'What if practical and theory are separate?', a: 'Add each subject\'s total (theory+practical) into the obtained marks, and each subject\'s maximum (theory+practical) into the total.' },
  ],
};
