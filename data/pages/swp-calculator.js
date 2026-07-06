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
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;" id="swp-duration-label">Corpus kitna chalega</div>
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
    'Apna total corpus daalo — jitna paisa invested hai.',
    'Har mahine kitna nikalna chahte ho wo daalo.',
    'Expected return daalo — balanced/hybrid funds ~8%, debt ~7%.',
    '<strong>Calculate</strong> dabao — corpus kitne saal chalega dikh jayega.',
  ],
  faq: [
    { q: 'SWP kya hota hai?', a: 'Systematic Withdrawal Plan — mutual fund se har mahine fixed amount nikalna. Retirement me monthly income ke liye popular hai kyunki bacha hua paisa invested rehkar badhta rehta hai.' },
    { q: 'Corpus kabhi khatam na ho, iske liye kitna nikale?', a: 'Agar monthly withdrawal corpus ke monthly return se kam ya barabar hai to corpus kabhi khatam nahi hota. E.g. ₹50 lakh @ 8% = ~₹33,300/month tak safe. Ye calculator ye bhi bata deta hai.' },
    { q: 'SWP vs FD interest — kya better hai?', a: 'SWP me equity/hybrid growth potential hai aur tax-efficiency bhi (sirf capital gains pe tax, poori withdrawal pe nahi). FD me guarantee hai lekin interest fully taxable hai.' },
    { q: '4% rule kya hai?', a: 'Retirement thumb rule: saal me corpus ka 4% nikalo to corpus 30+ saal chalta hai. ₹1 crore corpus = ₹4 lakh/saal = ~₹33,000/month.' },
  ],
};
