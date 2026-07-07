module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Home Loan Details</div>
    <div class="field-row">
      <div class="field"><label for="mtg-price">Home Price (₹)</label><input type="number" id="mtg-price" value="5000000" min="0" step="50000"></div>
      <div class="field"><label for="mtg-down">Down Payment (₹)</label><input type="number" id="mtg-down" value="1000000" min="0" step="10000"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="mtg-rate">Interest Rate (% / year)</label><input type="number" id="mtg-rate" value="8.5" min="1" max="20" step="0.05"></div>
      <div class="field"><label for="mtg-years">Tenure (years)</label><input type="number" id="mtg-years" value="20" min="1" max="30"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="mtg-tax">Property Tax/year (₹, optional)</label><input type="number" id="mtg-tax" value="0" min="0"></div>
      <div class="field"><label for="mtg-insurance">Insurance/year (₹, optional)</label><input type="number" id="mtg-insurance" value="0" min="0"></div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="mtg-total">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Total Monthly Payment</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Loan amount</span><span class="v" id="mtg-loan">—</span></div>
      <div class="result-row"><span class="k">Principal + Interest (EMI)</span><span class="v" id="mtg-emi">—</span></div>
      <div class="result-row"><span class="k">Property tax/month</span><span class="v" id="mtg-tax-month">—</span></div>
      <div class="result-row"><span class="k">Insurance/month</span><span class="v" id="mtg-ins-month">—</span></div>
      <div class="result-row"><span class="k">Total interest (poore tenure me)</span><span class="v" id="mtg-total-interest">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Home price aur down payment daalo — loan amount khud calculate hoga.',
    'Interest rate aur tenure daalo, property tax/insurance optional hai.',
    'Total monthly payment (EMI + tax + insurance) turant dikh jayega.',
  ],
  faq: [
    { q: 'Mortgage aur EMI calculator me kya farak hai?', a: 'Ye down payment, property tax aur insurance ko bhi include karta hai — poora monthly outflow dikhata hai, sirf loan EMI nahi. Isse asli budget planning better hoti hai.' },
    { q: 'Down payment kitna rakhna chahiye?', a: 'India me banks aam taur pe 75-90% tak loan dete hain (10-25% down payment chahiye). Zyada down payment = kam EMI aur kam total interest.' },
    { q: 'Property tax kya hai?', a: 'Local municipal corporation ko diya jaane wala annual tax property ke liye — India me ye home price ka 0.5-2% tak hota hai, city ke hisaab se.' },
  ],
};
