module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="num-name">Your full name</label>
      <input type="text" id="num-name" placeholder="e.g. Akash Kumar">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="num-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Name number (Pythagorean)</div>
    <div id="num-meaning" style="font-size:13.5px;color:#6E6552;line-height:1.6;margin-top:8px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="num-calc">Calculate number</button>
</div>
<div style="font-size:12px;color:#A39C8B;margin-top:12px;">Note: Numerology is a belief system, not science — enjoy it for entertainment/curiosity.</div>`,
  howto: [
    'Enter your full name (in English letters).',
    'Click <strong>Calculate</strong> — see your name number and its traits, using the Pythagorean system.',
  ],
  faq: [
    { q: 'How is the name number calculated?', a: 'Pythagorean system: A=1, B=2 … I=9, then repeats from J=1. All letter numbers are summed and reduced to a single digit (except master numbers 11, 22, 33). E.g. AKASH = 1+2+1+1+8 = 13 → 1+3 = 4.' },
    { q: 'What are master numbers (11, 22, 33)?', a: 'In numerology, these numbers aren\'t reduced further — they\'re considered special: 11 (intuition), 22 (master builder), 33 (master teacher).' },
    { q: 'What\'s the difference between Chaldean and Pythagorean systems?', a: 'Two different systems — Pythagorean assigns letters 1-9 in alphabetical order (this tool uses this); Chaldean is sound-based and uses 1-8. Results can differ.' },
    { q: 'Is this scientific?', a: 'No — numerology is a traditional belief system with no scientific evidence. Enjoy it for fun and curiosity!' },
  ],
};
