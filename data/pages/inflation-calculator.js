module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="inf-amount">Amount (₹)</label>
      <input type="number" id="inf-amount" value="100000" min="1" step="10000">
    </div>
    <div class="field">
      <label for="inf-rate">Inflation Rate (% per year)</label>
      <input type="number" id="inf-rate" value="6" min="0.5" max="20" step="0.5">
    </div>
    <div class="field">
      <label for="inf-years">Years</label>
      <input type="number" id="inf-years" value="10" min="1" max="50" step="1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="inf-future">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;" id="inf-future-label">Aaj ke ₹1,00,000 ke kharche ki future cost</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Aaj ke paise ki value tab</span><span class="v" id="inf-power">—</span></div>
      <div class="result-row"><span class="k">Purchasing power loss</span><span class="v" id="inf-loss">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="inf-calc">Calculate inflation impact</button>
  <button class="btn btn-secondary" id="inf-copy">Copy result</button>
</div>`,
  howto: [
    'Koi bhi amount daalo — aaj ka monthly kharcha, ya bachaya hua paisa.',
    'Inflation rate daalo — India ka long-term average ~6% hai (education/health 8–10%).',
    'Kitne saal aage dekhna hai wo daalo.',
    '<strong>Calculate</strong> dabao — future cost aur paise ki girti value dono dikh jayengi.',
  ],
  faq: [
    { q: 'Inflation ka matlab kya hai?', a: 'Cheezon ke daam har saal badhna. 6% inflation matlab jo cheez aaj ₹100 ki hai, agle saal ₹106 ki hogi. Aapke paise ki purchasing power utni hi ghat jaati hai.' },
    { q: 'Future cost kaise calculate hoti hai?', a: 'Future cost = Amount × (1 + inflation)^years. Aaj ka ₹1 lakh ka kharcha 6% inflation pe 10 saal baad ₹1.79 lakh ka hoga. Ulta, aaj ke ₹1 lakh ki value tab sirf ₹55,839 ke barabar hogi.' },
    { q: 'Savings account me paisa rakhna loss kyun hai?', a: 'Savings account 2.5–3% deta hai jabki inflation ~6% hai — matlab real value har saal ~3% GHAT rahi hai. Isliye inflation-beating investments (equity, PPF, NPS) zaroori hain.' },
    { q: 'Retirement planning me kaunsa inflation rate lein?', a: 'General 6%, lekin healthcare aur education ka inflation 8–10% hota hai. Conservative planning ke liye 7% le sakte ho.' },
  ],
};
