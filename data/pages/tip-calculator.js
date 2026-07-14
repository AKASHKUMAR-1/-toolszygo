module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Bill Details</div>
    <div class="field">
      <label for="tip-bill">Bill Amount (₹)</label>
      <input type="number" id="tip-bill" value="1000" min="0" step="10">
    </div>
    <div class="field">
      <label>Tip: <span id="tip-pct-val">10</span>%</label>
      <div class="range-row">
        <input type="range" id="tip-pct" min="0" max="30" value="10">
      </div>
    </div>
    <div class="field">
      <label for="tip-people">How many people are splitting?</label>
      <input type="number" id="tip-people" value="1" min="1" max="50" step="1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="tip-total">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Total (bill + tip)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Tip amount</span><span class="v" id="tip-amount">—</span></div>
      <div class="result-row"><span class="k">Per person</span><span class="v" id="tip-person">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="tip-calc">Calculate tip</button>
  <button class="btn btn-secondary" id="tip-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the bill amount.',
    'Set the tip % with the slider — 5–10% is common in India (15–20% in the US).',
    'If splitting among friends, enter the number of people — the per-person share appears.',
  ],
  faq: [
    { q: 'How much should I tip in India?', a: '5–10% is common at restaurants. If a "service charge" is already on the bill, a separate tip isn\'t necessary. ₹20–50 is common for delivery workers.' },
    { q: 'What\'s the difference between service charge and tip?', a: 'A service charge (usually 5–10%) is added to the bill by the restaurant — it\'s optional and you can have it removed. A tip is given at your discretion and goes to the staff.' },
    { q: 'Is the tip on the pre-tax or post-tax amount?', a: 'Etiquette says to calculate the tip on the food amount (pre-tax), but in practice people use the final bill — both are fine.' },
    { q: 'How do I round the split amount?', a: 'The tool shows the exact per-person amount. You can round up — it just makes a slightly bigger tip, no one loses out.' },
  ],
};
