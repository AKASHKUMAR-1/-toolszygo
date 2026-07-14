module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">CTC Details</div>
    <div class="field">
      <label for="ctc-amount">Annual CTC (₹)</label>
      <input type="number" id="ctc-amount" value="1200000" min="100000" step="50000">
    </div>
    <div class="field">
      <label for="ctc-basic">Basic Salary (CTC ka %)</label>
      <input type="number" id="ctc-basic" value="40" min="20" max="70" step="5">
    </div>
    <div class="checks">
      <label><input type="checkbox" id="ctc-pf" checked> PF is included (employer + employee 12% of basic)</label>
      <label><input type="checkbox" id="ctc-tax" checked> Deduct income tax too (new regime estimate)</label>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="ctc-inhand">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Estimated monthly in-hand</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Employer PF (from CTC)</span><span class="v" id="ctc-epf">—</span></div>
      <div class="result-row"><span class="k">Employee PF deduction</span><span class="v" id="ctc-pf-ded">—</span></div>
      <div class="result-row"><span class="k">Professional tax</span><span class="v" id="ctc-pt">—</span></div>
      <div class="result-row"><span class="k">Income tax (monthly avg)</span><span class="v" id="ctc-tax-amt">—</span></div>
      <div class="result-row"><span class="k">Annual in-hand</span><span class="v" id="ctc-annual">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ctc-calc">Calculate in-hand salary</button>
  <button class="btn btn-secondary" id="ctc-copy">Copy result</button>
</div>
<div style="font-size:12px;color:#A39C8B;margin-top:12px;">Note: This is an estimate based on standard assumptions — actual in-hand depends on the company's salary structure (HRA, allowances, gratuity, variable pay).</div>`,
  howto: [
    'Enter your annual CTC (from the offer letter).',
    'Set the basic salary % — most companies keep it at 40–50%.',
    'Set the PF and tax checkboxes to match your case.',
    'Click <strong>Calculate</strong> — see the estimated monthly in-hand and full breakdown.',
  ],
  faq: [
    { q: 'Why is there such a big difference between CTC and in-hand?', a: 'CTC includes employer PF, gratuity, insurance, and variable pay, which don\'t reach your hand. On top of that, employee PF, professional tax, and income tax are deducted. A ₹12L CTC typically gives ₹80–90k/month in-hand.' },
    { q: 'How much PF is deducted?', a: 'Employee PF = 12% of basic (deducted from salary). The employer also contributes 12%, but that\'s already counted in CTC. Together they build your retirement corpus.' },
    { q: 'What is professional tax?', a: 'A state government tax — ₹200/month (₹2,400–2,500/year) in most states. Some states (Delhi, UP, Haryana) don\'t levy it. This calculator assumes ₹2,400/year.' },
    { q: 'What about variable pay/bonus?', a: 'Variable pay is part of CTC but is paid based on performance, usually quarterly/annually. For fixed in-hand, remove the variable component from CTC before calculating.' },
  ],
};
