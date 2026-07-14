module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Quotation Details</div>
    <div class="field-row">
      <div class="field"><label for="qt-seller">Your Business</label><input type="text" id="qt-seller" placeholder="e.g. Sharma Interiors"></div>
      <div class="field"><label for="qt-client">Client</label><input type="text" id="qt-client" placeholder="Client name"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="qt-number">Quotation No.</label><input type="text" id="qt-number" value="QT-001"></div>
      <div class="field"><label for="qt-date">Date</label><input type="date" id="qt-date"></div>
      <div class="field"><label for="qt-validity">Valid (days)</label><input type="number" id="qt-validity" value="30" min="1"></div>
    </div>
    <div class="panel-label" style="margin-top:6px;">Items</div>
    <div id="qt-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="qt-add-item">+ Add item</button>
    </div>
    <div class="field">
      <label for="qt-terms">Terms &amp; conditions (optional)</label>
      <textarea id="qt-terms" style="min-height:60px;" placeholder="e.g. 50% advance, delivery in 15 days, transport extra"></textarea>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Preview</div>
    <div id="qt-preview" style="background:#FFF;border:1px solid #F0E0CC;border-radius:10px;padding:20px;overflow:auto;max-height:420px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="qt-print">🖨 Print / Save as PDF</button>
</div>`,
  howto: [
    'Fill in your business, client, and validity.',
    'Add items/services with rates.',
    'Write the terms (advance, delivery time) and click <strong>Print/Save as PDF</strong>.',
  ],
  faq: [
    { q: 'What\'s the difference between a quotation and an invoice?', a: 'A quotation is given BEFORE the work — a price proposal. If the client approves, the work happens and an invoice follows. A quotation isn\'t binding, it\'s a promise of rates within its validity.' },
    { q: 'How long should the validity be?', a: '15–30 days is common. Material prices keep changing, so a long validity is risky.' },
    { q: 'What should the terms include?', a: 'Advance %, delivery/completion time, what\'s not included (transport, installation), payment terms — to avoid disputes later.' },
  ],
};
