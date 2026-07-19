module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Loan Details</div>
    <div class="field">
      <label for="al-price">Vehicle Price (<span id="al-unit1">$</span>)</label>
      <input type="number" id="al-price" value="30000" min="0" step="500">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="al-down">Down Payment (<span id="al-unit2">$</span>)</label>
        <input type="number" id="al-down" value="5000" min="0" step="500">
      </div>
      <div class="field">
        <label for="al-trade">Trade-In Value (<span id="al-unit3">$</span>)</label>
        <input type="number" id="al-trade" value="0" min="0" step="500">
      </div>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="al-tax">Sales Tax (%)</label>
        <input type="number" id="al-tax" value="7" min="0" max="15" step="0.25">
      </div>
      <div class="field">
        <label for="al-rate">APR (%)</label>
        <input type="number" id="al-rate" value="6.5" min="0" max="30" step="0.1">
      </div>
    </div>
    <div class="field">
      <label for="al-term">Loan Term</label>
      <select id="al-term">
        <option value="36">36 months (3 years)</option>
        <option value="48">48 months (4 years)</option>
        <option value="60" selected>60 months (5 years)</option>
        <option value="72">72 months (6 years)</option>
        <option value="84">84 months (7 years)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div id="al-currency-toggle"></div>
    <div class="result-big" id="al-payment">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Monthly payment</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Loan amount (after tax, down &amp; trade-in)</span><span class="v" id="al-loan">—</span></div>
      <div class="result-row"><span class="k">Sales tax</span><span class="v" id="al-tax-amt">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="al-interest">—</span></div>
      <div class="result-row"><span class="k">Total cost (vehicle + interest)</span><span class="v" id="al-total">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="al-calc">Calculate payment</button>
  <button class="btn btn-secondary" id="al-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the vehicle price and your down payment.',
    'If you\'re trading in your old car, enter its trade-in value.',
    'Enter your state\'s sales tax rate and the loan APR your lender quoted.',
    'Choose the loan term — see your monthly payment and total interest instantly.',
  ],
  faq: [
    { q: 'How is the loan amount calculated?', a: 'Loan = (vehicle price − trade-in) + sales tax − down payment. In most US states, sales tax applies to the price after the trade-in credit — this calculator uses that convention.' },
    { q: 'What APR should I expect?', a: 'Rates vary with credit score: excellent credit may see 5–7% on new cars, while lower scores can see 10–20%+. Used-car rates run higher than new-car rates. Get pre-approved by a bank or credit union before visiting the dealer.' },
    { q: 'Is a longer loan term better?', a: 'A longer term (72–84 months) lowers the monthly payment but costs much more in total interest, and you risk owing more than the car is worth. If you can afford it, 48–60 months is usually the sweet spot.' },
    { q: 'Does this include registration or dealer fees?', a: 'No — title, registration and documentation fees vary by state and dealer. Add them to the vehicle price field if you plan to finance them.' },
  ],
};
