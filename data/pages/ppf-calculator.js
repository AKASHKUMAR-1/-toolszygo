module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">PPF Details</div>
    <div class="field">
      <label for="ppf-amount">Yearly Investment (₹) — max 1,50,000</label>
      <input type="number" id="ppf-amount" value="150000" min="500" max="150000" step="5000">
    </div>
    <div class="field">
      <label for="ppf-rate">Interest Rate (% per year)</label>
      <input type="number" id="ppf-rate" value="7.1" min="5" max="12" step="0.1">
    </div>
    <div class="field">
      <label for="ppf-years">Duration (years) — minimum 15</label>
      <input type="number" id="ppf-years" value="15" min="15" max="50" step="5">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="ppf-maturity">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Maturity amount (100% tax-free)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total investment</span><span class="v" id="ppf-invested">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="ppf-interest">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ppf-calc">Calculate PPF maturity</button>
  <button class="btn btn-secondary" id="ppf-copy">Copy result</button>
</div>`,
  howto: [
    'Har saal PPF me jitna daaloge wo amount daalo (₹500 se ₹1.5 lakh).',
    'Current PPF rate daalo — abhi ~7.1% hai (govt har quarter revise karti hai).',
    'Duration daalo — minimum 15 saal, phir 5-5 saal extend hota hai.',
    '<strong>Calculate</strong> dabao — tax-free maturity amount dikh jayega.',
  ],
  faq: [
    { q: 'PPF itna popular kyun hai?', a: 'EEE tax status — investment pe 80C deduction, interest tax-free, maturity tax-free. Government guarantee ke saath ~7.1% tax-free return, jo FD ke post-tax return se kaafi better hai.' },
    { q: 'PPF me interest kaise calculate hota hai?', a: 'Har mahine ki 5 tarikh se month-end tak ke minimum balance pe monthly interest banta hai, jo saal ke end me credit hota hai. Pura fayda lene ke liye saal ki shuruaat me (April 1–5) deposit karo.' },
    { q: '15 saal se pehle paisa nikal sakte hain?', a: '7th saal se partial withdrawal allowed hai (balance ka 50% tak, conditions ke saath). 5 saal baad specific reasons (illness, education) pe premature closure bhi ho sakta hai penalty ke saath.' },
    { q: '15 saal baad kya karein?', a: 'Account 5-5 saal ke blocks me extend kar sakte ho — contribution ke saath ya bina. Bina contribution ke bhi balance pe tax-free interest milta rehta hai.' },
  ],
};
