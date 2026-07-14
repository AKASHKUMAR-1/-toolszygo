module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Names</div>
    <div class="field">
      <label for="love-name1">First name</label>
      <input type="text" id="love-name1" placeholder="e.g. Rahul">
    </div>
    <div class="field">
      <label for="love-name2">Second name</label>
      <input type="text" id="love-name2" placeholder="e.g. Priya">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;justify-content:center;align-items:center;">
    <div class="panel-label" style="align-self:flex-start;">Result</div>
    <div class="result-big" id="love-percent" style="font-size:44px;">💘</div>
    <div id="love-message" style="font-size:14px;font-weight:600;color:#A85585;text-align:center;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="love-calc">💘 Calculate love</button>
</div>
<div style="font-size:12px;color:#A39C8B;margin-top:12px;">Note: This is just for entertainment — real relationships are built on effort, understanding, and trust! 😄</div>`,
  howto: [
    'Enter both names.',
    'Click <strong>💘 Calculate love</strong> — get a compatibility percentage and message.',
    'Try it with friends for fun!',
  ],
  faq: [
    { q: 'Does this really show love compatibility?', a: 'No! 😄 This is purely for entertainment — a fun number is generated from the letters in the names. Real compatibility comes from values, communication, and respect, not calculators.' },
    { q: 'Why does the same pair of names always give the same result?', a: 'The result is generated mathematically from the names (not random) — so if a friend enters the same names to cross-check, they get the same answer. Otherwise you\'d get caught! 😉' },
    { q: 'Does the order of names matter?', a: 'No — "Rahul + Priya" and "Priya + Rahul" give the same result, as they should.' },
    { q: 'Does it ever show 100%?', a: 'Very rare — just like in real life! But some lucky pairs get it. Keep trying. 💕' },
  ],
};
