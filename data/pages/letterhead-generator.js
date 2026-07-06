module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Letterhead Details</div>
    <div class="field-row">
      <div class="field"><label for="lh-company">Company / Business Naam</label><input type="text" id="lh-company" placeholder="e.g. Sharma & Associates"></div>
      <div class="field"><label for="lh-tagline">Tagline (optional)</label><input type="text" id="lh-tagline" placeholder="e.g. Chartered Accountants"></div>
    </div>
    <div class="field">
      <label for="lh-address">Address</label>
      <input type="text" id="lh-address" placeholder="Office address, city, PIN">
    </div>
    <div class="field-row">
      <div class="field"><label for="lh-phone">Phone</label><input type="text" id="lh-phone" placeholder="98XXXXXXXX"></div>
      <div class="field"><label for="lh-email">Email</label><input type="text" id="lh-email" placeholder="info@company.com"></div>
      <div class="field"><label for="lh-web">Website (optional)</label><input type="text" id="lh-web" placeholder="www.company.com"></div>
    </div>
    <div class="field" style="max-width:200px;">
      <label for="lh-color">Accent color</label>
      <input type="color" id="lh-color" value="#1A5276" style="width:100%;height:38px;border:1px solid #E8E0D2;border-radius:10px;background:#FCFAF6;padding:3px;cursor:pointer;">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Preview (A4)</div>
    <div id="lh-preview" style="background:#FFF;border:1px solid #F0E0CC;border-radius:10px;overflow:auto;max-height:420px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="lh-print">🖨 Print / Save as PDF</button>
</div>`,
  howto: [
    'Company naam, tagline, address aur contact details bharo.',
    'Apna brand color choose karo — header/footer usi color me banega.',
    '<strong>Print/Save as PDF</strong> karo — blank letterhead ready, jispe letters print kar sakte ho.',
  ],
  faq: [
    { q: 'Letterhead kaise use karoon?', a: 'PDF save karke Word me background ki tarah use karo, ya print karke uspe letters type/print karo. Professional communication, quotations aur official letters ke liye.' },
    { q: 'Logo add kar sakta hoon?', a: 'Abhi text-based design hai — company naam bold styled hota hai. Logo support jald aayega.' },
    { q: 'Kaunsa color professional lagta hai?', a: 'Navy blue, dark green ya maroon classic professional colors hain. Apne brand/industry se match karo — CA/legal me dark blue common hai.' },
  ],
};
