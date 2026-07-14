module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="dl-input" placeholder="Paste your list here — one item per line…" style="min-height:200px;"></textarea>
    </div>
    <div class="checks">
      <label><input type="checkbox" id="dl-case"> Case-insensitive matching (Apple = apple)</label>
      <label><input type="checkbox" id="dl-trim" checked> Ignore leading/trailing spaces</label>
      <label><input type="checkbox" id="dl-empty" checked> Remove empty lines too</label>
      <label><input type="checkbox" id="dl-sort"> Sort result A–Z</label>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div id="dl-summary" style="font-size:13px;font-weight:600;color:#8A4B2A;"></div>
    <textarea id="dl-output" readonly placeholder="unique lines will appear here…" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.5;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="dl-run">Remove duplicates</button>
  <button class="btn btn-secondary" id="dl-copy">Copy result</button>
</div>`,
  howto: [
    'Paste your list — one item per line (names, emails, URLs, anything).',
    'Choose options — case-insensitive matching, space trimming, sorting.',
    'Click <strong>Remove duplicates</strong> — only unique lines remain, and it shows how many duplicates were removed.',
  ],
  faq: [
    { q: 'Is the original order of lines preserved?', a: 'Yes — the first occurrence of each line stays in place, only later copies are removed. Turn on "sort" if you want A–Z order.' },
    { q: 'When should I use case-insensitive matching?', a: 'When "Apple", "apple", and "APPLE" should be treated as the same — like in email lists. The result keeps the original case of the first occurrence.' },
    { q: 'How large a list can this handle?', a: 'Hundreds of thousands of lines with ease — processing is instant in the browser.' },
    { q: 'Does this work for lists of emails/URLs?', a: 'Yes — it compares each line as-is. For email lists, keep both case-insensitive and trim on for the best results.' },
  ],
};
