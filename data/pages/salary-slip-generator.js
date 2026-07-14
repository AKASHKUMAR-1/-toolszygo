module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Salary Slip Details</div>
    <div class="field-row">
      <div class="field"><label for="ss-company">Company Name</label><input type="text" id="ss-company" placeholder="e.g. ABC Pvt Ltd"></div>
      <div class="field"><label for="ss-month">Month</label><input type="month" id="ss-month"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="ss-employee">Employee Name</label><input type="text" id="ss-employee" placeholder="Employee"></div>
      <div class="field"><label for="ss-designation">Designation</label><input type="text" id="ss-designation" placeholder="e.g. Accountant"></div>
      <div class="field"><label for="ss-empid">Emp ID (optional)</label><input type="text" id="ss-empid"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="ss-basic">Basic (₹)</label><input type="number" id="ss-basic" value="25000" min="0"></div>
      <div class="field"><label for="ss-hra">HRA (₹)</label><input type="number" id="ss-hra" value="10000" min="0"></div>
      <div class="field"><label for="ss-allow">Other Allowances (₹)</label><input type="number" id="ss-allow" value="5000" min="0"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="ss-pf">PF Deduction (₹)</label><input type="number" id="ss-pf" value="3000" min="0"></div>
      <div class="field"><label for="ss-pt">Prof. Tax (₹)</label><input type="number" id="ss-pt" value="200" min="0"></div>
      <div class="field"><label for="ss-other-ded">Other Deductions (₹)</label><input type="number" id="ss-other-ded" value="0" min="0"></div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Preview</div>
    <div id="ss-preview" style="background:#FFF;border:1px solid #F0E0CC;border-radius:10px;padding:20px;overflow:auto;max-height:420px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ss-print">🖨 Print / Save as PDF</button>
</div>`,
  howto: [
    'Fill in the company, employee, and month.',
    'Enter earnings (basic, HRA, allowances) and deductions (PF, PT).',
    'Net pay is calculated automatically (in words too) — click <strong>Print/Save as PDF</strong>.',
  ],
  faq: [
    { q: 'What must a salary slip include?', a: 'Company name, employee details, month, breakup of earnings, deductions, and net pay. This tool creates a standard format accepted everywhere — loan applications, visas, and new jobs.' },
    { q: 'How much is the PF deduction?', a: '12% of basic on the employee side (the employer also contributes 12% separately). For basic above ₹15,000, some companies keep it fixed at ₹1,800.' },
    { q: 'Is this an official document?', a: 'The format is professional, but it\'s only official when the company issues it (with a stamp/signature). Small businesses can use this for their employees.' },
  ],
};
