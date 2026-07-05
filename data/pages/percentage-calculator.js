module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Kya nikalna hai?</div>
    <div class="field-row" style="align-items:flex-end;">
      <div class="field">
        <label for="pc1-x">X ka Y% —</label>
        <input type="number" id="pc1-x" placeholder="e.g. 20 (%)">
      </div>
      <div class="field">
        <label for="pc1-y">of</label>
        <input type="number" id="pc1-y" placeholder="e.g. 500">
      </div>
      <div class="field" style="max-width:160px;">
        <label>&nbsp;</label>
        <div class="result-big" id="pc1-res" style="font-size:24px;min-height:24px;">—</div>
      </div>
    </div>
    <div class="field-row" style="align-items:flex-end;">
      <div class="field">
        <label for="pc2-x">X kitna % hai —</label>
        <input type="number" id="pc2-x" placeholder="e.g. 45">
      </div>
      <div class="field">
        <label for="pc2-y">of</label>
        <input type="number" id="pc2-y" placeholder="e.g. 180">
      </div>
      <div class="field" style="max-width:160px;">
        <label>&nbsp;</label>
        <div class="result-big" id="pc2-res" style="font-size:24px;min-height:24px;">—</div>
      </div>
    </div>
    <div class="field-row" style="align-items:flex-end;">
      <div class="field">
        <label for="pc3-x">Increase/decrease — From</label>
        <input type="number" id="pc3-x" placeholder="e.g. 400">
      </div>
      <div class="field">
        <label for="pc3-y">To</label>
        <input type="number" id="pc3-y" placeholder="e.g. 500">
      </div>
      <div class="field" style="max-width:160px;">
        <label>&nbsp;</label>
        <div class="result-big" id="pc3-res" style="font-size:24px;min-height:24px;">—</div>
      </div>
    </div>
  </div>
</div>`,
  howto: [
    'Pehli row me "X ka Y%" nikalo — e.g. 500 ka 20% = 100.',
    'Doosri row me pata karo ek number doosre ka kitna percent hai — e.g. 45, 180 ka 25% hai.',
    'Teesri row me do numbers ke beech percentage increase ya decrease nikalo.',
    'Type karte hi result live update hota hai — koi button dabane ki zaroorat nahi.',
  ],
  faq: [
    { q: 'Percentage kaise calculate karte hain?', a: 'X ka Y% = X × Y ÷ 100. E.g. 500 ka 20% = 500 × 20 ÷ 100 = 100.' },
    { q: 'Percentage increase kaise nikalte hain?', a: 'Increase % = (Naya − Purana) ÷ Purana × 100. E.g. 400 se 500 hua to (500−400) ÷ 400 × 100 = 25% increase.' },
    { q: 'Marks ka percentage kaise nikale?', a: 'Obtained marks ÷ total marks × 100. Doosri row use karo — obtained marks pehle box me, total marks doosre me.' },
    { q: 'Kya decimal numbers chalenge?', a: 'Haan, teeno calculators decimal values ke saath kaam karte hain.' },
  ],
};
