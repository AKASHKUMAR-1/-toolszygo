module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Income Details (FY 2025-26)</div>
    <div class="field">
      <label for="tax-income">Annual Gross Income (₹)</label>
      <input type="number" id="tax-income" value="1200000" min="0" step="50000">
    </div>
    <div class="checks">
      <label><input type="checkbox" id="tax-salaried" checked> I am salaried (get standard deduction)</label>
    </div>
    <div class="field">
      <label for="tax-deductions">Old regime deductions (80C + 80D + HRA etc.) (₹)</label>
      <input type="number" id="tax-deductions" value="150000" min="0" step="10000">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="tax-best">—</div>
    <div style="font-size:13px;font-weight:600;color:#5D8A4E;" id="tax-verdict"></div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">New regime tax</span><span class="v" id="tax-new">—</span></div>
      <div class="result-row"><span class="k">Old regime tax</span><span class="v" id="tax-old">—</span></div>
      <div class="result-row"><span class="k">Difference (savings)</span><span class="v" id="tax-diff">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="tax-calc">Calculate tax</button>
  <button class="btn btn-secondary" id="tax-copy">Copy result</button>
</div>
<div style="font-size:12px;color:#A39C8B;margin-top:12px;">Note: This is an estimate based on FY 2025-26 slabs (cess included, surcharge not included). Use a CA or the income tax portal for exact filing.</div>`,
  howto: [
    'Enter your annual gross income (salary + other income).',
    'Keep the checkbox on if salaried — standard deduction (new: ₹75,000, old: ₹50,000) applies.',
    'For the old regime, enter your total deductions — 80C (1.5L), 80D, HRA, home loan interest combined.',
    'Click <strong>Calculate</strong> — see the tax under both regimes and which is better.',
  ],
  faq: [
    { q: 'What are the new regime slabs (FY 2025-26)?', a: '₹0–4L: nil, 4–8L: 5%, 8–12L: 10%, 12–16L: 15%, 16–20L: 20%, 20–24L: 25%, 24L+: 30%. Salaried get a ₹75,000 standard deduction. If income is up to ₹12L, the 87A rebate makes tax ZERO (effectively up to ₹12.75L for salaried).' },
    { q: 'When is the old regime better?', a: 'When your deductions are very high — HRA + 80C + 80D + home loan interest adding up to a large chunk of income. Roughly ₹4–5 lakh+ in deductions is where the old regime wins. The calculator compares both.' },
    { q: 'What is the 87A rebate?', a: 'Under the new regime, if taxable income is up to ₹12 lakh, tax is fully waived (rebate up to ₹60,000). Under the old regime, up to ₹5 lakh gets a ₹12,500 rebate. This is why tax is zero at ₹12L income under the new regime.' },
    { q: 'What is cess?', a: 'Health & Education Cess — an extra 4% on the calculated tax. This calculator includes cess. Income above ₹50L attracts a separate surcharge, which isn\'t included here.' },
  ],
};
