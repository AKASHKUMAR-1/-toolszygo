module.exports = {
  libs: ['/assets/js/vendor/jsbarcode.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="bc-text">Text / Number</label>
      <input type="text" id="bc-text" value="1234567890" spellcheck="false" style="font-family:monospace;">
    </div>
    <div class="field">
      <label for="bc-format">Barcode Format</label>
      <select id="bc-format">
        <option value="CODE128" selected>CODE128 (sabke liye — text+numbers)</option>
        <option value="EAN13">EAN-13 (products, 12-13 digits)</option>
        <option value="UPC">UPC-A (US products, 11-12 digits)</option>
        <option value="CODE39">CODE39 (industrial)</option>
      </select>
    </div>
    <div id="bc-error" style="display:none;font-size:13px;font-weight:600;color:#B84F4F;"></div>
  </div>
  <div class="panel panel-result" style="align-items:center;justify-content:center;">
    <div class="panel-label" style="align-self:flex-start;">Result</div>
    <canvas id="bc-canvas" style="max-width:100%;background:#FFF;border-radius:10px;"></canvas>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="bc-generate">Generate barcode</button>
  <button class="btn btn-secondary" id="bc-download" disabled>Download PNG</button>
</div>`,
  howto: [
    'Barcode me jo number/text chahiye wo daalo.',
    'Format choose karo — general use ke liye CODE128, retail products ke liye EAN-13.',
    '<strong>Generate</strong> dabao aur PNG download karo — print ya label ke liye ready.',
  ],
  faq: [
    { q: 'CODE128 aur EAN-13 me kya difference hai?', a: 'CODE128 kuch bhi encode karta hai (letters, numbers, symbols) — internal use, couriers, inventory ke liye. EAN-13 sirf 13 digits — retail products pe jo standard barcode dikhta hai wahi hai.' },
    { q: 'EAN-13 pe error kyun aa raha hai?', a: 'EAN-13 ko exactly 12 digits chahiye (13th check digit khud banta hai) ya 13 valid digits. Text ya galat length pe error aayega — CODE128 use karo agar flexible input chahiye.' },
    { q: 'Kya ye barcode scanner se scan hoga?', a: 'Haan — standard formats hain, koi bhi barcode scanner ya mobile scanning app padh legi. Print karte waqt size kam se kam 3 cm wide rakho.' },
    { q: 'Apne product ke liye official EAN number kahan se milega?', a: 'GS1 India (gs1india.org) se registered EAN numbers milte hain jo globally unique hote hain. Ye tool kisi bhi number ka barcode bana dega, lekin retail me bechne ke liye GS1 wala number chahiye.' },
  ],
};
