module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Weekly Timetable (cells me click karke likho)</div>
    <div class="field-row">
      <div class="field" style="max-width:160px;">
        <label for="tt-periods">Periods/slots per day</label>
        <input type="number" id="tt-periods" value="6" min="2" max="12" step="1">
      </div>
      <div class="field" style="max-width:200px;">
        <label for="tt-title">Title</label>
        <input type="text" id="tt-title" value="My Timetable">
      </div>
    </div>
    <div id="tt-wrap" style="overflow-x:auto;">
      <table id="tt-table" style="width:100%;border-collapse:collapse;font-size:12.5px;"></table>
    </div>
    <div style="font-size:12px;color:#A39C8B;margin-top:6px;">💾 Timetable browser me auto-save hota hai.</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="tt-print">🖨 Print timetable</button>
  <button class="btn btn-secondary" id="tt-clear">↻ Clear all</button>
</div>
<div id="tt-print-area" style="display:none;"></div>`,
  howto: [
    'Periods ki sankhya set karo (school 8, study plan 4-6).',
    'Har cell pe click karke subject/kaam likho — time column bhi editable hai.',
    'Sab browser me auto-save hota hai — <strong>Print</strong> karke deewar pe laga lo!',
  ],
  faq: [
    { q: 'Mera timetable save rahega?', a: 'Haan — browser ke localStorage me auto-save hota hai. Wapas aane pe wahi milega (same browser/device pe).' },
    { q: 'Study timetable kaise banau?', a: 'Subjects ko unki difficulty ke hisaab se slots do — mushkil subject subah ke fresh slots me. Har 2 slots baad break rakho aur revision ka ek slot roz.' },
    { q: 'Sunday bhi chahiye?', a: 'Table me Monday-Sunday saato din hain — jo din khaali chhodना ho chhod do.' },
  ],
};
