module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">FD Details</div>
    <div class="field">
      <label for="fd-amount">Deposit Amount (₹)</label>
      <input type="number" id="fd-amount" value="100000" min="1000" step="5000">
    </div>
    <div class="field">
      <label for="fd-rate">Interest Rate (% per year)</label>
      <input type="number" id="fd-rate" value="7" min="1" max="15" step="0.05">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="fd-tenure">Tenure</label>
        <input type="number" id="fd-tenure" value="5" min="1" step="1">
      </div>
      <div class="field">
        <label for="fd-tenure-unit">Unit</label>
        <select id="fd-tenure-unit">
          <option value="years" selected>Years</option>
          <option value="months">Months</option>
        </select>
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="fd-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity amount</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Principal</span><span class="v" id="fd-principal">—</span></div>
      <div class="result-row"><span class="k">Interest earned</span><span class="v" id="fd-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="fd-calc">Calculate FD maturity</button>
  <button class="btn btn-secondary" id="fd-copy">Copy result</button>
</div>`,
  howto: [
    'FD me jitna paisa daalna hai wo amount daalo.',
    'Bank ka annual interest rate daalo (e.g. 7%).',
    'Tenure years ya months me choose karo.',
    '<strong>Calculate</strong> dabao — maturity amount aur total interest dikh jayega.',
  ],
  faq: [
    { q: 'FD interest kaise compound hota hai?', a: 'Indian banks me FD interest quarterly compound hota hai: Maturity = P × (1 + r/4)^(4×t). Ye calculator yehi standard method use karta hai.' },
    { q: 'FD interest pe tax lagta hai?', a: 'Haan — FD interest aapki income me add hokar slab rate se taxable hai. Saal me ₹40,000 (senior citizens ₹50,000) se zyada interest pe bank TDS bhi kaatta hai.' },
    { q: 'Premature withdrawal pe kya hota hai?', a: 'FD tudwane pe banks 0.5–1% penalty lagate hain aur jitna time FD chali usi ke applicable rate se interest milta hai. Exact rules bank pe depend karte hain.' },
    { q: 'FD vs SIP — kya choose karein?', a: 'FD guaranteed return deta hai, capital safe rehta hai — short-term goals ke liye best. SIP/mutual funds long-term (5+ saal) me zyada return de sakte hain lekin market risk ke saath.' },
  ],
};
