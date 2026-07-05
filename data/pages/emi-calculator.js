module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Loan Details</div>
    <div class="field">
      <label for="emi-amount">Loan Amount (₹)</label>
      <input type="number" id="emi-amount" value="1000000" min="1000" step="10000">
    </div>
    <div class="field">
      <label for="emi-rate">Interest Rate (% per year)</label>
      <input type="number" id="emi-rate" value="8.5" min="0.1" max="40" step="0.05">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="emi-tenure">Tenure</label>
        <input type="number" id="emi-tenure" value="20" min="1" step="1">
      </div>
      <div class="field">
        <label for="emi-tenure-unit">Unit</label>
        <select id="emi-tenure-unit">
          <option value="years" selected>Years</option>
          <option value="months">Months</option>
        </select>
      </div>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="result-big" id="emi-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Monthly EMI</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Principal amount</span><span class="v" id="emi-principal">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="emi-interest">—</span></div>
      <div class="result-row"><span class="k">Total payment</span><span class="v" id="emi-total">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="emi-calc">Calculate EMI</button>
  <button class="btn btn-secondary" id="emi-copy">Copy result</button>
</div>`,
  howto: [
    'Loan amount daalo — jitna loan lena hai (e.g. ₹10,00,000).',
    'Bank ka annual interest rate daalo (e.g. 8.5%).',
    'Tenure choose karo — years ya months me.',
    '<strong>Calculate EMI</strong> pe click karo — monthly EMI, total interest aur total payment turant dikh jayega.',
  ],
  faq: [
    { q: 'EMI kaise calculate hota hai?', a: 'EMI formula: P × r × (1+r)^n / ((1+r)^n − 1), jahan P = loan amount, r = monthly interest rate (annual rate ÷ 12 ÷ 100) aur n = total months. Ye tool yehi standard formula use karta hai jo sab banks use karte hain.' },
    { q: 'Kya ye home loan, car loan aur personal loan sabke liye kaam karta hai?', a: 'Haan. EMI ka formula sab fixed-rate loans ke liye same hota hai — bas amount, rate aur tenure sahi daalo.' },
    { q: 'Kya mera data kahin save hota hai?', a: 'Nahi. Saara calculation aapke browser me hi hota hai — koi data server pe nahi jaata.' },
    { q: 'Floating rate loan ka EMI isse alag hoga?', a: 'Floating rate me interest rate time ke saath badalta hai, isliye actual EMI future me change ho sakti hai. Ye calculator current rate pe EMI batata hai.' },
  ],
};
