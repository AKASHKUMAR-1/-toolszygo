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
    'Click <strong>Flip coin</strong> — get Heads or Tails instantly.',
    'For dice, choose how many dice you need and click <strong>Roll dice</strong>.',
    'History keeps showing below — a record of who won!',
  ],
  faq: [
    { q: 'Is the coin/dice fair?', a: 'Yes — it uses a crypto-secure random generator, giving exactly 50-50 (coin) and 1/6 (dice) probability. Even fairer than a real coin, since physical coins have a slight bias!' },
    { q: 'Can I use this for Ludo/board games?', a: 'Absolutely — open this on your phone if you\'ve lost your dice. Roll up to 6 dice at once, with the total shown too.' },
    { q: 'How do I do a best-2-out-of-3 toss?', a: 'Use the history feature — flip 3 times, whichever side comes up twice wins. Everything is recorded in the history.' },
    { q: 'The same result keeps coming up — is it biased?', a: 'No — streaks are natural in randomness. Even 4 Heads in a row has a 1/16 chance and happens sometimes. Over a long run, it averages out to 50-50.' },
  ],
};
