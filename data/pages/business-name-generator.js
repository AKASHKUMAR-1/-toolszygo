module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="bn-keyword">Keyword (kya business hai?)</label>
      <input type="text" id="bn-keyword" placeholder="e.g. tea, tech, fashion, foods">
    </div>
    <div class="field">
      <label for="bn-style">Style</label>
      <select id="bn-style">
        <option value="all" selected>Sab styles mix</option>
        <option value="modern">Modern / Startup</option>
        <option value="indian">Indian touch</option>
        <option value="classic">Classic / Professional</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Name Ideas</div>
    <div id="bn-results" style="display:flex;flex-direction:column;gap:6px;font-size:14.5px;font-weight:600;color:#8A4B2A;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="bn-generate">Generate names</button>
  <button class="btn btn-secondary" id="bn-copy">Copy all</button>
</div>`,
  howto: [
    'Apne business ka keyword daalo (jaise tea, tech, foods).',
    'Style choose karo — modern, Indian ya classic.',
    '<strong>Generate</strong> dabao — 20 naam ideas. Pasand aaye to trademark/GST me availability check karo.',
  ],
  faq: [
    { q: 'Naam final karne se pehle kya check karoon?', a: 'MCA (mca.gov.in) pe company naam, ipindia.gov.in pe trademark, aur domain availability. Instagram/social handles bhi dekh lo.' },
    { q: 'Achha business naam kaisa hota hai?', a: 'Bolne-yaad rakhne me aasan, business ka hint deta hua, aur unique. Bahut generic (Delhi Traders) se alag dikhna mushkil hota hai.' },
    { q: 'Naam register karana zaroori hai?', a: 'Proprietorship me GST/Udyam registration me trade name aa jaata hai. Brand protect karna ho to trademark (₹4,500–9,000) file karo.' },
  ],
};
