module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="pdd-method">Calculate karein kis se?</label>
      <select id="pdd-method">
        <option value="lmp" selected>Last Menstrual Period (LMP)</option>
        <option value="conception">Conception Date</option>
      </select>
    </div>
    <div class="field">
      <label for="pdd-date" id="pdd-date-label">Last Period ki pehli tarikh</label>
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
      <div class="result-row"><span class="k">Abhi kitne weeks pregnant</span><span class="v" id="pdd-weeks">—</span></div>
      <div class="result-row"><span class="k">Trimester</span><span class="v" id="pdd-trimester">—</span></div>
      <div class="result-row"><span class="k">Conception date (estimate)</span><span class="v" id="pdd-conception">—</span></div>
      <div class="result-row"><span class="k">Due date tak bache din</span><span class="v" id="pdd-remaining">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Method choose karo — LMP (last period) se ya conception date se.',
    'Date daalo aur apni average cycle length set karo (default 28 din).',
    'Expected due date, abhi ka pregnancy week aur trimester turant mil jayega.',
  ],
  faq: [
    { q: 'Due date kaise calculate hoti hai?', a: 'Naegele\'s Rule use hoti hai — LMP ki date me 280 din (40 weeks) jodo. Cycle 28 din se alag ho to adjustment hoti hai.' },
    { q: 'Kya due date exact hoti hai?', a: 'Nahi — sirf ~5% babies apni exact due date pe hi paida hote hain. Ye ek estimate hai; doctor ultrasound se zyada accurate date de sakte hain.' },
    { q: 'Trimester kaise divide hote hain?', a: 'First trimester: week 1-13, Second: week 14-27, Third: week 28-40 (delivery tak).' },
  ],
};
