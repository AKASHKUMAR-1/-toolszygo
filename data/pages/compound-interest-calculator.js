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
    <div id="ci-currency-toggle"></div>
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
    'Enter the principal amount — the money on which interest applies.',
    'Enter the annual interest rate and time (years).',
    'Choose the compounding frequency — banks usually compound quarterly.',
    'Click <strong>Calculate</strong> — see the total amount and compound interest.',
  ],
  faq: [
    { q: 'What is the compound interest formula?', a: 'A = P × (1 + r/n)^(n×t), where P = principal, r = annual rate (decimal), n = compounding frequency per year, t = years. Compound interest = A − P.' },
    { q: 'What\'s the difference between simple and compound interest?', a: 'Simple interest applies only to the principal. With compound interest, each period\'s interest gets added to the principal, and earns interest itself in the next period — so compound interest is much larger over the long term.' },
    { q: 'How much does compounding frequency matter?', a: 'The higher the frequency, the higher the return. ₹1 lakh @ 8% × 10 years: yearly = ₹2.16L, quarterly = ₹2.21L, monthly = ₹2.22L. The difference looks small but is significant on large amounts.' },
    { q: 'What is the Rule of 72?', a: 'The approximate time for money to double = 72 ÷ interest rate. E.g. at 8%, money doubles in ~9 years.' },
  ],
};
