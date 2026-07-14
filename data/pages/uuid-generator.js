module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Options</div>
    <div class="field">
      <label for="uuid-count">How many UUIDs?</label>
      <select id="uuid-count">
        <option value="1" selected>1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
    <div class="checks">
      <label><input type="checkbox" id="uuid-upper"> Uppercase</label>
      <label><input type="checkbox" id="uuid-nodash"> Without dashes (32 chars)</label>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <textarea id="uuid-result" readonly style="flex:1;min-height:160px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:13px;color:#8A4B2A;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="uuid-generate">Generate UUID</button>
  <button class="btn btn-secondary" id="uuid-copy">Copy all</button>
</div>`,
  howto: [
    'Select how many UUIDs you need (1 to 100).',
    'Optionally choose uppercase or without-dashes format.',
    'Click <strong>Generate UUID</strong> — UUIDs are created instantly.',
    'Use "Copy all" to copy all UUIDs to the clipboard.',
  ],
  faq: [
    { q: 'What is UUID v4?', a: 'UUID v4 is a 128-bit random identifier — format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx. It\'s built from random bits, so the probability of a collision is practically zero.' },
    { q: 'Can two UUIDs be the same?', a: 'Theoretically possible, practically no — there are 5.3 undecillion (10^36) combinations. To get a duplicate, you\'d have to generate billions of UUIDs per second for years.' },
    { q: 'What\'s the difference between UUID and GUID?', a: 'Nothing — GUID (Globally Unique Identifier) is Microsoft\'s name for the same thing. They\'re interchangeable.' },
    { q: 'Are these UUIDs securely random?', a: 'Yes — the browser\'s crypto.randomUUID() / crypto.getRandomValues() is used, which is cryptographically secure. Not a weak generator like Math.random().' },
  ],
};
