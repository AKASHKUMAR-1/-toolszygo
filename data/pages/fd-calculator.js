module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">FD Details</div>
    <div class="field">
      <label for="fd-amount">Deposit Amount (₹)</label>
      <input type="number" id="fd-amount" value="100000" min="1000" step="5000">
    </div>
    <div class="field">
      <label for="fd-rate">Interest Rate (% per year)</label>
      <input type="number" id="fd-rate" value="7" min="1" max="15" step="0.05">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="fd-tenure">Tenure</label>
        <input type="number" id="fd-tenure" value="5" min="1" step="1">
      </div>
      <div class="field">
        <label for="fd-tenure-unit">Unit</label>
        <select id="fd-tenure-unit">
          <option value="years" selected>Years</option>
          <option value="months">Months</option>
        </select>
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="fd-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity amount</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Principal</span><span class="v" id="fd-principal">—</span></div>
      <div class="result-row"><span class="k">Interest earned</span><span class="v" id="fd-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="fd-calc">Calculate FD maturity</button>
  <button class="btn btn-secondary" id="fd-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the amount you want to deposit in the FD.',
    'Enter the bank\'s annual interest rate (e.g. 7%).',
    'Choose the tenure in years or months.',
    'Click <strong>Calculate</strong> — see the maturity amount and total interest.',
  ],
  faq: [
    { q: 'How does FD interest compound?', a: 'Indian banks compound FD interest quarterly: Maturity = P × (1 + r/4)^(4×t). This calculator uses that same standard method.' },
    { q: 'Is FD interest taxed?', a: 'Yes — FD interest is added to your income and taxed at your slab rate. Banks also deduct TDS if interest exceeds ₹40,000/year (₹50,000 for senior citizens).' },
    { q: 'What happens on premature withdrawal?', a: 'Banks charge a 0.5–1% penalty for breaking an FD, and interest is paid at the rate applicable for the actual duration held. Exact rules depend on the bank.' },
    { q: 'FD vs SIP — which should I choose?', a: 'FDs give a guaranteed return with safe capital — best for short-term goals. SIPs/mutual funds can give higher returns long-term (5+ years) but carry market risk.' },
  ],
};
