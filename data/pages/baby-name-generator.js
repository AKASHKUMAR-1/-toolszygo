module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Filters</div>
    <div class="field">
      <label for="bn2-gender">Gender</label>
      <select id="bn2-gender">
        <option value="boy" selected>Boy</option>
        <option value="girl">Girl</option>
      </select>
    </div>
    <div class="field">
      <label for="bn2-letter">Shuruaati letter (optional)</label>
      <select id="bn2-letter">
        <option value="">Koi bhi</option>
      </select>
    </div>
    <div class="field">
      <label for="bn2-religion">Origin</label>
      <select id="bn2-religion">
        <option value="all" selected>Sab</option>
        <option value="hindu">Hindu / Sanskrit</option>
        <option value="muslim">Muslim / Arabic</option>
        <option value="sikh">Sikh / Punjabi</option>
        <option value="modern">Modern / Unisex-style</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Names</div>
    <div id="bn2-results" style="display:flex;flex-direction:column;gap:8px;overflow:auto;max-height:340px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="bn2-generate">🔄 Naye naam dikhao</button>
</div>`,
  howto: [
    'Gender, shuruaati letter aur origin (Hindu/Muslim/Sikh/Modern) choose karo.',
    'Names apne matlab (meaning) ke saath dikh jayenge.',
    '"Naye naam dikhao" se aur options dekho.',
  ],
  faq: [
    { q: 'Kitne names hain database me?', a: 'Sab categories milakar 200+ curated names hain, meaning ke saath. Regular naye names add hote rahenge.' },
    { q: 'Naam ka matlab kitna accurate hai?', a: 'Traditional/commonly-accepted meanings diye gaye hain. Kisi bhi naam ka final decision lene se pehle apne family/pandit/religious guide se bhi confirm kar lo, khaas kar numerology/astrology angle ke liye.' },
    { q: 'Kya rashi ke hisaab se naam filter kar sakte hain?', a: 'Abhi gender/letter/origin filter available hain. Rashi-based naming aana chahiye future me — filhaal letter filter se kaafi had tak kaam chal jaata hai.' },
  ],
};
