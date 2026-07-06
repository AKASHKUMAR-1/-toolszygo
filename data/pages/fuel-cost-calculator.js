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
      <label for="fc-mileage">Gaadi ka Mileage (km/l)</label>
      <input type="number" id="fc-mileage" value="18" min="1" max="150" step="0.5">
    </div>
    <div class="field">
      <label for="fc-price">Fuel Price (₹/litre)</label>
      <input type="number" id="fc-price" value="105" min="1" step="0.5">
    </div>
    <div class="checks">
      <label><input type="checkbox" id="fc-round"> Round trip (aana-jaana dono)</label>
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
    'Trip ki distance km me daalo (one-way).',
    'Apni gaadi ka mileage daalo — bikes 40–60, hatchbacks 18–22, SUVs 12–16 km/l.',
    'Aaj ka petrol/diesel rate daalo.',
    'Aana-jaana dono count karna ho to "Round trip" tick karo — total fuel aur kharcha dikh jayega.',
  ],
  faq: [
    { q: 'Fuel cost kaise calculate hota hai?', a: 'Fuel needed = distance ÷ mileage. Cost = fuel × price per litre. E.g. 100 km ÷ 18 km/l = 5.56 litre × ₹105 = ₹583.' },
    { q: 'Apni gaadi ka real mileage kaise pata karein?', a: 'Tank full karao, trip meter zero karo. Agli baar full karane pe: chale hue km ÷ dale gaye litre = real mileage. Ye company ke claimed mileage se 10–20% kam hota hai.' },
    { q: 'Highway aur city mileage me kitna difference hota hai?', a: 'Highway pe 20–30% better mileage milta hai — steady speed, kam braking. City me traffic/AC se mileage girta hai. Trip ke hisaab se realistic value daalo.' },
    { q: 'Kya ye EV ke liye kaam karega?', a: 'Concept same hai — mileage ki jagah km/kWh aur price me ₹/kWh (per unit) daalo. E.g. 6 km/kWh aur ₹8/unit.' },
  ],
};
