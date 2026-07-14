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
    'Enter the first fraction\'s numerator/denominator, choose an operation, enter the second fraction.',
    'The result is automatically simplified (lowest terms), along with the decimal value.',
  ],
  faq: [
    { q: 'How is it simplified?', a: 'The GCD (Greatest Common Divisor) is found and both numerator and denominator are divided by it — e.g. 4/8 simplifies to 1/2.' },
    { q: 'Do mixed numbers (like 2½) work?', a: 'Currently only simple fractions (numerator/denominator) are supported. Convert a mixed number to an improper fraction first (2½ = 5/2).' },
    { q: 'Do negative fractions work?', a: 'Yes — you can enter a negative number in either the numerator or denominator.' },
  ],
};
