module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Income Details</div>
    <div class="field">
      <label for="le-income">Monthly Net Income (₹)</label>
      <input type="number" id="le-income" value="80000" min="5000" step="5000">
    </div>
    <div class="field">
      <label for="le-emis">Chal rahi EMIs (₹/month)</label>
      <input type="number" id="le-emis" value="0" min="0" step="1000">
    </div>
    <div class="field">
      <label for="le-rate">Loan Interest Rate (% per year)</label>
      <input type="number" id="le-rate" value="9" min="5" max="30" step="0.1">
    </div>
    <div class="field">
      <label for="le-tenure">Loan Tenure (years)</label>
      <input type="number" id="le-tenure" value="20" min="1" max="30" step="1">
    </div>
    <div class="field">
      <label for="le-foir">Bank kitna income EMI me allow karta hai (FOIR %)</label>
      <select id="le-foir">
        <option value="40">40% (conservative)</option>
        <option value="50" selected>50% (standard)</option>
        <option value="60">60% (high income walo ke liye)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="le-amount">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Estimated loan eligibility</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Max EMI aap afford kar sakte ho</span><span class="v" id="le-emi">—</span></div>
      <div class="result-row"><span class="k">Total payment (tenure me)</span><span class="v" id="le-total">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="le-calc">Check eligibility</button>
  <button class="btn btn-secondary" id="le-copy">Copy result</button>
</div>`,
  howto: [
    'Apni monthly net (in-hand) income daalo.',
    'Agar koi EMI already chal rahi hai to wo daalo.',
    'Loan ka expected rate aur tenure daalo.',
    '<strong>Check eligibility</strong> dabao — bank approximately kitna loan de sakta hai dikh jayega.',
  ],
  faq: [
    { q: 'FOIR kya hota hai?', a: 'Fixed Obligation to Income Ratio — income ka kitna % EMIs me jaa sakta hai. Banks aam taur pe 40–55% allow karte hain. ₹80,000 income pe 50% FOIR = max ₹40,000 ki total EMIs.' },
    { q: 'Eligibility kaise calculate hoti hai?', a: 'Max EMI = (income × FOIR%) − existing EMIs. Phir us EMI se loan amount reverse-calculate hota hai standard EMI formula se, aapke rate aur tenure pe.' },
    { q: 'Asli eligibility isse alag kyun ho sakti hai?', a: 'Banks credit score, employer, age, property value (home loan me LTV), aur income stability bhi dekhte hain. Ye calculator income-based estimate deta hai — final amount bank decide karta hai.' },
    { q: 'Eligibility kaise badhayein?', a: 'Existing loans band karo, co-applicant (spouse) jodo — dono ki income count hoti hai, lambi tenure lo, ya credit score 750+ rakho jisse better rate mile.' },
  ],
};
