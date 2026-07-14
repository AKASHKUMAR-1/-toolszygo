module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Options</div>
    <div class="field">
      <label for="pw-length">Length: <span id="pw-length-val">16</span> characters</label>
      <div class="range-row">
        <input type="range" id="pw-length" min="6" max="64" value="16">
      </div>
    </div>
    <div class="checks">
      <label><input type="checkbox" id="pw-upper" checked> Uppercase letters (A–Z)</label>
      <label><input type="checkbox" id="pw-lower" checked> Lowercase letters (a–z)</label>
      <label><input type="checkbox" id="pw-nums" checked> Numbers (0–9)</label>
      <label><input type="checkbox" id="pw-syms" checked> Symbols (!@#$%…)</label>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div id="pw-result" style="font-family:monospace;font-size:19px;font-weight:600;color:#8A4B2A;word-break:break-all;line-height:1.5;min-height:60px;">—</div>
    <div class="result-rows">
      <div class="result-row"><span class="k">Strength</span><span class="v" id="pw-strength">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pw-generate">Generate password</button>
  <button class="btn btn-secondary" id="pw-copy">Copy password</button>
</div>`,
  howto: [
    'Set the password length with the slider (12+ recommended).',
    'Choose character types — uppercase, lowercase, numbers, symbols.',
    'Click <strong>Generate password</strong> — a new random password is created.',
    'Use "Copy password" to copy it to your clipboard.',
  ],
  faq: [
    { q: 'Is this password stored or sent anywhere?', a: 'No. The password is generated entirely in your browser using crypto.getRandomValues() — it\'s never created on a server or saved anywhere. It\'s gone as soon as you close the page.' },
    { q: 'What makes a strong password?', a: 'At least 12–16 characters, with all four types (uppercase, lowercase, numbers, symbols) enabled. Use a different password for every account.' },
    { q: 'Are the generated passwords truly random?', a: 'This uses the browser\'s cryptographically secure random generator (Web Crypto API) — not Math.random() — which is the industry standard for password generation.' },
    { q: 'How do I remember my passwords?', a: 'Use a password manager (Bitwarden, 1Password, or your browser\'s built-in manager). Reusing the same password everywhere is the biggest risk.' },
  ],
};
