module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">KVP Details</div>
    <div class="field">
      <label for="kvp-amount">Investment Amount (₹)</label>
      <input type="number" id="kvp-amount" value="100000" min="1000" step="5000">
    </div>
    <div class="field">
      <label for="kvp-rate">Interest Rate (% per year)</label>
      <input type="number" id="kvp-rate" value="7.5" min="5" max="12" step="0.1">
    </div>
    <div style="font-size:12px;color:#A39C8B;">In KVP, money compounds annually at a fixed rate and exactly doubles at maturity.</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="kvp-maturity">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity (double) amount</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Money doubles in</span><span class="v" id="kvp-time">—</span></div>
      <div class="result-row"><span class="k">Interest earned</span><span class="v" id="kvp-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="kvp-calc">Calculate doubling time</button>
  <button class="btn btn-secondary" id="kvp-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the amount you want to invest in KVP.',
    'Enter the current KVP rate — currently ~7.5%.',
    'Click <strong>Calculate</strong> — see when the money doubles and the maturity amount.',
  ],
  faq: [
    { q: 'How long does it take for money to double in KVP?', a: 'At 7.5% rate, approximately 115 months (9 years 7 months). Doubling time depends on the rate — higher rate, shorter time. Formula: ln(2) ÷ ln(1 + rate).' },
    { q: 'Where can I buy KVP?', a: 'From any post office or authorized bank. Minimum ₹1,000, no maximum limit. Single or joint accounts are both allowed.' },
    { q: 'How is KVP taxed?', a: 'KVP has NO 80C benefit and the interest is taxable (at maturity). For tax-saving, NSC or PPF are better — KVP\'s advantage is simplicity and guaranteed doubling.' },
    { q: 'Can I encash KVP early?', a: 'Yes — premature encashment is allowed after a 2.5-year (30-month) lock-in, at the rate applicable up to that point.' },
  ],
};
