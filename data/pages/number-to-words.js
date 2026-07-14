module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="nw-number">Number</label>
      <input type="number" id="nw-number" value="1234567" step="1">
    </div>
    <div class="field">
      <label for="nw-style">Format</label>
      <select id="nw-style">
        <option value="indian" selected>Indian system (lakh, crore)</option>
        <option value="intl">International (million, billion)</option>
        <option value="rupees">Rupees words (for cheques)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div id="nw-result" style="font-family:var(--serif);font-size:20px;font-weight:600;color:#8A4B2A;line-height:1.5;text-transform:capitalize;">—</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="nw-convert">Convert to words</button>
  <button class="btn btn-secondary" id="nw-copy">Copy words</button>
</div>`,
  howto: [
    'Enter any number (up to 99 crore).',
    'Choose a format — Indian (lakh/crore), International (million/billion), or the cheque-style "Rupees … Only".',
    'The words appear instantly — copy and use them.',
  ],
  faq: [
    { q: 'What\'s the difference between Indian and international systems?', a: 'Indian: thousand → lakh (10^5) → crore (10^7). International: thousand → million (10^6) → billion (10^9). 12,34,567 is "twelve lakh…" in Indian, "1.23 million" internationally.' },
    { q: 'How do I write an amount in words on a cheque?', a: 'Choose the "Rupees" format — you\'ll get output like "Rupees Twelve Lakh Thirty Four Thousand Five Hundred Sixty Seven Only". Adding "Only" is important so nothing can be added afterward.' },
    { q: 'Is decimal (paise) supported?', a: 'In the Rupees format, the 2 decimal digits become paise — 1500.50 = "Rupees One Thousand Five Hundred and Fifty Paise Only".' },
    { q: 'How large a number can this convert?', a: 'Up to 99,99,99,99,999 (~1 trillion) — plenty for cheques and documents.' },
  ],
};
