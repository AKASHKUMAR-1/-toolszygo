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
        <option value="CODE128" selected>CODE128 (general — text+numbers)</option>
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
    'Enter the number/text you want in the barcode.',
    'Choose a format — CODE128 for general use, EAN-13 for retail products.',
    'Click <strong>Generate</strong> and download the PNG — ready to print or label.',
  ],
  faq: [
    { q: 'What\'s the difference between CODE128 and EAN-13?', a: 'CODE128 encodes anything (letters, numbers, symbols) — for internal use, couriers, inventory. EAN-13 is exactly 13 digits — the standard barcode you see on retail products.' },
    { q: 'Why am I getting an error on EAN-13?', a: 'EAN-13 needs exactly 12 digits (the 13th check digit is generated automatically) or 13 valid digits. Text or wrong length will cause an error — use CODE128 if you need flexible input.' },
    { q: 'Will this barcode scan with a scanner?', a: 'Yes — these are standard formats, readable by any barcode scanner or mobile scanning app. Keep the printed size at least 3 cm wide.' },
    { q: 'Where do I get an official EAN number for my product?', a: 'Registered EAN numbers that are globally unique come from GS1 India (gs1india.org). This tool generates a barcode for any number, but selling at retail requires a GS1-issued number.' },
  ],
};
