module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field-row">
      <div class="field">
        <label for="rc-age">Current Age</label>
        <input type="number" id="rc-age" value="30" min="18" max="59" step="1">
      </div>
      <div class="field">
        <label for="rc-retire">Retirement Age</label>
        <input type="number" id="rc-retire" value="60" min="40" max="70" step="1">
      </div>
    </div>
    <div class="field">
      <label for="rc-expense">Aaj ke Monthly Expenses (₹)</label>
      <input type="number" id="rc-expense" value="50000" min="5000" step="5000">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="rc-inflation">Inflation (%)</label>
        <input type="number" id="rc-inflation" value="6" min="2" max="12" step="0.5">
      </div>
      <div class="field">
        <label for="rc-life">Life Expectancy</label>
        <input type="number" id="rc-life" value="85" min="70" max="100" step="1">
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="rc-corpus">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Retirement corpus chahiye</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Retirement pe monthly kharcha hoga</span><span class="v" id="rc-future-exp">—</span></div>
      <div class="result-row"><span class="k">Corpus banane ke liye monthly SIP @12%</span><span class="v" id="rc-sip">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="rc-calc">Calculate retirement corpus</button>
  <button class="btn btn-secondary" id="rc-copy">Copy result</button>
</div>`,
  howto: [
    'Apni current age aur planned retirement age daalo.',
    'Aaj ke monthly expenses daalo — retirement me lifestyle same maani jayegi.',
    'Inflation aur life expectancy adjust karo agar chahiye.',
    '<strong>Calculate</strong> dabao — kitna corpus chahiye aur usko banane ki monthly SIP dikh jayegi.',
  ],
  faq: [
    { q: 'Corpus kaise calculate hota hai?', a: 'Pehle aaj ke expenses ko inflation se retirement tak badhaya jaata hai. Phir retirement ke saalon ke liye corpus nikala jaata hai maankar ki corpus post-retirement ~7% kamayega jabki kharche inflation se badhte rahenge (real return method).' },
    { q: 'Kitna corpus kaafi hota hai?', a: 'Thumb rule: retirement ke pehle saal ke annual expenses ka 25–30x. E.g. retirement pe ₹3.5L/month kharcha = ₹42L/saal × 30 = ~₹12.6 crore. Ye calculator exact number deta hai aapke inputs pe.' },
    { q: 'SIP @12% hi kyun?', a: 'Long-term equity ka historical average ~12% hai. Conservative estimate ke liye is number ko kam maan kar zyada SIP karna better hai. Retirement ke paas aate hi equity se debt me shift karte jao.' },
    { q: 'EPF/NPS already hai to?', a: 'Unka expected retirement value is corpus me se minus kar do — bacha hua gap SIP se cover karo. EPF+NPS aksar corpus ka 30–50% cover kar dete hain.' },
  ],
};
