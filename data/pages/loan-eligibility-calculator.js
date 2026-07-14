module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Income Details</div>
    <div class="field">
      <label for="le-income">Monthly Net Income (₹)</label>
      <input type="number" id="le-income" value="80000" min="5000" step="5000">
    </div>
    <div class="field">
      <label for="le-emis">Existing EMIs (₹/month)</label>
      <input type="number" id="le-emis" value="0" min="0" step="1000">
    </div>
    <div class="field">
      <label for="le-rate">Loan Interest Rate (% per year)</label>
      <input type="number" id="le-rate" value="9" min="5" max="30" step="0.1">
    </div>
    <div class="field">
      <label for="le-tenure">Loan Tenure (years)</label>
      <input type="number" id="le-tenure" value="20" min="1" max="30" step="1">
    </div>
    <div class="field">
      <label for="le-foir">How much income the bank allows toward EMI (FOIR %)</label>
      <select id="le-foir">
        <option value="40">40% (conservative)</option>
        <option value="50" selected>50% (standard)</option>
        <option value="60">60% (for high income earners)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="le-amount">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Estimated loan eligibility</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Max EMI you can afford</span><span class="v" id="le-emi">—</span></div>
      <div class="result-row"><span class="k">Total payment (over tenure)</span><span class="v" id="le-total">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="le-calc">Check eligibility</button>
  <button class="btn btn-secondary" id="le-copy">Copy result</button>
</div>`,
  howto: [
    'Enter your monthly net (in-hand) income.',
    'Enter any existing EMIs, if you have them.',
    'Enter the loan\'s expected rate and tenure.',
    'Click <strong>Check eligibility</strong> — see approximately how much the bank can lend you.',
  ],
  faq: [
    { q: 'What is FOIR?', a: 'Fixed Obligation to Income Ratio — what % of income can go toward EMIs. Banks usually allow 40–55%. At ₹80,000 income with 50% FOIR = max ₹40,000 in total EMIs.' },
    { q: 'How is eligibility calculated?', a: 'Max EMI = (income × FOIR%) − existing EMIs. The loan amount is then reverse-calculated from that EMI using the standard EMI formula, at your rate and tenure.' },
    { q: 'Why might my actual eligibility differ?', a: 'Banks also look at credit score, employer, age, property value (LTV for home loans), and income stability. This calculator gives an income-based estimate — the final amount is the bank\'s call.' },
    { q: 'How do I increase my eligibility?', a: 'Close existing loans, add a co-applicant (spouse) — both incomes count, take a longer tenure, or keep a credit score of 750+ for a better rate.' },
  ],
};
