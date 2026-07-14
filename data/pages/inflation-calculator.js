module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="inf-amount">Amount (₹)</label>
      <input type="number" id="inf-amount" value="100000" min="1" step="10000">
    </div>
    <div class="field">
      <label for="inf-rate">Inflation Rate (% per year)</label>
      <input type="number" id="inf-rate" value="6" min="0.5" max="20" step="0.5">
    </div>
    <div class="field">
      <label for="inf-years">Years</label>
      <input type="number" id="inf-years" value="10" min="1" max="50" step="1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="inf-future">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;" id="inf-future-label">Future cost of today's ₹1,00,000 expense</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Today's money value then</span><span class="v" id="inf-power">—</span></div>
      <div class="result-row"><span class="k">Purchasing power loss</span><span class="v" id="inf-loss">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="inf-calc">Calculate inflation impact</button>
  <button class="btn btn-secondary" id="inf-copy">Copy result</button>
</div>`,
  howto: [
    'Enter any amount — today\'s monthly expense, or savings.',
    'Enter the inflation rate — India\'s long-term average is ~6% (education/health 8–10%).',
    'Enter how many years ahead to look.',
    'Click <strong>Calculate</strong> — see both the future cost and money\'s shrinking value.',
  ],
  faq: [
    { q: 'What does inflation mean?', a: 'Prices rising every year. 6% inflation means something costing ₹100 today will cost ₹106 next year. Your money\'s purchasing power drops by that much.' },
    { q: 'How is future cost calculated?', a: 'Future cost = Amount × (1 + inflation)^years. Today\'s ₹1 lakh expense will cost ₹1.79 lakh in 10 years at 6% inflation. Conversely, today\'s ₹1 lakh will only be worth ₹55,839 in value then.' },
    { q: 'Why is keeping money in a savings account a loss?', a: 'Savings accounts give 2.5–3% while inflation is ~6% — meaning real value DROPS by ~3% every year. That\'s why inflation-beating investments (equity, PPF, NPS) matter.' },
    { q: 'What inflation rate should I use for retirement planning?', a: 'Generally 6%, but healthcare and education inflation run 8–10%. For conservative planning, you can use 7%.' },
  ],
};
