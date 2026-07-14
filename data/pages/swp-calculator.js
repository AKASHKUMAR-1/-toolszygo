module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">SWP Details</div>
    <div class="field">
      <label for="swp-corpus">Total Corpus (₹)</label>
      <input type="number" id="swp-corpus" value="5000000" min="10000" step="100000">
    </div>
    <div class="field">
      <label for="swp-withdraw">Monthly Withdrawal (₹)</label>
      <input type="number" id="swp-withdraw" value="40000" min="500" step="1000">
    </div>
    <div class="field">
      <label for="swp-rate">Expected Return (% per year)</label>
      <input type="number" id="swp-rate" value="8" min="1" max="20" step="0.5">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="swp-duration">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;" id="swp-duration-label">How long the corpus lasts</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total withdrawal</span><span class="v" id="swp-total">—</span></div>
      <div class="result-row"><span class="k">Monthly return vs withdrawal</span><span class="v" id="swp-vs">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="swp-calc">Calculate SWP</button>
  <button class="btn btn-secondary" id="swp-copy">Copy result</button>
</div>`,
  howto: [
    'Enter your total corpus — the amount invested.',
    'Enter how much you want to withdraw each month.',
    'Enter the expected return — balanced/hybrid funds ~8%, debt ~7%.',
    'Click <strong>Calculate</strong> — see how many years the corpus lasts.',
  ],
  faq: [
    { q: 'What is SWP?', a: 'Systematic Withdrawal Plan — withdrawing a fixed amount from a mutual fund each month. Popular for monthly income in retirement, because the remaining money stays invested and keeps growing.' },
    { q: 'How much should I withdraw so the corpus never runs out?', a: 'If the monthly withdrawal is less than or equal to the corpus\'s monthly return, the corpus never runs out. E.g. ₹50 lakh @ 8% = safe up to ~₹33,300/month. This calculator shows this too.' },
    { q: 'SWP vs FD interest — which is better?', a: 'SWP has equity/hybrid growth potential and tax efficiency (tax only on capital gains, not the whole withdrawal). An FD is guaranteed but its interest is fully taxable.' },
    { q: 'What is the 4% rule?', a: 'A retirement rule of thumb: withdraw 4% of the corpus per year and it lasts 30+ years. A ₹1 crore corpus = ₹4 lakh/year = ~₹33,000/month.' },
  ],
};
