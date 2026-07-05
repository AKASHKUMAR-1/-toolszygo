module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="url-input" placeholder="Text ya URL yahan paste karo…" style="min-height:170px;"></textarea>
    </div>
    <div class="field">
      <label for="url-mode">Mode</label>
      <select id="url-mode">
        <option value="encodeComponent" selected>Encode — component (params ke liye, sab special chars)</option>
        <option value="encode">Encode — full URL (/, ?, & preserve rahenge)</option>
        <option value="decode">Decode</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <textarea id="url-output" readonly placeholder="output yahan aayega…" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:13px;color:#8A4B2A;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="url-run">Convert</button>
  <button class="btn btn-secondary" id="url-copy">Copy result</button>
  <button class="btn btn-secondary" id="url-swap">↕ Result ko input banao</button>
</div>`,
  howto: [
    'Apna text ya URL input box me paste karo.',
    'Mode choose karo — <strong>Encode component</strong> (query params ke values ke liye), <strong>Encode full URL</strong> (poora URL, structure preserve) ya <strong>Decode</strong>.',
    '<strong>Convert</strong> dabao aur result copy karo.',
  ],
  faq: [
    { q: 'URL encoding kya hoti hai?', a: 'URLs me sirf limited characters allowed hain. Space, Hindi text, &, ? jaise characters ko %XX format me convert karna URL encoding (percent encoding) kehlata hai. E.g. space = %20, & = %26.' },
    { q: 'encodeURIComponent aur encodeURI me kya difference hai?', a: 'encodeURIComponent sab special characters encode karta hai (/, ?, & bhi) — query param values ke liye. encodeURI URL structure (/, ?, &, :) ko preserve karta hai — poore URL ke liye. Tool me dono modes hain.' },
    { q: 'Decode karne pe error kyun aata hai?', a: 'Agar text me invalid percent sequence ho (jaise akela % bina hex ke) to decode fail hota hai. Tool aapko error message dikhayega.' },
    { q: 'Kya Hindi/emoji text encode ho sakta hai?', a: 'Haan — UTF-8 bytes me convert hokar encode hota hai. E.g. "नमस्ते" = %E0%A4%A8%E0%A4%AE... Decode karne pe wapas original milta hai.' },
  ],
};
