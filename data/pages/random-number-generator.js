module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Options</div>
    <div class="field-row">
      <div class="field">
        <label for="rn-min">Minimum</label>
        <input type="number" id="rn-min" value="1" step="1">
      </div>
      <div class="field">
        <label for="rn-max">Maximum</label>
        <input type="number" id="rn-max" value="100" step="1">
      </div>
    </div>
    <div class="field">
      <label for="rn-count">How many numbers?</label>
      <input type="number" id="rn-count" value="1" min="1" max="1000" step="1">
    </div>
    <div class="checks">
      <label><input type="checkbox" id="rn-unique"> All different (no repeat)</label>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="rn-result" style="word-break:break-word;font-size:28px;line-height:1.4;">—</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="rn-generate">Generate</button>
  <button class="btn btn-secondary" id="rn-copy">Copy result</button>
</div>`,
  howto: [
    'Set the range — minimum and maximum (both included).',
    'Enter how many numbers you need — 1 for a lucky draw, more for a lottery-style list.',
    'Tick "no repeat" if you don\'t want repeats.',
    'Click <strong>Generate</strong> — the numbers appear instantly.',
  ],
  faq: [
    { q: 'Are the numbers truly random?', a: 'It uses the browser\'s cryptographically secure generator (crypto.getRandomValues) — far better than Math.random(). Fair for lucky draws and giveaways.' },
    { q: 'Are min and max included?', a: 'Yes — both boundaries are included. Setting 1 to 100 can produce both 1 and 100.' },
    { q: 'How many numbers can "no repeat" generate?', a: 'Up to the size of the range — a range of 1 to 100 gives a maximum of 100 unique numbers. The tool will tell you if you ask for more.' },
    { q: 'How do I pick a lucky draw winner?', a: 'Assign participants numbers 1 to N (in list order). Set Min 1, Max N and generate one number — that\'s the winner. Take a screenshot as proof.' },
  ],
};
