module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">CSV Input</div>
    <div class="field">
      <textarea id="cj-input" placeholder="name,age,city&#10;Amit,25,Delhi&#10;Priya,30,Mumbai" spellcheck="false" style="min-height:200px;font-family:monospace;font-size:13px;"></textarea>
    </div>
    <div class="checks">
      <label><input type="checkbox" id="cj-headers" checked> Pehli row headers hai</label>
      <label><input type="checkbox" id="cj-numbers" checked> Numbers ko number banao (string nahi)</label>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">JSON Output</div>
    <div id="cj-status" style="font-size:13px;font-weight:600;"></div>
    <textarea id="cj-output" readonly spellcheck="false" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:12.5px;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="cj-convert">Convert to JSON</button>
  <button class="btn btn-secondary" id="cj-copy">Copy JSON</button>
  <button class="btn btn-secondary" id="cj-download">Download .json</button>
</div>`,
  howto: [
    'CSV data paste karo — Excel/Google Sheets se copy karke bhi chalega (tabs auto-detect hote hain).',
    'Pehli row headers hai ya nahi, checkbox se batao.',
    '<strong>Convert</strong> dabao — JSON array ready, copy ya download karo.',
  ],
  faq: [
    { q: 'Excel se data kaise laayein?', a: 'Excel/Google Sheets me cells select karke copy karo aur yahan paste kar do — tab-separated data automatically detect ho jaata hai. Ya file ko CSV me save karke uska content paste karo.' },
    { q: 'Values me comma ho to kya hoga?', a: 'CSV standard ke hisaab se aisi values double quotes me hoti hain ("Delhi, India") — parser ise sahi handle karta hai, quotes ke andar wala comma split nahi hota.' },
    { q: 'Kya mera data upload hota hai?', a: 'Nahi — conversion browser me hota hai. Customer lists, financial data sab safe hai.' },
    { q: 'Headers nahi hain to kya output milega?', a: 'Checkbox off karo — har row ek array banegi (objects ki jagah): [["Amit",25],["Priya",30]].' },
  ],
};
