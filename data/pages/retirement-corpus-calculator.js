module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field-row">
      <div class="field">
        <label for="rc-age">Current Age</label>
        <input type="number" id="rc-age" value="30" min="18" max="59" step="1">
      </div>
      <div class="field">
        <label for="rc-retire">Retirement Age</label>
        <input type="number" id="rc-retire" value="60" min="40" max="70" step="1">
      </div>
    </div>
    <div class="field">
      <label for="rc-expense">Today's Monthly Expenses (₹)</label>
      <input type="number" id="rc-expense" value="50000" min="5000" step="5000">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="rc-inflation">Inflation (%)</label>
        <input type="number" id="rc-inflation" value="6" min="2" max="12" step="0.5">
      </div>
      <div class="field">
        <label for="rc-life">Life Expectancy</label>
        <input type="number" id="rc-life" value="85" min="70" max="100" step="1">
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="rc-corpus">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Retirement corpus needed</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Monthly expense at retirement</span><span class="v" id="rc-future-exp">—</span></div>
      <div class="result-row"><span class="k">Monthly SIP @12% to build this corpus</span><span class="v" id="rc-sip">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="rc-calc">Calculate retirement corpus</button>
  <button class="btn btn-secondary" id="rc-copy">Copy result</button>
</div>`,
  howto: [
    'Enter your current age and planned retirement age.',
    'Enter today\'s monthly expenses — the same lifestyle is assumed at retirement.',
    'Adjust inflation and life expectancy if needed.',
    'Click <strong>Calculate</strong> — see the corpus needed and the monthly SIP to build it.',
  ],
  faq: [
    { q: 'How is the corpus calculated?', a: 'Today\'s expenses are first grown with inflation until retirement. Then the corpus needed for the retirement years is calculated assuming the corpus earns ~7% post-retirement while expenses keep rising with inflation (real return method).' },
    { q: 'How large a corpus is enough?', a: 'Rule of thumb: 25–30x the annual expenses in the first year of retirement. E.g. ₹3.5L/month expense at retirement = ₹42L/year × 30 = ~₹12.6 crore. This calculator gives an exact number based on your inputs.' },
    { q: 'Why SIP @12%?', a: 'Long-term equity has a historical average of ~12%. For a conservative estimate, assume less and invest a slightly higher SIP. Shift from equity to debt as you approach retirement.' },
    { q: 'What if I already have EPF/NPS?', a: 'Subtract their expected retirement value from this corpus — cover the remaining gap with SIP. EPF+NPS often cover 30–50% of the corpus.' },
  ],
};
