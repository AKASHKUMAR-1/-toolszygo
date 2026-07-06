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
      <div class="result-row"><span class="k">Aerial (seedhi) distance</span><span class="v" id="dist-air">—</span></div>
      <div class="result-row"><span class="k">Approx. driving time (60 km/h)</span><span class="v" id="dist-time">—</span></div>
      <div class="result-row"><span class="k">Approx. fuel cost (15 km/l, ₹105/l)</span><span class="v" id="dist-fuel">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="dist-swap">⇄ Swap cities</button>
</div>`,
  howto: [
    'From aur To me cities choose karo — 60+ major Indian cities available hain.',
    'Aerial distance, approximate road distance, driving time aur fuel cost turant dikh jayega.',
  ],
  faq: [
    { q: 'Road distance kaise estimate hoti hai?', a: 'Aerial (straight line) distance calculate hoti hai coordinates se (Haversine formula), phir usme ~25% jodkar road distance ka estimate banta hai — kyunki sadkein seedhi nahi hoti. Exact route ke liye Google Maps dekho.' },
    { q: 'Aerial distance kya hoti hai?', a: 'Do jagahon ke beech ki seedhi (hawai jahaz wali) doori — "as the crow flies". Flights isi ke hisaab se time lete hain.' },
    { q: 'Meri city list me nahi hai?', a: 'Abhi 60+ major cities hain. Aur cities chahiye to contact page se bata do — add kar denge.' },
    { q: 'Fuel cost kaise estimate hota hai?', a: 'Road distance ÷ 15 km/l average mileage × ₹105/litre. Apni gaadi ke exact numbers ke liye hamara Fuel Cost Calculator use karo.' },
  ],
};
