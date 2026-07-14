module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Trip Expenses</div>
    <div class="field-row">
      <div class="field">
        <label for="tcs-travel">Travel / Fuel (₹)</label>
        <input type="number" id="tcs-travel" value="4000" min="0" step="100">
      </div>
      <div class="field">
        <label for="tcs-stay">Hotel / Stay (₹)</label>
        <input type="number" id="tcs-stay" value="6000" min="0" step="100">
      </div>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="tcs-food">Food &amp; Drinks (₹)</label>
        <input type="number" id="tcs-food" value="3000" min="0" step="100">
      </div>
      <div class="field">
        <label for="tcs-other">Other expenses (₹)</label>
        <input type="number" id="tcs-other" value="1000" min="0" step="100">
      </div>
    </div>
    <div class="field">
      <label for="tcs-people">How many people?</label>
      <input type="number" id="tcs-people" value="4" min="1" max="100" step="1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="tcs-person">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Each person's share</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total trip cost</span><span class="v" id="tcs-total">—</span></div>
      <div class="result-row"><span class="k">Breakdown</span><span class="v" id="tcs-breakdown" style="font-weight:400;font-size:12px;">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="tcs-copy">Copy result (for WhatsApp)</button>
</div>`,
  howto: [
    'Enter all trip expenses by category — travel, hotel, food, other.',
    'Enter how many people there were.',
    'Get each person\'s share instantly — use "Copy result" to send it to your WhatsApp group.',
  ],
  faq: [
    { q: 'What if different people paid different amounts?', a: 'First find the per-person share with this tool. Then whoever paid more than their share gets the difference back from the others. E.g. if the share is ₹3,500 and Rahul paid ₹6,000, he\'s owed ₹2,500 back.' },
    { q: 'What if someone only used certain things?', a: 'For fair splitting, separate that expense — e.g. if only 3 people had drinks, split that amount among the 3, and the rest among everyone. Use the calculator twice.' },
    { q: 'Should a couple/family count as one unit or separately?', a: 'Up to the group — usually per-head is fair for food and hotel. For room sharing, couples can count one room = one share.' },
    { q: 'How do I share it on WhatsApp?', a: 'Click "Copy result" — the total, breakdown, and per-person share copy as text; paste it straight into the group.' },
  ],
};
