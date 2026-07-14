module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Resume Details</div>
    <div class="field-row">
      <div class="field"><label for="rb-name">Full Name</label><input type="text" id="rb-name" placeholder="Akash Kumar"></div>
      <div class="field"><label for="rb-title">Professional Title</label><input type="text" id="rb-title" placeholder="e.g. Digital Marketing Executive"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="rb-phone">Phone</label><input type="text" id="rb-phone" placeholder="98XXXXXXXX"></div>
      <div class="field"><label for="rb-email">Email</label><input type="text" id="rb-email" placeholder="you@email.com"></div>
      <div class="field"><label for="rb-city">City</label><input type="text" id="rb-city" placeholder="Delhi"></div>
    </div>
    <div class="field">
      <label for="rb-summary">Summary (2-3 lines)</label>
      <textarea id="rb-summary" style="min-height:60px;" placeholder="e.g. 3 years of experience in digital marketing…"></textarea>
    </div>
    <div class="field">
      <label for="rb-experience">Experience (one job per line: Role | Company | Duration | Work done)</label>
      <textarea id="rb-experience" style="min-height:80px;" placeholder="Marketing Executive | ABC Ltd | 2023-2026 | Handled social media campaigns and SEO&#10;Sales Intern | XYZ Corp | 2022-2023 | Lead generation"></textarea>
    </div>
    <div class="field">
      <label for="rb-education">Education (one degree per line: Degree | College | Year | Marks)</label>
      <textarea id="rb-education" style="min-height:60px;" placeholder="B.Com | Delhi University | 2022 | 72%&#10;12th | CBSE | 2019 | 80%"></textarea>
    </div>
    <div class="field">
      <label for="rb-skills">Skills (comma-separated)</label>
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
    'Fill in your details — name, contact, summary.',
    'For experience and education, write each entry on a new line, separated by a pipe (|).',
    'The preview updates live — click <strong>Print/Save as PDF</strong> and your resume is ready.',
  ],
  faq: [
    { q: 'I\'m a fresher with no experience — what do I write?', a: 'Leave experience blank — the section removes itself automatically. If you have internships, college projects, or volunteer work, write those instead. Keep education and skills strong.' },
    { q: 'How long should a resume be?', a: 'Freshers/up to 5 years experience: 1 page. More experience: max 2 pages. Recruiters spend an average of 7 seconds looking — keep it concise.' },
    { q: 'Is this format ATS-friendly?', a: 'Yes — simple single-column layout, standard headings, no tables/graphics. ATS software reads it easily.' },
  ],
};
