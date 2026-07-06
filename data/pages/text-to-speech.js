module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="tts-text" placeholder="Jo sunna hai wo yahan likho… Hindi ya English dono chalega." style="min-height:160px;"></textarea>
    </div>
    <div class="field">
      <label for="tts-voice">Voice</label>
      <select id="tts-voice"></select>
    </div>
    <div class="field-row">
      <div class="field">
        <label>Speed: <span id="tts-rate-val">1</span>x</label>
        <div class="range-row"><input type="range" id="tts-rate" min="0.5" max="2" step="0.1" value="1"></div>
      </div>
      <div class="field">
        <label>Pitch: <span id="tts-pitch-val">1</span></label>
        <div class="range-row"><input type="range" id="tts-pitch" min="0.5" max="2" step="0.1" value="1"></div>
      </div>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;justify-content:center;align-items:center;">
    <div class="panel-label" style="align-self:flex-start;">Status</div>
    <div id="tts-status" style="font-family:var(--serif);font-size:22px;font-weight:600;color:#8A4B2A;text-align:center;">Ready 🔊</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="tts-speak">▶ Speak</button>
  <button class="btn btn-secondary" id="tts-pause">⏸ Pause</button>
  <button class="btn btn-secondary" id="tts-stop">⏹ Stop</button>
</div>`,
  howto: [
    'Apna text box me likho ya paste karo — Hindi ya English.',
    'Voice choose karo (Hindi text ke liye hi-IN voice best hai) aur speed/pitch set karo.',
    '<strong>▶ Speak</strong> dabao — browser bol kar sunayega.',
  ],
  faq: [
    { q: 'Awaazein kahan se aati hain?', a: 'Aapke browser/device ki built-in voices (Web Speech API) use hoti hain — koi server nahi. Isliye available voices device pe depend karti hain: Chrome me Google voices, Windows me Microsoft voices.' },
    { q: 'Hindi voice nahi dikh rahi?', a: 'Device pe Hindi voice installed honi chahiye. Chrome desktop me "Google हिन्दी" aam taur pe hoti hai. Windows Settings > Speech me voices add kar sakte ho.' },
    { q: 'Audio download (MP3) kar sakte hain?', a: 'Browser ki TTS API direct download nahi deti. Recording ke liye screen/audio recorder use karna hoga. MP3 export wala TTS chahiye to batao, future me API-based tool consider karenge.' },
    { q: 'Kitna lamba text bol sakta hai?', a: 'Koi hard limit nahi, lekin bahut lambe text (essay+) me kuch browsers beech me ruk jaate hain. Paragraphs me tod kar sunna best hai.' },
  ],
};
