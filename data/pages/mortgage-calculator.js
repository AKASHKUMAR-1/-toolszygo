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
    <div id="mtg-currency-toggle"></div>
    <div class="result-big" id="mtg-total">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Total Monthly Payment</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Loan amount</span><span class="v" id="mtg-loan">—</span></div>
      <div class="result-row"><span class="k">Principal + Interest (EMI)</span><span class="v" id="mtg-emi">—</span></div>
      <div class="result-row"><span class="k">Property tax/month</span><span class="v" id="mtg-tax-month">—</span></div>
      <div class="result-row"><span class="k">Insurance/month</span><span class="v" id="mtg-ins-month">—</span></div>
      <div class="result-row"><span class="k">Total interest (over full tenure)</span><span class="v" id="mtg-total-interest">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Enter the home price and down payment — the loan amount is calculated automatically.',
    'Enter the interest rate and tenure; property tax/insurance are optional.',
    'The total monthly payment (EMI + tax + insurance) appears instantly.',
  ],
  faq: [
    { q: 'What\'s the difference between this and an EMI calculator?', a: 'This also includes down payment, property tax, and insurance — showing the full monthly outflow, not just the loan EMI. This gives better real-world budget planning.' },
    { q: 'How much down payment should I keep?', a: 'In India, banks usually lend 75-90% (10-25% down payment needed). A bigger down payment means a lower EMI and lower total interest.' },
    { q: 'What is property tax?', a: 'An annual tax paid to the local municipal corporation for the property — in India this is typically 0.5-2% of the home price, depending on the city.' },
  ],
};
