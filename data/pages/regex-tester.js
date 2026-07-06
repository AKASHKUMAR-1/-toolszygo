module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Pattern</div>
    <div class="field-row">
      <div class="field" style="flex:3;">
        <label for="rx-pattern">Regular Expression</label>
        <input type="text" id="rx-pattern" placeholder="e.g. \\d{10}" spellcheck="false" style="font-family:monospace;">
      </div>
      <div class="field" style="flex:1;">
        <label>Flags</label>
        <div class="checks" style="flex-direction:row;gap:12px;padding-top:8px;">
          <label><input type="checkbox" id="rx-g" checked> g</label>
          <label><input type="checkbox" id="rx-i"> i</label>
          <label><input type="checkbox" id="rx-m"> m</label>
        </div>
      </div>
    </div>
    <div class="field">
      <label for="rx-text">Test Text</label>
      <textarea id="rx-text" placeholder="Jis text pe pattern test karna hai wo yahan paste karo…" spellcheck="false" style="min-height:140px;font-family:monospace;font-size:13px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div id="rx-status" style="font-size:13px;font-weight:600;"></div>
    <div id="rx-highlight" style="font-family:monospace;font-size:13px;line-height:1.7;white-space:pre-wrap;word-break:break-word;"></div>
    <div id="rx-matches" style="font-family:monospace;font-size:12.5px;color:#6E6552;"></div>
  </div>
</div>`,
  howto: [
    'Regex pattern likho (bina slashes ke) — e.g. <code>\\d{10}</code> mobile numbers ke liye.',
    'Flags choose karo — g (sab matches), i (case-insensitive), m (multiline).',
    'Test text paste karo — matches live highlight ho jayenge, groups ke saath.',
  ],
  faq: [
    { q: 'Kaunsa regex flavor use hota hai?', a: 'JavaScript (ECMAScript) regex — jo browsers aur Node.js me chalta hai. Python/PCRE se thoda alag hai (e.g. lookbehind support browser pe depend karta hai).' },
    { q: 'Common patterns kya hain?', a: 'Email: [\\w.+-]+@[\\w-]+\\.[\\w.]+ | 10-digit mobile: [6-9]\\d{9} | PIN code: \\d{6} | PAN: [A-Z]{5}\\d{4}[A-Z] | Date: \\d{2}/\\d{2}/\\d{4}' },
    { q: 'g flag kya karta hai?', a: 'Global — text me SAARE matches dhoondta hai. Bina g ke sirf pehla match milta hai. Zyada tar cases me g on rakho.' },
    { q: 'Capture groups kaise dekhte hain?', a: 'Pattern me () lagao — e.g. (\\d{2})/(\\d{2}) me do groups hain. Har match ke neeche groups ki values dikhti hain.' },
  ],
};
