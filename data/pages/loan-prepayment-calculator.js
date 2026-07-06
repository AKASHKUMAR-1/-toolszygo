module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Loan Details</div>
    <div class="field">
      <label for="lp-outstanding">Outstanding Loan Amount (₹)</label>
      <input type="number" id="lp-outstanding" value="2000000" min="1000" step="10000">
    </div>
    <div class="field">
      <label for="lp-rate">Interest Rate (% per year)</label>
      <input type="number" id="lp-rate" value="8.5" min="0.1" max="40" step="0.05">
    </div>
    <div class="field">
      <label for="lp-tenure">Remaining Tenure (years)</label>
      <input type="number" id="lp-tenure" value="15" min="1" max="40" step="0.5">
    </div>
    <div class="field">
      <label for="lp-prepay">Prepayment Amount (₹)</label>
      <input type="number" id="lp-prepay" value="300000" min="0" step="10000">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result (EMI same rakh kar)</div>
    <div class="result-big" id="lp-saved">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Interest bachega</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Current EMI</span><span class="v" id="lp-emi">—</span></div>
      <div class="result-row"><span class="k">Purani remaining tenure</span><span class="v" id="lp-old-tenure">—</span></div>
      <div class="result-row"><span class="k">Nayi tenure (prepay ke baad)</span><span class="v" id="lp-new-tenure">—</span></div>
      <div class="result-row"><span class="k">EMIs kam hui</span><span class="v" id="lp-emis-cut">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="lp-calc">Calculate savings</button>
  <button class="btn btn-secondary" id="lp-copy">Copy result</button>
</div>`,
  howto: [
    'Loan ka abhi ka outstanding amount daalo (bank app me dikh jaata hai).',
    'Interest rate aur remaining tenure daalo.',
    'Jitna lump sum prepay karna chahte ho wo daalo.',
    '<strong>Calculate</strong> dabao — kitna interest bachega aur kitni EMIs kam hongi dikh jayega.',
  ],
  faq: [
    { q: 'Prepayment se tenure kam hota hai ya EMI?', a: 'Aap choose kar sakte ho. Ye calculator tenure-reduction dikhata hai (EMI same) — isme interest ki bachat sabse zyada hoti hai. EMI kam karwana cash flow ke liye theek hai lekin bachat kam hoti hai.' },
    { q: 'Kya home loan prepayment pe penalty lagti hai?', a: 'Floating rate home loans pe RBI ke rules ke hisaab se koi prepayment penalty nahi lagti. Fixed rate loans pe 2–4% penalty ho sakti hai — apne bank se confirm karo.' },
    { q: 'Prepay karna better hai ya invest karna?', a: 'Thumb rule: agar expected investment return (post-tax) loan rate se zyada hai to invest karo, warna prepay. 8.5% ka loan prepay karna = guaranteed 8.5% tax-free return.' },
    { q: 'Prepayment kab karna sabse faydemand hai?', a: 'Loan ke shuruaati saalon me — tab EMI ka bada hissa interest hota hai, isliye principal ghatane ka asar sabse zyada hota hai.' },
  ],
};
