module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Loan Details</div>
    <div class="field">
      <label for="lp-outstanding">Outstanding Loan Amount (₹)</label>
      <input type="number" id="lp-outstanding" value="2000000" min="1000" step="10000">
    </div>
    <div class="field">
      <label for="lp-rate">Interest Rate (% per year)</label>
      <input type="number" id="lp-rate" value="8.5" min="0.1" max="40" step="0.05">
    </div>
    <div class="field">
      <label for="lp-tenure">Remaining Tenure (years)</label>
      <input type="number" id="lp-tenure" value="15" min="1" max="40" step="0.5">
    </div>
    <div class="field">
      <label for="lp-prepay">Prepayment Amount (₹)</label>
      <input type="number" id="lp-prepay" value="300000" min="0" step="10000">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result (keeping EMI the same)</div>
    <div class="result-big" id="lp-saved">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Interest saved</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Current EMI</span><span class="v" id="lp-emi">—</span></div>
      <div class="result-row"><span class="k">Old remaining tenure</span><span class="v" id="lp-old-tenure">—</span></div>
      <div class="result-row"><span class="k">New tenure (after prepayment)</span><span class="v" id="lp-new-tenure">—</span></div>
      <div class="result-row"><span class="k">EMIs reduced by</span><span class="v" id="lp-emis-cut">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="lp-calc">Calculate savings</button>
  <button class="btn btn-secondary" id="lp-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the loan\'s current outstanding amount (visible in your bank app).',
    'Enter the interest rate and remaining tenure.',
    'Enter the lump sum you want to prepay.',
    'Click <strong>Calculate</strong> — see how much interest you\'ll save and how many EMIs are cut.',
  ],
  faq: [
    { q: 'Does prepayment reduce tenure or EMI?', a: 'You can choose either. This calculator shows tenure-reduction (EMI stays the same) — this gives the biggest interest savings. Reducing the EMI helps cash flow but saves less.' },
    { q: 'Is there a penalty for home loan prepayment?', a: 'Per RBI rules, floating-rate home loans have no prepayment penalty. Fixed-rate loans may have a 2–4% penalty — confirm with your bank.' },
    { q: 'Is it better to prepay or invest?', a: 'Rule of thumb: if the expected investment return (post-tax) exceeds the loan rate, invest; otherwise prepay. Prepaying an 8.5% loan = a guaranteed 8.5% tax-free return.' },
    { q: 'When is prepayment most beneficial?', a: 'In the early years of the loan — that\'s when a bigger part of the EMI is interest, so reducing the principal has the biggest impact.' },
  ],
};
