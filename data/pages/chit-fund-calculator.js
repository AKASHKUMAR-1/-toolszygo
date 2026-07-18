module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Committee Details</div>
    <div class="field-row">
      <div class="field">
        <label for="cf-members">Total Members</label>
        <input type="number" id="cf-members" value="10" min="2" max="100" step="1">
      </div>
      <div class="field">
        <label for="cf-amount">Monthly Amount (₹)</label>
        <input type="number" id="cf-amount" value="5000" min="100" step="100">
      </div>
    </div>
    <div class="field">
      <label for="cf-turn">Your Turn (which month you receive the pool)</label>
      <input type="number" id="cf-turn" value="1" min="1" step="1">
    </div>
    <div class="field">
      <label for="cf-rate">Reference Interest Rate (% per year, for comparison)</label>
      <input type="number" id="cf-rate" value="8" min="0" max="30" step="0.5">
      <div style="font-size:12px;color:#A3937E;margin-top:4px;">Use your bank FD/savings rate — this shows what the early payout is "worth" compared to that.</div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="cf-benefit">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;" id="cf-benefit-label">Value of taking your turn early</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total pool you receive</span><span class="v" id="cf-pool">—</span></div>
      <div class="result-row"><span class="k">Total you pay in (over full cycle)</span><span class="v" id="cf-total-paid">—</span></div>
      <div class="result-row"><span class="k">Amount "advanced" to you at your turn</span><span class="v" id="cf-advance">—</span></div>
      <div class="result-row"><span class="k">Months this advance is outstanding</span><span class="v" id="cf-months">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="cf-calc">Calculate</button>
  <button class="btn btn-secondary" id="cf-copy">Copy result</button>
</div>
<div style="font-size:12px;color:#A3937E;margin-top:10px;">Models a simple fixed-pool rotating committee (no auction/bidding). Registered auction-based chit funds (under the Chit Funds Act) work differently — the discount bid itself sets the payout.</div>`,
  howto: [
    'Enter total members and the fixed monthly amount everyone contributes.',
    'Enter your turn number — which month you receive the full pool (1 = first, last = final month).',
    'Enter a reference interest rate (like your FD rate) to see what that early access is really worth.',
    'Taking your turn early shows a benefit (like an interest-free loan); taking it last shows zero benefit (you were just saving).',
  ],
  faq: [
    { q: 'How does a committee (BC) work?', a: 'N members each contribute a fixed amount every month. Each month, one member (by rotation, lottery or need) takes the full pool (N × amount). Everyone pays in for the whole cycle and everyone receives the pool exactly once.' },
    { q: 'Why does turn order matter if everyone gets the same amount?', a: 'Because of timing. The person who takes the pool in month 1 has only paid in 1 installment but receives the full amount — effectively an interest-free advance on the rest, repaid via their remaining monthly payments. The person who takes it last has fully paid in already — they just saved, with no advance.' },
    { q: 'How is the "benefit" value calculated?', a: 'The outstanding advance ((N − your turn) × amount) declines by one installment each month until the cycle ends. Multiplying each month\'s outstanding balance by your reference monthly rate and summing gives the interest-equivalent value of getting that money early — the same logic used for loan interest.' },
    { q: 'Is an auction-based chit fund different?', a: 'Yes. In registered chit funds, members bid a discount to take the pool early — the discount is distributed among other members as a dividend. That built-in price mechanism replaces the implicit "advance" this calculator estimates for simple no-auction committees.' },
  ],
};
