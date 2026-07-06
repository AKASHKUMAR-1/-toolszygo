module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="cur-amount">Amount</label>
      <input type="number" id="cur-amount" value="1000" min="0" step="100">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="cur-from">From</label>
        <select id="cur-from"></select>
      </div>
      <div class="field">
        <label for="cur-to">To</label>
        <select id="cur-to"></select>
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="cur-result">—</div>
    <div style="font-size:13px;color:#B98E63;" id="cur-rate"></div>
    <div style="font-size:11.5px;color:#B98E63;margin-top:auto;" id="cur-date"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="cur-convert">Convert</button>
  <button class="btn btn-secondary" id="cur-swap">⇄ Swap</button>
  <button class="btn btn-secondary" id="cur-copy">Copy result</button>
</div>`,
  howto: [
    'Amount daalo aur From/To currencies choose karo (INR, USD, EUR, GBP, AED…).',
    '<strong>Convert</strong> dabao — live reference rate se conversion ho jayega.',
    '⇄ Swap se direction ulta karo.',
  ],
  faq: [
    { q: 'Exchange rates kahan se aate hain?', a: 'Frankfurter API se, jo European Central Bank ke official daily reference rates use karta hai. Rates har working day update hote hain.' },
    { q: 'Kya ye rate bank/exchange wale rate jaisa hoga?', a: 'Ye mid-market reference rate hai. Banks aur money changers isme apna margin (1–4%) jodte hain, isliye unka rate thoda alag hoga. Comparison ke liye ye rate best benchmark hai.' },
    { q: 'Kaunsi currencies available hain?', a: '30+ major currencies — USD, EUR, GBP, INR, AED (via USD), AUD, CAD, SGD, JPY, CNY samet. Crypto include nahi hai.' },
    { q: 'Offline kaam karega?', a: 'Nahi — live rates ke liye internet chahiye. Rate fetch na ho paye to error message dikhega.' },
  ],
};
