module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">SCSS Details</div>
    <div class="field">
      <label for="scss-amount">Investment Amount (₹) — max 30,00,000</label>
      <input type="number" id="scss-amount" value="1500000" min="1000" max="3000000" step="50000">
    </div>
    <div class="field">
      <label for="scss-rate">Interest Rate (% per year)</label>
      <input type="number" id="scss-rate" value="8.2" min="5" max="12" step="0.1">
    </div>
    <div style="font-size:12px;color:#A39C8B;">SCSS me interest har quarter payout hota hai (compound nahi hota). Tenure 5 saal, 60+ walon ke liye.</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="scss-quarterly">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Har quarter milega</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Monthly average</span><span class="v" id="scss-monthly">—</span></div>
      <div class="result-row"><span class="k">Yearly interest</span><span class="v" id="scss-yearly">—</span></div>
      <div class="result-row"><span class="k">5 saal me total interest</span><span class="v" id="scss-total">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="scss-calc">Calculate SCSS interest</button>
  <button class="btn btn-secondary" id="scss-copy">Copy result</button>
</div>`,
  howto: [
    'SCSS me jitna invest karna hai wo daalo (max ₹30 lakh).',
    'Current rate daalo — abhi ~8.2% hai.',
    '<strong>Calculate</strong> dabao — quarterly payout aur 5 saal ka total interest dikh jayega.',
  ],
  faq: [
    { q: 'SCSS me interest kaise milta hai?', a: 'Interest har quarter (April, July, October, January ki 1st) ko aapke savings account me credit hota hai — ye regular income scheme hai, compound nahi hota. Principal 5 saal baad wapas milta hai.' },
    { q: 'SCSS kaun khol sakta hai?', a: '60+ ke log; 55–60 ke retired (VRS/superannuation) bhi kuch conditions pe. Retired defence personnel 50+ pe. Post office ya banks me khulta hai.' },
    { q: 'SCSS pe tax kaisa hai?', a: 'Investment 80C me deductible (old regime). Interest taxable hai aur saal me ₹50,000 se zyada hone pe TDS bhi lagta hai (Form 15H de kar bacha sakte hain agar tax nahi banta).' },
    { q: '5 saal baad kya options hain?', a: 'Account ek baar 3 saal ke liye extend ho sakta hai (us samay ke rate pe). Ya principal wapas lekar kahin aur invest kar sakte ho.' },
  ],
};
