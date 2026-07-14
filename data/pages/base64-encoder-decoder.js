module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="b64-input" placeholder="Paste text or Base64 here…" spellcheck="false" style="min-height:180px;font-family:monospace;font-size:13px;"></textarea>
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
    <textarea id="b64-output" readonly spellcheck="false" placeholder="output will appear here…" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:13px;color:#8A4B2A;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="b64-run">Convert</button>
  <button class="btn btn-secondary" id="b64-swap">↕ Use result as input</button>
  <button class="btn btn-secondary" id="b64-copy">Copy result</button>
</div>`,
  howto: [
    'Paste your text or Base64 string.',
    'Choose a mode — Encode or Decode.',
    'Click <strong>Convert</strong> and copy the result.',
  ],
  faq: [
    { q: 'What is Base64?', a: 'A way of writing binary/text data using only 64 safe characters (A-Z, a-z, 0-9, +, /) — so data travels safely through emails, URLs, and JSON without corruption. This is NOT encryption, anyone can decode it.' },
    { q: 'Will non-English text/emoji encode correctly?', a: 'Yes — the tool is UTF-8 safe. Text like "नमस्ते" or emoji encodes correctly and decodes back accurately. Simple btoa()-based tools often fail here.' },
    { q: 'Why am I getting an error on decode?', a: 'The input isn\'t valid Base64 — it has invalid characters or the wrong length. Check that the full string was copied, not just part of it.' },
    { q: 'Is it safe to store passwords in Base64?', a: 'Absolutely not! Base64 is encoding, not encryption — anyone can decode it in a second. Passwords should use hashing (bcrypt) instead.' },
  ],
};
