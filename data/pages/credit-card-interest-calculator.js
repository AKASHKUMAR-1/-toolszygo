module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Card Details</div>
    <div class="field">
      <label for="cci-balance">Outstanding Balance (₹)</label>
      <input type="number" id="cci-balance" value="50000" min="100" step="1000">
    </div>
    <div class="field">
      <label for="cci-rate">Interest Rate (% per month)</label>
      <input type="number" id="cci-rate" value="3.5" min="0.5" max="5" step="0.1">
    </div>
    <div class="field">
      <label for="cci-payment">Monthly Payment (₹)</label>
      <input type="number" id="cci-payment" value="5000" min="100" step="500">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div id="cci-currency-toggle"></div>
    <div class="result-big" id="cci-months">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Payoff time</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total payment</span><span class="v" id="cci-total">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="cci-interest">—</span></div>
      <div class="result-row"><span class="k">Annual rate (APR)</span><span class="v" id="cci-apr">—</span></div>
    </div>
    <div id="cci-warning" style="display:none;font-size:13px;font-weight:600;color:#B84F4F;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="cci-calc">Calculate payoff</button>
  <button class="btn btn-secondary" id="cci-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the credit card\'s total outstanding balance.',
    'Enter the card\'s monthly interest rate — found on the statement, usually 3–3.75% per month.',
    'Enter how much you can pay each month.',
    'Click <strong>Calculate</strong> — see how many months it\'ll take and the real total interest.',
  ],
  faq: [
    { q: 'Why is credit card interest so high?', a: 'Card rates are 3–3.75% PER MONTH = 36–45% per year! That\'s 3x higher than a personal loan (11–16%). This is why carrying a card balance is the most expensive kind of debt.' },
    { q: 'What happens if I only pay the minimum due?', a: 'Paying the minimum due (~5%) avoids the late fee, but interest keeps accruing on the rest of the balance — and new purchases lose their grace period too. A ₹50,000 balance can take years to clear at minimum due.' },
    { q: 'What\'s the right way to avoid interest?', a: 'Pay the FULL bill by the due date — that\'s zero interest. If the balance is large, converting to a personal loan (11–16%) or a balance transfer card works out cheaper.' },
    { q: 'How is this calculated?', a: 'Each month: interest at balance × monthly rate is added, then your payment is subtracted. Months are counted until the balance reaches zero. If the payment is less than the interest, the balance will never clear — the calculator will warn you.' },
  ],
};
