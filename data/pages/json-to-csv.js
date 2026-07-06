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
    'JSON array of objects paste karo — jaise API response.',
    '<strong>Convert</strong> dabao — headers ke saath CSV ban jayegi.',
    'Download karke seedha Excel me kholo.',
  ],
  faq: [
    { q: 'Kaunsa JSON format chahiye?', a: 'Array of objects: [{"name":"Amit","age":25},…]. Har object ek row banta hai, keys headers bante hain. Alag-alag objects me alag keys hon to sab columns me aa jaati hain.' },
    { q: 'Nested objects ka kya hota hai?', a: 'Nested object/array cell me JSON string ke roop me aata hai. Flat data ke liye pehle apne JSON ko flatten kar lo.' },
    { q: 'CSV Excel me kaise kholein?', a: 'Download ki hui .csv file pe double-click karo — Excel me khul jayegi. Hindi text sahi dikhane ke liye file UTF-8 BOM ke saath download hoti hai.' },
    { q: 'Values me comma/quotes ho to?', a: 'CSV rules ke hisaab se aisi values automatically double quotes me wrap hoti hain aur andar ke quotes escape hote hain — Excel sahi padhega.' },
  ],
};
