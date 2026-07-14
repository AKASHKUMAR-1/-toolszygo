module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Recipe Details</div>
    <div class="field-row">
      <div class="field" style="max-width:160px;"><label for="rc-original">Original servings</label><input type="number" id="rc-original" value="4" min="1"></div>
      <div class="field" style="max-width:160px;"><label for="rc-target">New servings</label><input type="number" id="rc-target" value="6" min="1"></div>
    </div>
    <div class="panel-label" style="margin-top:6px;">Ingredients</div>
    <div id="rc-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="rc-add">+ Add ingredient</button>
    </div>
  </div>
</div>
<div class="panel panel-result" style="margin-top:16px;">
  <div class="panel-label">Scaled Recipe</div>
  <div id="rc-output" style="font-size:14px;line-height:1.9;"></div>
</div>`,
  howto: [
    'Enter the original servings and the new servings you need.',
    'Enter each ingredient\'s name and quantity.',
    'All ingredients scale automatically to the new servings.',
  ],
  faq: [
    { q: 'What is the scaling formula?', a: 'New quantity = Original quantity × (New servings ÷ Original servings). E.g. 2 cups for 4 servings, for 6 servings = 2 × (6/4) = 3 cups.' },
    { q: 'Should spices/seasoning scale linearly too?', a: 'Yes for most ingredients, but strong spices (chili, salt) can become overpowering when scaled linearly to large quantities — keep it a bit lower and adjust to taste.' },
    { q: 'Why is scaling risky for baking recipes?', a: 'Baking is chemistry-sensitive — scaling too much (like 3x, 4x) may require adjusting baking time/temperature. Smaller adjustments (1.5x, 2x) are generally safe.' },
  ],
};
