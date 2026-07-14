module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">RD Details</div>
    <div class="field">
      <label for="rd-amount">Monthly Deposit (₹)</label>
      <input type="number" id="rd-amount" value="5000" min="100" step="500">
    </div>
    <div class="field">
      <label for="rd-rate">Interest Rate (% per year)</label>
      <input type="number" id="rd-rate" value="7" min="1" max="15" step="0.05">
    </div>
    <div class="field">
      <label for="rd-months">Tenure (months)</label>
      <input type="number" id="rd-months" value="60" min="6" max="120" step="6">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="rd-maturity">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity amount</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total deposit</span><span class="v" id="rd-invested">—</span></div>
      <div class="result-row"><span class="k">Interest earned</span><span class="v" id="rd-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="rd-calc">Calculate RD maturity</button>
  <button class="btn btn-secondary" id="rd-copy">Copy result</button>
</div>`,
  howto: [
    'Enter how much you\'ll deposit every month.',
    'Enter the bank\'s RD interest rate.',
    'Enter the tenure in months (6 to 120 months).',
    'Click <strong>Calculate</strong> — see the maturity amount and total interest.',
  ],
  faq: [
    { q: 'How does interest work in an RD?', a: 'Each monthly deposit earns interest via quarterly compounding — the first installment gets the full time, the last gets just 1 month. This calculator uses the bank-standard quarterly compounding.' },
    { q: 'RD vs SIP — which should I choose?', a: 'RD gives a guaranteed return (~7%) — perfect for short-term goals. SIP is in equity, and can give higher returns long-term (5+ years) but with risk. RD is better for a 1–3 year goal.' },
    { q: 'What if I miss an RD installment?', a: 'Banks charge a small penalty (typically ₹1–2 per ₹100 per month) and the RD can even be discontinued after repeated defaults. Set up auto-debit.' },
    { q: 'Is RD interest taxed?', a: 'Yes — RD interest is fully taxable at your slab rate, and like an FD, TDS applies if the year\'s total interest exceeds ₹40,000 (₹50,000 for seniors).' },
  ],
};
