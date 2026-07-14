module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="dom-keyword">Keyword (business/idea)</label>
      <input type="text" id="dom-keyword" placeholder="e.g. bakery, fitness, tools">
    </div>
    <div class="field">
      <label for="dom-ext">Preferred extension</label>
      <select id="dom-ext">
        <option value=".com" selected>.com</option>
        <option value=".in">.in</option>
        <option value=".co.in">.co.in</option>
        <option value=".io">.io</option>
        <option value=".shop">.shop</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Domain Ideas</div>
    <div id="dom-results" style="display:flex;flex-direction:column;gap:6px;font-family:monospace;font-size:14px;color:#8A4B2A;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="dom-generate">Generate ideas</button>
  <button class="btn btn-secondary" id="dom-copy">Copy all</button>
</div>
<div style="font-size:12px;color:#A39C8B;margin-top:12px;">Note: These are just ideas — search on GoDaddy/Namecheap/Hostinger to check availability.</div>`,
  howto: [
    'Enter the main keyword for your business/idea.',
    'Choose a preferred extension (.com, .in…).',
    'Click <strong>Generate</strong> — get 20 creative domain ideas. Check availability with a registrar if you like one.',
  ],
  faq: [
    { q: 'What makes a good domain name?', a: 'Short (6–14 characters), easy to say and write, no numbers/hyphens, and memorable like a brand. .com is the most trusted; .in is good for India-focused businesses too.' },
    { q: 'How do I check availability?', a: 'Copy the ideas and search on GoDaddy, Namecheap, or Hostinger — they show available/taken status and price. This tool only generates ideas.' },
    { q: 'What if .com isn\'t available?', a: 'Try a prefix/suffix (get-, -app, -hq), or look at extensions like .in/.io/.co. Just avoid anything confusingly similar to an established brand.' },
    { q: 'How much does a domain cost?', a: '.com ~₹800–1,200/year, .in ~₹500–800/year. First-year discounts are common — check the renewal price too.' },
  ],
};
