module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Investment Details</div>
    <div class="field">
      <label for="cagr-initial">Initial Value (₹)</label>
      <input type="number" id="cagr-initial" value="100000" min="1" step="10000">
    </div>
    <div class="field">
      <label for="cagr-final">Final Value (₹)</label>
      <input type="number" id="cagr-final" value="250000" min="1" step="10000">
    </div>
    <div class="field">
      <label for="cagr-years">Duration (years)</label>
      <input type="number" id="cagr-years" value="5" min="0.5" max="60" step="0.5">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="cagr-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">CAGR (per year)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total growth</span><span class="v" id="cagr-growth">—</span></div>
      <div class="result-row"><span class="k">Paisa kitna guna hua</span><span class="v" id="cagr-multiple">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="cagr-calc">Calculate CAGR</button>
  <button class="btn btn-secondary" id="cagr-copy">Copy result</button>
</div>`,
  howto: [
    'Investment ki starting value daalo (jitne me kharida).',
    'Aaj ki/final value daalo (jitne me becha ya current value).',
    'Kitne saal ka period hai wo daalo.',
    '<strong>Calculate CAGR</strong> dabao — asli annualized return % dikh jayega.',
  ],
  faq: [
    { q: 'CAGR kya hota hai?', a: 'Compound Annual Growth Rate — investment har saal average kitne % badhi. Formula: (Final ÷ Initial)^(1/years) − 1. Ye "total 150% return" jaise misleading numbers se better comparison deta hai.' },
    { q: 'CAGR aur absolute return me kya difference hai?', a: '₹1L se ₹2.5L in 5 years = 150% absolute return, lekin CAGR sirf 20.1% hai. Absolute return time ignore karta hai — alag duration ki investments compare karne ke liye CAGR hi sahi hai.' },
    { q: 'Achha CAGR kitna hota hai?', a: 'Context pe depend karta hai: FD 6–7%, Nifty long-term ~12%, top mutual funds 14–18%. Inflation (~6%) se upar jo hai wahi asli kamai hai.' },
    { q: 'Property ka CAGR kaise nikale?', a: 'Kharidne ki price initial me, aaj ki value final me, saal daalo. Aksar "property double ho gayi" 12 saal me hoti hai = sirf 5.9% CAGR — FD jitna hi!' },
  ],
};
