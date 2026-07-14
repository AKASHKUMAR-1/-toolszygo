module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">GST Invoice Details</div>
    <div class="field-row">
      <div class="field"><label for="gi-seller">Seller Name</label><input type="text" id="gi-seller" placeholder="Your business"></div>
      <div class="field"><label for="gi-seller-gstin">Seller GSTIN</label><input type="text" id="gi-seller-gstin" placeholder="22AAAAA0000A1Z5" maxlength="15" style="font-family:monospace;text-transform:uppercase;"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="gi-buyer">Buyer Name</label><input type="text" id="gi-buyer" placeholder="Client"></div>
      <div class="field"><label for="gi-buyer-gstin">Buyer GSTIN (optional)</label><input type="text" id="gi-buyer-gstin" maxlength="15" style="font-family:monospace;text-transform:uppercase;"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="gi-number">Invoice No.</label><input type="text" id="gi-number" value="INV-001"></div>
      <div class="field"><label for="gi-date">Date</label><input type="date" id="gi-date"></div>
      <div class="field">
        <label for="gi-type">Supply type</label>
        <select id="gi-type">
          <option value="intra" selected>Same state (CGST+SGST)</option>
          <option value="inter">Different state (IGST)</option>
        </select>
      </div>
    </div>
    <div class="panel-label" style="margin-top:6px;">Items (with HSN + GST rate)</div>
    <div id="gi-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="gi-add-item">+ Add item</button>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Preview</div>
    <div id="gi-preview" style="background:#FFF;border:1px solid #F0E0CC;border-radius:10px;padding:20px;overflow:auto;max-height:460px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="gi-print">🖨 Print / Save as PDF</button>
</div>`,
  howto: [
    'Fill in seller/buyer details with GSTIN, choose the supply type (same state = CGST+SGST, different state = IGST).',
    'Add items with HSN code and GST rate — tax breakup is calculated automatically.',
    'Use <strong>Print / Save as PDF</strong> for a GST-compliant tax invoice.',
  ],
  faq: [
    { q: 'When does CGST/SGST apply vs IGST?', a: 'If the buyer is in the same state as you, CGST+SGST applies (split evenly). If in a different state, full IGST applies. The first 2 digits of a GSTIN are the state code — if both match, it\'s intra-state.' },
    { q: 'What is an HSN code and where do I find it?', a: 'It\'s a standard classification code for each product/service. You can search it on cbic-gst.gov.in. A 4-digit HSN is sufficient for turnover up to ₹5 crore.' },
    { q: 'What must a GST invoice include?', a: 'Seller/buyer GSTIN, a unique invoice number, date, HSN, taxable value, tax rate and breakup, total in words — this tool includes all of it.' },
  ],
};
