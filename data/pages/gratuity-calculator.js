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
    <div style="font-size:12px;color:#A39C8B;">Gratuity is paid after 5 years of continuous service. A fraction over 6 months counts as a full year.</div>
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
    'Enter your last drawn monthly basic salary + DA (not gross, only basic+DA).',
    'Enter how many years you worked at the company.',
    'Click <strong>Calculate</strong> — see the amount per the Gratuity Act formula.',
  ],
  faq: [
    { q: 'What is the gratuity formula?', a: 'Gratuity = (15 ÷ 26) × last drawn (basic + DA) × years of service. 26 = working days in a month, 15 = 15 days\' salary per year. E.g. ₹50,000 basic × 10 years = ₹2,88,462.' },
    { q: 'When is gratuity paid?', a: 'After 5 years of continuous service — on resignation, retirement, or termination. The 5-year condition doesn\'t apply in case of death/disability.' },
    { q: 'What is the 6-month rule?', a: 'If the service fraction exceeds 6 months, it counts as a full year — 7 years 8 months = 8 years. If under 6 months, it\'s ignored — 7 years 4 months = 7 years.' },
    { q: 'Is gratuity taxed?', a: 'For private employees, up to ₹20 lakh is tax-free over a lifetime (covered by the Gratuity Act). Government employees\' entire gratuity is tax-free. Amounts above this are taxable.' },
  ],
};
