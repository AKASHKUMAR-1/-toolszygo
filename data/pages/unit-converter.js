module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="uc-cat">Category</label>
      <select id="uc-cat">
        <option value="length" selected>Length</option>
        <option value="weight">Weight</option>
        <option value="temp">Temperature</option>
      </select>
    </div>
    <div class="field">
      <label for="uc-value">Value</label>
      <input type="number" id="uc-value" value="1" step="any">
    </div>
    <div class="field-row">
      <div class="field">
        <label for="uc-from">From</label>
        <select id="uc-from"></select>
      </div>
      <div class="field">
        <label for="uc-to">To</label>
        <select id="uc-to"></select>
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="uc-result">—</div>
    <div style="font-size:13px;color:#B98E63;" id="uc-formula"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="uc-swap">⇄ Swap units</button>
  <button class="btn btn-secondary" id="uc-copy">Copy result</button>
</div>`,
  howto: [
    'Choose a category — Length, Weight, or Temperature.',
    'Enter a value and select From/To units (e.g. Kilometers → Miles).',
    'The result updates live — use "⇄ Swap units" to reverse the direction.',
  ],
  faq: [
    { q: 'How many miles are in 1 kilometer?', a: '1 km = 0.621371 miles. Conversely, 1 mile = 1.60934 km.' },
    { q: 'How many pounds are in 1 kg?', a: '1 kg = 2.20462 pounds (lbs). Conversely, 1 pound = 0.453592 kg.' },
    { q: 'How do I convert Celsius to Fahrenheit?', a: '°F = (°C × 9/5) + 32. E.g. 37°C = 98.6°F (normal body temperature).' },
    { q: 'Will more units be added?', a: 'Yes — area, volume, speed, and data units are coming soon. All common length, weight, and temperature units are available now.' },
  ],
};
