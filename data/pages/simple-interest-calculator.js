module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="si-principal">Principal (₹)</label>
      <input type="number" id="si-principal" value="50000" min="1" step="1000">
    </div>
    <div class="field">
      <label for="si-rate">Interest Rate (% per year)</label>
      <input type="number" id="si-rate" value="10" min="0.1" max="60" step="0.1">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="si-time">Time</label>
        <input type="number" id="si-time" value="2" min="0.1" step="0.5">
      </div>
      <div class="field">
        <label for="si-time-unit">Unit</label>
        <select id="si-time-unit">
          <option value="years" selected>Years</option>
          <option value="months">Months</option>
        </select>
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="si-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Simple interest</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Principal</span><span class="v" id="si-p">—</span></div>
      <div class="result-row"><span class="k">Total amount (P + SI)</span><span class="v" id="si-total">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="si-calc">Calculate</button>
  <button class="btn btn-secondary" id="si-copy">Copy result</button>
</div>`,
  howto: [
    'Principal amount daalo — jitna paisa udhaar diya/liya hai.',
    'Annual interest rate daalo (e.g. 10%).',
    'Time years ya months me daalo.',
    '<strong>Calculate</strong> dabao — simple interest aur total amount dikh jayega.',
  ],
  faq: [
    { q: 'Simple interest ka formula kya hai?', a: 'SI = P × R × T ÷ 100, jahan P = principal, R = annual rate aur T = time in years. Total amount = P + SI.' },
    { q: 'Simple interest kahan use hota hai?', a: 'Personal udhaar, gold loans, kuch vehicle loans aur short-term lending me. Banks ke deposits me zyada tar compound interest hota hai.' },
    { q: 'Mahine ke hisaab se interest kaise nikale?', a: 'Time unit "Months" select karo — tool khud months ko years me convert kar leta hai (months ÷ 12). "2 rupaye sekda" matlab 2% per month = 24% per year.' },
    { q: 'Simple aur compound me kaunsa zyada hota hai?', a: 'Same rate aur time pe compound interest hamesha zyada hota hai (1 period ke baad), kyunki usme interest pe bhi interest lagta hai.' },
  ],
};
