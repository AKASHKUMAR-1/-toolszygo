module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Dates</div>
    <div class="field">
      <label for="dd-from">From Date</label>
      <input type="date" id="dd-from">
    </div>
    <div class="field">
      <label for="dd-to">To Date</label>
      <input type="date" id="dd-to">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="dd-main">—</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total days</span><span class="v" id="dd-days">—</span></div>
      <div class="result-row"><span class="k">Total weeks</span><span class="v" id="dd-weeks">—</span></div>
      <div class="result-row"><span class="k">Total months (approx)</span><span class="v" id="dd-months">—</span></div>
      <div class="result-row"><span class="k">Working days (Mon-Fri)</span><span class="v" id="dd-workdays">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Choose the From and To dates.',
    'Get the exact difference (in years, months, days) and total days/weeks/working-days instantly.',
  ],
  faq: [
    { q: 'How are working days counted?', a: 'Only Monday-Friday are counted — Saturday/Sunday are excluded. Public holidays aren\'t accounted for, only weekends.' },
    { q: 'Can I use this for due dates/deadlines?', a: 'Absolutely — perfect for calculating contract deadlines, notice periods, and project timelines.' },
    { q: 'Does this handle leap years?', a: 'Yes — all calculations are calendar-accurate, leap years are automatically accounted for.' },
  ],
};
