module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="bn-keyword">Keyword (what's your business?)</label>
      <input type="text" id="bn-keyword" placeholder="e.g. tea, tech, fashion, foods">
    </div>
    <div class="field">
      <label for="bn-style">Style</label>
      <select id="bn-style">
        <option value="all" selected>Mix of all styles</option>
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
    'Enter a keyword for your business (like tea, tech, foods).',
    'Choose a style — modern, Indian, or classic.',
    'Click <strong>Generate</strong> — get 20 name ideas. If you like one, check trademark/GST availability.',
  ],
  faq: [
    { q: 'What should I check before finalizing a name?', a: 'Company name on MCA (mca.gov.in), trademark on ipindia.gov.in, and domain availability. Also check Instagram/social handles.' },
    { q: 'What makes a good business name?', a: 'Easy to say and remember, hints at the business, and unique. Very generic names (like "Delhi Traders") are hard to stand out with.' },
    { q: 'Is it necessary to register the name?', a: 'For a proprietorship, the trade name is captured in GST/Udyam registration. To protect the brand, file a trademark (₹4,500–9,000).' },
  ],
};
