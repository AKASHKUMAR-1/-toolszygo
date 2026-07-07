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
    <div class="panel-label">Time Duration (clock times ke beech)</div>
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
    'Upar Hours+Minutes ko add/subtract karo — result turant milega.',
    'Neeche start/end clock time daalo — duration aur decimal hours (payroll ke liye) mil jayega.',
  ],
  faq: [
    { q: 'Decimal hours kya hote hain?', a: 'Payroll me time aksar decimal me chahiye hota hai — jaise "8 ghante 30 minute" = 8.5 hours. Ye tool automatically convert kar deta hai.' },
    { q: 'Agar end time start time se pehle ho (night shift)?', a: 'Tool automatically agle din maan kar calculate kar leta hai — jaise 22:00 se 06:00 = 8 hours (raat paar karke).' },
    { q: 'Timesheet banane ke liye use kar sakte hain?', a: 'Bilkul — daily clock-in/clock-out times daal kar total worked hours nikalo, phir payroll ke liye decimal format use karo.' },
  ],
};
