module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Salary Slip Details</div>
    <div class="field-row">
      <div class="field"><label for="ss-company">Company Naam</label><input type="text" id="ss-company" placeholder="e.g. ABC Pvt Ltd"></div>
      <div class="field"><label for="ss-month">Month</label><input type="month" id="ss-month"></div>
    </div>
    <div class="field-row">
      <div class="field"><label for="ss-employee">Employee Naam</label><input type="text" id="ss-employee" placeholder="Employee"></div>
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
    'Company, employee aur month bharo.',
    'Earnings (basic, HRA, allowances) aur deductions (PF, PT) daalo.',
    'Net pay khud calculate hota hai (words me bhi) — <strong>Print/Save as PDF</strong> karo.',
  ],
  faq: [
    { q: 'Salary slip me kya hona zaroori hai?', a: 'Company naam, employee details, month, earnings ka breakup, deductions aur net pay. Ye tool standard format banata hai jo loan applications, visa aur naya job — sab jagah accepted hai.' },
    { q: 'PF deduction kitna hota hai?', a: 'Basic ka 12% employee side se katta hai (employer bhi 12% alag daalta hai). ₹15,000+ basic pe kuch companies ₹1,800 fixed bhi rakhti hain.' },
    { q: 'Kya ye official document hai?', a: 'Format professional hai lekin official tabhi hai jab company issue kare (stamp/sign ke saath). Chhote businesses apne employees ke liye ise use kar sakte hain.' },
  ],
};
