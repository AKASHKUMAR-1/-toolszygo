module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="tts-text" placeholder="Type what you want to hear here… Hindi or English both work." style="min-height:160px;"></textarea>
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
    'Type or paste your text in the box — Hindi or English.',
    'Choose a voice (an hi-IN voice is best for Hindi text) and set the speed/pitch.',
    'Click <strong>▶ Speak</strong> — the browser reads it aloud.',
  ],
  faq: [
    { q: 'Where do the voices come from?', a: 'Your browser/device\'s built-in voices (Web Speech API) are used — no server. So available voices depend on your device: Google voices in Chrome, Microsoft voices on Windows.' },
    { q: 'I don\'t see a Hindi voice?', a: 'A Hindi voice must be installed on your device. Chrome desktop usually has "Google हिन्दी". You can add voices in Windows Settings > Speech.' },
    { q: 'Can I download the audio (MP3)?', a: 'The browser\'s TTS API doesn\'t allow direct download. You\'d need a screen/audio recorder to capture it. Let us know if you need TTS with MP3 export and we\'ll consider an API-based tool in the future.' },
    { q: 'How long a text can it read?', a: 'No hard limit, but with very long text (essay+) some browsers stop midway. It\'s best to break it into paragraphs.' },
  ],
};
