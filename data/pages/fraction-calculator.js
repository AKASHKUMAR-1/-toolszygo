module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Fractions</div>
    <div class="field-row" style="align-items:center;">
      <div class="field" style="max-width:140px;">
        <div class="field-row">
          <input type="number" id="fr-n1" placeholder="Num" style="text-align:center;">
        </div>
        <div style="text-align:center;border-top:2px solid #4E4636;margin:4px 0;"></div>
        <div class="field-row">
          <input type="number" id="fr-d1" placeholder="Den" style="text-align:center;">
        </div>
      </div>
      <select id="fr-op" style="font-family:var(--sans);font-size:20px;padding:8px;border:1px solid #E8E0D2;border-radius:8px;background:#FFF;">
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <div class="field" style="max-width:140px;">
        <div class="field-row">
          <input type="number" id="fr-n2" placeholder="Num" style="text-align:center;">
        </div>
        <div style="text-align:center;border-top:2px solid #4E4636;margin:4px 0;"></div>
        <div class="field-row">
          <input type="number" id="fr-d2" placeholder="Den" style="text-align:center;">
        </div>
      </div>
      <div style="font-size:24px;">=</div>
      <div class="result-big" id="fr-result" style="font-size:28px;">—</div>
    </div>
    <div id="fr-decimal" style="text-align:center;font-size:13px;color:#B98E63;margin-top:10px;"></div>
  </div>
</div>`,
  howto: [
    'Pehli fraction ka numerator/denominator daalo, operation choose karo, doosri fraction daalo.',
    'Result automatically simplify hokar (lowest terms me) milega, decimal value ke saath.',
  ],
  faq: [
    { q: 'Simplify kaise hota hai?', a: 'GCD (Greatest Common Divisor) nikal kar numerator aur denominator dono ko usse divide kar diya jaata hai — jaise 4/8 simplify hokar 1/2 ban jaata hai.' },
    { q: 'Mixed numbers (jaise 2½) chalenge?', a: 'Abhi sirf simple fractions (numerator/denominator) support hain. Mixed number ko improper fraction me convert karke daalo (2½ = 5/2).' },
    { q: 'Negative fractions kaam karengi?', a: 'Haan — numerator ya denominator me negative number daal sakte ho.' },
  ],
};
