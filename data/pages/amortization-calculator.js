module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Loan Details</div>
    <div class="field">
      <label for="am-amount">Loan Amount (₹)</label>
      <input type="number" id="am-amount" value="1000000" min="1000" step="10000">
    </div>
    <div class="field">
      <label for="am-rate">Interest Rate (% / year)</label>
      <input type="number" id="am-rate" value="9" min="1" max="30" step="0.05">
    </div>
    <div class="field">
      <label for="am-years">Tenure (years)</label>
      <input type="number" id="am-years" value="5" min="1" max="30">
    </div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Monthly EMI</span><span class="v" id="am-emi">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="am-total-interest">—</span></div>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Schedule (pehle 12 months)</div>
    <div id="am-table" style="overflow:auto;max-height:340px;font-size:12px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="am-download">Poora schedule CSV me download karo</button>
</div>`,
  howto: [
    'Loan amount, rate aur tenure daalo.',
    'Pehle 12 months ka schedule (principal/interest/balance) dikh jayega.',
    'Poora schedule (saare months) CSV me download kar sakte ho Excel me kholne ke liye.',
  ],
  faq: [
    { q: 'Amortization schedule kya hai?', a: 'Loan ki har EMI ka breakdown — kitna principal aur kitna interest gaya, aur balance kitna bacha — month by month.' },
    { q: 'Shuru me interest zyada kyun katta hai?', a: 'Interest outstanding balance pe calculate hota hai — shuru me balance zyada hota hai isliye interest ka hissa zyada hota hai. Jaise-jaise balance ghatta hai, principal ka hissa badhta jaata hai.' },
    { q: 'Prepayment se schedule kaise badalta hai?', a: 'Prepayment se principal seedha kam ho jaata hai, isliye baaki schedule me interest kam lagta hai aur loan jaldi khatam ho jaata hai. Iske liye humara Loan Prepayment Calculator use karo.' },
  ],
};
