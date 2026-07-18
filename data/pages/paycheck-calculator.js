module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Your Pay</div>
    <div class="field-row">
      <div class="field">
        <label for="pc-amount">Pay Amount ($)</label>
        <input type="number" id="pc-amount" value="70000" min="0" step="100">
      </div>
      <div class="field">
        <label for="pc-freq">Frequency</label>
        <select id="pc-freq">
          <option value="year" selected>per year</option>
          <option value="month">per month</option>
          <option value="week">per week</option>
          <option value="hour">per hour</option>
        </select>
      </div>
    </div>
    <div class="field" id="pc-hours-field" style="display:none;">
      <label for="pc-hours">Hours per Week</label>
      <input type="number" id="pc-hours" value="40" min="1" max="100" step="1">
    </div>
    <div class="field">
      <label for="pc-status">Filing Status</label>
      <select id="pc-status">
        <option value="single" selected>Single</option>
        <option value="married">Married Filing Jointly</option>
        <option value="hoh">Head of Household</option>
      </select>
    </div>
    <div class="field">
      <label for="pc-state">State Income Tax Rate (%)</label>
      <input type="number" id="pc-state" value="0" min="0" max="15" step="0.1">
      <div style="font-size:12px;color:#A3937E;margin-top:4px;">TX, FL, WA, NV, TN, SD, WY, AK &amp; NH have no state income tax — leave 0. Others: enter your state's rate (e.g. CO 4.4, IL 4.95, CA ~6-9 effective).</div>
    </div>
    <div class="panel-label" style="margin-top:14px;">Pre-Tax Deductions (optional)</div>
    <div class="field-row">
      <div class="field">
        <label for="pc-401k">401(k) Contribution (%)</label>
        <input type="number" id="pc-401k" value="0" min="0" max="90" step="0.5">
      </div>
      <div class="field">
        <label for="pc-health">Health Insurance ($/month)</label>
        <input type="number" id="pc-health" value="0" min="0" step="10">
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Take-Home Pay (2026)</div>
    <div class="result-big" id="pc-takehome">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">per year, after all taxes &amp; deductions</div>
    <div id="pc-bar" style="display:none;height:14px;border-radius:7px;overflow:hidden;margin:12px 0 4px;border:1px solid #EDE6DA;"><div id="pc-bar-keep" style="float:left;height:100%;background:#5D8A4E;"></div><div id="pc-bar-tax" style="float:left;height:100%;background:#B84F4F;"></div><div id="pc-bar-save" style="float:left;height:100%;background:#A98423;"></div></div>
    <div id="pc-bar-legend" style="display:none;font-size:11.5px;color:#8A7A5C;margin-bottom:6px;">🟩 Take-home &nbsp; 🟥 Taxes &nbsp; 🟨 401(k) + health</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Monthly take-home</span><span class="v" id="pc-monthly">—</span></div>
      <div class="result-row"><span class="k">Biweekly paycheck</span><span class="v" id="pc-biweekly">—</span></div>
      <div class="result-row"><span class="k">Gross annual pay</span><span class="v" id="pc-gross">—</span></div>
      <div class="result-row"><span class="k">Federal income tax</span><span class="v" id="pc-fed">—</span></div>
      <div class="result-row"><span class="k">Social Security (6.2%)</span><span class="v" id="pc-ss">—</span></div>
      <div class="result-row"><span class="k">Medicare</span><span class="v" id="pc-medicare">—</span></div>
      <div class="result-row" id="pc-state-row"><span class="k">State income tax</span><span class="v" id="pc-state-amt">—</span></div>
      <div class="result-row" id="pc-401k-row" style="display:none;"><span class="k">401(k) savings (yours!)</span><span class="v" id="pc-401k-amt">—</span></div>
      <div class="result-row" id="pc-health-row" style="display:none;"><span class="k">Health premiums</span><span class="v" id="pc-health-amt">—</span></div>
      <div class="result-row"><span class="k">Effective tax rate</span><span class="v" id="pc-effective">—</span></div>
      <div class="result-row"><span class="k">Marginal tax bracket</span><span class="v" id="pc-marginal">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pc-calc">Calculate take-home pay</button>
  <button class="btn btn-secondary" id="pc-copy">Copy result</button>
</div>
<div style="font-size:12px;color:#A3937E;margin-top:10px;">Uses official 2026 IRS tax brackets, standard deduction and FICA limits (Rev. Proc. 2025-32). Estimates assume the standard deduction and W-2 employment — see FAQ for details.</div>`,
  howto: [
    'Enter your pay and choose the frequency — annual salary, monthly, weekly or hourly.',
    'Pick your filing status: Single, Married Filing Jointly or Head of Household.',
    'Enter your state income tax rate (0 for TX, FL, WA, NV and other no-tax states).',
    'Optionally add your 401(k) % and monthly health insurance premium — both reduce your taxes.',
    'See your yearly, monthly and biweekly take-home pay with a full tax breakdown.',
  ],
  faq: [
    { q: 'How accurate is this paycheck calculator?', a: 'It uses the official 2026 IRS figures: federal tax brackets and standard deduction from Rev. Proc. 2025-32, the 6.2% Social Security tax up to the $184,500 wage base, and 1.45% Medicare plus the 0.9% additional Medicare tax above $200,000 ($250,000 married). It assumes you take the standard deduction (about 90% of Americans do) and have regular W-2 wages.' },
    { q: 'Why is my 401(k) shown separately from taxes?', a: 'Because that money is still yours — it goes into your retirement account, not to the government. 401(k) contributions reduce your federal income tax now, but note they do NOT reduce Social Security/Medicare taxes. Health insurance premiums (Section 125) reduce both — this calculator handles that difference correctly, which many calculators get wrong.' },
    { q: 'What\'s the difference between effective and marginal tax rate?', a: 'Your marginal rate is the bracket your last dollar falls in (e.g. 22%). Your effective rate is what you actually pay overall — total tax ÷ gross income — which is always lower because the first chunks of income are taxed at 10% and 12%. Being "in the 22% bracket" does not mean you pay 22% on everything.' },
    { q: 'How do I find my state income tax rate?', a: 'Nine states have none: Texas, Florida, Washington, Nevada, Tennessee, South Dakota, Wyoming, Alaska and New Hampshire. Flat-tax states are easy (Colorado 4.4%, Illinois 4.95%, Michigan 4.25%). For progressive states like California or New York, enter your approximate effective rate (often 4-7% for middle incomes) — search "[your state] effective income tax rate" for a closer figure.' },
    { q: 'Why is my biweekly paycheck not exactly half the monthly amount?', a: 'There are 26 biweekly pay periods in a year but only 12 months — so biweekly pay = annual ÷ 26, which is slightly less than half of annual ÷ 12. Twice a year you get an "extra" third paycheck in a month.' },
  ],
};
