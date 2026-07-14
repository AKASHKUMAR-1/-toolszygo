module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Invoice Details</div>
    <div class="field-row">
      <div class="field"><label for="inv-seller">Your Business Name</label><input type="text" id="inv-seller" placeholder="e.g. Sharma Enterprises"></div>
      <div class="field"><label for="inv-buyer">Client Name</label><input type="text" id="inv-buyer" placeholder="e.g. Gupta Traders"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="inv-number">Invoice No.</label><input type="text" id="inv-number" value="INV-001"></div>
      <div class="field"><label for="inv-date">Date</label><input type="date" id="inv-date"></div>
    </div>
    <div class="panel-label" style="margin-top:6px;">Items</div>
    <div id="inv-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="inv-add-item">+ Add item</button>
    </div>
    <div class="field" style="max-width:200px;">
      <label for="inv-tax">Tax % (optional)</label>
      <input type="number" id="inv-tax" value="0" min="0" max="50" step="0.5">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Preview</div>
    <div id="inv-preview" style="background:#FFF;border:1px solid #F0E0CC;border-radius:10px;padding:20px;overflow:auto;max-height:420px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="inv-print">🖨 Print / Save as PDF</button>
</div>`,
  howto: [
    'Fill in your business name, client, invoice number, and date.',
    'Add items — name, quantity, rate. The total is calculated automatically.',
    'Click <strong>Print / Save as PDF</strong> — choose "Save as PDF" in the print dialog.',
  ],
  faq: [
    { q: 'Is this invoice legally valid?', a: 'A simple invoice works fine for non-GST businesses. If GST-registered, use the GST Invoice Generator, which includes GSTIN, HSN, and tax breakup.' },
    { q: 'How should I number invoices?', a: 'Keep it sequential (INV-001, INV-002…) and you can include the financial year too (2026-27/001). Every invoice number should be unique.' },
    { q: 'Is the data saved?', a: 'No — the form empties on page refresh. Save the PDF to keep your own record.' },
  ],
};
