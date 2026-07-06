module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Bill Details</div>
    <div class="field-row">
      <div class="field"><label for="bill-shop">Dukaan / Business Naam</label><input type="text" id="bill-shop" placeholder="e.g. Sharma General Store"></div>
      <div class="field"><label for="bill-phone">Phone (optional)</label><input type="text" id="bill-phone" placeholder="98XXXXXXXX"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="bill-customer">Customer (optional)</label><input type="text" id="bill-customer" placeholder="Customer naam"></div>
      <div class="field"><label for="bill-date">Date</label><input type="date" id="bill-date"></div>
    </div>
    <div class="panel-label" style="margin-top:6px;">Items</div>
    <div id="bill-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="bill-add-item">+ Item add karo</button>
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
    'Dukaan ka naam aur date bharo (customer optional).',
    'Items add karo — naam, qty, rate. Total khud banta hai.',
    '<strong>Print</strong> dabao — cash memo style bill ready.',
  ],
  faq: [
    { q: 'Bill aur invoice me kya difference hai?', a: 'Bill/cash memo turant payment wali simple sale ke liye hota hai. Invoice formal hota hai — payment terms, GST wagera ke saath. Chhoti dukaan ke liye bill kaafi hai.' },
    { q: 'Kya ye thermal printer pe chhapega?', a: 'Ye A4/A5 format ka bill hai. Thermal (receipt) printers ka apna software hota hai — ye tool normal printer/PDF ke liye hai.' },
    { q: 'GST lagana ho to?', a: 'GST Invoice Generator use karo — usme HSN, GSTIN aur tax breakup sab hai.' },
  ],
};
