module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">NPS Details</div>
    <div class="field">
      <label for="nps-age">Current Age</label>
      <input type="number" id="nps-age" value="30" min="18" max="59" step="1">
    </div>
    <div class="field">
      <label for="nps-amount">Monthly Contribution (₹)</label>
      <input type="number" id="nps-amount" value="5000" min="500" step="500">
    </div>
    <div class="field">
      <label for="nps-return">Expected Return (% per year)</label>
      <input type="number" id="nps-return" value="10" min="5" max="15" step="0.5">
    </div>
    <div class="field">
      <label for="nps-annuity">What % goes into annuity (min 40%)</label>
      <input type="number" id="nps-annuity" value="40" min="40" max="100" step="5">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result (at age 60)</div>
    <div class="result-big" id="nps-corpus">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Total corpus</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total invested</span><span class="v" id="nps-invested">—</span></div>
      <div class="result-row"><span class="k">Lump sum (tax-free withdrawal)</span><span class="v" id="nps-lumpsum">—</span></div>
      <div class="result-row"><span class="k">Goes into annuity</span><span class="v" id="nps-annuity-amt">—</span></div>
      <div class="result-row"><span class="k">Estimated monthly pension @6%</span><span class="v" id="nps-pension">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="nps-calc">Calculate NPS</button>
  <button class="btn btn-secondary" id="nps-copy">Copy result</button>
</div>`,
  howto: [
    'Enter your current age and monthly NPS contribution.',
    'Set the expected return — NPS\'s equity-debt mix has historically given 9–11%.',
    'Choose what % goes into annuity (pension) — a minimum of 40% is required.',
    'Click <strong>Calculate</strong> — see the corpus, tax-free lump sum, and estimated monthly pension.',
  ],
  faq: [
    { q: 'How does NPS pay out at 60?', a: 'A minimum of 40% of the corpus must go into an annuity (pension plan) that pays monthly pension. The remaining up to 60% can be withdrawn tax-free as a lump sum.' },
    { q: 'How is monthly pension estimated?', a: 'Annuity amount × annuity rate (~6% per year) ÷ 12. E.g. a ₹40 lakh annuity = ₹40L × 6% ÷ 12 = ~₹20,000/month. The actual rate depends on the annuity provider.' },
    { q: 'What is the tax benefit of NPS?', a: 'Under the old regime, an extra ₹50,000 deduction under 80CCD(1B) (on top of 80C\'s 1.5L). Employer contribution under 80CCD(2) is deductible in both regimes (up to 10–14% of basic).' },
    { q: 'Can I withdraw money before maturity?', a: 'Partial withdrawal (up to 25%, for specific reasons) is allowed after 3 years. Exiting before 60 requires putting 80% of the corpus into an annuity — so keep NPS strictly for retirement.' },
  ],
};
