module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="wc-text" placeholder="Apna text yahan paste ya type karo…" style="min-height:220px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="stat-grid">
      <div class="stat"><div class="num" id="wc-words">0</div><div class="lbl">Words</div></div>
      <div class="stat"><div class="num" id="wc-chars">0</div><div class="lbl">Characters</div></div>
      <div class="stat"><div class="num" id="wc-chars-ns">0</div><div class="lbl">Chars (no spaces)</div></div>
      <div class="stat"><div class="num" id="wc-sentences">0</div><div class="lbl">Sentences</div></div>
      <div class="stat"><div class="num" id="wc-paras">0</div><div class="lbl">Paragraphs</div></div>
      <div class="stat"><div class="num" id="wc-read">0 min</div><div class="lbl">Reading time</div></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="wc-clear">Clear text</button>
</div>`,
  howto: [
    'Apna text upar wale box me paste ya type karo.',
    'Words, characters, sentences, paragraphs aur reading time live update hote rahenge.',
    'Naya text check karne ke liye "Clear text" dabao.',
  ],
  faq: [
    { q: 'Reading time kaise calculate hota hai?', a: 'Average reading speed 200 words per minute maan kar: reading time = words ÷ 200. Ye ek standard estimate hai jo blogs aur articles ke liye use hota hai.' },
    { q: 'Kya mera text kahin upload hota hai?', a: 'Nahi. Text aapke browser me hi count hota hai — koi data server pe nahi jaata, isliye confidential documents ke liye bhi safe hai.' },
    { q: 'Word count me hyphenated words kaise count hote hain?', a: 'Space se alag hone wali har cheez ek word hai — "state-of-the-art" ek word count hoga, jaise MS Word me hota hai.' },
    { q: 'Kya isme character limit hai?', a: 'Koi limit nahi — lambi essays, articles aur books ke chapters bhi paste kar sakte ho.' },
  ],
};
