module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Salary Details (monthly)</div>
    <div class="field">
      <label for="hra-basic">Basic Salary + DA (₹/month)</label>
      <input type="number" id="hra-basic" value="40000" min="1000" step="1000">
    </div>
    <div class="field">
      <label for="hra-received">HRA Received (₹/month)</label>
      <input type="number" id="hra-received" value="20000" min="0" step="1000">
    </div>
    <div class="field">
      <label for="hra-rent">Rent Paid (₹/month)</label>
      <input type="number" id="hra-rent" value="18000" min="0" step="1000">
    </div>
    <div class="field">
      <label for="hra-city">City</label>
      <select id="hra-city">
        <option value="metro" selected>Metro (Delhi, Mumbai, Kolkata, Chennai)</option>
        <option value="nonmetro">Non-metro (all other cities)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result (annual)</div>
    <div class="result-big" id="hra-exempt">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Tax-exempt HRA</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">HRA received (annual)</span><span class="v" id="hra-total">—</span></div>
      <div class="result-row"><span class="k">Taxable HRA</span><span class="v" id="hra-taxable">—</span></div>
      <div class="result-row"><span class="k">Exemption basis</span><span class="v" id="hra-basis" style="font-weight:400;font-size:12px;max-width:55%;">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="hra-calc">Calculate HRA exemption</button>
  <button class="btn btn-secondary" id="hra-copy">Copy result</button>
</div>`,
  howto: [
    'Enter your monthly basic salary (+DA if any).',
    'Enter the HRA you receive on your salary slip.',
    'Enter the rent you pay and choose the city type.',
    'Click <strong>Calculate</strong> — see how much HRA is tax-free.',
  ],
  faq: [
    { q: 'How is HRA exemption calculated?', a: 'The LOWEST of three: (1) actual HRA received, (2) rent paid − 10% of basic, (3) 50% of basic in metros / 40% in non-metros. This calculator compares all three to find the exemption.' },
    { q: 'Which tax regime allows HRA exemption?', a: 'Only the OLD regime. The new regime has no HRA exemption — so the old regime is often better for those paying high rent. Compare both with our Income Tax Calculator.' },
    { q: 'Can I pay rent to my parents?', a: 'Yes — if the house is in your parents\' name, you can pay them rent and claim HRA. Keep a rent agreement + bank transfer, and your parents must show that rent in their ITR.' },
    { q: 'When is the landlord\'s PAN required?', a: 'If annual rent exceeds ₹1 lakh (~₹8,333/month), you must provide the landlord\'s PAN to your employer.' },
  ],
};
