module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">PPF Details</div>
    <div class="field">
      <label for="ppf-amount">Yearly Investment (₹) — max 1,50,000</label>
      <input type="number" id="ppf-amount" value="150000" min="500" max="150000" step="5000">
    </div>
    <div class="field">
      <label for="ppf-rate">Interest Rate (% per year)</label>
      <input type="number" id="ppf-rate" value="7.1" min="5" max="12" step="0.1">
    </div>
    <div class="field">
      <label for="ppf-years">Duration (years) — minimum 15</label>
      <input type="number" id="ppf-years" value="15" min="15" max="50" step="5">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="ppf-maturity">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity amount (100% tax-free)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total investment</span><span class="v" id="ppf-invested">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="ppf-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ppf-calc">Calculate PPF maturity</button>
  <button class="btn btn-secondary" id="ppf-copy">Copy result</button>
</div>`,
  howto: [
    'Enter how much you\'ll deposit in PPF each year (₹500 to ₹1.5 lakh).',
    'Enter the current PPF rate — currently ~7.1% (revised by the govt every quarter).',
    'Enter the duration — minimum 15 years, extendable in 5-year blocks after that.',
    'Click <strong>Calculate</strong> — see the tax-free maturity amount.',
  ],
  faq: [
    { q: 'Why is PPF so popular?', a: 'EEE tax status — 80C deduction on investment, tax-free interest, tax-free maturity. A government-guaranteed ~7.1% tax-free return, much better than an FD\'s post-tax return.' },
    { q: 'How is PPF interest calculated?', a: 'Monthly interest is based on the minimum balance between the 5th of the month and month-end, credited at year-end. Deposit early in the year (April 1–5) to get the full benefit.' },
    { q: 'Can I withdraw before 15 years?', a: 'Partial withdrawal is allowed from the 7th year (up to 50% of balance, with conditions). After 5 years, premature closure is also possible for specific reasons (illness, education) with a penalty.' },
    { q: 'What happens after 15 years?', a: 'You can extend the account in 5-year blocks — with or without further contributions. Even without contributions, the balance keeps earning tax-free interest.' },
  ],
};
