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
    'Sab subjects ke obtained marks jod kar daalo.',
    'Total maximum marks daalo (e.g. 5 subjects × 100 = 500).',
    'Percentage, division aur equivalent CGPA live dikh jayega.',
  ],
  faq: [
    { q: 'Percentage kaise nikalta hai?', a: 'Percentage = (obtained ÷ maximum) × 100. E.g. 425/500 = 85%. Sab subjects ke marks jodkar total se calculate hota hai.' },
    { q: 'Division kaise decide hoti hai?', a: 'Standard: 75%+ = Distinction, 60–74.9% = First Division, 45–59.9% = Second Division, 33–44.9% = Third Division/Pass, 33% se kam = Fail. Boards me thoda vary kar sakta hai.' },
    { q: 'Best of 5 kaise calculate karein?', a: 'Apne best 5 subjects ke marks jodo aur total 500 (5×100) daalo. CBSE class 10 me aam taur pe best-of-5 hi count hota hai.' },
    { q: 'Practical aur theory alag hon to?', a: 'Har subject ka total (theory+practical) jodkar obtained me daalo, aur sab subjects ke maximum marks (theory+practical) total me.' },
  ],
};
