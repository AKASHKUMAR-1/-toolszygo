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
    'Password ki length slider se set karo (12+ recommended).',
    'Character types choose karo — uppercase, lowercase, numbers, symbols.',
    '<strong>Generate password</strong> dabao — naya random password ban jayega.',
    '"Copy password" se clipboard me copy karo.',
  ],
  faq: [
    { q: 'Kya ye password kahin store ya bheja jaata hai?', a: 'Nahi. Password aapke browser me hi crypto.getRandomValues() se generate hota hai — na server pe banta hai, na kahin save hota hai. Page band karte hi gone.' },
    { q: 'Strong password ke liye kya recommended hai?', a: 'Kam se kam 12–16 characters, aur charo types (uppercase, lowercase, numbers, symbols) on rakho. Har account ke liye alag password use karo.' },
    { q: 'Kya generated passwords truly random hote hain?', a: 'Ye browser ka cryptographically secure random generator (Web Crypto API) use karta hai — Math.random() nahi — jo password generation ke liye industry standard hai.' },
    { q: 'Passwords yaad kaise rakhun?', a: 'Password manager use karo (Bitwarden, 1Password, ya browser ka built-in manager). Ek hi password har jagah use karna sabse bada risk hai.' },
  ],
};
