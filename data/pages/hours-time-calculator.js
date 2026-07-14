module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Add / Subtract Hours</div>
    <div class="field-row">
      <div class="field"><label>Hours</label><input type="number" id="ht-h1" value="8" min="0"></div>
      <div class="field"><label>Minutes</label><input type="number" id="ht-m1" value="30" min="0" max="59"></div>
    </div>
    <div class="field">
      <label for="ht-op">Operation</label>
      <select id="ht-op"><option value="+">+ Add</option><option value="-">− Subtract</option></select>
    </div>
    <div class="field-row">
      <div class="field"><label>Hours</label><input type="number" id="ht-h2" value="2" min="0"></div>
      <div class="field"><label>Minutes</label><input type="number" id="ht-m2" value="45" min="0" max="59"></div>
    </div>
    <div class="result-big" id="ht-result1" style="margin-top:8px;">—</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Time Duration (between clock times)</div>
    <div class="field-row">
      <div class="field"><label for="ht-start">Start Time</label><input type="time" id="ht-start" value="09:00"></div>
      <div class="field"><label for="ht-end">End Time</label><input type="time" id="ht-end" value="17:30"></div>
    </div>
    <div class="result-big" id="ht-duration" style="margin-top:8px;">—</div>
    <div style="font-size:12.5px;color:#B98E63;">Duration</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Decimal hours</span><span class="v" id="ht-decimal">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Add/subtract hours+minutes above — get the result instantly.',
    'Enter start/end clock times below — get duration and decimal hours (for payroll).',
  ],
  faq: [
    { q: 'What are decimal hours?', a: 'Payroll often needs time in decimal form — e.g. "8 hours 30 minutes" = 8.5 hours. This tool converts automatically.' },
    { q: 'What if the end time is before the start time (night shift)?', a: 'The tool automatically assumes the next day — e.g. 22:00 to 06:00 = 8 hours (crossing midnight).' },
    { q: 'Can I use this to build a timesheet?', a: 'Absolutely — enter daily clock-in/clock-out times to get total worked hours, then use the decimal format for payroll.' },
  ],
};
