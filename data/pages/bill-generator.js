module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Bill Details</div>
    <div class="field-row">
      <div class="field"><label for="bill-shop">Shop / Business Name</label><input type="text" id="bill-shop" placeholder="e.g. Sharma General Store"></div>
      <div class="field"><label for="bill-phone">Phone (optional)</label><input type="text" id="bill-phone" placeholder="98XXXXXXXX"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="bill-customer">Customer (optional)</label><input type="text" id="bill-customer" placeholder="Customer name"></div>
      <div class="field"><label for="bill-date">Date</label><input type="date" id="bill-date"></div>
    </div>
    <div class="panel-label" style="margin-top:6px;">Items</div>
    <div id="bill-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="bill-add-item">+ Add item</button>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Preview</div>
    <div id="bill-preview" style="background:#FFF;border:1px solid #F0E0CC;border-radius:10px;padding:20px;overflow:auto;max-height:400px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="bill-print">🖨 Print / Save as PDF</button>
</div>`,
  howto: [
    'Fill in the shop name and date (customer is optional).',
    'Add items — name, qty, rate. The total is calculated automatically.',
    'Click <strong>Print</strong> — a cash memo style bill is ready.',
  ],
  faq: [
    { q: 'What\'s the difference between a bill and an invoice?', a: 'A bill/cash memo is for simple, immediate-payment sales. An invoice is more formal — with payment terms, GST, etc. A bill is enough for small shops.' },
    { q: 'Will this print on a thermal printer?', a: 'This is an A4/A5 format bill. Thermal (receipt) printers have their own software — this tool is for a regular printer/PDF.' },
    { q: 'What if I need to add GST?', a: 'Use the GST Invoice Generator — it includes HSN, GSTIN, and tax breakup.' },
  ],
};
