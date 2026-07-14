module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Names List</div>
    <div class="field">
      <textarea id="rnp-names" placeholder="One name per line…&#10;Amit&#10;Priya&#10;Rahul&#10;Sneha" style="min-height:200px;"></textarea>
    </div>
    <div class="field" style="max-width:200px;">
      <label for="rnp-count">How many winners?</label>
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
    'Paste the list of names — one name per line.',
    'Set how many winners you need.',
    'Click <strong>🎉 Pick winner</strong> — a fair random selection is made.',
  ],
  faq: [
    { q: 'Is the selection really random?', a: 'Yes — it uses a cryptographically secure random generator (crypto.getRandomValues), the same one used to generate passwords. No favoritism! Fair for giveaways.' },
    { q: 'What happens with duplicate names?', a: 'A name appearing multiple times in the list has a proportionally higher chance of winning — like more raffle tickets. Clean the list first with the Duplicate Line Remover if you need equal chances.' },
    { q: 'Will multiple winners ever repeat?', a: 'No — each winner in a single draw comes from a different line (without replacement), like drawing lots.' },
    { q: 'How do I get proof for a giveaway?', a: 'Take a screen recording or screenshot after the result appears. You can also do it during a live session for transparency.' },
  ],
};
