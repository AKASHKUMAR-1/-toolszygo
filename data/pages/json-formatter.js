module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="json-input" placeholder='{"name": "ToolsDo", "free": true}' spellcheck="false" style="min-height:220px;font-family:monospace;font-size:13px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div id="json-status" style="font-size:13px;font-weight:600;"></div>
    <textarea id="json-output" readonly spellcheck="false" placeholder="formatted JSON yahan aayega…" style="flex:1;min-height:220px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:13px;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="json-format">Format / Beautify</button>
  <button class="btn btn-secondary" id="json-minify">Minify</button>
  <button class="btn btn-secondary" id="json-validate">Validate only</button>
  <button class="btn btn-secondary" id="json-copy">Copy result</button>
</div>`,
  howto: [
    'Apna JSON input box me paste karo.',
    '<strong>Format</strong> dabao — 2-space indentation ke saath beautify hoga.',
    '<strong>Minify</strong> se saare spaces hat kar compact JSON milega.',
    'Agar JSON invalid hai to exact error position ke saath message dikhega.',
  ],
  faq: [
    { q: 'JSON invalid kyun bata raha hai?', a: 'Common galtiyan: keys double quotes me nahi hain, aakhri item ke baad extra comma (trailing comma), single quotes ka use, ya comments — JSON me ye sab allowed nahi hai. Error message me exact position dikhta hai.' },
    { q: 'Kya mera JSON data kahin upload hota hai?', a: 'Nahi — parsing aur formatting browser me JSON.parse/JSON.stringify se hoti hai. API keys ya sensitive data wala JSON bhi safe hai.' },
    { q: 'Kitna bada JSON handle ho sakta hai?', a: 'Kai MB tak aaram se — browser me hi process hota hai. Bahut bade files (50MB+) pe tab slow ho sakta hai.' },
    { q: 'JSON5 ya JSONC (comments wala) support hai?', a: 'Nahi — ye strict JSON validator hai (RFC 8259). Comments aur trailing commas standard JSON me invalid hain, isliye error milega.' },
  ],
};
