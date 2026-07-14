module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Investment Details</div>
    <div class="field">
      <label for="ls-amount">One-Time Investment (₹)</label>
      <input type="number" id="ls-amount" value="100000" min="100" step="10000">
    </div>
    <div class="field">
      <label for="ls-rate">Expected Return (% per year)</label>
      <input type="number" id="ls-rate" value="12" min="1" max="40" step="0.5">
    </div>
    <div class="field">
      <label for="ls-years">Duration (years)</label>
      <input type="number" id="ls-years" value="10" min="1" max="50" step="1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="ls-maturity">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity value</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Investment</span><span class="v" id="ls-invested">—</span></div>
      <div class="result-row"><span class="k">Wealth gain</span><span class="v" id="ls-gain">—</span></div>
      <div class="result-row"><span class="k">Money multiplied by</span><span class="v" id="ls-multiple">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ls-calc">Calculate returns</button>
  <button class="btn btn-secondary" id="ls-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the one-time investment amount (mutual fund, stocks, anything).',
    'Enter the expected annual return — equity long-term average ~12%, debt ~7%.',
    'Enter how many years it stays invested.',
    'Click <strong>Calculate</strong> — see the maturity value and wealth gain.',
  ],
  faq: [
    { q: 'How is lumpsum return calculated?', a: 'Compound growth formula: Maturity = P × (1 + r)^t. E.g. ₹1 lakh @ 12% × 10 years = 1,00,000 × 3.106 = ₹3,10,585.' },
    { q: 'When is lumpsum better than SIP?', a: 'When the money is ready and market valuations are reasonable. Investing early long-term = more compounding time. If the market looks high, you can spread the lumpsum into equity over 3–6 months via STP.' },
    { q: 'Is a 12% return realistic?', a: 'The Nifty 50\'s 20+ year historical CAGR has been ~12%, but this isn\'t guaranteed. Use 10% for conservative planning, 6.5–7.5% for debt funds.' },
    { q: 'How much tax applies to returns?', a: 'Equity funds: LTCG 12.5% after 1+ year (₹1.25L/year exempt). Debt funds: slab rate. This calculator shows the pre-tax value.' },
  ],
};
