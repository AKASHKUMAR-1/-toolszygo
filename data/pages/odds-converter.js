module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Enter Odds</div>
    <div class="field">
      <label for="oc-format">Odds Format</label>
      <select id="oc-format">
        <option value="american" selected>American (e.g. +150 or -200)</option>
        <option value="decimal">Decimal (e.g. 2.50)</option>
        <option value="fractional">Fractional (e.g. 3/2)</option>
      </select>
    </div>
    <div class="field">
      <label for="oc-odds">Odds</label>
      <input type="text" id="oc-odds" value="+150" placeholder="+150, 2.50 or 3/2">
    </div>
    <div class="field">
      <label for="oc-stake">Stake / Bet Amount ($, optional)</label>
      <input type="number" id="oc-stake" value="100" min="0" step="10">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Converted Odds</div>
    <div class="result-big" id="oc-prob">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Implied probability</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">American</span><span class="v" id="oc-american">—</span></div>
      <div class="result-row"><span class="k">Decimal</span><span class="v" id="oc-decimal">—</span></div>
      <div class="result-row"><span class="k">Fractional</span><span class="v" id="oc-fractional">—</span></div>
      <div class="result-row"><span class="k">Profit on stake</span><span class="v" id="oc-profit">—</span></div>
      <div class="result-row"><span class="k">Total return (stake + profit)</span><span class="v" id="oc-return">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="oc-calc">Convert odds</button>
  <button class="btn btn-secondary" id="oc-copy">Copy result</button>
</div>
<div style="font-size:12px;color:#A3937E;margin-top:10px;">For information only. If you choose to bet, please bet responsibly and only where it is legal for you.</div>`,
  howto: [
    'Choose the format your odds are in — American (+150), decimal (2.50) or fractional (3/2).',
    'Type the odds. For American odds include the sign: +150 for underdogs, -200 for favorites.',
    'Optionally enter a stake to see your potential profit and total return.',
    'All other formats and the implied probability appear instantly.',
  ],
  faq: [
    { q: 'How do American odds work?', a: 'Positive odds (+150) show the profit on a $100 stake — bet $100, win $150 profit. Negative odds (-200) show how much you must stake to win $100 — bet $200, win $100 profit. Positive = underdog, negative = favorite.' },
    { q: 'How are the formats related?', a: 'Decimal = total return per $1 staked (stake included). American +150 → decimal 2.50 → fractional 3/2 — all identical odds. Decimal is easiest to compare: higher number = bigger payout = less likely outcome.' },
    { q: 'What is implied probability?', a: 'The chance of winning that the odds imply: 1 ÷ decimal odds. Decimal 2.50 implies 40%. Bookmaker odds across all outcomes add up to more than 100% — the extra is their margin (the "vig").' },
    { q: 'Which format is used where?', a: 'American odds dominate US sportsbooks, decimal is standard in Europe, Australia and India, and fractional is traditional in UK horse racing.' },
  ],
};
