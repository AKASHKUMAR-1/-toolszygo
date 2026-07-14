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
    'Enter a number (1 to 3999) — the Roman numeral appears instantly.',
    'Or enter a Roman numeral (like XIV) — get its number.',
    'Both directions update live.',
  ],
  faq: [
    { q: 'How do Roman numerals work?', a: 'I=1, V=5, X=10, L=50, C=100, D=500, M=1000. When a smaller symbol comes before a larger one, it subtracts: IV=4, IX=9, XL=40, CM=900. All numbers are built this way.' },
    { q: 'Why only up to 3999?', a: 'In the standard Roman system, a symbol repeats at most 3 times, so MMMCMXCIX (3999) is the largest standard number. For larger numbers, Romans used a vinculum (a line), which isn\'t typable.' },
    { q: 'What is the Roman numeral for zero?', a: 'There isn\'t one! The Roman system had no concept of zero — that came from India (Aryabhata/Brahmagupta). That\'s why the converter starts at 1.' },
    { q: 'Is IIII wrong, or IV?', a: 'The standard rule is IV (5−1). But clock faces traditionally use IIII — both have been used historically; today IV is standard.' },
  ],
};
