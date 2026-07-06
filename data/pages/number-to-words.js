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
        <option value="rupees">Rupees words (cheque ke liye)</option>
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
    'Koi bhi number daalo (99 crore tak).',
    'Format choose karo — Indian (lakh/crore), International (million/billion) ya cheque wala "Rupees … Only".',
    'Words turant mil jayenge — copy karke use karo.',
  ],
  faq: [
    { q: 'Indian aur international system me kya difference hai?', a: 'Indian: hazaar → lakh (10^5) → crore (10^7). International: thousand → million (10^6) → billion (10^9). 12,34,567 Indian me "twelve lakh…" hai, international me "1.23 million".' },
    { q: 'Cheque pe amount words me kaise likhe?', a: '"Rupees" format choose karo — "Rupees Twelve Lakh Thirty Four Thousand Five Hundred Sixty Seven Only" jaisa output milega. "Only" lagana zaroori hai taaki koi aage kuch jod na sake.' },
    { q: 'Decimal (paise) support hai?', a: 'Rupees format me decimal ke 2 digits paise ban jaate hain — 1500.50 = "Rupees One Thousand Five Hundred and Fifty Paise Only".' },
    { q: 'Kitna bada number convert ho sakta hai?', a: '99,99,99,99,999 (99 arab / ~1 trillion) tak — cheques aur documents ke liye kaafi hai.' },
  ],
};
