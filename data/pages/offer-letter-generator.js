module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Offer Letter Details</div>
    <div class="field-row">
      <div class="field"><label for="ol-company">Company Name</label><input type="text" id="ol-company" placeholder="e.g. ABC Technologies"></div>
      <div class="field"><label for="ol-date">Date</label><input type="date" id="ol-date"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="ol-candidate">Candidate Name</label><input type="text" id="ol-candidate" placeholder="Candidate"></div>
      <div class="field"><label for="ol-role">Designation / Role</label><input type="text" id="ol-role" placeholder="e.g. Sales Executive"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="ol-ctc">Annual CTC (₹)</label><input type="number" id="ol-ctc" value="400000" min="0" step="10000"></div>
      <div class="field"><label for="ol-joining">Joining Date</label><input type="date" id="ol-joining"></div>
      <div class="field"><label for="ol-location">Work Location</label><input type="text" id="ol-location" placeholder="e.g. Delhi"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="ol-probation">Probation (months)</label><input type="number" id="ol-probation" value="3" min="0" max="12"></div>
      <div class="field"><label for="ol-hr">HR / Signatory Name</label><input type="text" id="ol-hr" placeholder="e.g. Priya Sharma, HR Manager"></div>
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
    'Fill in the company, candidate, role, CTC, and joining date.',
    'All details are placed into a professional offer letter template.',
    'Click <strong>Print/Save as PDF</strong> or copy the text to send by email.',
  ],
  faq: [
    { q: 'What should an offer letter include?', a: 'Role, CTC, joining date, location, probation period, and the acceptance deadline. Detailed terms (leave policy, notice period) go in the appointment letter given at joining.' },
    { q: 'Is an offer letter legally binding?', a: 'It becomes a contract once the candidate signs, but it depends on employment at-will clauses. Have a lawyer review the draft for serious cases.' },
    { q: 'Is a CTC breakdown necessary?', a: 'Total CTC is enough in the offer letter. A detailed breakup (basic, HRA, PF) is given in an annexure or the appointment letter.' },
  ],
};
