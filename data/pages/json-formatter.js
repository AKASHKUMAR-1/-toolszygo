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
    <textarea id="json-output" readonly spellcheck="false" placeholder="formatted JSON will appear here…" style="flex:1;min-height:220px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:13px;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="json-format">Format / Beautify</button>
  <button class="btn btn-secondary" id="json-minify">Minify</button>
  <button class="btn btn-secondary" id="json-validate">Validate only</button>
  <button class="btn btn-secondary" id="json-copy">Copy result</button>
</div>`,
  howto: [
    'Paste your JSON in the input box.',
    'Click <strong>Format</strong> — it beautifies with 2-space indentation.',
    'Use <strong>Minify</strong> to strip all spaces for compact JSON.',
    'If the JSON is invalid, a message with the exact error position appears.',
  ],
  faq: [
    { q: 'Why does it say my JSON is invalid?', a: 'Common mistakes: keys not in double quotes, a trailing comma after the last item, single quotes, or comments — none of these are allowed in JSON. The error message shows the exact position.' },
    { q: 'Is my JSON data uploaded anywhere?', a: 'No — parsing and formatting happen in the browser via JSON.parse/JSON.stringify. JSON containing API keys or sensitive data is safe too.' },
    { q: 'How large a JSON can this handle?', a: 'Several MB with ease — it\'s processed entirely in the browser. Very large files (50MB+) may be slow.' },
    { q: 'Is JSON5 or JSONC (with comments) supported?', a: 'No — this is a strict JSON validator (RFC 8259). Comments and trailing commas are invalid in standard JSON, so you\'ll get an error.' },
  ],
};
