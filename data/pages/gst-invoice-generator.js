module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">GST Invoice Details</div>
    <div class="field-row">
      <div class="field"><label for="gi-seller">Seller Naam</label><input type="text" id="gi-seller" placeholder="Aapka business"></div>
      <div class="field"><label for="gi-seller-gstin">Seller GSTIN</label><input type="text" id="gi-seller-gstin" placeholder="22AAAAA0000A1Z5" maxlength="15" style="font-family:monospace;text-transform:uppercase;"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="gi-buyer">Buyer Naam</label><input type="text" id="gi-buyer" placeholder="Client"></div>
      <div class="field"><label for="gi-buyer-gstin">Buyer GSTIN (optional)</label><input type="text" id="gi-buyer-gstin" maxlength="15" style="font-family:monospace;text-transform:uppercase;"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="gi-number">Invoice No.</label><input type="text" id="gi-number" value="INV-001"></div>
      <div class="field"><label for="gi-date">Date</label><input type="date" id="gi-date"></div>
      <div class="field">
        <label for="gi-type">Supply type</label>
        <select id="gi-type">
          <option value="intra" selected>Same state (CGST+SGST)</option>
          <option value="inter">Doosre state (IGST)</option>
        </select>
      </div>
    </div>
    <div class="panel-label" style="margin-top:6px;">Items (HSN + GST rate ke saath)</div>
    <div id="gi-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="gi-add-item">+ Item add karo</button>
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
    'Seller/buyer details GSTIN ke saath bharo, supply type choose karo (same state = CGST+SGST, doosre state = IGST).',
    'Items add karo HSN code aur GST rate ke saath — tax breakup khud calculate hota hai.',
    '<strong>Print / Save as PDF</strong> se GST-compliant tax invoice ready.',
  ],
  faq: [
    { q: 'CGST/SGST vs IGST kab lagta hai?', a: 'Buyer aapke hi state me hai to CGST+SGST (aadha-aadha). Doosre state me to poora IGST. GSTIN ke pehle 2 digits state code hote hain — dono ka same hai to intra-state.' },
    { q: 'HSN code kya hai aur kahan se milega?', a: 'Har product/service ka standard classification code. cbic-gst.gov.in pe search kar sakte ho. ₹5 crore tak turnover pe 4-digit HSN kaafi hai.' },
    { q: 'GST invoice me kya-kya hona zaroori hai?', a: 'Seller/buyer GSTIN, unique invoice number, date, HSN, taxable value, tax rate aur breakup, total in words — ye tool sab include karta hai.' },
  ],
};
