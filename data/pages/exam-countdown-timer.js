module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Exam Details</div>
    <div class="field">
      <label for="ec-name">Exam name</label>
      <input type="text" id="ec-name" placeholder="e.g. JEE Mains, Board Exam, UPSC Prelims">
    </div>
    <div class="field">
      <label for="ec-date">Exam Date &amp; Time</label>
      <input type="datetime-local" id="ec-date">
    </div>
    <div class="btn-row" style="margin-top:4px;">
      <button class="btn btn-primary" id="ec-add">+ Add exam</button>
    </div>
    <div class="file-list" id="ec-list"></div>
  </div>
  <div class="panel panel-result" style="min-height:0;justify-content:center;">
    <div class="panel-label">Countdown</div>
    <div id="ec-title" style="font-size:14px;font-weight:600;color:#B98E63;text-align:center;"></div>
    <div class="stat-grid">
      <div class="stat"><div class="num" id="ec-days">—</div><div class="lbl">Days</div></div>
      <div class="stat"><div class="num" id="ec-hours">—</div><div class="lbl">Hours</div></div>
      <div class="stat"><div class="num" id="ec-mins">—</div><div class="lbl">Minutes</div></div>
      <div class="stat"><div class="num" id="ec-secs">—</div><div class="lbl">Seconds</div></div>
    </div>
  </div>
</div>`,
  howto: [
    'Enter the exam name and date-time, click <strong>+ Add exam</strong>.',
    'A live countdown starts — days, hours, minutes, seconds.',
    'Add multiple exams — they\'re all saved in the browser, and the nearest one shows in the countdown.',
  ],
  faq: [
    { q: 'Where are my exams saved?', a: 'In your browser\'s localStorage — only on your device. Reopening the page will show the same exams. Clearing browser data removes them.' },
    { q: 'How many exams can I add?', a: 'As many as you want — they all show in the list with their countdown. The nearest exam shows the large countdown.' },
    { q: 'How do I plan preparation around the countdown?', a: 'Days remaining ÷ syllabus chapters = days per chapter. Keep the last 15–20% of days for revision and mock tests. Checking the countdown daily is motivating too!' },
    { q: 'What happens after the exam passes?', a: 'It shows as "done" — remove it with ✕.' },
  ],
};
