module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Income Details (FY 2025-26)</div>
    <div class="field">
      <label for="tax-income">Annual Gross Income (₹)</label>
      <input type="number" id="tax-income" value="1200000" min="0" step="50000">
    </div>
    <div class="checks">
      <label><input type="checkbox" id="tax-salaried" checked> Main salaried hoon (standard deduction milega)</label>
    </div>
    <div class="field">
      <label for="tax-deductions">Old regime deductions (80C + 80D + HRA etc.) (₹)</label>
      <input type="number" id="tax-deductions" value="150000" min="0" step="10000">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="tax-best">—</div>
    <div style="font-size:13px;font-weight:600;color:#5D8A4E;" id="tax-verdict"></div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">New regime tax</span><span class="v" id="tax-new">—</span></div>
      <div class="result-row"><span class="k">Old regime tax</span><span class="v" id="tax-old">—</span></div>
      <div class="result-row"><span class="k">Difference (bachat)</span><span class="v" id="tax-diff">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="tax-calc">Calculate tax</button>
  <button class="btn btn-secondary" id="tax-copy">Copy result</button>
</div>
<div style="font-size:12px;color:#A39C8B;margin-top:12px;">Note: Ye FY 2025-26 ke slabs pe based estimate hai (cess included, surcharge nahi). Exact filing ke liye CA ya income tax portal use karo.</div>`,
  howto: [
    'Apni annual gross income daalo (salary + other income).',
    'Salaried ho to checkbox on rakho — standard deduction (new: ₹75,000, old: ₹50,000) apply hoga.',
    'Old regime ke liye apne total deductions daalo — 80C (1.5L), 80D, HRA, home loan interest sab jodkar.',
    '<strong>Calculate</strong> dabao — dono regimes ka tax aur kaunsa better hai dikh jayega.',
  ],
  faq: [
    { q: 'New regime ke slabs kya hain (FY 2025-26)?', a: '₹0–4L: nil, 4–8L: 5%, 8–12L: 10%, 12–16L: 15%, 16–20L: 20%, 20–24L: 25%, 24L+: 30%. Salaried ko ₹75,000 standard deduction. Income ₹12L tak ho to 87A rebate se tax ZERO (salaried ke liye effectively ₹12.75L tak).' },
    { q: 'Old regime kab better hota hai?', a: 'Jab aapke deductions bahut zyada hon — HRA + 80C + 80D + home loan interest milakar income ka bada hissa. Roughly ₹4–5 lakh+ deductions pe hi old regime jeetta hai. Calculator dono compare kar deta hai.' },
    { q: '87A rebate kya hai?', a: 'New regime me taxable income ₹12 lakh tak hone pe pura tax maaf (₹60,000 tak rebate). Old regime me ₹5 lakh tak pe ₹12,500 rebate. Isliye ₹12L income pe new regime me tax zero hai.' },
    { q: 'Cess kya hota hai?', a: 'Health & Education Cess — calculated tax pe 4% extra. Ye calculator cess include karta hai. ₹50L+ income pe surcharge alag lagta hai jo isme nahi hai.' },
  ],
};
