module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="ifsc-code">IFSC Code</label>
      <input type="text" id="ifsc-code" placeholder="e.g. SBIN0000300" maxlength="11" style="font-family:monospace;text-transform:uppercase;">
    </div>
    <div style="font-size:12px;color:#A39C8B;">IFSC code cheque book, passbook ya bank app me milta hai — 11 characters ka hota hai.</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ifsc-placeholder">bank branch details yahan aayengi</div>
    <div class="result-rows" id="ifsc-result" style="display:none;">
      <div class="result-row"><span class="k">Bank</span><span class="v" id="ifsc-bank">—</span></div>
      <div class="result-row"><span class="k">Branch</span><span class="v" id="ifsc-branch">—</span></div>
      <div class="result-row"><span class="k">City</span><span class="v" id="ifsc-city">—</span></div>
      <div class="result-row"><span class="k">State</span><span class="v" id="ifsc-state">—</span></div>
      <div class="result-row"><span class="k">Address</span><span class="v" id="ifsc-address" style="font-weight:400;font-size:12.5px;max-width:60%;">—</span></div>
      <div class="result-row"><span class="k">MICR</span><span class="v" id="ifsc-micr">—</span></div>
      <div class="result-row"><span class="k">UPI / IMPS / NEFT / RTGS</span><span class="v" id="ifsc-services">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ifsc-search">Search IFSC</button>
  <button class="btn btn-secondary" id="ifsc-copy">Copy details</button>
</div>`,
  howto: [
    'Apna 11-character IFSC code daalo (e.g. SBIN0000300).',
    '<strong>Search IFSC</strong> dabao — bank, branch, address aur services ki details aa jayengi.',
    'Details copy karke NEFT/RTGS form me use karo.',
  ],
  faq: [
    { q: 'IFSC code kya hota hai?', a: 'IFSC (Indian Financial System Code) har bank branch ka unique 11-character code hai — pehle 4 letters bank ka naam, 5th character 0, aakhri 6 branch code. NEFT, RTGS aur IMPS transfers me zaroori hota hai.' },
    { q: 'Ye data kahan se aata hai?', a: 'Razorpay ki free IFSC directory API se, jo RBI ki official list pe based hai aur regularly update hoti hai.' },
    { q: 'IFSC code kahan milta hai?', a: 'Cheque book ke har page pe, bank passbook pe, bank ki app/net-banking me, ya bank ki website pe. Account number ke saath hamesha IFSC bhi verify karo.' },
    { q: 'Galat IFSC daalne pe paisa kahan jaata hai?', a: 'Agar IFSC+account combination invalid hai to transfer fail hokar paisa wapas aa jaata hai. Lekin galat-but-valid details pe paisa galat account me jaa sakta hai — isliye hamesha double-check karo.' },
  ],
};
