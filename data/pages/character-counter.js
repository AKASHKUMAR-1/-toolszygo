module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="cc-text" placeholder="Apna text yahan paste ya type karo…" style="min-height:180px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="stat-grid">
      <div class="stat"><div class="num" id="cc-chars">0</div><div class="lbl">Characters</div></div>
      <div class="stat"><div class="num" id="cc-chars-ns">0</div><div class="lbl">Without spaces</div></div>
      <div class="stat"><div class="num" id="cc-words">0</div><div class="lbl">Words</div></div>
      <div class="stat"><div class="num" id="cc-lines">0</div><div class="lbl">Lines</div></div>
    </div>
    <div class="result-rows" style="margin-top:6px;">
      <div class="result-row"><span class="k">Twitter / X post (280)</span><span class="v" id="cc-twitter">—</span></div>
      <div class="result-row"><span class="k">Instagram caption (2,200)</span><span class="v" id="cc-insta">—</span></div>
      <div class="result-row"><span class="k">SMS (160)</span><span class="v" id="cc-sms">—</span></div>
      <div class="result-row"><span class="k">Meta description (160)</span><span class="v" id="cc-meta">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="cc-clear">Clear text</button>
</div>`,
  howto: [
    'Apna text upar wale box me paste ya type karo.',
    'Characters (spaces ke saath aur bina), words aur lines live count hote rahenge.',
    'Neeche Twitter/X, Instagram, SMS aur meta description limits ka status dikhta hai — kitne characters bache hain.',
  ],
  faq: [
    { q: 'Kya spaces bhi characters me count hote hain?', a: 'Haan — "Characters" me spaces included hain. Bina spaces wala count alag dikhta hai. Zyada tar platforms (Twitter, SMS) spaces ko count karte hain.' },
    { q: 'Twitter/X ki character limit kya hai?', a: 'Normal accounts ke liye 280 characters per post. Links hamesha 23 characters count hote hain, chahe kitne bhi lambe hon.' },
    { q: 'SMS 160 characters se lamba ho to kya hota hai?', a: 'Message multiple SMS me split ho jaata hai (har segment 153 chars) aur har segment ka charge lagta hai. Emoji/Hindi use karne pe limit 70 characters ho jaati hai (Unicode encoding).' },
    { q: 'Google meta description kitni honi chahiye?', a: '~150–160 characters ideal hai — isse lambi hone pe Google search results me "…" laga kar kaat deta hai.' },
  ],
};
