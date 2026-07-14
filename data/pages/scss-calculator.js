module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">SCSS Details</div>
    <div class="field">
      <label for="scss-amount">Investment Amount (₹) — max 30,00,000</label>
      <input type="number" id="scss-amount" value="1500000" min="1000" max="3000000" step="50000">
    </div>
    <div class="field">
      <label for="scss-rate">Interest Rate (% per year)</label>
      <input type="number" id="scss-rate" value="8.2" min="5" max="12" step="0.1">
    </div>
    <div style="font-size:12px;color:#A39C8B;">SCSS pays out interest every quarter (not compounded). 5-year tenure, for those aged 60+.</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="scss-quarterly">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Received each quarter</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Monthly average</span><span class="v" id="scss-monthly">—</span></div>
      <div class="result-row"><span class="k">Yearly interest</span><span class="v" id="scss-yearly">—</span></div>
      <div class="result-row"><span class="k">Total interest over 5 years</span><span class="v" id="scss-total">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="scss-calc">Calculate SCSS interest</button>
  <button class="btn btn-secondary" id="scss-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the amount you want to invest in SCSS (max ₹30 lakh).',
    'Enter the current rate — currently ~8.2%.',
    'Click <strong>Calculate</strong> — see the quarterly payout and total interest over 5 years.',
  ],
  faq: [
    { q: 'How is SCSS interest paid?', a: 'Interest is credited to your savings account every quarter (on the 1st of April, July, October, January) — it\'s a regular income scheme, not compounded. The principal is returned after 5 years.' },
    { q: 'Who can open an SCSS account?', a: 'Those aged 60+; also retirees aged 55–60 (VRS/superannuation) under certain conditions. Retired defence personnel from age 50+. It opens at a post office or bank.' },
    { q: 'How is SCSS taxed?', a: 'The investment is deductible under 80C (old regime). Interest is taxable and TDS applies if it exceeds ₹50,000/year (avoidable by submitting Form 15H if no tax is due).' },
    { q: 'What are the options after 5 years?', a: 'The account can be extended once for 3 years (at the rate applicable then). Or you can withdraw the principal and invest it elsewhere.' },
  ],
};
