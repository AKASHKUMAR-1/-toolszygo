module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Quotation Details</div>
    <div class="field-row">
      <div class="field"><label for="qt-seller">Aapka Business</label><input type="text" id="qt-seller" placeholder="e.g. Sharma Interiors"></div>
      <div class="field"><label for="qt-client">Client</label><input type="text" id="qt-client" placeholder="Client naam"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="qt-number">Quotation No.</label><input type="text" id="qt-number" value="QT-001"></div>
      <div class="field"><label for="qt-date">Date</label><input type="date" id="qt-date"></div>
      <div class="field"><label for="qt-validity">Valid (days)</label><input type="number" id="qt-validity" value="30" min="1"></div>
    </div>
    <div class="panel-label" style="margin-top:6px;">Items</div>
    <div id="qt-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="qt-add-item">+ Item add karo</button>
    </div>
    <div class="field">
      <label for="qt-terms">Terms &amp; conditions (optional)</label>
      <textarea id="qt-terms" style="min-height:60px;" placeholder="e.g. 50% advance, delivery 15 din me, transport extra"></textarea>
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
    'Apna business, client aur validity bharo.',
    'Items/services add karo rates ke saath.',
    'Terms likho (advance, delivery time) aur <strong>Print/Save as PDF</strong> karo.',
  ],
  faq: [
    { q: 'Quotation aur invoice me kya difference hai?', a: 'Quotation kaam se PEHLE diya jaata hai — price ka proposal. Client approve kare to kaam hota hai aur baad me invoice banta hai. Quotation binding nahi hota, validity ke andar rates ka vaada hota hai.' },
    { q: 'Validity kitni rakhein?', a: '15–30 din common hai. Material prices badalte rehte hain isliye lambi validity risky hai.' },
    { q: 'Terms me kya likhna chahiye?', a: 'Advance %, delivery/completion time, kya included nahi hai (transport, installation), payment terms — baad ke disputes se bachne ke liye.' },
  ],
};
