module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Your Details</div>
    <div class="field-row">
      <div class="field">
        <label for="k401-age">Current Age</label>
        <input type="number" id="k401-age" value="30" min="18" max="70" step="1">
      </div>
      <div class="field">
        <label for="k401-retire">Retirement Age</label>
        <input type="number" id="k401-retire" value="65" min="40" max="75" step="1">
      </div>
    </div>
    <div class="field">
      <label for="k401-salary">Annual Salary ($)</label>
      <input type="number" id="k401-salary" value="70000" min="1000" step="1000">
    </div>
    <div class="field">
      <label for="k401-balance">Current 401(k) Balance ($)</label>
      <input type="number" id="k401-balance" value="20000" min="0" step="1000">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="k401-contrib">Your Contribution (% of salary)</label>
        <input type="number" id="k401-contrib" value="10" min="0" max="100" step="0.5">
      </div>
      <div class="field">
        <label for="k401-return">Annual Return (%)</label>
        <input type="number" id="k401-return" value="7" min="0" max="15" step="0.5">
      </div>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="k401-match">Employer Match (%)</label>
        <input type="number" id="k401-match" value="50" min="0" max="200" step="5">
      </div>
      <div class="field">
        <label for="k401-match-limit">Up to (% of salary)</label>
        <input type="number" id="k401-match-limit" value="6" min="0" max="25" step="0.5">
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="k401-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Projected balance at retirement</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Your total contributions</span><span class="v" id="k401-your-total">—</span></div>
      <div class="result-row"><span class="k">Total employer match</span><span class="v" id="k401-employer-total">—</span></div>
      <div class="result-row"><span class="k">Investment growth</span><span class="v" id="k401-growth">—</span></div>
      <div class="result-row"><span class="k">Monthly contribution (you + employer)</span><span class="v" id="k401-monthly">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="k401-calc">Calculate</button>
  <button class="btn btn-secondary" id="k401-copy">Copy result</button>
</div>`,
  howto: [
    'Enter your current age, planned retirement age, salary and current 401(k) balance.',
    'Enter your contribution as a % of salary (10–15% is a common target).',
    'Enter your employer match — e.g. "50% match up to 6%" means enter 50 and 6.',
    'Click <strong>Calculate</strong> — see your projected balance, total contributions, employer match and growth.',
  ],
  faq: [
    { q: 'What is a 401(k)?', a: 'A 401(k) is a US employer-sponsored retirement account. You contribute a percentage of each paycheck before taxes, many employers match part of it, and the money grows tax-deferred until retirement.' },
    { q: 'How does employer matching work?', a: 'A common formula is "50% of your contributions up to 6% of salary" — if you earn $70,000 and contribute 6% ($4,200/yr), your employer adds 50% of that ($2,100/yr). Always contribute at least enough to get the full match — it\'s free money.' },
    { q: 'What annual return should I assume?', a: 'A diversified stock-heavy portfolio has historically returned about 7–10% per year before inflation. 7% is a reasonably conservative long-term assumption. This calculator compounds monthly.' },
    { q: 'Does this account for contribution limits or salary growth?', a: 'No — it assumes a constant salary and contribution for simplicity. The IRS also caps annual employee contributions (the limit changes each year), so very high earners should check the current limit.' },
  ],
};
