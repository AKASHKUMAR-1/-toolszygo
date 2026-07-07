module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Kisi bhi 3 values daalo (sides/angles)</div>
    <div class="field-row">
      <div class="field"><label for="tr-a">Side a</label><input type="number" id="tr-a" placeholder="—" step="any"></div>
      <div class="field"><label for="tr-b">Side b</label><input type="number" id="tr-b" placeholder="—" step="any"></div>
      <div class="field"><label for="tr-c">Side c</label><input type="number" id="tr-c" placeholder="—" step="any"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="tr-A">Angle A (°)</label><input type="number" id="tr-A" placeholder="—" step="any"></div>
      <div class="field"><label for="tr-B">Angle B (°)</label><input type="number" id="tr-B" placeholder="—" step="any"></div>
      <div class="field"><label for="tr-C">Angle C (°)</label><input type="number" id="tr-C" placeholder="—" step="any"></div>
    </div>
    <div id="tr-error" style="font-size:13px;font-weight:600;color:#B84F4F;"></div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-rows">
      <div class="result-row"><span class="k">Side a / b / c</span><span class="v" id="tr-out-sides">—</span></div>
      <div class="result-row"><span class="k">Angle A / B / C</span><span class="v" id="tr-out-angles">—</span></div>
      <div class="result-row"><span class="k">Area</span><span class="v" id="tr-out-area">—</span></div>
      <div class="result-row"><span class="k">Perimeter</span><span class="v" id="tr-out-perimeter">—</span></div>
      <div class="result-row"><span class="k">Type</span><span class="v" id="tr-out-type">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Kisi bhi 3 values daalo — sides ya angles ka koi bhi combination (SSS, SAS, ASA, AAS).',
    'Baaki sides/angles, area, perimeter aur triangle ka type (equilateral/isosceles/scalene, right/acute/obtuse) turant nikal aayega.',
  ],
  faq: [
    { q: 'Kaunse combinations kaam karte hain?', a: 'SSS (teeno sides), SAS (2 sides + unke beech ka angle), ASA (2 angles + unke beech ka side), AAS (2 angles + koi side). SSA thoda ambiguous ho sakta hai.' },
    { q: 'Area kaise calculate hota hai?', a: 'Agar 3 sides hain to Heron\'s Formula use hoti hai. Angle+sides combination me trigonometry (½ab×sinC) use hota hai.' },
    { q: '"Invalid triangle" error kyun aata hai?', a: 'Triangle inequality ke hisaab se koi bhi 2 sides ka sum teesri side se bada hona chahiye, aur angles ka sum 180° hona chahiye — inme se koi violate ho to triangle ban hi nahi sakta.' },
  ],
};
