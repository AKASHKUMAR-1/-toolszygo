module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="cg-value">CGPA / Percentage</label>
      <input type="number" id="cg-value" value="8.2" min="0" step="0.1">
    </div>
    <div class="field">
      <label for="cg-mode">Conversion</label>
      <select id="cg-mode">
        <option value="c2p" selected>CGPA → Percentage</option>
        <option value="p2c">Percentage → CGPA</option>
      </select>
    </div>
    <div class="field">
      <label for="cg-multiplier">Multiplier (your board/university's formula)</label>
      <select id="cg-multiplier">
        <option value="9.5" selected>× 9.5 (CBSE standard)</option>
        <option value="10">× 10 (some universities)</option>
        <option value="custom">Custom multiplier</option>
      </select>
    </div>
    <div class="field" id="cg-custom-row" style="display:none;">
      <label for="cg-custom">Custom multiplier</label>
      <input type="number" id="cg-custom" value="9.5" min="1" max="20" step="0.1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="cg-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;" id="cg-label">Percentage</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Formula</span><span class="v" id="cg-formula">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Enter your CGPA (or percentage, if converting the other way).',
    'Choose your board/university\'s multiplier — 9.5 for CBSE.',
    'The result updates live along with the formula.',
  ],
  faq: [
    { q: 'How is percentage calculated from CGPA for CBSE?', a: 'CBSE\'s official formula: Percentage = CGPA × 9.5. E.g. 8.2 CGPA = 77.9%. This 9.5 factor comes from CBSE\'s own analysis of top scorers\' average marks.' },
    { q: 'What if my university uses a different formula?', a: 'Every university may have its own conversion formula — some use ×10, some (CGPA−0.5)×10, some ×9.5. Choose "Custom multiplier" to apply your own formula. An official conversion certificate comes from the university.' },
    { q: 'Which one should I use for job applications?', a: 'Whatever is printed on your marksheet/transcript is official. If only CGPA is listed, convert using your university\'s official formula and mention the formula when applying.' },
    { q: 'What\'s the difference between 10-point and 4-point GPA?', a: 'India mostly uses 10-point CGPA; the US uses 4-point GPA. For US applications, credential evaluation services like WES do the official conversion.' },
  ],
};
