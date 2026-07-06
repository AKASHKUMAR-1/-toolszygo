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
    <div id="stt-status" style="font-size:14px;font-weight:600;color:#A39C8B;">Mic band hai</div>
    <div id="stt-unsupported" style="display:none;font-size:13px;font-weight:600;color:#B84F4F;">⚠ Aapka browser speech recognition support nahi karta — Chrome ya Edge use karo.</div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Transcript</div>
    <textarea id="stt-output" placeholder="Bolo — text yahan aayega… (edit bhi kar sakte ho)" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:14px;line-height:1.6;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="stt-start">🎤 Start listening</button>
  <button class="btn btn-secondary" id="stt-stop">⏹ Stop</button>
  <button class="btn btn-secondary" id="stt-copy">Copy text</button>
  <button class="btn btn-secondary" id="stt-clear">Clear</button>
</div>`,
  howto: [
    'Language choose karo — Hindi ya English.',
    '<strong>🎤 Start listening</strong> dabao aur mic permission allow karo.',
    'Bolte jao — text live aata rahega. Stop karke copy kar lo.',
  ],
  faq: [
    { q: 'Kaunse browsers me chalta hai?', a: 'Chrome aur Edge me best chalta hai (Web Speech API). Firefox me abhi support nahi hai. Mobile Chrome me bhi chal jaata hai.' },
    { q: 'Meri awaaz kahan jaati hai?', a: 'Browser speech recognition ke liye audio ko apne speech service (Google/Microsoft) ko bhejta hai — ye browser ka built-in feature hai. Transcript sirf aapke screen pe rehta hai, hum kuch store nahi karte.' },
    { q: 'Hindi typing ke liye kaise use karein?', a: 'Language Hindi rakho, bolo, aur transcript copy karke kahin bhi paste karo — WhatsApp, Word, email. Hindi typing ka sabse fast tarika!' },
    { q: 'Accuracy kaise badhayein?', a: 'Shaant jagah me saaf bolo, achha mic use karo, aur sahi language select karo. Mixed Hindi-English ke liye en-IN aksar better kaam karta hai.' },
  ],
};
