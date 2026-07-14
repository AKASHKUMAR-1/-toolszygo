module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="pdd-method">Calculate from?</label>
      <select id="pdd-method">
        <option value="lmp" selected>Last Menstrual Period (LMP)</option>
        <option value="conception">Conception Date</option>
      </select>
    </div>
    <div class="field">
      <label for="pdd-date" id="pdd-date-label">First day of last period</label>
      <input type="date" id="pdd-date">
    </div>
    <div class="field">
      <label for="pdd-cycle">Average cycle length (days)</label>
      <input type="number" id="pdd-cycle" value="28" min="20" max="45">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="pdd-duedate">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Expected Due Date</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Current weeks pregnant</span><span class="v" id="pdd-weeks">—</span></div>
      <div class="result-row"><span class="k">Trimester</span><span class="v" id="pdd-trimester">—</span></div>
      <div class="result-row"><span class="k">Conception date (estimate)</span><span class="v" id="pdd-conception">—</span></div>
      <div class="result-row"><span class="k">Days remaining to due date</span><span class="v" id="pdd-remaining">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Choose a method — from LMP (last period) or conception date.',
    'Enter the date and set your average cycle length (default 28 days).',
    'Get the expected due date, current pregnancy week, and trimester instantly.',
  ],
  faq: [
    { q: 'How is the due date calculated?', a: 'Using Naegele\'s Rule — add 280 days (40 weeks) to the LMP date. There\'s an adjustment if the cycle differs from 28 days.' },
    { q: 'Is the due date exact?', a: 'No — only ~5% of babies are born on their exact due date. This is an estimate; a doctor\'s ultrasound can give a more accurate date.' },
    { q: 'How are trimesters divided?', a: 'First trimester: week 1-13, Second: week 14-27, Third: week 28-40 (until delivery).' },
  ],
};
