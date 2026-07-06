module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">RD Details</div>
    <div class="field">
      <label for="rd-amount">Monthly Deposit (₹)</label>
      <input type="number" id="rd-amount" value="5000" min="100" step="500">
    </div>
    <div class="field">
      <label for="rd-rate">Interest Rate (% per year)</label>
      <input type="number" id="rd-rate" value="7" min="1" max="15" step="0.05">
    </div>
    <div class="field">
      <label for="rd-months">Tenure (months)</label>
      <input type="number" id="rd-months" value="60" min="6" max="120" step="6">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="rd-maturity">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity amount</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total deposit</span><span class="v" id="rd-invested">—</span></div>
      <div class="result-row"><span class="k">Interest earned</span><span class="v" id="rd-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="rd-calc">Calculate RD maturity</button>
  <button class="btn btn-secondary" id="rd-copy">Copy result</button>
</div>`,
  howto: [
    'Har mahine jitna jama karoge wo amount daalo.',
    'Bank ka RD interest rate daalo.',
    'Tenure months me daalo (6 se 120 mahine).',
    '<strong>Calculate</strong> dabao — maturity amount aur total interest dikh jayega.',
  ],
  faq: [
    { q: 'RD me interest kaise lagta hai?', a: 'Har monthly deposit pe quarterly compounding se interest lagta hai — pehli installment ko pura time milta hai, aakhri ko sirf 1 mahina. Ye calculator bank-standard quarterly compounding use karta hai.' },
    { q: 'RD vs SIP — kya choose karein?', a: 'RD guaranteed return deta hai (~7%) — short-term goals ke liye perfect. SIP equity me hai, long-term (5+ saal) me zyada return de sakta hai lekin risk ke saath. 1–3 saal ke goal ke liye RD better hai.' },
    { q: 'RD installment miss ho jaye to?', a: 'Banks chhoti penalty lagate hain (₹1–2 per ₹100 per month typically) aur kai baar RD default hone pe band bhi ho sakta hai. Auto-debit laga lo.' },
    { q: 'RD ke interest pe tax lagta hai?', a: 'Haan — RD interest fully taxable hai aapke slab pe, aur FD ki tarah TDS bhi lagta hai agar saal ka total interest ₹40,000 (senior: ₹50,000) se zyada ho.' },
  ],
};
