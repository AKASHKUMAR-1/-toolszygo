module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">NSC Details</div>
    <div class="field">
      <label for="nsc-amount">Investment Amount (₹)</label>
      <input type="number" id="nsc-amount" value="100000" min="1000" step="5000">
    </div>
    <div class="field">
      <label for="nsc-rate">Interest Rate (% per year)</label>
      <input type="number" id="nsc-rate" value="7.7" min="5" max="12" step="0.1">
    </div>
    <div style="font-size:12px;color:#A39C8B;">NSC has a fixed 5-year tenure, interest compounds annually and is paid at maturity.</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result (after 5 years)</div>
    <div class="result-big" id="nsc-maturity">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity amount</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Investment</span><span class="v" id="nsc-invested">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="nsc-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="nsc-calc">Calculate NSC maturity</button>
  <button class="btn btn-secondary" id="nsc-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the amount you want to invest in NSC (minimum ₹1,000).',
    'Enter the current NSC rate — currently ~7.7%.',
    'Click <strong>Calculate</strong> — see the maturity value after 5 years.',
  ],
  faq: [
    { q: 'What is NSC and where do I get it?', a: 'National Savings Certificate is a government-guaranteed 5-year investment available at post offices. The rate is fixed and the money is 100% safe.' },
    { q: 'How is NSC taxed?', a: 'The investment is deductible under 80C (old regime, ₹1.5L limit). Interest is taxable, BUT interest from the first 4 years is treated as reinvested and can also be claimed under 80C — effectively only the 5th year\'s interest is taxable.' },
    { q: 'NSC vs FD — which is better?', a: 'NSC\'s rate is usually a bit higher than a bank FD, with a government guarantee. But it has a 5-year lock-in — FDs allow premature withdrawal (with a penalty).' },
    { q: 'Can I break an NSC early?', a: 'Normally no — only in case of the holder\'s death, a court order, or a pledge. So only invest money you can lock away for 5 years.' },
  ],
};
