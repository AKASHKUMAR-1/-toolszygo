module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Offer Letter Details</div>
    <div class="field-row">
      <div class="field"><label for="ol-company">Company Naam</label><input type="text" id="ol-company" placeholder="e.g. ABC Technologies"></div>
      <div class="field"><label for="ol-date">Date</label><input type="date" id="ol-date"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="ol-candidate">Candidate Naam</label><input type="text" id="ol-candidate" placeholder="Candidate"></div>
      <div class="field"><label for="ol-role">Designation / Role</label><input type="text" id="ol-role" placeholder="e.g. Sales Executive"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="ol-ctc">Annual CTC (₹)</label><input type="number" id="ol-ctc" value="400000" min="0" step="10000"></div>
      <div class="field"><label for="ol-joining">Joining Date</label><input type="date" id="ol-joining"></div>
      <div class="field"><label for="ol-location">Work Location</label><input type="text" id="ol-location" placeholder="e.g. Delhi"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="ol-probation">Probation (months)</label><input type="number" id="ol-probation" value="3" min="0" max="12"></div>
      <div class="field"><label for="ol-hr">HR / Signatory Naam</label><input type="text" id="ol-hr" placeholder="e.g. Priya Sharma, HR Manager"></div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Preview</div>
    <div id="ol-preview" style="background:#FFF;border:1px solid #F0E0CC;border-radius:10px;padding:20px;overflow:auto;max-height:420px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ol-print">🖨 Print / Save as PDF</button>
  <button class="btn btn-secondary" id="ol-copy">Copy letter text</button>
</div>`,
  howto: [
    'Company, candidate, role, CTC aur joining date bharo.',
    'Professional offer letter template me sab details apni jagah aa jaati hain.',
    '<strong>Print/Save as PDF</strong> karo ya text copy karke email me bhejo.',
  ],
  faq: [
    { q: 'Offer letter me kya hona chahiye?', a: 'Role, CTC, joining date, location, probation period aur acceptance ki last date. Detailed terms (leave policy, notice period) appointment letter me aate hain jo joining pe milta hai.' },
    { q: 'Offer letter legally binding hai?', a: 'Candidate ke sign karne pe ek contract ban jaata hai, lekin employment at-will clauses pe depend karta hai. Serious cases me lawyer se draft review karwao.' },
    { q: 'CTC breakdown dena zaroori hai?', a: 'Offer letter me total CTC kaafi hai. Detailed breakup (basic, HRA, PF) annexure ya appointment letter me diya jaata hai.' },
  ],
};
