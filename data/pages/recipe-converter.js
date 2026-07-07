module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Recipe Details</div>
    <div class="field-row">
      <div class="field" style="max-width:160px;"><label for="rc-original">Original servings</label><input type="number" id="rc-original" value="4" min="1"></div>
      <div class="field" style="max-width:160px;"><label for="rc-target">Naye servings</label><input type="number" id="rc-target" value="6" min="1"></div>
    </div>
    <div class="panel-label" style="margin-top:6px;">Ingredients</div>
    <div id="rc-items"></div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-secondary" id="rc-add">+ Ingredient add karo</button>
    </div>
  </div>
</div>
<div class="panel panel-result" style="margin-top:16px;">
  <div class="panel-label">Scaled Recipe</div>
  <div id="rc-output" style="font-size:14px;line-height:1.9;"></div>
</div>`,
  howto: [
    'Original servings aur kitne servings chahiye (naye) daalo.',
    'Har ingredient ka naam aur quantity daalo.',
    'Sab ingredients automatically naye servings ke hisaab se scale ho jayenge.',
  ],
  faq: [
    { q: 'Scaling ka formula kya hai?', a: 'Nayi quantity = Original quantity × (Naye servings ÷ Original servings). E.g. 4 servings ke liye 2 cups aata hai, 6 servings ke liye = 2 × (6/4) = 3 cups.' },
    { q: 'Kya spices/seasoning bhi linearly scale karni chahiye?', a: 'Zyada tar ingredients ke liye haan, lekin strong spices (mirch, namak) badi quantity me linearly scale karne se overpowering ho sakta hai — thoda kam rakh kar taste karke adjust karo.' },
    { q: 'Baking recipes me scaling risky kyun hoti hai?', a: 'Baking chemistry-sensitive hoti hai — bahut zyada scale (jaise 3x, 4x) karne pe baking time/temperature adjust karna pad sakta hai. Chhote adjustments (1.5x, 2x) generally safe hote hain.' },
  ],
};
