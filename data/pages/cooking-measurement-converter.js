module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="cm-value">Quantity</label>
      <input type="number" id="cm-value" value="1" min="0" step="any">
    </div>
    <div class="field">
      <label for="cm-from">From</label>
      <select id="cm-from"></select>
    </div>
    <div class="field">
      <label for="cm-to">To</label>
      <select id="cm-to"></select>
    </div>
    <div class="field">
      <label for="cm-ingredient">Ingredient (for weight-volume)</label>
      <select id="cm-ingredient">
        <option value="water">Water / general liquid</option>
        <option value="flour">Flour</option>
        <option value="sugar">Sugar</option>
        <option value="butter">Butter</option>
        <option value="rice">Rice (uncooked)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="cm-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;" id="cm-formula"></div>
  </div>
</div>`,
  howto: [
    'Enter the quantity and choose From/To units (cups, tablespoons, grams, ounces, ML).',
    'For weight↔volume conversion (like cups→grams), also choose the ingredient — every ingredient has a different density.',
  ],
  faq: [
    { q: 'How many grams are in a cup?', a: 'It depends on the ingredient! 1 cup flour ~120g, 1 cup sugar ~200g, 1 cup butter ~227g, 1 cup water ~240g — so selecting the ingredient matters for an accurate result.' },
    { q: 'Is there a difference between US and UK cups?', a: 'US cup = 240 ml, UK/Imperial cup = 284 ml. This tool uses the US measurement standard, which is most common in cookbooks/recipes.' },
    { q: 'I don\'t have a kitchen scale — what should I do?', a: 'Use volume measurements (cups/tablespoons) — measuring cups are in every kitchen. For precision baking, weight (grams) is more accurate if a scale is available.' },
  ],
};
