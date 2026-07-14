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
      <label for="bn2-letter">Starting letter (optional)</label>
      <select id="bn2-letter">
        <option value="">Any</option>
      </select>
    </div>
    <div class="field">
      <label for="bn2-religion">Origin</label>
      <select id="bn2-religion">
        <option value="all" selected>All</option>
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
  <button class="btn btn-primary" id="bn2-generate">🔄 Show new names</button>
</div>`,
  howto: [
    'Choose gender, starting letter, and origin (Hindu/Muslim/Sikh/Modern).',
    'Names appear along with their meanings.',
    'Click "Show new names" to see more options.',
  ],
  faq: [
    { q: 'How many names are in the database?', a: 'Across all categories, there are 200+ curated names with meanings. New names are added regularly.' },
    { q: 'How accurate are the name meanings?', a: 'Traditional/commonly-accepted meanings are provided. Before making a final decision on any name, confirm with your family/priest/religious guide too, especially for the numerology/astrology angle.' },
    { q: 'Can I filter names by zodiac sign?', a: 'Currently gender/letter/origin filters are available. Zodiac-based naming may come in the future — for now, the letter filter covers most needs.' },
  ],
};
