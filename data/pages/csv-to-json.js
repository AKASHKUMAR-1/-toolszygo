module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">CSV Input</div>
    <div class="field">
      <textarea id="cj-input" placeholder="name,age,city&#10;Amit,25,Delhi&#10;Priya,30,Mumbai" spellcheck="false" style="min-height:200px;font-family:monospace;font-size:13px;"></textarea>
    </div>
    <div class="checks">
      <label><input type="checkbox" id="cj-headers" checked> First row is headers</label>
      <label><input type="checkbox" id="cj-numbers" checked> Convert numbers to numbers (not strings)</label>
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
    'Paste CSV data — copying directly from Excel/Google Sheets also works (tabs are auto-detected).',
    'Tell it whether the first row is headers using the checkbox.',
    'Click <strong>Convert</strong> — JSON array is ready, copy or download it.',
  ],
  faq: [
    { q: 'How do I bring data from Excel?', a: 'Select cells in Excel/Google Sheets, copy, and paste here — tab-separated data is detected automatically. Or save the file as CSV and paste its contents.' },
    { q: 'What if values contain a comma?', a: 'Per the CSV standard, such values are wrapped in double quotes ("Delhi, India") — the parser handles this correctly, without splitting on commas inside quotes.' },
    { q: 'Is my data uploaded anywhere?', a: 'No — conversion happens in the browser. Customer lists, financial data — all safe.' },
    { q: 'What if there are no headers?', a: 'Turn off the checkbox — each row becomes an array instead of an object: [["Amit",25],["Priya",30]].' },
  ],
};
