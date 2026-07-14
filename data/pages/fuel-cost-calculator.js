module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Trip Details</div>
    <div class="field">
      <label for="fc-distance">Distance (km)</label>
      <input type="number" id="fc-distance" value="100" min="1" step="5">
    </div>
    <div class="field">
      <label for="fc-mileage">Vehicle Mileage (km/l)</label>
      <input type="number" id="fc-mileage" value="18" min="1" max="150" step="0.5">
    </div>
    <div class="field">
      <label for="fc-price">Fuel Price (₹/litre)</label>
      <input type="number" id="fc-price" value="105" min="1" step="0.5">
    </div>
    <div class="checks">
      <label><input type="checkbox" id="fc-round"> Round trip (both ways)</label>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="fc-cost">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Total fuel cost</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Fuel needed</span><span class="v" id="fc-litres">—</span></div>
      <div class="result-row"><span class="k">Cost per km</span><span class="v" id="fc-perkm">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="fc-calc">Calculate fuel cost</button>
  <button class="btn btn-secondary" id="fc-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the trip distance in km (one-way).',
    'Enter your vehicle\'s mileage — bikes 40–60, hatchbacks 18–22, SUVs 12–16 km/l.',
    'Enter today\'s petrol/diesel rate.',
    'Tick "Round trip" to count both ways — total fuel and cost will be shown.',
  ],
  faq: [
    { q: 'How is fuel cost calculated?', a: 'Fuel needed = distance ÷ mileage. Cost = fuel × price per litre. E.g. 100 km ÷ 18 km/l = 5.56 litres × ₹105 = ₹583.' },
    { q: 'How do I find my vehicle\'s real mileage?', a: 'Fill the tank, reset the trip meter to zero. Next time you fill up: km driven ÷ litres filled = real mileage. This is usually 10–20% lower than the manufacturer\'s claimed mileage.' },
    { q: 'How much difference is there between highway and city mileage?', a: 'Highway driving gives 20–30% better mileage — steady speed, less braking. City traffic/AC use lowers mileage. Enter a realistic value based on your trip.' },
    { q: 'Will this work for an EV?', a: 'Same concept — enter km/kWh instead of mileage, and ₹/kWh (per unit) for price. E.g. 6 km/kWh and ₹8/unit.' },
  ],
};
