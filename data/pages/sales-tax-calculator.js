module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="stx-amount">Amount (₹)</label>
      <input type="number" id="stx-amount" value="1000" min="0" step="1">
    </div>
    <div class="field">
      <label for="stx-rate">Tax Rate (%)</label>
      <input type="number" id="stx-rate" value="8" min="0" max="50" step="0.1">
    </div>
    <div class="field">
      <label for="stx-mode">Mode</label>
      <select id="stx-mode">
        <option value="add" selected>Add tax (amount tax ke bina hai)</option>
        <option value="remove">Remove tax (amount tax-included hai)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="stx-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;" id="stx-label">Total (tax ke saath)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Pre-tax amount</span><span class="v" id="stx-pretax">—</span></div>
      <div class="result-row"><span class="k">Tax amount</span><span class="v" id="stx-tax">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Amount aur tax rate daalo.',
    '"Add tax" choose karo agar amount tax ke bina hai, "Remove tax" agar amount already tax-included hai.',
    'Result turant mil jayega — pre-tax amount aur tax dono breakup ke saath.',
  ],
  faq: [
    { q: 'Sales tax kya hota hai?', a: 'Goods/services pe lagne wala tax jo final price me add hota hai — US states me common (India me isi jagah GST hai, jiske liye humara alag GST Calculator hai).' },
    { q: 'Tax remove karne ka formula kya hai?', a: 'Pre-tax = Total ÷ (1 + rate/100). E.g. $108 me 8% tax included hai to pre-tax = 108 ÷ 1.08 = $100.' },
    { q: 'India me GST Calculator use karna chahiye ya ye?', a: 'GST ke liye humara dedicated GST Calculator use karo (CGST/SGST breakup deta hai). Ye general sales-tax tool kisi bhi single-rate tax ke liye hai.' },
  ],
};
