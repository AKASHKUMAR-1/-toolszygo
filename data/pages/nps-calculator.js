module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">NPS Details</div>
    <div class="field">
      <label for="nps-age">Current Age</label>
      <input type="number" id="nps-age" value="30" min="18" max="59" step="1">
    </div>
    <div class="field">
      <label for="nps-amount">Monthly Contribution (₹)</label>
      <input type="number" id="nps-amount" value="5000" min="500" step="500">
    </div>
    <div class="field">
      <label for="nps-return">Expected Return (% per year)</label>
      <input type="number" id="nps-return" value="10" min="5" max="15" step="0.5">
    </div>
    <div class="field">
      <label for="nps-annuity">Annuity me kitna % daloge (min 40%)</label>
      <input type="number" id="nps-annuity" value="40" min="40" max="100" step="5">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result (60 ki umar pe)</div>
    <div class="result-big" id="nps-corpus">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Total corpus</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total invested</span><span class="v" id="nps-invested">—</span></div>
      <div class="result-row"><span class="k">Lump sum (tax-free withdrawal)</span><span class="v" id="nps-lumpsum">—</span></div>
      <div class="result-row"><span class="k">Annuity me jayega</span><span class="v" id="nps-annuity-amt">—</span></div>
      <div class="result-row"><span class="k">Estimated monthly pension @6%</span><span class="v" id="nps-pension">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="nps-calc">Calculate NPS</button>
  <button class="btn btn-secondary" id="nps-copy">Copy result</button>
</div>`,
  howto: [
    'Apni current age aur monthly NPS contribution daalo.',
    'Expected return set karo — NPS equity-debt mix historically 9–11% deta aaya hai.',
    'Kitna % annuity (pension) me daloge choose karo — minimum 40% zaroori hai.',
    '<strong>Calculate</strong> dabao — corpus, tax-free lump sum aur monthly pension estimate dikh jayega.',
  ],
  faq: [
    { q: 'NPS me 60 pe paisa kaise milta hai?', a: 'Corpus ka minimum 40% annuity (pension plan) me daalna zaroori hai jo monthly pension deta hai. Baaki 60% tak lump sum tax-free nikal sakte ho.' },
    { q: 'Monthly pension kaise estimate hoti hai?', a: 'Annuity amount × annuity rate (~6% per year) ÷ 12. E.g. ₹40 lakh annuity me = ₹40L × 6% ÷ 12 = ₹20,000/month approx. Asli rate annuity provider pe depend karta hai.' },
    { q: 'NPS pe tax benefit kya hai?', a: 'Old regime me 80CCD(1B) ke under ₹50,000 extra deduction (80C ke 1.5L ke upar). Employer contribution 80CCD(2) me dono regimes me deductible hai (basic ka 10–14% tak).' },
    { q: 'Kya NPS se pehle paisa nikal sakte hain?', a: 'Partial withdrawal (25% tak, specific reasons) 3 saal baad allowed hai. 60 se pehle exit karne pe 80% corpus annuity me daalna padta hai — isliye NPS ko retirement ke liye hi rakho.' },
  ],
};
