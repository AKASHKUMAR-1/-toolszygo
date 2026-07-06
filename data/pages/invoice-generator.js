module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Invoice Details</div>
    <div class="field-row">
      <div class="field"><label for="inv-seller">Aapka Business Naam</label><input type="text" id="inv-seller" placeholder="e.g. Sharma Enterprises"></div>
      <div class="field"><label for="inv-buyer">Client ka Naam</label><input type="text" id="inv-buyer" placeholder="e.g. Gupta Traders"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="inv-number">Invoice No.</label><input type="text" id="inv-number" value="INV-001"></div>
      <div class="field"><label for="inv-date">Date</label><input type="date" id="inv-date"></div>
    </div>
    <div class="panel-label" style="margin-top:6px;">Items</div>
    <div id="inv-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="inv-add-item">+ Item add karo</button>
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
    'Apna business naam, client, invoice number aur date bharo.',
    'Items add karo — naam, quantity, rate. Total khud calculate hota hai.',
    '<strong>Print / Save as PDF</strong> dabao — print dialog me "Save as PDF" choose karo.',
  ],
  faq: [
    { q: 'Kya ye invoice legally valid hai?', a: 'Simple invoice non-GST businesses ke liye theek hai. GST-registered ho to GST Invoice Generator use karo jisme GSTIN, HSN aur tax breakup hota hai.' },
    { q: 'Invoice number kaise rakhein?', a: 'Sequential rakho (INV-001, INV-002…) aur financial year ke saath bhi rakh sakte ho (2026-27/001). Har invoice ka number unique hona chahiye.' },
    { q: 'Data save hota hai kya?', a: 'Nahi — page refresh pe form khaali ho jaata hai. PDF save karke apna record rakho.' },
  ],
};
