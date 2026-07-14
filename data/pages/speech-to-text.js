module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Settings</div>
    <div class="field">
      <label for="stt-lang">Language</label>
      <select id="stt-lang">
        <option value="hi-IN" selected>Hindi (हिन्दी)</option>
        <option value="en-IN">English (India)</option>
        <option value="en-US">English (US)</option>
      </select>
    </div>
    <div id="stt-status" style="font-size:14px;font-weight:600;color:#A39C8B;">Mic is off</div>
    <div id="stt-unsupported" style="display:none;font-size:13px;font-weight:600;color:#B84F4F;">⚠ Your browser doesn't support speech recognition — use Chrome or Edge.</div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Transcript</div>
    <textarea id="stt-output" placeholder="Speak — text will appear here… (you can edit it too)" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:14px;line-height:1.6;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="stt-start">🎤 Start listening</button>
  <button class="btn btn-secondary" id="stt-stop">⏹ Stop</button>
  <button class="btn btn-secondary" id="stt-copy">Copy text</button>
  <button class="btn btn-secondary" id="stt-clear">Clear</button>
</div>`,
  howto: [
    'Choose the language — Hindi or English.',
    'Click <strong>🎤 Start listening</strong> and allow the mic permission.',
    'Keep speaking — text appears live. Stop and copy it.',
  ],
  faq: [
    { q: 'Which browsers does this work in?', a: 'Works best in Chrome and Edge (Web Speech API). Firefox doesn\'t support it yet. It also works in mobile Chrome.' },
    { q: 'Where does my voice go?', a: 'The browser\'s speech recognition sends audio to its own speech service (Google/Microsoft) — this is a built-in browser feature. The transcript stays only on your screen; we store nothing.' },
    { q: 'How do I use this for Hindi typing?', a: 'Keep the language as Hindi, speak, and copy the transcript to paste anywhere — WhatsApp, Word, email. The fastest way to type Hindi!' },
    { q: 'How do I improve accuracy?', a: 'Speak clearly in a quiet place, use a good mic, and select the right language. For mixed Hindi-English, en-IN often works better.' },
  ],
};
