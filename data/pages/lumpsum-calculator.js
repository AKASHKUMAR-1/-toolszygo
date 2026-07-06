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
      <div class="result-row"><span class="k">Paisa kitna guna hua</span><span class="v" id="ls-multiple">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ls-calc">Calculate returns</button>
  <button class="btn btn-secondary" id="ls-copy">Copy result</button>
</div>`,
  howto: [
    'One-time investment amount daalo (mutual fund, stocks, kuch bhi).',
    'Expected annual return daalo — equity ka long-term average ~12%, debt ~7%.',
    'Kitne saal invested rahoge wo daalo.',
    '<strong>Calculate</strong> dabao — maturity value aur wealth gain dikh jayega.',
  ],
  faq: [
    { q: 'Lumpsum return kaise calculate hota hai?', a: 'Compound growth formula: Maturity = P × (1 + r)^t. E.g. ₹1 lakh @ 12% × 10 saal = 1,00,000 × 3.106 = ₹3,10,585.' },
    { q: 'Lumpsum kab better hai SIP se?', a: 'Jab paisa ready ho aur market valuations reasonable hon. Long term me jaldi invest karna = zyada compounding time. Market high lag raha ho to lumpsum ko 3–6 mahine me STP se equity me daal sakte ho.' },
    { q: '12% return realistic hai kya?', a: 'Nifty 50 ka 20+ saal ka historical CAGR ~12% raha hai, lekin ye guarantee nahi hai. Conservative planning ke liye 10% use karo, debt funds ke liye 6.5–7.5%.' },
    { q: 'Returns pe tax kitna lagega?', a: 'Equity funds: 1 saal+ pe LTCG 12.5% (₹1.25L/saal exempt). Debt funds: slab rate. Ye calculator pre-tax value dikhata hai.' },
  ],
};
