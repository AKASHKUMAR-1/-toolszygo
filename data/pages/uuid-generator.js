module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Options</div>
    <div class="field">
      <label for="uuid-count">Kitne UUIDs chahiye?</label>
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
      <label><input type="checkbox" id="uuid-upper"> Uppercase me chahiye</label>
      <label><input type="checkbox" id="uuid-nodash"> Bina dashes ke (32 chars)</label>
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
    'Kitne UUIDs chahiye wo select karo (1 se 100 tak).',
    'Chahiye to uppercase ya without-dashes format choose karo.',
    '<strong>Generate UUID</strong> dabao — UUIDs turant ban jayenge.',
    '"Copy all" se saare UUIDs clipboard me copy karo.',
  ],
  faq: [
    { q: 'UUID v4 kya hota hai?', a: 'UUID v4 ek 128-bit random identifier hai — format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx. Ye random bits se banta hai, isliye collision ki probability practically zero hai.' },
    { q: 'Kya do UUIDs same aa sakte hain?', a: 'Theoretically possible, practically nahi — 5.3 undecillion (10^36) combinations hain. Aapko duplicate milne ke liye billions of UUIDs per second generate karne padenge, saalon tak.' },
    { q: 'UUID aur GUID me kya difference hai?', a: 'Kuch nahi — GUID (Globally Unique Identifier) Microsoft ka naam hai same cheez ke liye. Dono interchangeable hain.' },
    { q: 'Kya ye UUIDs secure random hote hain?', a: 'Haan — browser ka crypto.randomUUID() / crypto.getRandomValues() use hota hai jo cryptographically secure hai. Math.random() jaisa weak generator nahi.' },
  ],
};
