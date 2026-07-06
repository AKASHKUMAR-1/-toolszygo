module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Resume Details</div>
    <div class="field-row">
      <div class="field"><label for="rb-name">Poora Naam</label><input type="text" id="rb-name" placeholder="Akash Kumar"></div>
      <div class="field"><label for="rb-title">Professional Title</label><input type="text" id="rb-title" placeholder="e.g. Digital Marketing Executive"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="rb-phone">Phone</label><input type="text" id="rb-phone" placeholder="98XXXXXXXX"></div>
      <div class="field"><label for="rb-email">Email</label><input type="text" id="rb-email" placeholder="you@email.com"></div>
      <div class="field"><label for="rb-city">City</label><input type="text" id="rb-city" placeholder="Delhi"></div>
    </div>
    <div class="field">
      <label for="rb-summary">Summary (2-3 lines)</label>
      <textarea id="rb-summary" style="min-height:60px;" placeholder="e.g. 3 saal ka experience digital marketing me…"></textarea>
    </div>
    <div class="field">
      <label for="rb-experience">Experience (har job nayi line pe: Role | Company | Duration | Kaam)</label>
      <textarea id="rb-experience" style="min-height:80px;" placeholder="Marketing Executive | ABC Ltd | 2023-2026 | Social media campaigns aur SEO handle kiya&#10;Sales Intern | XYZ Corp | 2022-2023 | Lead generation"></textarea>
    </div>
    <div class="field">
      <label for="rb-education">Education (har degree nayi line pe: Degree | College | Year | Marks)</label>
      <textarea id="rb-education" style="min-height:60px;" placeholder="B.Com | Delhi University | 2022 | 72%&#10;12th | CBSE | 2019 | 80%"></textarea>
    </div>
    <div class="field">
      <label for="rb-skills">Skills (comma se alag)</label>
      <input type="text" id="rb-skills" placeholder="MS Excel, SEO, Google Ads, Hindi typing">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Preview</div>
    <div id="rb-preview" style="background:#FFF;border:1px solid #F0E0CC;border-radius:10px;padding:20px;overflow:auto;max-height:460px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="rb-print">🖨 Print / Save as PDF</button>
</div>`,
  howto: [
    'Apni details bharo — naam, contact, summary.',
    'Experience aur education me har entry nayi line pe, pipe (|) se alag karke likho.',
    'Preview live update hota hai — <strong>Print/Save as PDF</strong> karke resume ready.',
  ],
  faq: [
    { q: 'Fresher hoon, experience nahi hai — kya likhoon?', a: 'Experience khaali chhod do — section khud hat jayega. Internships, college projects ya volunteer work ho to wahi likho. Education aur skills strong rakho.' },
    { q: 'Resume kitna lamba hona chahiye?', a: 'Freshers/5 saal tak: 1 page. Zyada experience: max 2 pages. Recruiters average 7 second dekhte hain — concise rakho.' },
    { q: 'ATS-friendly hai kya ye format?', a: 'Haan — simple single-column layout, standard headings, koi tables/graphics nahi. ATS software ise aasaani se padh leta hai.' },
  ],
};
