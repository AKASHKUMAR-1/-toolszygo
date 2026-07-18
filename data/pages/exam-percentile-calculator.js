module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Convert</div>
    <div class="field">
      <label for="ep-mode">I know my...</label>
      <select id="ep-mode">
        <option value="rank" selected>Rank (in my shift/session)</option>
        <option value="percentile">Percentile score</option>
      </select>
    </div>
    <div class="field" id="ep-rank-field">
      <label for="ep-rank">Your Rank (in your shift)</label>
      <input type="number" id="ep-rank" value="500" min="1" step="1">
    </div>
    <div class="field" id="ep-percentile-field" style="display:none;">
      <label for="ep-percentile">Your Percentile</label>
      <input type="number" id="ep-percentile" value="95" min="0" max="100" step="0.001">
    </div>
    <div class="field">
      <label for="ep-total">Total Candidates in Your Shift/Session</label>
      <input type="number" id="ep-total" value="100000" min="1" step="100">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="ep-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;" id="ep-result-label">Estimated percentile</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Candidates scoring equal or lower than you</span><span class="v" id="ep-below">—</span></div>
      <div class="result-row"><span class="k">Approx. top %</span><span class="v" id="ep-top-pct">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ep-calc">Calculate</button>
  <button class="btn btn-secondary" id="ep-copy">Copy result</button>
</div>
<div style="font-size:12px;color:#A3937E;margin-top:10px;">Uses the official NTA percentile formula. This is a rank ⇄ percentile converter for your own shift — it does not predict cross-shift raw-score normalization, which depends on that session's actual score distribution (not published in advance).</div>`,
  howto: [
    'Choose whether you know your rank (within your shift) or your percentile score.',
    'Enter the total number of candidates who appeared in your shift/session.',
    'Enter your rank or percentile — the other value is calculated instantly using the official NTA formula.',
  ],
  faq: [
    { q: 'What is the official percentile formula?', a: 'NTA Percentile = 100 × (Number of candidates in your session with a score equal to or less than yours) ÷ (Total candidates in your session). This is the same formula published by NTA for JEE Main, and used with the same logic by many other multi-shift exams.' },
    { q: 'Why is percentile used instead of raw marks across shifts?', a: 'Different shifts can have slightly different question difficulty. Percentile compares you only to candidates in your own shift, so a harder shift doesn\'t unfairly lower your relative standing — that\'s the entire purpose of normalization.' },
    { q: 'Does this predict my actual exam percentile in advance?', a: 'No — that requires the real score distribution of your shift, which NTA doesn\'t publish until results are declared. This tool converts between rank and percentile for your own shift after you know one of them (e.g. from a mock test\'s reported rank, or once your official percentile is out and you want your approximate rank).' },
    { q: 'Is a percentile of 99 the same as being in the top 1%?', a: 'Yes, approximately — a 99 percentile means about 99% of candidates scored equal to or below you, i.e. you\'re roughly in the top 1%. This tool shows that "approx. top %" figure directly.' },
  ],
};
