module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="age-dob">Date of Birth</label>
      <input type="date" id="age-dob">
    </div>
    <div class="field">
      <label for="age-on">Age on date (default: today)</label>
      <input type="date" id="age-on">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="age-result">—</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total months</span><span class="v" id="age-months">—</span></div>
      <div class="result-row"><span class="k">Total weeks</span><span class="v" id="age-weeks">—</span></div>
      <div class="result-row"><span class="k">Total days</span><span class="v" id="age-days">—</span></div>
      <div class="result-row"><span class="k">Next birthday</span><span class="v" id="age-next">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="age-calc">Calculate age</button>
</div>`,
  howto: [
    'Select your date of birth.',
    'If you want age on a specific date, set "Age on date" too — otherwise today\'s date is the default.',
    'Click <strong>Calculate age</strong> — get exact age in years, months, days + next birthday countdown.',
  ],
  faq: [
    { q: 'How is age calculated?', a: 'Using a calendar-accurate method: full years are counted first, then remaining full months, then remaining days — leap years are handled automatically.' },
    { q: 'Does this give the correct age for government forms?', a: 'Yes — this is the same standard calendar age used in forms, exams, and official documents (completed years as on date).' },
    { q: 'What about birthdays on a leap day (Feb 29)?', a: 'For people born on Feb 29, the next birthday counts as March 1 in non-leap years — the tool handles this automatically.' },
    { q: 'Can I calculate age on a future date?', a: 'Yes — enter any future date in "Age on date", e.g. your exact age on an exam\'s cutoff date.' },
  ],
};
