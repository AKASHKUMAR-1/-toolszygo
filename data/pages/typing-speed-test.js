module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Type this paragraph (60 seconds)</div>
    <div id="tst-sample" style="font-size:15px;line-height:1.8;color:#4E4636;background:#FCFAF6;border:1px solid #E8E0D2;border-radius:10px;padding:14px;user-select:none;"></div>
    <div class="field">
      <textarea id="tst-input" placeholder="Start typing here — the timer starts automatically…" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="min-height:120px;font-size:15px;"></textarea>
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
  <button class="btn btn-primary" id="tst-restart">↻ New test</button>
</div>`,
  howto: [
    'Start typing the given paragraph in the box — the timer starts on the first keystroke.',
    'Type as much as you can correctly in 60 seconds.',
    'When time\'s up, your WPM (words per minute) and accuracy appear. Click "New test" to try again.',
  ],
  faq: [
    { q: 'How is WPM calculated?', a: 'The standard method: correctly typed characters ÷ 5 = words, then per minute. An average word is taken as 5 characters. Incorrect characters don\'t count toward WPM.' },
    { q: 'What is a good typing speed?', a: 'Average is 35–40 WPM. 50+ is good, 70+ is professional level, 90+ is excellent. Data entry jobs usually require 30–40 WPM; steno/typist posts require 25–35 WPM.' },
    { q: 'How do I increase my speed?', a: 'Learn touch typing (without looking at the keyboard, using all 10 fingers), practice 15–20 minutes daily, and prioritize accuracy — speed follows. A 20+ WPM improvement in 2–3 months is normal.' },
    { q: 'Is this like a government exam pattern?', a: 'The concept is the same (timed typing, WPM+accuracy). Exams usually have a 10-minute test — this is a 60-second quick check, perfect for regular practice.' },
  ],
};
