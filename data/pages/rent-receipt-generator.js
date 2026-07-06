module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Rent Receipt Details</div>
    <div class="field-row">
      <div class="field"><label for="rr-tenant">Tenant (kirayedar) Naam</label><input type="text" id="rr-tenant" placeholder="Aapka naam"></div>
      <div class="field"><label for="rr-landlord">Landlord (makaan-malik) Naam</label><input type="text" id="rr-landlord" placeholder="Landlord naam"></div>
    </div>
    <div class="field">
      <label for="rr-address">Property Address</label>
      <input type="text" id="rr-address" placeholder="Flat no., building, area, city">
    </div>
    <div class="field-row">
      <div class="field"><label for="rr-rent">Monthly Rent (₹)</label><input type="number" id="rr-rent" value="15000" min="0"></div>
      <div class="field"><label for="rr-pan">Landlord PAN (rent 8,333+/mo pe zaroori)</label><input type="text" id="rr-pan" maxlength="10" placeholder="ABCDE1234F" style="font-family:monospace;text-transform:uppercase;"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="rr-from">From month</label><input type="month" id="rr-from"></div>
      <div class="field"><label for="rr-to">To month</label><input type="month" id="rr-to"></div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Preview (har mahine ki alag receipt)</div>
    <div id="rr-preview" style="background:#FFF;border:1px solid #F0E0CC;border-radius:10px;padding:20px;overflow:auto;max-height:420px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="rr-print">🖨 Print / Save as PDF</button>
</div>`,
  howto: [
    'Tenant, landlord, property address aur monthly rent bharo.',
    'From–To months choose karo — har mahine ki alag receipt banegi (HRA ke liye 12 months ek saath!).',
    '<strong>Print</strong> karke landlord se sign karwa lo — HRA claim ready.',
  ],
  faq: [
    { q: 'HRA ke liye rent receipts kab chahiye?', a: 'Monthly rent ₹3,000 se zyada ho to employer receipts maangta hai. ₹8,333+/month (1L/saal) pe landlord ka PAN bhi dena zaroori hai.' },
    { q: 'Revenue stamp lagana zaroori hai?', a: 'Cash payment ₹5,000+ pe revenue stamp technically zaroori hai. Bank transfer/UPI pe stamp ki zaroorat nahi — receipt me payment mode likha hota hai.' },
    { q: 'Landlord sign nahi karta to?', a: 'Bina landlord ke sign ke receipt valid nahi hai. Rent agreement + bank statements bhi supporting proof ka kaam karte hain.' },
  ],
};
