module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Salary Details</div>
    <div class="field-row">
      <div class="field">
        <label for="nf-gross">Monthly Gross Salary (₹)</label>
        <input type="number" id="nf-gross" value="60000" min="0" step="500">
      </div>
      <div class="field">
        <label for="nf-basic">Basic + DA (₹/month)</label>
        <input type="number" id="nf-basic" value="30000" min="0" step="500">
      </div>
    </div>
    <div class="panel-label" style="margin-top:14px;">Notice Period</div>
    <div class="field-row">
      <div class="field">
        <label for="nf-required">Notice Required (days)</label>
        <input type="number" id="nf-required" value="60" min="0" step="1">
      </div>
      <div class="field">
        <label for="nf-served">Notice You'll Actually Serve (days)</label>
        <input type="number" id="nf-served" value="30" min="0" step="1">
      </div>
    </div>
    <div class="panel-label" style="margin-top:14px;">Leave &amp; Extras</div>
    <div class="field-row">
      <div class="field">
        <label for="nf-leaves">Unused Leave Days</label>
        <input type="number" id="nf-leaves" value="8" min="0" step="0.5">
      </div>
      <div class="field">
        <label for="nf-bonus">Pending Bonus/Incentive (₹, optional)</label>
        <input type="number" id="nf-bonus" value="0" min="0" step="500">
      </div>
    </div>
    <div class="field">
      <label for="nf-deductions">Recoveries / Deductions (₹, loans, assets, optional)</label>
      <input type="number" id="nf-deductions" value="0" min="0" step="500">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Full &amp; Final Settlement Estimate</div>
    <div class="result-big" id="nf-net">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Estimated net F&amp;F payout</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Notice period shortfall</span><span class="v" id="nf-shortfall-days">—</span></div>
      <div class="result-row"><span class="k">Notice pay deduction (buyout)</span><span class="v" id="nf-shortfall-amt">—</span></div>
      <div class="result-row"><span class="k">Leave encashment</span><span class="v" id="nf-encashment">—</span></div>
      <div class="result-row"><span class="k">Bonus/incentive added</span><span class="v" id="nf-bonus-out">—</span></div>
      <div class="result-row"><span class="k">Other recoveries deducted</span><span class="v" id="nf-deductions-out">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="nf-calc">Calculate F&amp;F</button>
  <button class="btn btn-secondary" id="nf-copy">Copy result</button>
</div>
<div style="font-size:12px;color:#A3937E;margin-top:10px;">Estimate based on common HR practice (30-day month, 26-day leave encashment convention). Your company's exact policy and any gratuity may add further amounts — check your appointment letter/HR policy for specifics. For gratuity, use our separate Gratuity Calculator.</div>`,
  howto: [
    'Enter your monthly gross salary and Basic+DA (Basic+DA is used for leave encashment, as per common practice).',
    'Enter your notice period as per your contract, and how many days you\'ll actually serve.',
    'Enter unused leave days, any pending bonus, and recoveries (like a laptop or loan not yet cleared).',
    'Click Calculate — see your notice pay deduction, leave encashment and estimated net settlement.',
  ],
  faq: [
    { q: 'How is the notice period shortfall calculated?', a: 'Shortfall days = notice required − notice served. The deduction is usually: (monthly gross ÷ 30) × shortfall days — most companies use a 30-day month for this calculation regardless of the actual number of days in that month.' },
    { q: 'How is leave encashment calculated?', a: 'The common formula is: (Basic + DA ÷ 26) × unused leave days, using 26 as the standard working days in a month. Some companies use gross salary or 30 days instead — check your company policy if the estimate looks off.' },
    { q: 'Does this include gratuity?', a: 'No — gratuity has its own eligibility rule (5+ years of continuous service) and formula. Use our separate Gratuity Calculator if you qualify; add that amount to this F&F estimate separately.' },
    { q: 'What if I serve my full notice period?', a: 'Set "Notice you\'ll actually serve" equal to "Notice required" — the shortfall and deduction will show as zero.' },
    { q: 'Is this legally binding or exact?', a: 'No — this is an educational estimate using standard HR practice. Your actual F&F depends on your company\'s specific policy, any pending reimbursements, TDS on the settlement, and PF/ESI adjustments not covered here.' },
  ],
};
