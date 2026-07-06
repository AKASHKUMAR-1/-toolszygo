module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">SSY Details</div>
    <div class="field">
      <label for="ssy-amount">Yearly Deposit (₹) — max 1,50,000</label>
      <input type="number" id="ssy-amount" value="50000" min="250" max="150000" step="1000">
    </div>
    <div class="field">
      <label for="ssy-rate">Interest Rate (% per year)</label>
      <input type="number" id="ssy-rate" value="8.2" min="5" max="12" step="0.1">
    </div>
    <div style="font-size:12px;color:#A39C8B;">Deposit pehle 15 saal tak hota hai, account 21 saal me mature hota hai. Rate government har quarter update karti hai (abhi ~8.2%).</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result (21 saal pe)</div>
    <div class="result-big" id="ssy-maturity">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity amount (tax-free)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total deposit (15 saal)</span><span class="v" id="ssy-invested">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="ssy-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ssy-calc">Calculate SSY maturity</button>
  <button class="btn btn-secondary" id="ssy-copy">Copy result</button>
</div>`,
  howto: [
    'Har saal SSY me jitna jama karoge wo amount daalo (₹250 se ₹1.5 lakh tak).',
    'Current interest rate daalo — abhi ~8.2% hai (govt har quarter revise karti hai).',
    '<strong>Calculate</strong> dabao — 21 saal pe tax-free maturity amount dikh jayega.',
  ],
  faq: [
    { q: 'SSY account kaun khol sakta hai?', a: 'Beti ke 10 saal ki hone se pehle parents/guardian post office ya bank me khol sakte hain. Ek beti ka ek hi account, maximum do betiyon ke liye.' },
    { q: 'Deposit 15 saal aur maturity 21 saal — matlab?', a: 'Account kholne se 15 saal tak deposit karna hota hai. Uske baad 6 saal tak sirf interest badhta rehta hai. Account opening se 21 saal pe maturity milti hai. Beti ke 18 ke baad shaadi pe bhi close kar sakte hain.' },
    { q: 'Kya SSY poori tarah tax-free hai?', a: 'Haan — EEE status: deposit pe 80C deduction (old regime), interest tax-free, maturity tax-free. India ki sabse best guaranteed schemes me se ek.' },
    { q: 'Beech me paisa nikal sakte hain?', a: 'Beti ke 18 saal ki hone ke baad higher education ke liye 50% tak withdrawal allowed hai.' },
  ],
};
