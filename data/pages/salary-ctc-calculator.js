module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">CTC Details</div>
    <div class="field">
      <label for="ctc-amount">Annual CTC (₹)</label>
      <input type="number" id="ctc-amount" value="1200000" min="100000" step="50000">
    </div>
    <div class="field">
      <label for="ctc-basic">Basic Salary (CTC ka %)</label>
      <input type="number" id="ctc-basic" value="40" min="20" max="70" step="5">
    </div>
    <div class="checks">
      <label><input type="checkbox" id="ctc-pf" checked> PF included hai (employer + employee 12% of basic)</label>
      <label><input type="checkbox" id="ctc-tax" checked> Income tax bhi kaato (new regime estimate)</label>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="ctc-inhand">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Estimated monthly in-hand</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Employer PF (CTC me se)</span><span class="v" id="ctc-epf">—</span></div>
      <div class="result-row"><span class="k">Employee PF deduction</span><span class="v" id="ctc-pf-ded">—</span></div>
      <div class="result-row"><span class="k">Professional tax</span><span class="v" id="ctc-pt">—</span></div>
      <div class="result-row"><span class="k">Income tax (monthly avg)</span><span class="v" id="ctc-tax-amt">—</span></div>
      <div class="result-row"><span class="k">Annual in-hand</span><span class="v" id="ctc-annual">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ctc-calc">Calculate in-hand salary</button>
  <button class="btn btn-secondary" id="ctc-copy">Copy result</button>
</div>
<div style="font-size:12px;color:#A39C8B;margin-top:12px;">Note: Ye standard assumptions pe estimate hai — asli in-hand company ke salary structure (HRA, allowances, gratuity, variable pay) pe depend karta hai.</div>`,
  howto: [
    'Apna annual CTC daalo (offer letter wala).',
    'Basic salary ka % set karo — zyada tar companies 40–50% rakhti hain.',
    'PF aur tax ke checkboxes apne hisaab se set karo.',
    '<strong>Calculate</strong> dabao — estimated monthly in-hand aur poora breakdown dikh jayega.',
  ],
  faq: [
    { q: 'CTC aur in-hand me itna difference kyun hota hai?', a: 'CTC me employer PF, gratuity, insurance, variable pay sab included hota hai jo haath me nahi aata. Uske baad employee PF, professional tax aur income tax bhi katta hai. ₹12L CTC ka in-hand aam taur pe ₹80–90k/month hota hai.' },
    { q: 'PF kitna katta hai?', a: 'Employee PF = basic ka 12% (salary se katta hai). Employer bhi 12% daalta hai lekin wo CTC me already counted hota hai. Dono milakar retirement corpus banta hai.' },
    { q: 'Professional tax kya hai?', a: 'State government ka tax — zyada tar states me ₹200/month (₹2,400–2,500/saal). Kuch states (Delhi, UP, Haryana) me nahi lagta. Ye calculator ₹2,400/saal assume karta hai.' },
    { q: 'Variable pay/bonus ka kya?', a: 'Variable pay CTC me hota hai lekin performance pe milta hai aur aam taur pe quarterly/annually. Fixed in-hand ke liye CTC me se variable hata kar calculate karo.' },
  ],
};
