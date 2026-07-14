module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">JSON Input</div>
    <div class="field">
      <textarea id="jc-input" placeholder='[{"name":"Amit","age":25},{"name":"Priya","age":30}]' spellcheck="false" style="min-height:200px;font-family:monospace;font-size:13px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">CSV Output</div>
    <div id="jc-status" style="font-size:13px;font-weight:600;"></div>
    <textarea id="jc-output" readonly spellcheck="false" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:12.5px;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="jc-convert">Convert to CSV</button>
  <button class="btn btn-secondary" id="jc-copy">Copy CSV</button>
  <button class="btn btn-secondary" id="jc-download">Download .csv</button>
</div>`,
  howto: [
    'Paste a JSON array of objects — like an API response.',
    'Click <strong>Convert</strong> — a CSV with headers is created.',
    'Download and open directly in Excel.',
  ],
  faq: [
    { q: 'What JSON format is needed?', a: 'An array of objects: [{"name":"Amit","age":25},…]. Each object becomes a row, and keys become headers. If different objects have different keys, they all appear as columns.' },
    { q: 'What happens with nested objects?', a: 'A nested object/array appears in the cell as a JSON string. For flat data, flatten your JSON first.' },
    { q: 'How do I open the CSV in Excel?', a: 'Double-click the downloaded .csv file — it opens in Excel. The file downloads with a UTF-8 BOM so non-English text displays correctly.' },
    { q: 'What if values contain commas/quotes?', a: 'Per CSV rules, such values are automatically wrapped in double quotes and internal quotes are escaped — Excel will read it correctly.' },
  ],
};
