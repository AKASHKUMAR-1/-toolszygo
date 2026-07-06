module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">KVP Details</div>
    <div class="field">
      <label for="kvp-amount">Investment Amount (₹)</label>
      <input type="number" id="kvp-amount" value="100000" min="1000" step="5000">
    </div>
    <div class="field">
      <label for="kvp-rate">Interest Rate (% per year)</label>
      <input type="number" id="kvp-rate" value="7.5" min="5" max="12" step="0.1">
    </div>
    <div style="font-size:12px;color:#A39C8B;">KVP me paisa fixed rate pe annually compound hota hai aur maturity pe exactly double milta hai.</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="kvp-maturity">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity (double) amount</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Paisa double hoga</span><span class="v" id="kvp-time">—</span></div>
      <div class="result-row"><span class="k">Interest milega</span><span class="v" id="kvp-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="kvp-calc">Calculate doubling time</button>
  <button class="btn btn-secondary" id="kvp-copy">Copy result</button>
</div>`,
  howto: [
    'KVP me jitna invest karna hai wo amount daalo.',
    'Current KVP rate daalo — abhi ~7.5% hai.',
    '<strong>Calculate</strong> dabao — paisa kab double hoga aur maturity amount dikh jayega.',
  ],
  faq: [
    { q: 'KVP me paisa kitne time me double hota hai?', a: '7.5% rate pe approximately 115 mahine (9 saal 7 mahine) me. Doubling time rate pe depend karta hai — rate badhe to time ghatta hai. Formula: ln(2) ÷ ln(1 + rate).' },
    { q: 'KVP kahan se kharide?', a: 'Kisi bhi post office ya authorized banks se. Minimum ₹1,000, koi maximum limit nahi. Single ya joint account dono ho sakte hain.' },
    { q: 'KVP pe tax kaisa hai?', a: 'KVP me koi 80C benefit NAHI hai aur interest bhi taxable hai (maturity pe). Tax-saving chahiye to NSC ya PPF better hai — KVP ka fayda simplicity aur guaranteed doubling hai.' },
    { q: 'Kya KVP beech me encash kar sakte hain?', a: 'Haan — 2.5 saal (30 mahine) ke lock-in ke baad premature encashment allowed hai, us waqt tak ke applicable rate ke saath.' },
  ],
};
