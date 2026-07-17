module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Slab Dimensions</div>
    <div class="field">
      <label for="cc2-unit">Units</label>
      <select id="cc2-unit">
        <option value="imperial" selected>Feet &amp; inches (US)</option>
        <option value="metric">Meters &amp; centimeters</option>
      </select>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="cc2-length">Length (<span class="cc2-unit-big">ft</span>)</label>
        <input type="number" id="cc2-length" value="10" min="0.1" step="0.5">
      </div>
      <div class="field">
        <label for="cc2-width">Width (<span class="cc2-unit-big">ft</span>)</label>
        <input type="number" id="cc2-width" value="10" min="0.1" step="0.5">
      </div>
    </div>
    <div class="field">
      <label for="cc2-thick">Thickness (<span id="cc2-unit-small">inches</span>)</label>
      <input type="number" id="cc2-thick" value="4" min="0.5" step="0.5">
    </div>
    <div class="checks">
      <label><input type="checkbox" id="cc2-waste" checked> Add 10% extra for waste/spillage (recommended)</label>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Concrete Needed</div>
    <div class="result-big" id="cc2-yards">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;" id="cc2-main-label">Cubic yards</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Cubic meters</span><span class="v" id="cc2-meters">—</span></div>
      <div class="result-row"><span class="k">80 lb bags</span><span class="v" id="cc2-bags80">—</span></div>
      <div class="result-row"><span class="k">60 lb bags</span><span class="v" id="cc2-bags60">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="cc2-calc">Calculate concrete</button>
  <button class="btn btn-secondary" id="cc2-copy">Copy result</button>
</div>`,
  howto: [
    'Choose your units — feet/inches (US) or meters/centimeters.',
    'Enter the slab\'s length, width and thickness.',
    'Keep the 10% waste allowance checked — running short mid-pour is a real problem.',
    'See the volume in cubic yards/meters and how many ready-mix bags you\'d need.',
  ],
  faq: [
    { q: 'How is concrete volume calculated?', a: 'Volume = length × width × thickness (all converted to the same unit). US ready-mix is ordered in cubic yards: cubic feet ÷ 27 = cubic yards. E.g. a 10×10 ft slab at 4" thick = 33.3 cubic feet = 1.23 cubic yards.' },
    { q: 'How many bags of concrete per cubic yard?', a: 'An 80 lb bag yields about 0.60 cubic feet, a 60 lb bag about 0.45. One cubic yard (27 cubic feet) needs roughly 45 × 80 lb bags or 60 × 60 lb bags — for bigger jobs, ordering a ready-mix truck is usually cheaper and much less work.' },
    { q: 'How thick should a concrete slab be?', a: 'Common choices: 4 inches for patios, walkways and shed bases; 5–6 inches for driveways that carry vehicles. Local building codes may specify minimums — check before you pour.' },
    { q: 'Why add 10% for waste?', a: 'Uneven ground, spillage and slightly over-excavated areas mean the real pour almost always takes more than the math says. Running out mid-pour creates a weak joint — over-ordering slightly is the standard practice.' },
  ],
};
