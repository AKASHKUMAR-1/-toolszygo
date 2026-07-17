module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="si-principal">Principal (₹)</label>
      <input type="number" id="si-principal" value="50000" min="1" step="1000">
    </div>
    <div class="field">
      <label for="si-rate">Interest Rate (% per year)</label>
      <input type="number" id="si-rate" value="10" min="0.1" max="60" step="0.1">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="si-time">Time</label>
        <input type="number" id="si-time" value="2" min="0.1" step="0.5">
      </div>
      <div class="field">
        <label for="si-time-unit">Unit</label>
        <select id="si-time-unit">
          <option value="years" selected>Years</option>
          <option value="months">Months</option>
        </select>
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div id="si-currency-toggle"></div>
    <div class="result-big" id="si-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Simple interest</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Principal</span><span class="v" id="si-p">—</span></div>
      <div class="result-row"><span class="k">Total amount (P + SI)</span><span class="v" id="si-total">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="si-calc">Calculate</button>
  <button class="btn btn-secondary" id="si-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the principal amount — the money lent/borrowed.',
    'Enter the annual interest rate (e.g. 10%).',
    'Enter the time in years or months.',
    'Click <strong>Calculate</strong> — see the simple interest and total amount.',
  ],
  faq: [
    { q: 'What is the simple interest formula?', a: 'SI = P × R × T ÷ 100, where P = principal, R = annual rate, and T = time in years. Total amount = P + SI.' },
    { q: 'Where is simple interest used?', a: 'In personal loans, gold loans, some vehicle loans, and short-term lending. Bank deposits mostly use compound interest.' },
    { q: 'How do I calculate interest on a monthly basis?', a: 'Select the "Months" time unit — the tool converts months to years (months ÷ 12). "2 rupees per hundred" means 2% per month = 24% per year.' },
    { q: 'Which is more — simple or compound?', a: 'For the same rate and time, compound interest is always more (after 1 period), because it also earns interest on interest.' },
  ],
};
