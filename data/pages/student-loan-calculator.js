module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Loan Details</div>
    <div class="field">
      <label for="sl-balance">Loan Balance (<span id="sl-unit1">$</span>)</label>
      <input type="number" id="sl-balance" value="30000" min="100" step="500">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="sl-rate">Interest Rate (%)</label>
        <input type="number" id="sl-rate" value="6" min="0.1" max="20" step="0.05">
      </div>
      <div class="field">
        <label for="sl-term">Term (years)</label>
        <input type="number" id="sl-term" value="10" min="1" max="30" step="1">
      </div>
    </div>
    <div class="field">
      <label for="sl-extra">Extra Payment per Month (<span id="sl-unit2">$</span>, optional)</label>
      <input type="number" id="sl-extra" value="" placeholder="e.g. 100" min="0" step="25">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div id="sl-currency-toggle"></div>
    <div class="result-big" id="sl-payment">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Standard monthly payment</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total interest (standard plan)</span><span class="v" id="sl-interest">—</span></div>
      <div class="result-row"><span class="k">Payoff time with extra payment</span><span class="v" id="sl-extra-time">—</span></div>
      <div class="result-row"><span class="k">Interest saved with extra payment</span><span class="v" id="sl-saved">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="sl-calc">Calculate</button>
  <button class="btn btn-secondary" id="sl-copy">Copy result</button>
</div>`,
  howto: [
    'Enter your total student loan balance and interest rate.',
    'Enter the repayment term — the US standard plan is 10 years.',
    'Optionally, enter an extra amount you could pay each month.',
    'Click <strong>Calculate</strong> — see your monthly payment, and how much time and interest the extra payment saves.',
  ],
  faq: [
    { q: 'How is the monthly payment calculated?', a: 'It uses the standard amortization formula — the same one used for federal student loans on the 10-year Standard Repayment Plan. Fixed payment, fixed term.' },
    { q: 'How much does an extra payment actually help?', a: 'A lot more than most people expect. On a $30,000 loan at 6% over 10 years, an extra $100/month clears the loan roughly 3 years sooner and saves thousands in interest. Enter your numbers to see your exact savings.' },
    { q: 'Should I pay extra on my student loan or invest?', a: 'A common rule of thumb: if your loan rate is higher than what you\'d conservatively earn investing (~6-7%), paying the loan down is a guaranteed return. Below that, it\'s a personal choice — this tool at least shows you the exact interest saved.' },
    { q: 'Does this work for income-driven repayment (IDR) plans?', a: 'No — IDR payments depend on your income and family size, not a fixed formula. This calculator models standard fixed-payment repayment, which is also how private student loans typically work.' },
  ],
};
