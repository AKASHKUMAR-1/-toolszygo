module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel">
    <div class="panel-label">Essay</div>
    <div class="field-row">
      <div class="field" style="max-width:200px;">
        <label for="ew-target">Word limit / target</label>
        <input type="number" id="ew-target" value="500" min="10" step="50">
      </div>
    </div>
    <div class="field">
      <textarea id="ew-text" placeholder="Write or paste your essay here…" style="min-height:220px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Progress</div>
    <div style="background:rgba(255,255,255,0.65);border:1px solid #F0E0CC;border-radius:10px;height:18px;overflow:hidden;">
      <div id="ew-bar" style="height:100%;width:0%;background:linear-gradient(90deg,var(--accent),#E8A87C);border-radius:10px;transition:width 0.2s;"></div>
    </div>
    <div class="stat-grid" style="margin-top:6px;">
      <div class="stat"><div class="num" id="ew-words">0</div><div class="lbl">Words</div></div>
      <div class="stat"><div class="num" id="ew-remaining">500</div><div class="lbl">Remaining</div></div>
      <div class="stat"><div class="num" id="ew-chars">0</div><div class="lbl">Characters</div></div>
      <div class="stat"><div class="num" id="ew-paras">0</div><div class="lbl">Paragraphs</div></div>
    </div>
    <div id="ew-status" style="font-size:13.5px;font-weight:600;text-align:center;"></div>
  </div>
</div>`,
  howto: [
    'Set your word limit (e.g. a 500-word essay).',
    'Write or paste your essay — the progress bar and counts update live.',
    'A warning appears if you go over the limit.',
  ],
  faq: [
    { q: 'How close to the word limit should I get?', a: '90–100% of the target is ideal — 450–500 words for a 500-word essay. Writing too little looks incomplete; exceeding the limit in exams can cost marks (strict in exams like UPSC).' },
    { q: 'Are headings/references counted too?', a: 'This tool counts all visible text. Check your exam/assignment rules — some exclude references/bibliography.' },
    { q: 'How many words for a UPSC essay?', a: 'UPSC mains essays are roughly 1000–1200 words, 2 essays in the section. Stick strictly to the word limit — examiners don\'t like overly long essays.' },
    { q: 'Will my essay be saved?', a: 'No — the text is lost on page refresh. Write your essay in Word/Docs and paste it here just to check the count.' },
  ],
};
