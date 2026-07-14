module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="url-input" placeholder="Paste text or a URL here…" style="min-height:170px;"></textarea>
    </div>
    <div class="field">
      <label for="url-mode">Mode</label>
      <select id="url-mode">
        <option value="encodeComponent" selected>Encode — component (for params, all special chars)</option>
        <option value="encode">Encode — full URL (/, ?, & are preserved)</option>
        <option value="decode">Decode</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <textarea id="url-output" readonly placeholder="output will appear here…" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:13px;color:#8A4B2A;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="url-run">Convert</button>
  <button class="btn btn-secondary" id="url-copy">Copy result</button>
  <button class="btn btn-secondary" id="url-swap">↕ Use result as input</button>
</div>`,
  howto: [
    'Paste your text or URL in the input box.',
    'Choose a mode — <strong>Encode component</strong> (for query param values), <strong>Encode full URL</strong> (whole URL, structure preserved), or <strong>Decode</strong>.',
    'Click <strong>Convert</strong> and copy the result.',
  ],
  faq: [
    { q: 'What is URL encoding?', a: 'URLs only allow a limited set of characters. Converting characters like spaces, non-English text, &, and ? into %XX format is called URL encoding (percent encoding). E.g. space = %20, & = %26.' },
    { q: 'What\'s the difference between encodeURIComponent and encodeURI?', a: 'encodeURIComponent encodes all special characters (including /, ?, &) — for query param values. encodeURI preserves URL structure (/, ?, &, :) — for a whole URL. The tool has both modes.' },
    { q: 'Why do I get an error when decoding?', a: 'If the text has an invalid percent sequence (like a lone % without hex), decoding fails. The tool shows you an error message.' },
    { q: 'Can non-English/emoji text be encoded?', a: 'Yes — it\'s converted to UTF-8 bytes and encoded. E.g. "नमस्ते" = %E0%A4%A8%E0%A4%AE... Decoding gives back the original.' },
  ],
};
