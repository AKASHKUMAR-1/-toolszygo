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
    'Enter the amount and choose From/To currencies (INR, USD, EUR, GBP, AED…).',
    'Click <strong>Convert</strong> — converts using a live reference rate.',
    'Use ⇄ Swap to reverse the direction.',
  ],
  faq: [
    { q: 'Where do the exchange rates come from?', a: 'From the Frankfurter API, which uses the European Central Bank\'s official daily reference rates. Rates update every working day.' },
    { q: 'Will this rate match a bank/exchange counter?', a: 'This is the mid-market reference rate. Banks and money changers add their own margin (1–4%) on top, so their rate will differ slightly. This rate is the best benchmark for comparison.' },
    { q: 'Which currencies are available?', a: '30+ major currencies — including USD, EUR, GBP, INR, AED (via USD), AUD, CAD, SGD, JPY, CNY. Crypto is not included.' },
    { q: 'Will this work offline?', a: 'No — internet is needed for live rates. If the rate can\'t be fetched, an error message appears.' },
  ],
};
