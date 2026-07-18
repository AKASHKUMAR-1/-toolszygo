module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Jewellery Details</div>
    <div class="field-row">
      <div class="field">
        <label for="gj-rate">Gold Rate (₹ per gram)</label>
        <input type="number" id="gj-rate" value="7200" min="0" step="10">
      </div>
      <div class="field">
        <label for="gj-weight">Weight (grams)</label>
        <input type="number" id="gj-weight" value="10" min="0.1" step="0.1">
      </div>
    </div>
    <div style="font-size:12px;color:#A3937E;margin-top:-8px;margin-bottom:10px;">Enter the rate quoted by your jeweller for your jewellery's purity (22K/18K rate, not necessarily the 24K market rate).</div>
    <div class="field">
      <label for="gj-making-mode">Making Charges</label>
      <select id="gj-making-mode">
        <option value="percent" selected>% of gold value</option>
        <option value="flat">Flat ₹ per gram</option>
        <option value="fixed">Fixed amount (₹)</option>
      </select>
    </div>
    <div class="field">
      <label for="gj-making" id="gj-making-label">Making Charges (%)</label>
      <input type="number" id="gj-making" value="12" min="0" step="0.5">
    </div>
    <div class="field">
      <label for="gj-other">Other Charges (₹, hallmarking/stone, optional)</label>
      <input type="number" id="gj-other" value="0" min="0" step="10">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Final Bill</div>
    <div class="result-big" id="gj-total">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Total payable</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Gold value</span><span class="v" id="gj-gold-value">—</span></div>
      <div class="result-row"><span class="k">Making charges</span><span class="v" id="gj-making-value">—</span></div>
      <div class="result-row"><span class="k">GST on gold (3%)</span><span class="v" id="gj-gst-gold">—</span></div>
      <div class="result-row"><span class="k">GST on making (5%)</span><span class="v" id="gj-gst-making">—</span></div>
      <div class="result-row"><span class="k">Other charges</span><span class="v" id="gj-other-out">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="gj-calc">Calculate final bill</button>
  <button class="btn btn-secondary" id="gj-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the gold rate per gram your jeweller is quoting (for your item\'s actual purity — 22K, 18K etc).',
    'Enter the weight in grams.',
    'Choose how making charges are billed — a % of gold value, a flat ₹/gram, or one fixed amount — and enter the value.',
    'See the exact final bill, with GST correctly split: 3% on gold value, 5% on making charges (as per Indian GST rules).',
  ],
  faq: [
    { q: 'Why is GST charged separately on gold and making charges?', a: 'Indian GST rules apply 3% on the gold value and a separate 5% on making charges — they\'re two different line items on your invoice, not one combined rate. A jeweller charging a blanket rate on the full amount is charging incorrectly (or hiding a higher margin).' },
    { q: 'What rate should I enter — 24K or 22K?', a: 'Enter the rate for your jewellery\'s actual purity, which is what jewellers quote (usually 22K for jewellery, sometimes 18K for lightweight/diamond-set pieces). Don\'t use the 24K "investment gold" rate you see in the news — it will overstate your gold value.' },
    { q: 'What is a fair making charge percentage?', a: 'Typically 8-25% of gold value depending on design complexity — machine-made chains are cheaper (8-12%), intricate handmade or bridal jewellery is higher (18-25%). Always ask for the making charge % upfront and compare across shops.' },
    { q: 'Should I pay GST on hallmarking charges?', a: 'No — the hallmarking/testing fee a jeweller pays attracts 18% GST as a business service, but that\'s the jeweller\'s input cost (they can claim it back as ITC), not something charged separately to you as a consumer.' },
  ],
};
