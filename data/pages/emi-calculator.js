module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Loan Details</div>
    <div class="field">
      <label for="emi-amount">Loan Amount (₹)</label>
      <input type="number" id="emi-amount" value="1000000" min="1000" step="10000">
    </div>
    <div class="field">
      <label for="emi-rate">Interest Rate (% per year)</label>
      <input type="number" id="emi-rate" value="8.5" min="0.1" max="40" step="0.05">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="emi-tenure">Tenure</label>
        <input type="number" id="emi-tenure" value="20" min="1" step="1">
      </div>
      <div class="field">
        <label for="emi-tenure-unit">Unit</label>
        <select id="emi-tenure-unit">
          <option value="years" selected>Years</option>
          <option value="months">Months</option>
        </select>
      </div>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="result-big" id="emi-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Monthly EMI</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Principal amount</span><span class="v" id="emi-principal">—</span></div>
      <div class="result-row"><span class="k">Total interest</span><span class="v" id="emi-interest">—</span></div>
      <div class="result-row"><span class="k">Total payment</span><span class="v" id="emi-total">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="emi-calc">Calculate EMI</button>
  <button class="btn btn-secondary" id="emi-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the loan amount you want to borrow (e.g. ₹10,00,000).',
    "Enter the bank's annual interest rate (e.g. 8.5%).",
    'Choose the tenure — in years or months.',
    'Click <strong>Calculate EMI</strong> — the monthly EMI, total interest, and total payment appear instantly.',
  ],
  faq: [
    { q: 'How is EMI calculated?', a: 'EMI formula: P × r × (1+r)^n / ((1+r)^n − 1), where P = loan amount, r = monthly interest rate (annual rate ÷ 12 ÷ 100), and n = total months. This tool uses the same standard formula banks use.' },
    { q: 'Does this work for home loans, car loans, and personal loans?', a: 'Yes. The EMI formula is the same for all fixed-rate loans — just enter the correct amount, rate, and tenure.' },
    { q: 'Is my data saved anywhere?', a: 'No. All calculations happen entirely in your browser — no data is sent to any server.' },
    { q: "Will a floating-rate loan's EMI differ from this?", a: 'With floating rates, the interest rate changes over time, so the actual EMI may change in the future. This calculator shows the EMI at the current rate.' },
  ],
};
