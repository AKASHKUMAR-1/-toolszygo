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
    'From aur To dates choose karo.',
    'Exact difference (years, months, days ke roop me) aur total days/weeks/working-days turant mil jayenge.',
  ],
  faq: [
    { q: 'Working days kaise count hote hain?', a: 'Sirf Monday-Friday count hote hain — Saturday/Sunday exclude ho jaate hain. Public holidays ka hisaab nahi hota, sirf weekends.' },
    { q: 'Kya due dates/deadlines ke liye use kar sakte hain?', a: 'Bilkul — contract deadlines, notice period, project timelines calculate karne ke liye perfect hai.' },
    { q: 'Kya ye leap years handle karta hai?', a: 'Haan — sab calculations calendar-accurate hain, leap years automatically account ho jaate hain.' },
  ],
};
