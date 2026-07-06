module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Card Details</div>
    <div class="field">
      <label for="cci-balance">Outstanding Balance (₹)</label>
      <input type="number" id="cci-balance" value="50000" min="100" step="1000">
    </div>
    <div class="field">
      <label for="cci-rate">Interest Rate (% per month)</label>
      <input type="number" id="cci-rate" value="3.5" min="0.5" max="5" step="0.1">
    </div>
    <div class="field">
      <label for="cci-payment">Monthly Payment (₹)</label>
      <input type="number" id="cci-payment" value="5000" min="100" step="500">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="cci-months">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Payoff time</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total payment</span><span class="v" id="cci-total">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="cci-interest">—</span></div>
      <div class="result-row"><span class="k">Annual rate (APR)</span><span class="v" id="cci-apr">—</span></div>
    </div>
    <div id="cci-warning" style="display:none;font-size:13px;font-weight:600;color:#B84F4F;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="cci-calc">Calculate payoff</button>
  <button class="btn btn-secondary" id="cci-copy">Copy result</button>
</div>`,
  howto: [
    'Credit card ka total outstanding balance daalo.',
    'Card ka monthly interest rate daalo — statement me hota hai, aam taur pe 3–3.75% per month.',
    'Har mahine jitna pay kar sakte ho wo daalo.',
    '<strong>Calculate</strong> dabao — kitne mahine lagenge aur total kitna interest jayega, sach dikh jayega.',
  ],
  faq: [
    { q: 'Credit card ka interest itna zyada kyun hai?', a: 'Cards ka rate 3–3.75% PER MONTH hota hai = 36–45% per year! Ye personal loan (11–16%) se 3x zyada hai. Isliye card ka balance carry karna sabse mehenga udhaar hai.' },
    { q: 'Minimum due bharne se kya hota hai?', a: 'Minimum due (~5%) bharne pe late fee nahi lagti, lekin baaki balance pe pura interest chalta rehta hai — aur naye purchases pe bhi grace period nahi milta. ₹50,000 ka balance minimum due pe chukane me saalon lag sakte hain.' },
    { q: 'Interest se bachne ka sahi tarika kya hai?', a: 'Due date tak PURA bill bharo — tab interest zero hai. Agar balance bada hai to personal loan me convert karna (11–16%) ya balance transfer card lena sasta padta hai.' },
    { q: 'Ye calculation kaise hoti hai?', a: 'Har mahine: balance × monthly rate ka interest judta hai, phir aapki payment ghatati hai. Jab tak balance zero ho, mahine count hote hain. Agar payment interest se kam hai to balance kabhi khatam nahi hoga — calculator warn karega.' },
  ],
};
