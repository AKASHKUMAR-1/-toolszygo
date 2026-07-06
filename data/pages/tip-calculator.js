module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Bill Details</div>
    <div class="field">
      <label for="tip-bill">Bill Amount (₹)</label>
      <input type="number" id="tip-bill" value="1000" min="0" step="10">
    </div>
    <div class="field">
      <label>Tip: <span id="tip-pct-val">10</span>%</label>
      <div class="range-row">
        <input type="range" id="tip-pct" min="0" max="30" value="10">
      </div>
    </div>
    <div class="field">
      <label for="tip-people">Kitne log split kar rahe hain?</label>
      <input type="number" id="tip-people" value="1" min="1" max="50" step="1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="tip-total">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Total (bill + tip)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Tip amount</span><span class="v" id="tip-amount">—</span></div>
      <div class="result-row"><span class="k">Per person</span><span class="v" id="tip-person">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="tip-calc">Calculate tip</button>
  <button class="btn btn-secondary" id="tip-copy">Copy result</button>
</div>`,
  howto: [
    'Bill amount daalo.',
    'Tip % slider se set karo — India me 5–10% common hai.',
    'Agar dosto me split karna hai to logo ki sankhya daalo — per-person share dikh jayega.',
  ],
  faq: [
    { q: 'India me kitna tip dena chahiye?', a: 'Restaurants me 5–10% common hai. Agar bill me "service charge" already laga hai to alag tip dena zaroori nahi. Delivery boys ko ₹20–50 dena aam hai.' },
    { q: 'Service charge aur tip me kya difference hai?', a: 'Service charge (aam taur pe 5–10%) restaurant khud bill me lagata hai — ye optional hai aur aap hatwa sakte ho. Tip aap apni marzi se dete ho jo staff ko milta hai.' },
    { q: 'Tip GST ke pehle ke amount pe ya baad ke?', a: 'Etiquette ke hisaab se tip food amount (GST se pehle) pe calculate karna sahi hai, lekin practically log final bill pe hi karte hain — dono chalta hai.' },
    { q: 'Split karne pe paisa round kaise karein?', a: 'Tool exact per-person amount dikhata hai. Aap upar round kar do — thoda extra tip ban jayega, kisi ka nuksaan nahi.' },
  ],
};
