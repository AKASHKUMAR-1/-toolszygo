module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Weekly Timetable (click cells to type)</div>
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
    <div style="font-size:12px;color:#A39C8B;margin-top:6px;">💾 The timetable auto-saves in your browser.</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="tt-print">🖨 Print timetable</button>
  <button class="btn btn-secondary" id="tt-clear">↻ Clear all</button>
</div>
<div id="tt-print-area" style="display:none;"></div>`,
  howto: [
    'Set the number of periods (8 for school, 4-6 for a study plan).',
    'Click each cell to type a subject/task — the time column is editable too.',
    'Everything auto-saves in the browser — <strong>Print</strong> it and stick it on your wall!',
  ],
  faq: [
    { q: 'Will my timetable be saved?', a: 'Yes — it auto-saves in the browser\'s localStorage. You\'ll find it again when you return (on the same browser/device).' },
    { q: 'How do I make a study timetable?', a: 'Assign subjects to slots by difficulty — hard subjects in the fresh morning slots. Keep a break after every 2 slots and one revision slot daily.' },
    { q: 'Do I get Sunday too?', a: 'The table has all seven days, Monday-Sunday — leave any day blank if you don\'t need it.' },
  ],
};
