module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Rent Receipt Details</div>
    <div class="field-row">
      <div class="field"><label for="rr-tenant">Tenant Name</label><input type="text" id="rr-tenant" placeholder="Your name"></div>
      <div class="field"><label for="rr-landlord">Landlord Name</label><input type="text" id="rr-landlord" placeholder="Landlord name"></div>
    </div>
    <div class="field">
      <label for="rr-address">Property Address</label>
      <input type="text" id="rr-address" placeholder="Flat no., building, area, city">
    </div>
    <div class="field-row">
      <div class="field"><label for="rr-rent">Monthly Rent (₹)</label><input type="number" id="rr-rent" value="15000" min="0"></div>
      <div class="field"><label for="rr-pan">Landlord PAN (required for rent 8,333+/mo)</label><input type="text" id="rr-pan" maxlength="10" placeholder="ABCDE1234F" style="font-family:monospace;text-transform:uppercase;"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="rr-from">From month</label><input type="month" id="rr-from"></div>
      <div class="field"><label for="rr-to">To month</label><input type="month" id="rr-to"></div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Preview (a separate receipt per month)</div>
    <div id="rr-preview" style="background:#FFF;border:1px solid #F0E0CC;border-radius:10px;padding:20px;overflow:auto;max-height:420px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="rr-print">🖨 Print / Save as PDF</button>
</div>`,
  howto: [
    'Fill in the tenant, landlord, property address, and monthly rent.',
    'Choose From–To months — a separate receipt is created per month (all 12 at once for HRA!).',
    'Click <strong>Print</strong> and get the landlord to sign — ready for your HRA claim.',
  ],
  faq: [
    { q: 'When are rent receipts needed for HRA?', a: 'Employers ask for receipts if monthly rent exceeds ₹3,000. At ₹8,333+/month (1L/year), the landlord\'s PAN must also be provided.' },
    { q: 'Is a revenue stamp required?', a: 'A revenue stamp is technically required for cash payments of ₹5,000+. Not needed for bank transfer/UPI — the payment mode is noted on the receipt.' },
    { q: 'What if the landlord won\'t sign?', a: 'A receipt isn\'t valid without the landlord\'s signature. A rent agreement + bank statements also serve as supporting proof.' },
  ],
};
