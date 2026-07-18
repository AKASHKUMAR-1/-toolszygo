module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Milk Test Report</div>
    <div class="field">
      <label for="mf-fat">FAT %</label>
      <input type="number" id="mf-fat" value="4.0" min="0" max="15" step="0.1">
    </div>
    <div class="field">
      <label for="mf-snf-mode">SNF %</label>
      <select id="mf-snf-mode">
        <option value="direct" selected>I know my SNF %</option>
        <option value="clr">Calculate SNF from CLR (lactometer reading)</option>
      </select>
    </div>
    <div class="field" id="mf-snf-direct-field">
      <label for="mf-snf">SNF %</label>
      <input type="number" id="mf-snf" value="8.5" min="0" max="12" step="0.1">
    </div>
    <div class="field" id="mf-clr-field" style="display:none;">
      <label for="mf-clr">Corrected Lactometer Reading (CLR)</label>
      <input type="number" id="mf-clr" value="28" min="15" max="40" step="0.5">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="mf-fat-rate">Rate per FAT point (₹)</label>
        <input type="number" id="mf-fat-rate" value="7" min="0" step="0.1">
      </div>
      <div class="field">
        <label for="mf-snf-rate">Rate per SNF point (₹)</label>
        <input type="number" id="mf-snf-rate" value="3.5" min="0" step="0.1">
      </div>
    </div>
    <div class="field">
      <label for="mf-qty">Quantity (litres)</label>
      <input type="number" id="mf-qty" value="10" min="0.1" step="0.5">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="mf-rate">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Rate per litre</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row" id="mf-snf-calc-row" style="display:none;"><span class="k">Calculated SNF (from CLR)</span><span class="v" id="mf-snf-calculated">—</span></div>
      <div class="result-row"><span class="k">FAT contribution (FAT% × rate)</span><span class="v" id="mf-fat-part">—</span></div>
      <div class="result-row"><span class="k">SNF contribution (SNF% × rate)</span><span class="v" id="mf-snf-part">—</span></div>
      <div class="result-row"><span class="k">Total payment (rate × quantity)</span><span class="v" id="mf-total">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="mf-calc">Calculate</button>
  <button class="btn btn-secondary" id="mf-copy">Copy result</button>
</div>`,
  howto: [
    'Enter your milk\'s FAT % from the test report.',
    'Enter SNF % directly if you have it, or switch to "Calculate from CLR" if your slip only shows the lactometer reading.',
    'Enter your dairy\'s rate per FAT point and per SNF point (ask your collection centre or check their rate chart).',
    'Enter the quantity in litres — get your exact rate per litre and total payment.',
  ],
  faq: [
    { q: 'How is the milk rate calculated?', a: 'Most dairies (including major cooperatives like Amul) use: Rate per litre = (FAT% × FAT rate) + (SNF% × SNF rate). For example, FAT 4.0% at ₹7/point and SNF 8.5% at ₹3.5/point gives (4.0×7) + (8.5×3.5) = ₹28.00 + ₹29.75 = ₹57.75/litre.' },
    { q: 'How do I find my dairy\'s rate per point?', a: 'Every collection centre or cooperative publishes (or can tell you) their current FAT-rate and SNF-rate — these change with the market and season. Typical 2026 ranges are roughly ₹5-7 per FAT point and ₹2.5-4 per SNF point, but always confirm your own dairy\'s numbers rather than assuming.' },
    { q: 'What is CLR and how does it become SNF%?', a: 'CLR (Corrected Lactometer Reading) is what a lactometer measures directly. A commonly used field formula converts it to SNF: SNF% = (CLR ÷ 4) + (0.2 × FAT%) + 0.36. Note: exact coefficients vary slightly by state/dairy standard (BIS/ISI vs local variations) — if your dairy gives SNF% directly on the slip, always prefer that over a CLR estimate.' },
    { q: 'Why does this help farmers?', a: 'The FAT-SNF formula is straightforward, but doing it in your head at the collection centre is easy to get wrong (or easy for someone to shortchange you on). This calculator makes your exact entitlement instantly verifiable.' },
  ],
};
