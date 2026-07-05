module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">SIP Details</div>
    <div class="field">
      <label for="sip-amount">Monthly Investment (₹)</label>
      <input type="number" id="sip-amount" value="5000" min="100" step="500">
    </div>
    <div class="field">
      <label for="sip-rate">Expected Return (% per year)</label>
      <input type="number" id="sip-rate" value="12" min="1" max="40" step="0.5">
    </div>
    <div class="field">
      <label for="sip-years">Duration (years)</label>
      <input type="number" id="sip-years" value="10" min="1" max="50" step="1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="sip-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity value</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total invested</span><span class="v" id="sip-invested">—</span></div>
      <div class="result-row"><span class="k">Wealth gain (returns)</span><span class="v" id="sip-gain">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="sip-calc">Calculate SIP returns</button>
  <button class="btn btn-secondary" id="sip-copy">Copy result</button>
</div>`,
  howto: [
    'Monthly SIP amount daalo (e.g. ₹5,000).',
    'Expected annual return daalo — equity mutual funds ka long-term average ~12% hai.',
    'Duration years me daalo.',
    '<strong>Calculate</strong> pe click karo — maturity value, total invested aur wealth gain dikh jayega.',
  ],
  faq: [
    { q: 'SIP return kaise calculate hota hai?', a: 'Standard SIP formula: FV = P × [((1+i)^n − 1) / i] × (1+i), jahan P = monthly amount, i = monthly return (annual ÷ 12 ÷ 100) aur n = total months. Yehi formula AMCs aur apps use karte hain.' },
    { q: 'Kya 12% return guaranteed hai?', a: 'Nahi — mutual fund returns market pe depend karte hain. 12% equity funds ka historical long-term average hai, guarantee nahi. Conservative estimate ke liye 10% try karo.' },
    { q: 'SIP vs lumpsum — kya better hai?', a: 'SIP rupee-cost averaging deta hai — market girne pe zyada units milti hain. Salary earners ke liye SIP discipline bhi banata hai. Lumpsum tab better jab market low ho aur paisa ready ho.' },
    { q: 'Kya ye step-up SIP calculate karta hai?', a: 'Abhi ye fixed monthly SIP calculate karta hai. Step-up SIP (har saal amount badhana) ke liye alag calculation hoti hai — jald add karenge.' },
  ],
};
