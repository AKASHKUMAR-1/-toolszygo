module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Number → Roman</div>
    <div class="field">
      <label for="rn2-number">Number (1–3999)</label>
      <input type="number" id="rn2-number" value="2026" min="1" max="3999" step="1">
    </div>
    <div class="result-big" id="rn2-roman" style="font-size:28px;">—</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Roman → Number</div>
    <div class="field">
      <label for="rn2-input">Roman Numeral</label>
      <input type="text" id="rn2-input" value="MMXXVI" spellcheck="false" style="font-family:monospace;text-transform:uppercase;">
    </div>
    <div class="result-big" id="rn2-value">—</div>
    <div id="rn2-error" style="font-size:12.5px;font-weight:600;color:#B84F4F;"></div>
  </div>
</div>`,
  howto: [
    'Number daalo (1 se 3999) — Roman numeral turant mil jayega.',
    'Ya Roman numeral daalo (jaise XIV) — uska number mil jayega.',
    'Dono directions live update hoti hain.',
  ],
  faq: [
    { q: 'Roman numerals kaise kaam karte hain?', a: 'I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Chhota symbol bade ke pehle aaye to minus hota hai: IV=4, IX=9, XL=40, CM=900. Isi se sab numbers bante hain.' },
    { q: '3999 tak hi kyun?', a: 'Standard Roman system me ek symbol max 3 baar repeat hota hai, isliye MMMCMXCIX (3999) sabse bada standard number hai. Bade numbers ke liye Romans vinculum (line) use karte the jo typing me nahi hota.' },
    { q: 'Zero ka Roman numeral kya hai?', a: 'Hai hi nahi! Roman system me zero ka concept nahi tha — ye India ki den hai (Aryabhata/Brahmagupta). Isliye converter 1 se shuru hota hai.' },
    { q: 'IIII galat hai ya IV?', a: 'Standard rule IV hai (5−1). Lekin ghadiyon (clock faces) pe traditionally IIII likha jaata hai — dono historically use hue hain, aaj IV standard hai.' },
  ],
};
