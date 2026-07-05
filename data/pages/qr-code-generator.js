module.exports = {
  libs: ['/assets/js/vendor/qrcode.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="qr-text">Text ya URL</label>
      <textarea id="qr-text" placeholder="https://example.com ya koi bhi text…" style="min-height:110px;"></textarea>
    </div>
    <div class="field">
      <label for="qr-size">Size</label>
      <select id="qr-size">
        <option value="200">200 × 200 px</option>
        <option value="300" selected>300 × 300 px</option>
        <option value="500">500 × 500 px</option>
        <option value="800">800 × 800 px</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="align-items:center;justify-content:center;">
    <div class="panel-label" style="align-self:flex-start;">Result</div>
    <canvas id="qr-canvas" style="max-width:100%;border-radius:10px;background:#FFF;"></canvas>
    <div class="panel-placeholder" id="qr-placeholder">QR code yahan dikhega</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="qr-generate">Generate QR code</button>
  <button class="btn btn-secondary" id="qr-download" disabled>Download PNG</button>
</div>`,
  howto: [
    'Box me URL, text, phone number ya koi bhi content daalo.',
    'QR code ka size choose karo.',
    '<strong>Generate QR code</strong> dabao — QR turant ban jayega.',
    '"Download PNG" se image save karo — print ya share karne ke liye ready.',
  ],
  faq: [
    { q: 'Kya QR code hamesha kaam karega, expire to nahi hoga?', a: 'Ye static QR code hai — content directly QR me encode hota hai, kisi server pe depend nahi karta. Isliye ye kabhi expire nahi hota aur hamesha free rahega.' },
    { q: 'UPI payment QR bana sakte hain?', a: 'Haan — apna UPI link is format me daalo: upi://pay?pa=yourname@upi&pn=YourName. Scan karne pe payment app khul jayegi.' },
    { q: 'QR code me kitna text daal sakte hain?', a: 'Technically ~4,000 characters tak, lekin jitna kam content, utna easily scan hone wala QR. URLs ke liye short links better hain.' },
    { q: 'Kya mera data upload hota hai?', a: 'Nahi — QR code aapke browser me hi generate hota hai. Content kisi server pe nahi jaata.' },
  ],
};
