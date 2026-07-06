module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Names List</div>
    <div class="field">
      <textarea id="rnp-names" placeholder="Har line pe ek naam…&#10;Amit&#10;Priya&#10;Rahul&#10;Sneha" style="min-height:200px;"></textarea>
    </div>
    <div class="field" style="max-width:200px;">
      <label for="rnp-count">Kitne winners?</label>
      <input type="number" id="rnp-count" value="1" min="1" max="100" step="1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;justify-content:center;align-items:center;">
    <div class="panel-label" style="align-self:flex-start;">Winner</div>
    <div class="result-big" id="rnp-result" style="text-align:center;font-size:30px;">🎲</div>
    <div id="rnp-info" style="font-size:12.5px;color:#B98E63;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="rnp-pick">🎉 Pick winner</button>
  <button class="btn btn-secondary" id="rnp-copy">Copy result</button>
</div>`,
  howto: [
    'Names ki list paste karo — har line pe ek naam.',
    'Kitne winners chahiye wo set karo.',
    '<strong>🎉 Pick winner</strong> dabao — fair random selection ho jayegi.',
  ],
  faq: [
    { q: 'Kya selection sach me random hai?', a: 'Haan — cryptographically secure random generator (crypto.getRandomValues) use hota hai, wahi jo passwords banane me lagta hai. Kisi ka favouritism nahi! Giveaways ke liye fair hai.' },
    { q: 'Duplicate names ho to kya hoga?', a: 'Jo naam list me jitni baar hai, uske jeetne ka chance utna zyada — jaise raffle me zyada tickets. Equal chance chahiye to pehle Duplicate Line Remover se list clean kar lo.' },
    { q: 'Multiple winners me koi repeat to nahi hoga?', a: 'Nahi — ek hi draw me har winner alag line se aata hai (bina replacement ke), jaise parchi nikaalne me.' },
    { q: 'Giveaway proof ke liye kya karoon?', a: 'Result aane ke baad screen record ya screenshot le lo. Transparency ke liye live session me bhi kar sakte ho.' },
  ],
};
