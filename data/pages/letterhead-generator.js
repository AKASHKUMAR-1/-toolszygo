module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Letterhead Details</div>
    <div class="field-row">
      <div class="field"><label for="lh-company">Company / Business Name</label><input type="text" id="lh-company" placeholder="e.g. Sharma & Associates"></div>
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
    'Fill in the company name, tagline, address, and contact details.',
    'Choose your brand color — the header/footer will use that color.',
    'Click <strong>Print/Save as PDF</strong> — a blank letterhead is ready, on which you can print letters.',
  ],
  faq: [
    { q: 'How do I use the letterhead?', a: 'Save the PDF and use it as a background in Word, or print it and type/print letters on it. Good for professional communication, quotations, and official letters.' },
    { q: 'Can I add a logo?', a: 'It\'s currently a text-based design — the company name is styled in bold. Logo support is coming soon.' },
    { q: 'Which color looks professional?', a: 'Navy blue, dark green, or maroon are classic professional colors. Match your brand/industry — dark blue is common for CA/legal firms.' },
  ],
};
