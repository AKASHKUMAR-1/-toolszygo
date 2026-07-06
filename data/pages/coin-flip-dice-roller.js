module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;justify-content:center;align-items:center;">
    <div class="panel-label" style="align-self:flex-start;">Coin Flip</div>
    <div id="coin-result" style="font-size:64px;line-height:1;">🪙</div>
    <div id="coin-text" style="font-family:var(--serif);font-size:22px;font-weight:600;color:#8A4B2A;"></div>
    <button class="btn btn-primary" id="coin-flip" style="margin-top:8px;">Flip coin</button>
  </div>
  <div class="panel panel-result" style="min-height:0;justify-content:center;align-items:center;">
    <div class="panel-label" style="align-self:flex-start;">Dice Roller</div>
    <div id="dice-result" style="font-size:52px;line-height:1.2;letter-spacing:6px;">🎲</div>
    <div id="dice-total" style="font-size:14px;font-weight:600;color:#B98E63;"></div>
    <div class="field-row" style="align-items:center;margin-top:8px;">
      <select id="dice-count" style="font-family:var(--sans);font-size:13px;padding:8px 10px;border:1px solid #F0E0CC;border-radius:8px;background:#FFF;">
        <option value="1" selected>1 dice</option>
        <option value="2">2 dice</option>
        <option value="3">3 dice</option>
        <option value="4">4 dice</option>
        <option value="5">5 dice</option>
        <option value="6">6 dice</option>
      </select>
      <button class="btn btn-primary" id="dice-roll">Roll dice</button>
    </div>
  </div>
</div>
<div class="panel" style="margin-top:16px;min-height:0;">
  <div class="panel-label">History</div>
  <div id="cfd-history" style="font-size:13px;color:#6E6552;line-height:1.8;">—</div>
</div>`,
  howto: [
    '<strong>Flip coin</strong> dabao — Heads ya Tails turant.',
    'Dice ke liye kitne dice chahiye choose karo aur <strong>Roll dice</strong> dabao.',
    'History neeche dikhti rehti hai — kaun jeeta ka record!',
  ],
  faq: [
    { q: 'Kya coin/dice fair hai?', a: 'Haan — crypto-secure random generator use hota hai, exactly 50-50 (coin) aur 1/6 (dice) probability. Asli coin se bhi zyada fair, kyunki physical coins me thoda bias hota hai!' },
    { q: 'Ludo/board game ke liye use kar sakte hain?', a: 'Bilkul — dice kho gaya ho to phone pe ye kholo. 6 dice tak ek saath roll kar sakte ho, total bhi dikhta hai.' },
    { q: 'Toss ke liye best 2 out of 3 kaise karein?', a: 'History feature use karo — 3 flips karo, jo 2 baar aaya wo winner. History me sab record rehta hai.' },
    { q: 'Same result baar-baar aa raha hai — bias hai kya?', a: 'Nahi — randomness me streaks natural hain. 4 Heads lagatar aana bhi 1/16 chance hai, hota rehta hai. Lambi run me 50-50 hi average niklega.' },
  ],
};
