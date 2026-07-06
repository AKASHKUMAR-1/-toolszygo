module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">NSC Details</div>
    <div class="field">
      <label for="nsc-amount">Investment Amount (₹)</label>
      <input type="number" id="nsc-amount" value="100000" min="1000" step="5000">
    </div>
    <div class="field">
      <label for="nsc-rate">Interest Rate (% per year)</label>
      <input type="number" id="nsc-rate" value="7.7" min="5" max="12" step="0.1">
    </div>
    <div style="font-size:12px;color:#A39C8B;">NSC ka tenure fixed 5 saal hai, interest annually compound hota hai aur maturity pe milta hai.</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result (5 saal pe)</div>
    <div class="result-big" id="nsc-maturity">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity amount</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Investment</span><span class="v" id="nsc-invested">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="nsc-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="nsc-calc">Calculate NSC maturity</button>
  <button class="btn btn-secondary" id="nsc-copy">Copy result</button>
</div>`,
  howto: [
    'NSC me jitna invest karna hai wo amount daalo (minimum ₹1,000).',
    'Current NSC rate daalo — abhi ~7.7% hai.',
    '<strong>Calculate</strong> dabao — 5 saal baad ki maturity value dikh jayegi.',
  ],
  faq: [
    { q: 'NSC kya hai aur kahan milta hai?', a: 'National Savings Certificate ek government-guaranteed 5-saal ki investment hai jo post office se milti hai. Rate fixed hota hai aur paisa 100% safe hai.' },
    { q: 'NSC pe tax kaisa lagta hai?', a: 'Investment 80C me deductible hai (old regime, ₹1.5L limit). Interest taxable hai, LEKIN pehle 4 saal ka interest reinvest maana jaata hai isliye wo bhi 80C me claim ho sakta hai — sirf 5th saal ka interest effectively taxable hai.' },
    { q: 'NSC vs FD — kya better hai?', a: 'NSC ka rate aam taur pe bank FD se thoda zyada hota hai aur government guarantee hai. Lekin 5 saal ka lock-in hai — FD me premature withdrawal ho jaata hai (penalty ke saath).' },
    { q: 'Kya NSC beech me tod sakte hain?', a: 'Normally nahi — sirf holder ki death, court order ya pledge ke case me. Isliye wahi paisa daalo jo 5 saal ke liye lock kar sakte ho.' },
  ],
};
