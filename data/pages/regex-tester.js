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
      <textarea id="rx-text" placeholder="Paste the text you want to test the pattern against…" spellcheck="false" style="min-height:140px;font-family:monospace;font-size:13px;"></textarea>
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
    'Write the regex pattern (without slashes) — e.g. <code>\\d{10}</code> for phone numbers.',
    'Choose flags — g (all matches), i (case-insensitive), m (multiline).',
    'Paste test text — matches highlight live, along with groups.',
  ],
  faq: [
    { q: 'Which regex flavor is used?', a: 'JavaScript (ECMAScript) regex — the one that runs in browsers and Node.js. Slightly different from Python/PCRE (e.g. lookbehind support depends on the browser).' },
    { q: 'What are some common patterns?', a: 'Email: [\\w.+-]+@[\\w-]+\\.[\\w.]+ | 10-digit phone: [6-9]\\d{9} | ZIP/PIN code: \\d{6} | Date: \\d{2}/\\d{2}/\\d{4}' },
    { q: 'What does the g flag do?', a: 'Global — finds ALL matches in the text. Without g, only the first match is found. Keep g on for most cases.' },
    { q: 'How do I see capture groups?', a: 'Add () in the pattern — e.g. (\\d{2})/(\\d{2}) has two groups. Group values are shown below each match.' },
  ],
};
