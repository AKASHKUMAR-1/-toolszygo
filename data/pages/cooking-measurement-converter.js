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
      <label for="cm-ingredient">Ingredient (weight-volume ke liye)</label>
      <select id="cm-ingredient">
        <option value="water">Water / general liquid</option>
        <option value="flour">Flour (maida/atta)</option>
        <option value="sugar">Sugar (cheeni)</option>
        <option value="butter">Butter</option>
        <option value="rice">Rice (chawal, uncooked)</option>
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
    'Quantity daalo aur From/To units choose karo (cups, tablespoons, grams, ounces, ML).',
    'Weight↔Volume conversion ke liye (jaise cups→grams) ingredient bhi choose karo — har cheez ki density alag hoti hai.',
  ],
  faq: [
    { q: 'Cup me kitne grams hote hain?', a: 'Depend karta hai ingredient pe! 1 cup flour ~120g, 1 cup sugar ~200g, 1 cup butter ~227g, 1 cup water ~240g — isliye ingredient select karna zaroori hai accurate result ke liye.' },
    { q: 'US aur UK cup me farak hai kya?', a: 'US cup = 240 ml, UK/Imperial cup = 284 ml. Ye tool US measurement standard use karta hai jo cookbooks/recipes me sabse common hai.' },
    { q: 'Kitchen scale nahi hai, kya karein?', a: 'Volume measurements (cups/tablespoons) use karo — measuring cups har kitchen me hote hain. Precision baking ke liye weight (grams) zyada accurate hai agar scale available ho.' },
  ],
};
