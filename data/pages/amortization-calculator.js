module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Loan Details</div>
    <div class="field">
      <label for="am-amount">Loan Amount (₹)</label>
      <input type="number" id="am-amount" value="1000000" min="1000" step="10000">
    </div>
    <div class="field">
      <label for="am-rate">Interest Rate (% / year)</label>
      <input type="number" id="am-rate" value="9" min="1" max="30" step="0.05">
    </div>
    <div class="field">
      <label for="am-years">Tenure (years)</label>
      <input type="number" id="am-years" value="5" min="1" max="30">
    </div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Monthly EMI</span><span class="v" id="am-emi">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="am-total-interest">—</span></div>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Schedule (first 12 months)</div>
    <div id="am-table" style="overflow:auto;max-height:340px;font-size:12px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="am-download">Download full schedule as CSV</button>
</div>`,
  howto: [
    'Enter the loan amount, rate, and tenure.',
    'The first 12 months\' schedule (principal/interest/balance) appears instantly.',
    'Download the full schedule (all months) as CSV to open in Excel.',
  ],
  faq: [
    { q: 'What is an amortization schedule?', a: 'A breakdown of every EMI of the loan — how much went to principal and how much to interest, and how much balance remains — month by month.' },
    { q: 'Why is more interest deducted at the start?', a: 'Interest is calculated on the outstanding balance — early on, the balance is higher so the interest portion is bigger. As the balance shrinks, the principal portion grows.' },
    { q: 'How does prepayment change the schedule?', a: 'Prepayment directly reduces the principal, so less interest accrues over the rest of the schedule and the loan finishes sooner. Use our Loan Prepayment Calculator for this.' },
  ],
};
