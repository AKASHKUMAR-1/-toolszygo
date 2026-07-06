module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Ye paragraph type karo (60 seconds)</div>
    <div id="tst-sample" style="font-size:15px;line-height:1.8;color:#4E4636;background:#FCFAF6;border:1px solid #E8E0D2;border-radius:10px;padding:14px;user-select:none;"></div>
    <div class="field">
      <textarea id="tst-input" placeholder="Yahan typing shuru karo — timer khud start ho jayega…" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="min-height:120px;font-size:15px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="stat-grid">
      <div class="stat"><div class="num" id="tst-timer">60</div><div class="lbl">Seconds left</div></div>
      <div class="stat"><div class="num" id="tst-wpm">0</div><div class="lbl">WPM</div></div>
      <div class="stat"><div class="num" id="tst-accuracy">100%</div><div class="lbl">Accuracy</div></div>
      <div class="stat"><div class="num" id="tst-chars">0</div><div class="lbl">Characters</div></div>
    </div>
    <div id="tst-verdict" style="font-size:14px;font-weight:600;color:#8A4B2A;text-align:center;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="tst-restart">↻ Naya test</button>
</div>`,
  howto: [
    'Diya gaya paragraph box me type karna shuru karo — timer pehle keystroke pe start hota hai.',
    '60 second me jitna sahi type kar sako karo.',
    'Time khatam hone pe WPM (words per minute) aur accuracy dikh jayegi. "Naya test" se dobara try karo.',
  ],
  faq: [
    { q: 'WPM kaise calculate hota hai?', a: 'Standard method: sahi type kiye characters ÷ 5 = words, phir per minute. 5 characters ka average word maana jaata hai. Galat characters WPM me count nahi hote.' },
    { q: 'Achhi typing speed kitni hoti hai?', a: 'Average 35–40 WPM hai. 50+ achha, 70+ professional level, 90+ excellent. Data entry jobs me aam taur pe 30–40 WPM manga jaata hai, steno/typist posts me 25–35 WPM Hindi/English.' },
    { q: 'Speed kaise badhaye?', a: 'Touch typing seekho (bina keyboard dekhe, sab 10 ungliyan), roz 15–20 minute practice karo, accuracy pehle — speed khud aayegi. 2–3 mahine me 20+ WPM improvement normal hai.' },
    { q: 'Kya ye government exam pattern jaisa hai?', a: 'Concept same hai (timed typing, WPM+accuracy). Exams me aam taur pe 10 minute ka test hota hai — yahan 60 second ka quick check hai, regular practice ke liye perfect.' },
  ],
};
