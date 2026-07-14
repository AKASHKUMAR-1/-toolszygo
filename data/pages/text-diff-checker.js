module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Original Text</div>
    <div class="field">
      <textarea id="diff-a" placeholder="First (original) text…" spellcheck="false" style="min-height:170px;font-family:monospace;font-size:13px;"></textarea>
    </div>
  </div>
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Changed Text</div>
    <div class="field">
      <textarea id="diff-b" placeholder="Second (changed) text…" spellcheck="false" style="min-height:170px;font-family:monospace;font-size:13px;"></textarea>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="diff-run">Compare texts</button>
</div>
<div class="panel panel-result" style="margin-top:16px;min-height:0;">
  <div class="panel-label">Result</div>
  <div id="diff-summary" style="font-size:13px;font-weight:600;color:#8A4B2A;"></div>
  <div id="diff-output" style="font-family:monospace;font-size:12.5px;line-height:1.6;white-space:pre-wrap;word-break:break-word;"></div>
</div>`,
  howto: [
    'Paste the original text in the first box.',
    'Paste the changed/new text in the second box.',
    'Click <strong>Compare texts</strong> — removed lines show in red, new lines in green.',
  ],
  faq: [
    { q: 'How is the diff calculated?', a: 'A line-by-line comparison using the LCS (Longest Common Subsequence) algorithm — the same approach version control tools like Git use.' },
    { q: 'Is my text uploaded anywhere?', a: 'No — the comparison happens entirely in the browser. It\'s safe to compare contracts, code, or confidential documents.' },
    { q: 'What do the colors mean?', a: 'Red-background lines were in the original but not the new version (removed). Green lines were added in the new version. Uncolored lines are the same in both.' },
    { q: 'Is there a word-level diff?', a: 'Currently it\'s a line-level diff, which is enough for most cases. If a line has a small change, that line appears in both removed and added.' },
  ],
};
