module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="ov-lastperiod">First day of last period</label>
      <input type="date" id="ov-lastperiod">
    </div>
    <div class="field">
      <label for="ov-cycle">Average cycle length (days)</label>
      <input type="number" id="ov-cycle" value="28" min="20" max="45">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="ov-date">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Estimated ovulation date</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Fertile window (highest chance)</span><span class="v" id="ov-window">—</span></div>
      <div class="result-row"><span class="k">Next expected period</span><span class="v" id="ov-nextperiod">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Enter the first day of your last period and set the average cycle length.',
    'Get your ovulation date, fertile window (when conception chances are highest), and next period instantly.',
  ],
  faq: [
    { q: 'What is ovulation?', a: 'The release of a matured egg from the ovary — this typically happens 14 days before the next period. The 5-6 days around this are best for conceiving.' },
    { q: 'What is the fertile window?', a: 'From 5 days before ovulation to the day of ovulation — sperm can survive up to 5 days, so this entire window is considered fertile.' },
    { q: 'Can this be used with irregular cycles?', a: 'The estimate is less accurate with irregular cycles. Basal body temperature or ovulation kits are more reliable — this tool is a starting point.' },
  ],
};
