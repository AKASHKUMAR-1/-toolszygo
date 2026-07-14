module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Enter any 3 values (sides/angles)</div>
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
    'Enter any 3 values — any combination of sides or angles (SSS, SAS, ASA, AAS).',
    'The remaining sides/angles, area, perimeter, and triangle type (equilateral/isosceles/scalene, right/acute/obtuse) are computed instantly.',
  ],
  faq: [
    { q: 'Which combinations work?', a: 'SSS (all three sides), SAS (2 sides + the angle between them), ASA (2 angles + the side between them), AAS (2 angles + any side). SSA can be ambiguous.' },
    { q: 'How is the area calculated?', a: 'With 3 sides, Heron\'s Formula is used. With an angle+sides combination, trigonometry (½ab×sinC) is used.' },
    { q: 'Why do I get an "Invalid triangle" error?', a: 'By the triangle inequality, the sum of any 2 sides must exceed the third, and the angles must sum to 180° — if either is violated, a triangle can\'t exist.' },
  ],
};
