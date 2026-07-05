module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="ci-principal">Principal (₹)</label>
      <input type="number" id="ci-principal" value="100000" min="1" step="1000">
    </div>
    <div class="field">
      <label for="ci-rate">Interest Rate (% per year)</label>
      <input type="number" id="ci-rate" value="8" min="0.1" max="50" step="0.1">
    </div>
    <div class="field">
      <label for="ci-years">Time (years)</label>
      <input type="number" id="ci-years" value="10" min="0.5" max="60" step="0.5">
    </div>
    <div class="field">
      <label for="ci-freq">Compounding</label>
      <select id="ci-freq">
        <option value="1">Yearly</option>
        <option value="2">Half-yearly</option>
        <option value="4" selected>Quarterly</option>
        <option value="12">Monthly</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="ci-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Total amount</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Principal</span><span class="v" id="ci-p">—</span></div>
      <div class="result-row"><span class="k">Compound interest</span><span class="v" id="ci-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ci-calc">Calculate</button>
  <button class="btn btn-secondary" id="ci-copy">Copy result</button>
</div>`,
  howto: [
    'Principal amount daalo — jitne paise pe interest lagna hai.',
    'Annual interest rate aur time (years) daalo.',
    'Compounding frequency choose karo — banks aam taur pe quarterly compound karte hain.',
    '<strong>Calculate</strong> dabao — total amount aur compound interest dikh jayega.',
  ],
  faq: [
    { q: 'Compound interest ka formula kya hai?', a: 'A = P × (1 + r/n)^(n×t), jahan P = principal, r = annual rate (decimal), n = compounding frequency per year, t = years. Compound interest = A − P.' },
    { q: 'Simple aur compound interest me kya difference hai?', a: 'Simple interest sirf principal pe lagta hai. Compound interest me har period ka interest principal me judta hai aur agle period me us par bhi interest milta hai — isliye long-term me compound interest bahut zyada hota hai.' },
    { q: 'Compounding frequency se kitna difference padta hai?', a: 'Jitni zyada frequency, utna zyada return. ₹1 lakh @ 8% × 10 saal: yearly = ₹2.16L, quarterly = ₹2.21L, monthly = ₹2.22L. Difference chhota lagta hai lekin bade amounts pe significant hai.' },
    { q: 'Rule of 72 kya hai?', a: 'Paisa double hone ka approximate time = 72 ÷ interest rate. E.g. 8% pe paisa ~9 saal me double hota hai.' },
  ],
};
