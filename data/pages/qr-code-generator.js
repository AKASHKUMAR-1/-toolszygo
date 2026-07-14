module.exports = {
  libs: ['/assets/js/vendor/qrcode.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="qr-text">Text or URL</label>
      <textarea id="qr-text" placeholder="https://example.com or any text…" style="min-height:110px;"></textarea>
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
    <div class="panel-placeholder" id="qr-placeholder">QR code will appear here</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="qr-generate">Generate QR code</button>
  <button class="btn btn-secondary" id="qr-download" disabled>Download PNG</button>
</div>`,
  howto: [
    'Enter a URL, text, phone number, or any content in the box.',
    'Choose the QR code size.',
    'Click <strong>Generate QR code</strong> — the QR appears instantly.',
    'Use "Download PNG" to save the image — ready to print or share.',
  ],
  faq: [
    { q: 'Will this QR code always work, or does it expire?', a: 'This is a static QR code — the content is encoded directly into the QR, with no dependency on any server. It never expires and stays free forever.' },
    { q: 'Can I create a UPI payment QR code?', a: 'Yes — enter your UPI link in this format: upi://pay?pa=yourname@upi&pn=YourName. Scanning it will open a payment app.' },
    { q: 'How much text can a QR code hold?', a: 'Technically up to ~4,000 characters, but the less content, the easier the QR is to scan. Short links work better for URLs.' },
    { q: 'Is my data uploaded anywhere?', a: 'No — the QR code is generated entirely in your browser. The content never goes to any server.' },
  ],
};
