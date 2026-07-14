module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Cities</div>
    <div class="field">
      <label for="dist-from">From</label>
      <select id="dist-from"></select>
    </div>
    <div class="field">
      <label for="dist-to">To</label>
      <select id="dist-to"></select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="dist-road">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Approx. road distance</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Aerial (straight-line) distance</span><span class="v" id="dist-air">—</span></div>
      <div class="result-row"><span class="k">Approx. driving time (60 km/h)</span><span class="v" id="dist-time">—</span></div>
      <div class="result-row"><span class="k">Approx. fuel cost (15 km/l, ₹105/l)</span><span class="v" id="dist-fuel">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="dist-swap">⇄ Swap cities</button>
</div>`,
  howto: [
    'Choose the From and To cities — 60+ major Indian cities are available.',
    'Get aerial distance, approximate road distance, driving time, and fuel cost instantly.',
  ],
  faq: [
    { q: 'How is road distance estimated?', a: 'The aerial (straight-line) distance is calculated from coordinates (Haversine formula), then ~25% is added to estimate road distance — since roads aren\'t straight. See Google Maps for the exact route.' },
    { q: 'What is aerial distance?', a: 'The straight-line distance between two places — "as the crow flies". Flight times are based on this.' },
    { q: 'My city isn\'t in the list?', a: 'Currently 60+ major cities are available. Let us know via the contact page if you need more added.' },
    { q: 'How is fuel cost estimated?', a: 'Road distance ÷ 15 km/l average mileage × ₹105/litre. Use our Fuel Cost Calculator for your vehicle\'s exact numbers.' },
  ],
};
