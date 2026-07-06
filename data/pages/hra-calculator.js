module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Salary Details (monthly)</div>
    <div class="field">
      <label for="hra-basic">Basic Salary + DA (₹/month)</label>
      <input type="number" id="hra-basic" value="40000" min="1000" step="1000">
    </div>
    <div class="field">
      <label for="hra-received">HRA Received (₹/month)</label>
      <input type="number" id="hra-received" value="20000" min="0" step="1000">
    </div>
    <div class="field">
      <label for="hra-rent">Rent Paid (₹/month)</label>
      <input type="number" id="hra-rent" value="18000" min="0" step="1000">
    </div>
    <div class="field">
      <label for="hra-city">City</label>
      <select id="hra-city">
        <option value="metro" selected>Metro (Delhi, Mumbai, Kolkata, Chennai)</option>
        <option value="nonmetro">Non-metro (baaki sab cities)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result (annual)</div>
    <div class="result-big" id="hra-exempt">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Tax-exempt HRA</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">HRA received (annual)</span><span class="v" id="hra-total">—</span></div>
      <div class="result-row"><span class="k">Taxable HRA</span><span class="v" id="hra-taxable">—</span></div>
      <div class="result-row"><span class="k">Exemption ka basis</span><span class="v" id="hra-basis" style="font-weight:400;font-size:12px;max-width:55%;">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="hra-calc">Calculate HRA exemption</button>
  <button class="btn btn-secondary" id="hra-copy">Copy result</button>
</div>`,
  howto: [
    'Apni monthly basic salary (+DA agar hai) daalo.',
    'Salary slip me jo HRA milta hai wo daalo.',
    'Jitna rent dete ho wo daalo aur city type choose karo.',
    '<strong>Calculate</strong> dabao — kitna HRA tax-free hai dikh jayega.',
  ],
  faq: [
    { q: 'HRA exemption kaise calculate hoti hai?', a: 'Teeno me se SABSE KAM: (1) actual HRA received, (2) rent paid − basic ka 10%, (3) metro me basic ka 50% / non-metro me 40%. Ye calculator teeno compare karke exemption batata hai.' },
    { q: 'HRA exemption kis regime me milti hai?', a: 'Sirf OLD regime me. New regime me HRA exemption nahi hai — isliye zyada rent dene walo ke liye old regime aksar better hota hai. Income Tax Calculator se dono compare karo.' },
    { q: 'Rent parents ko de sakte hain?', a: 'Haan — agar ghar parents ke naam pe hai to unhe rent dekar HRA claim kar sakte ho. Rent agreement + bank transfer rakho, aur parents ko wo rent apni ITR me dikhana hoga.' },
    { q: 'Landlord ka PAN kab chahiye?', a: 'Annual rent ₹1 lakh (matlab ~₹8,333/month) se zyada hone pe employer ko landlord ka PAN dena zaroori hai.' },
  ],
};
