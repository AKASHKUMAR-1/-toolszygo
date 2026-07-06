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
      <label for="cg-multiplier">Multiplier (board/university ka formula)</label>
      <select id="cg-multiplier">
        <option value="9.5" selected>× 9.5 (CBSE standard)</option>
        <option value="10">× 10 (kuch universities)</option>
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
    'CGPA daalo (ya percentage, agar ulta convert karna hai).',
    'Apne board/university ka multiplier choose karo — CBSE ke liye 9.5.',
    'Result live update hota hai formula ke saath.',
  ],
  faq: [
    { q: 'CBSE me CGPA se percentage kaise nikalte hain?', a: 'CBSE ka official formula: Percentage = CGPA × 9.5. E.g. 8.2 CGPA = 77.9%. Ye 9.5 isliye hai kyunki CBSE ne top scorers ke average marks se ye ratio nikala tha.' },
    { q: 'Meri university ka formula alag hai to?', a: 'Har university ka apna conversion formula ho sakta hai — kuch ×10, kuch (CGPA−0.5)×10, kuch ×9.5 use karte hain. "Custom multiplier" choose karke apna formula lagao. Official conversion certificate university se hi milta hai.' },
    { q: 'Job applications me kaunsa use karein?', a: 'Jo aapki marksheet/transcript pe likha hai wahi official hai. Agar sirf CGPA likha hai to university ke official formula se convert karo aur apply karte waqt formula mention karo.' },
    { q: '10-point aur 4-point GPA me kya difference hai?', a: 'India me zyada tar 10-point CGPA hai; US me 4-point GPA. US applications ke liye WES jaisi credential evaluation services official conversion karti hain.' },
  ],
};
