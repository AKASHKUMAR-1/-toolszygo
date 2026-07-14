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
    <div style="font-size:12px;color:#A39C8B;">Deposits are made for the first 15 years, and the account matures in 21 years. The government updates the rate every quarter (currently ~8.2%).</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result (after 21 years)</div>
    <div class="result-big" id="ssy-maturity">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity amount (tax-free)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total deposit (15 years)</span><span class="v" id="ssy-invested">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="ssy-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ssy-calc">Calculate SSY maturity</button>
  <button class="btn btn-secondary" id="ssy-copy">Copy result</button>
</div>`,
  howto: [
    'Enter how much you\'ll deposit in SSY each year (₹250 to ₹1.5 lakh).',
    'Enter the current interest rate — currently ~8.2% (revised by the govt every quarter).',
    'Click <strong>Calculate</strong> — see the tax-free maturity amount after 21 years.',
  ],
  faq: [
    { q: 'Who can open an SSY account?', a: 'Parents/guardians can open it at a post office or bank before the girl turns 10. One account per girl, for a maximum of two daughters.' },
    { q: 'Deposits for 15 years and maturity at 21 — what does that mean?', a: 'Deposits are made for 15 years from opening. After that, interest keeps growing for 6 more years. Maturity is 21 years from account opening. It can also be closed for the girl\'s marriage after she turns 18.' },
    { q: 'Is SSY completely tax-free?', a: 'Yes — EEE status: 80C deduction on deposits (old regime), tax-free interest, tax-free maturity. One of India\'s best guaranteed schemes.' },
    { q: 'Can I withdraw money before maturity?', a: 'After the girl turns 18, up to 50% withdrawal is allowed for higher education.' },
  ],
};
