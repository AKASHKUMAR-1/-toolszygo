module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="gr-salary">Last Drawn Basic + DA (₹/month)</label>
      <input type="number" id="gr-salary" value="50000" min="1000" step="1000">
    </div>
    <div class="field">
      <label for="gr-years">Years of Service</label>
      <input type="number" id="gr-years" value="10" min="1" max="50" step="0.5">
    </div>
    <div style="font-size:12px;color:#A39C8B;">Gratuity 5 saal continuous service ke baad milti hai. 6 mahine se zyada ka fraction pura saal count hota hai.</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="gr-amount">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Gratuity amount</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Counted years</span><span class="v" id="gr-counted">—</span></div>
      <div class="result-row"><span class="k">Formula</span><span class="v" style="font-weight:400;font-size:12px;">(15 ÷ 26) × salary × years</span></div>
      <div class="result-row"><span class="k">Tax-free limit</span><span class="v">₹20,00,000</span></div>
    </div>
    <div id="gr-note" style="display:none;font-size:12.5px;font-weight:600;color:#A98423;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="gr-calc">Calculate gratuity</button>
  <button class="btn btn-secondary" id="gr-copy">Copy result</button>
</div>`,
  howto: [
    'Apni last drawn monthly basic salary + DA daalo (gross nahi, sirf basic+DA).',
    'Kitne saal company me kaam kiya wo daalo.',
    '<strong>Calculate</strong> dabao — Gratuity Act ke formula se amount dikh jayega.',
  ],
  faq: [
    { q: 'Gratuity ka formula kya hai?', a: 'Gratuity = (15 ÷ 26) × last drawn (basic + DA) × years of service. 26 = mahine ke working days, 15 = har saal ke liye 15 din ki salary. E.g. ₹50,000 basic × 10 saal = ₹2,88,462.' },
    { q: 'Gratuity kab milti hai?', a: '5 saal continuous service ke baad — resignation, retirement ya termination pe. Death/disability ke case me 5 saal ki condition nahi lagti.' },
    { q: '6 mahine wala rule kya hai?', a: 'Service ka fraction 6 mahine se zyada ho to pura saal count hota hai — 7 saal 8 mahine = 8 saal. 6 mahine se kam ho to ignore — 7 saal 4 mahine = 7 saal.' },
    { q: 'Gratuity pe tax lagta hai?', a: 'Private employees ke liye ₹20 lakh tak lifetime tax-free hai (Gratuity Act covered). Government employees ki puri gratuity tax-free hoti hai. Isse zyada amount taxable hai.' },
  ],
};
