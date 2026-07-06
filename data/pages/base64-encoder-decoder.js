module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="b64-input" placeholder="Text ya Base64 yahan paste karo…" spellcheck="false" style="min-height:180px;font-family:monospace;font-size:13px;"></textarea>
    </div>
    <div class="field">
      <label for="b64-mode">Mode</label>
      <select id="b64-mode">
        <option value="encode" selected>Encode (text → Base64)</option>
        <option value="decode">Decode (Base64 → text)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <textarea id="b64-output" readonly spellcheck="false" placeholder="output yahan aayega…" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:13px;color:#8A4B2A;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="b64-run">Convert</button>
  <button class="btn btn-secondary" id="b64-swap">↕ Result ko input banao</button>
  <button class="btn btn-secondary" id="b64-copy">Copy result</button>
</div>`,
  howto: [
    'Apna text ya Base64 string paste karo.',
    'Mode choose karo — Encode ya Decode.',
    '<strong>Convert</strong> dabao aur result copy karo.',
  ],
  faq: [
    { q: 'Base64 kya hota hai?', a: 'Binary/text data ko sirf 64 safe characters (A-Z, a-z, 0-9, +, /) me likhne ka tarika — taaki data emails, URLs, JSON me bina kharab hue travel kare. Ye encryption NAHI hai, koi bhi decode kar sakta hai.' },
    { q: 'Hindi/emoji encode hoga?', a: 'Haan — tool UTF-8 safe hai. "नमस्ते" → 4KS'... jaisa Base64 banega aur decode karne pe wapas sahi milega. Simple btoa() wale tools yahan fail hote hain.' },
    { q: 'Decode pe error kyun aa raha hai?', a: 'Input valid Base64 nahi hai — usme invalid characters hain ya length galat hai. Check karo ki poora string copy hua hai, aadha nahi.' },
    { q: 'Kya passwords Base64 me store karna safe hai?', a: 'Bilkul nahi! Base64 encoding hai, encryption nahi — koi bhi ek second me decode kar sakta hai. Passwords ke liye hashing (bcrypt) use hoti hai.' },
  ],
};
