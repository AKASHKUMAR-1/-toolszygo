module.exports = {
  workspace: `
<div class="panel" style="min-height:0;">
  <div class="panel-label">Teams / Players (one per line)</div>
  <textarea id="bg-names" rows="8" placeholder="Team A
Team B
Team C
Team D
Team E
Team F
Team G
Team H" style="width:100%;resize:vertical;"></textarea>
  <div class="checks" style="margin-top:8px;">
    <label><input type="checkbox" id="bg-shuffle" checked> Shuffle seeding randomly</label>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="bg-generate">Generate bracket</button>
  <button class="btn btn-secondary" id="bg-print">Print / Save as PDF</button>
</div>
<div id="bg-bracket" style="margin-top:16px;overflow-x:auto;"></div>`,
  howto: [
    'Type or paste your team/player names — one per line (2 to 64 entries).',
    'Keep "Shuffle seeding" checked for a random draw, or uncheck it to use your order as seeding.',
    'Click <strong>Generate bracket</strong> — a full single-elimination bracket appears.',
    'Use <strong>Print / Save as PDF</strong> to get a clean printable copy for your event.',
  ],
  faq: [
    { q: 'What happens if my team count is not a power of 2?', a: 'The bracket needs 2, 4, 8, 16, 32 or 64 slots. With any other count, the extra slots become BYEs — those teams skip round 1 automatically, which is exactly how real tournaments handle it.' },
    { q: 'How many teams can I add?', a: 'From 2 up to 64. That covers everything from a 1v1 final to a full 64-player tournament (6 rounds).' },
    { q: 'Can I fill in the winners?', a: 'This tool generates the empty bracket with round-1 matchups. Print it (or save as PDF) and fill in winners as your tournament progresses — the classic way that works on a clubroom wall.' },
    { q: 'Is the shuffle fair?', a: 'Yes — it uses a Fisher-Yates shuffle, the standard unbiased shuffling algorithm, so every seeding arrangement is equally likely.' },
  ],
};
