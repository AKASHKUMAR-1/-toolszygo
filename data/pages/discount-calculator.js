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
      <label for="dc-extra">Extra Discount (%) — optional, sale pe sale</label>
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
    'Item ka original price daalo.',
    'Discount % daalo (e.g. 25% off).',
    'Agar "extra 10% off" jaisa stacked discount hai to wo bhi daalo.',
    '<strong>Calculate</strong> dabao — final price, saving aur effective discount dikh jayega.',
  ],
  faq: [
    { q: 'Discount kaise calculate hota hai?', a: 'Final price = Original × (1 − discount/100). E.g. ₹2000 pe 25% off = ₹2000 × 0.75 = ₹1500, aur ₹500 bache.' },
    { q: '"50% + extra 10% off" ka matlab 60% off hai?', a: 'Nahi! Extra discount pehle discount ke BAAD lagta hai: ₹1000 → 50% off = ₹500 → extra 10% = ₹450. Effective discount 55% hai, 60% nahi. Isliye ye tool effective discount bhi dikhata hai.' },
    { q: 'Kya ye GST-inclusive price pe kaam karta hai?', a: 'Haan — discount kisi bhi price pe percentage hi hota hai. Bas dhyan rahe stores discount aam taur pe MRP pe dete hain jo GST-inclusive hota hai.' },
    { q: 'Reverse discount kaise nikale — sale price se original?', a: 'Original = Sale price ÷ (1 − discount/100). E.g. ₹750 me mila 25% off ke baad, to original = 750 ÷ 0.75 = ₹1000.' },
  ],
};
