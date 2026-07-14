module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">SIP Details</div>
    <div class="field">
      <label for="sip-amount">Monthly Investment (₹)</label>
      <input type="number" id="sip-amount" value="5000" min="100" step="500">
    </div>
    <div class="field">
      <label for="sip-rate">Expected Return (% per year)</label>
      <input type="number" id="sip-rate" value="12" min="1" max="40" step="0.5">
    </div>
    <div class="field">
      <label for="sip-years">Duration (years)</label>
      <input type="number" id="sip-years" value="10" min="1" max="50" step="1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="sip-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity value</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total invested</span><span class="v" id="sip-invested">—</span></div>
      <div class="result-row"><span class="k">Wealth gain (returns)</span><span class="v" id="sip-gain">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="sip-calc">Calculate SIP returns</button>
  <button class="btn btn-secondary" id="sip-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the monthly SIP amount (e.g. ₹5,000).',
    'Enter the expected annual return — the long-term average for equity mutual funds is ~12%.',
    'Enter the duration in years.',
    'Click <strong>Calculate</strong> — see the maturity value, total invested, and wealth gain.',
  ],
  faq: [
    { q: 'How is SIP return calculated?', a: 'The standard SIP formula: FV = P × [((1+i)^n − 1) / i] × (1+i), where P = monthly amount, i = monthly return (annual ÷ 12 ÷ 100), and n = total months. This is the same formula AMCs and apps use.' },
    { q: 'Is a 12% return guaranteed?', a: 'No — mutual fund returns depend on the market. 12% is the historical long-term average for equity funds, not a guarantee. Try 10% for a conservative estimate.' },
    { q: 'SIP vs lumpsum — which is better?', a: 'SIP gives rupee-cost averaging — you get more units when the market falls. It also builds discipline for salary earners. Lumpsum is better when the market is low and the money is ready.' },
    { q: 'Does this calculate step-up SIP?', a: 'This currently calculates a fixed monthly SIP. Step-up SIP (increasing the amount each year) needs a different calculation — we\'ll add it soon.' },
  ],
};
