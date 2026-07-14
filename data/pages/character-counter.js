module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="cc-text" placeholder="Paste or type your text here…" style="min-height:180px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="stat-grid">
      <div class="stat"><div class="num" id="cc-chars">0</div><div class="lbl">Characters</div></div>
      <div class="stat"><div class="num" id="cc-chars-ns">0</div><div class="lbl">Without spaces</div></div>
      <div class="stat"><div class="num" id="cc-words">0</div><div class="lbl">Words</div></div>
      <div class="stat"><div class="num" id="cc-lines">0</div><div class="lbl">Lines</div></div>
    </div>
    <div class="result-rows" style="margin-top:6px;">
      <div class="result-row"><span class="k">Twitter / X post (280)</span><span class="v" id="cc-twitter">—</span></div>
      <div class="result-row"><span class="k">Instagram caption (2,200)</span><span class="v" id="cc-insta">—</span></div>
      <div class="result-row"><span class="k">SMS (160)</span><span class="v" id="cc-sms">—</span></div>
      <div class="result-row"><span class="k">Meta description (160)</span><span class="v" id="cc-meta">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="cc-clear">Clear text</button>
</div>`,
  howto: [
    'Paste or type your text in the box above.',
    'Characters (with and without spaces), words, and lines are counted live.',
    'Below, see the status for Twitter/X, Instagram, SMS, and meta description limits — how many characters are left.',
  ],
  faq: [
    { q: 'Are spaces counted as characters too?', a: 'Yes — "Characters" includes spaces. The count without spaces is shown separately. Most platforms (Twitter, SMS) count spaces.' },
    { q: 'What is Twitter/X\'s character limit?', a: '280 characters per post for regular accounts. Links always count as 23 characters, no matter how long they actually are.' },
    { q: 'What happens if an SMS is longer than 160 characters?', a: 'The message splits into multiple SMS segments (153 chars each) and each segment is charged. Using emoji/non-Latin text drops the limit to 70 characters (due to Unicode encoding).' },
    { q: 'How long should a Google meta description be?', a: '~150–160 characters is ideal — beyond that, Google truncates it with "…" in search results.' },
  ],
};
