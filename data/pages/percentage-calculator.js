module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">What do you want to calculate?</div>
    <div class="field-row" style="align-items:flex-end;">
      <div class="field">
        <label for="pc1-x">Y% of X —</label>
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
        <label for="pc2-x">What % is X of —</label>
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
    'Use the first row to find "Y% of X" — e.g. 20% of 500 = 100.',
    'Use the second row to find what percent one number is of another — e.g. 45 is 25% of 180.',
    'Use the third row to find the percentage increase or decrease between two numbers.',
    'Results update live as you type — no button needed.',
  ],
  faq: [
    { q: 'How do you calculate a percentage?', a: 'Y% of X = X × Y ÷ 100. E.g. 20% of 500 = 500 × 20 ÷ 100 = 100.' },
    { q: 'How do you calculate percentage increase?', a: 'Increase % = (New − Old) ÷ Old × 100. E.g. going from 400 to 500 gives (500−400) ÷ 400 × 100 = 25% increase.' },
    { q: 'How do I calculate marks percentage?', a: 'Marks obtained ÷ total marks × 100. Use the second row — obtained marks in the first box, total marks in the second.' },
    { q: 'Do decimal numbers work?', a: 'Yes, all three calculators work with decimal values.' },
  ],
};
