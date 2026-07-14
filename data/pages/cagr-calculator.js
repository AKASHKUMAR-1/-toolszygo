module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Investment Details</div>
    <div class="field">
      <label for="cagr-initial">Initial Value (₹)</label>
      <input type="number" id="cagr-initial" value="100000" min="1" step="10000">
    </div>
    <div class="field">
      <label for="cagr-final">Final Value (₹)</label>
      <input type="number" id="cagr-final" value="250000" min="1" step="10000">
    </div>
    <div class="field">
      <label for="cagr-years">Duration (years)</label>
      <input type="number" id="cagr-years" value="5" min="0.5" max="60" step="0.5">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="cagr-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">CAGR (per year)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total growth</span><span class="v" id="cagr-growth">—</span></div>
      <div class="result-row"><span class="k">Money multiplied by</span><span class="v" id="cagr-multiple">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="cagr-calc">Calculate CAGR</button>
  <button class="btn btn-secondary" id="cagr-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the investment\'s starting value (what you paid).',
    'Enter today\'s/final value (what you sold for or current value).',
    'Enter the number of years for the period.',
    'Click <strong>Calculate CAGR</strong> — see the real annualized return %.',
  ],
  faq: [
    { q: 'What is CAGR?', a: 'Compound Annual Growth Rate — the average % the investment grew each year. Formula: (Final ÷ Initial)^(1/years) − 1. This gives a better comparison than misleading numbers like "total 150% return".' },
    { q: 'What\'s the difference between CAGR and absolute return?', a: '₹1L to ₹2.5L in 5 years = 150% absolute return, but CAGR is only 20.1%. Absolute return ignores time — CAGR is the right way to compare investments of different durations.' },
    { q: 'What is a good CAGR?', a: 'It depends on context: FDs 6–7%, Nifty long-term ~12%, top mutual funds 14–18%. Anything above inflation (~6%) is real earnings.' },
    { q: 'How do I calculate CAGR for property?', a: 'Enter the purchase price as initial, today\'s value as final, and the years. "Property doubled" often happens over 12 years = just 5.9% CAGR — the same as an FD!' },
  ],
};
