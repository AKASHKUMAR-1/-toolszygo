module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="dc-price">Original Price (₹)</label>
      <input type="number" id="dc-price" value="2000" min="0" step="10">
    </div>
    <div class="field">
      <label for="dc-off">Discount (%)</label>
      <input type="number" id="dc-off" value="25" min="0" max="100" step="1">
    </div>
    <div class="field">
      <label for="dc-extra">Extra Discount (%) — optional, stacked sale</label>
      <input type="number" id="dc-extra" value="" placeholder="e.g. 10" min="0" max="100" step="1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="dc-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Final price</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">You save</span><span class="v" id="dc-save">—</span></div>
      <div class="result-row"><span class="k">Effective discount</span><span class="v" id="dc-eff">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="dc-calc">Calculate discount</button>
  <button class="btn btn-secondary" id="dc-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the item\'s original price.',
    'Enter the discount % (e.g. 25% off).',
    'If there\'s a stacked discount like "extra 10% off", enter that too.',
    'Click <strong>Calculate</strong> — see the final price, savings, and effective discount.',
  ],
  faq: [
    { q: 'How is discount calculated?', a: 'Final price = Original × (1 − discount/100). E.g. ₹2000 at 25% off = ₹2000 × 0.75 = ₹1500, saving ₹500.' },
    { q: 'Does "50% + extra 10% off" mean 60% off?', a: 'No! The extra discount applies AFTER the first discount: ₹1000 → 50% off = ₹500 → extra 10% = ₹450. The effective discount is 55%, not 60%. That\'s why this tool also shows the effective discount.' },
    { q: 'Does this work on a GST-inclusive price?', a: 'Yes — discount is a percentage of whatever price you enter. Just note that stores usually give discounts on the MRP, which is GST-inclusive.' },
    { q: 'How do I reverse a discount — find the original from the sale price?', a: 'Original = Sale price ÷ (1 − discount/100). E.g. if ₹750 was the price after 25% off, original = 750 ÷ 0.75 = ₹1000.' },
  ],
};
