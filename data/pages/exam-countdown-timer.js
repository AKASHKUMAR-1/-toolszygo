module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Exam Details</div>
    <div class="field">
      <label for="ec-name">Exam ka naam</label>
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
    'Exam ka naam aur date-time daalo, <strong>+ Add exam</strong> dabao.',
    'Live countdown chalne lagega — days, hours, minutes, seconds.',
    'Kai exams add kar sakte ho — sab browser me saved rehte hain, sabse pehla wala countdown me dikhta hai.',
  ],
  faq: [
    { q: 'Mere exams kahan save hote hain?', a: 'Aapke browser ke localStorage me — sirf aapke device pe. Page dobara kholne pe exams wahi milenge. Browser data clear karne pe hat jayenge.' },
    { q: 'Kitne exams add kar sakte hain?', a: 'Jitne chaaho — list me sab dikhte hain apne countdown ke saath. Sabse nazdeeki exam bada countdown dikhata hai.' },
    { q: 'Countdown ke hisaab se preparation kaise plan karein?', a: 'Bache hue din ÷ syllabus chapters = per chapter days. Last 15–20% din revision aur mock tests ke liye rakho. Roz countdown dekhna motivation bhi deta hai!' },
    { q: 'Exam nikal jaane pe kya hota hai?', a: 'Us exam pe "ho gaya" dikh jaata hai — ✕ se remove kar do.' },
  ],
};
