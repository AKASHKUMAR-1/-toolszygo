module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Amount &amp; Rate</div>
    <div class="field">
      <label for="gst-amount">Amount (₹)</label>
      <input type="number" id="gst-amount" value="1000" min="0" step="1">
    </div>
    <div class="field">
      <label for="gst-rate">GST Rate</label>
      <select id="gst-rate">
        <option value="0.25">0.25%</option>
        <option value="3">3%</option>
        <option value="5">5%</option>
        <option value="12">12%</option>
        <option value="18" selected>18%</option>
        <option value="28">28%</option>
      </select>
    </div>
    <div class="field">
      <label for="gst-mode">Calculation</label>
      <select id="gst-mode">
        <option value="add" selected>Add GST (amount is without GST)</option>
        <option value="remove">Remove GST (amount includes GST)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="result-big" id="gst-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;" id="gst-result-label">Total (with GST)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Base amount (without GST)</span><span class="v" id="gst-base">—</span></div>
      <div class="result-row"><span class="k">GST amount</span><span class="v" id="gst-tax">—</span></div>
      <div class="result-row"><span class="k">CGST</span><span class="v" id="gst-cgst">—</span></div>
      <div class="result-row"><span class="k">SGST</span><span class="v" id="gst-sgst">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="gst-calc">Calculate GST</button>
  <button class="btn btn-secondary" id="gst-copy">Copy result</button>
</div>`,
  howto: [
    'Amount daalo — with GST ya without GST, dono chalega.',
    'GST rate choose karo (0.25%, 3%, 5%, 12%, 18% ya 28%).',
    '<strong>Add GST</strong> select karo agar amount me GST add karna hai, ya <strong>Remove GST</strong> agar GST-inclusive price se base nikalna hai.',
    'Calculate pe click karo — GST amount, CGST/SGST breakup aur total dikh jayega.',
  ],
  faq: [
    { q: 'CGST aur SGST kya hote hain?', a: 'Same state ke andar sale pe GST do hisso me batta hai — CGST (Central GST) aur SGST (State GST), dono GST rate ke aadhe-aadhe. E.g. 18% GST = 9% CGST + 9% SGST.' },
    { q: 'GST remove (reverse GST) kaise calculate hota hai?', a: 'GST-inclusive amount se base price nikalne ka formula: Base = Total ÷ (1 + rate/100). E.g. ₹1180 me 18% GST included hai to base = 1180 ÷ 1.18 = ₹1000.' },
    { q: 'India me GST ke kaunse rates hain?', a: 'Common rates: 0.25% (rough diamonds), 3% (gold), 5%, 12%, 18% aur 28%. Zyada tar services pe 18% lagta hai.' },
    { q: 'Kya ye calculator IGST ke liye bhi kaam karta hai?', a: 'Haan — inter-state sale me poora GST amount hi IGST hota hai. Is tool ka "GST amount" hi aapka IGST hai.' },
  ],
};
