module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Your Pay</div>
    <div class="field">
      <label for="hs-rate">Hourly Rate ($)</label>
      <input type="number" id="hs-rate" value="25" min="0.5" step="0.5">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="hs-hours">Hours per Week</label>
        <input type="number" id="hs-hours" value="40" min="1" max="100" step="1">
      </div>
      <div class="field">
        <label for="hs-weeks">Paid Weeks per Year</label>
        <input type="number" id="hs-weeks" value="52" min="1" max="52" step="1">
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div id="hs-currency-toggle"></div>
    <div class="result-big" id="hs-annual">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Annual salary (gross)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Monthly</span><span class="v" id="hs-monthly">—</span></div>
      <div class="result-row"><span class="k">Biweekly (every 2 weeks)</span><span class="v" id="hs-biweekly">—</span></div>
      <div class="result-row"><span class="k">Weekly</span><span class="v" id="hs-weekly">—</span></div>
      <div class="result-row"><span class="k">Daily (8-hour day)</span><span class="v" id="hs-daily">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="hs-calc">Convert</button>
  <button class="btn btn-secondary" id="hs-copy">Copy result</button>
</div>`,
  howto: [
    'Enter your hourly rate.',
    'Adjust hours per week (40 is standard full-time) and paid weeks per year (52 if you get paid vacation).',
    'See your annual, monthly, biweekly, weekly and daily pay instantly.',
  ],
  faq: [
    { q: 'How is hourly converted to annual salary?', a: 'Annual = hourly rate × hours per week × paid weeks per year. E.g. $25/hour × 40 hours × 52 weeks = $52,000/year.' },
    { q: 'Is this before or after taxes?', a: 'Before taxes (gross pay). Your take-home pay depends on federal/state taxes, Social Security, Medicare and deductions — typically 20–30% less than gross for most US workers.' },
    { q: 'What if I don\'t get paid vacation?', a: 'Lower the "paid weeks per year". If you take 2 unpaid weeks off, use 50 weeks instead of 52.' },
    { q: 'How do I go the other way — salary to hourly?', a: 'Divide the annual salary by (hours per week × weeks per year). E.g. $60,000 ÷ (40 × 52 = 2,080 hours) = $28.85/hour. A quick shortcut for a 40-hour week: divide the salary in thousands by 2 — $60k ≈ $30/hour.' },
  ],
};
