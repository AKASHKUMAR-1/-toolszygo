module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Your Credit Profile</div>
    <div class="field">
      <label for="cse-history">Payment History (EMIs &amp; card bills)</label>
      <select id="cse-history">
        <option value="100" selected>Always paid on time</option>
        <option value="75">1-2 late payments in the last 2 years</option>
        <option value="45">Several late payments</option>
        <option value="15">Missed payments / settled / default</option>
      </select>
    </div>
    <div class="field">
      <label for="cse-util">Credit Card Utilization (%)</label>
      <input type="number" id="cse-util" value="25" min="0" max="100" step="5">
      <div style="font-size:12px;color:#A3937E;margin-top:4px;">How much of your total card limit you typically use. E.g. spending ₹20,000 on a ₹1,00,000 limit = 20%.</div>
    </div>
    <div class="field">
      <label for="cse-age">Age of Oldest Credit Account (years)</label>
      <input type="number" id="cse-age" value="3" min="0" max="40" step="0.5">
    </div>
    <div class="field">
      <label for="cse-inquiries">Loan/Card Applications in Last 6 Months</label>
      <select id="cse-inquiries">
        <option value="100" selected>None</option>
        <option value="80">1</option>
        <option value="55">2-3</option>
        <option value="25">4 or more</option>
      </select>
    </div>
    <div class="field">
      <label for="cse-mix">Credit Mix</label>
      <select id="cse-mix">
        <option value="60">Only credit cards</option>
        <option value="55">Only loans (EMI)</option>
        <option value="100" selected>Both cards and loans</option>
        <option value="40">No credit history yet</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Estimated Score</div>
    <div class="result-big" id="cse-score">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Estimated CIBIL score range</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Category</span><span class="v" id="cse-category">—</span></div>
      <div class="result-row"><span class="k">Loan approval outlook</span><span class="v" id="cse-outlook">—</span></div>
    </div>
    <div class="panel-label" style="margin-top:14px;">Top Tips For You</div>
    <div id="cse-tips" style="font-size:13.5px;color:#4A4238;line-height:1.7;">—</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="cse-calc">Estimate my score</button>
  <button class="btn btn-secondary" id="cse-copy">Copy result</button>
</div>
<div style="font-size:12px;color:#A3937E;margin-top:10px;">⚠ This is an educational estimate based on the known scoring factors — it is NOT your official score. Get your real CIBIL score free once a year at cibil.com (and many bank apps show it free every month).</div>`,
  howto: [
    'Answer 5 quick questions about your payment history, card usage and accounts.',
    'Click <strong>Estimate my score</strong> — get an estimated CIBIL range (300-900) and category.',
    'Read the personalised tips — they target the exact factors pulling your score down.',
    'For your official score, check cibil.com (free once a year) or your bank\'s app.',
  ],
  faq: [
    { q: 'Is this my real CIBIL score?', a: 'No — no website can show your real score without verifying your PAN with the credit bureau. This is an educational estimate using the same factors bureaus weigh: payment history (~35%), utilization (~30%), credit age (~15%), inquiries (~10%) and mix (~10%). Your official score is free once a year at cibil.com.' },
    { q: 'What is a good CIBIL score?', a: '750+ is considered excellent — most banks approve loans smoothly at the best rates. 650-749 is decent (approval likely, rates may be slightly higher). 550-649 makes approval harder. Below 550, focus on rebuilding for 6-12 months before applying.' },
    { q: 'What hurts a credit score the most?', a: 'Late or missed payments — by far. A single 90+ day default can stay on your report for years. Second biggest: consistently using more than 30-50% of your card limit, which signals credit hunger.' },
    { q: 'How fast can I improve my score?', a: 'Meaningful movement takes 3-6 months of on-time payments and utilization below 30%. Avoid applying for new credit during this period — every application adds a hard inquiry that temporarily dips the score.' },
    { q: 'Does checking my own score lower it?', a: 'No. Checking your own score is a "soft inquiry" and never affects it. Only applications for new credit (hard inquiries by lenders) do.' },
  ],
};
