module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="num-name">Apna poora naam</label>
      <input type="text" id="num-name" placeholder="e.g. Akash Kumar">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="num-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Name number (Pythagorean)</div>
    <div id="num-meaning" style="font-size:13.5px;color:#6E6552;line-height:1.6;margin-top:8px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="num-calc">Calculate number</button>
</div>
<div style="font-size:12px;color:#A39C8B;margin-top:12px;">Note: Numerology ek belief system hai, science nahi — ise entertainment/curiosity ke liye lo.</div>`,
  howto: [
    'Apna poora naam daalo (English letters me).',
    '<strong>Calculate</strong> dabao — Pythagorean system se aapka name number aur uske traits dikhenge.',
  ],
  faq: [
    { q: 'Name number kaise banta hai?', a: 'Pythagorean system: A=1, B=2 … I=9, phir J=1 se repeat. Sab letters ke numbers jodkar single digit tak reduce karte hain (11, 22, 33 master numbers chhod kar). E.g. AKASH = 1+2+1+1+8 = 13 → 1+3 = 4.' },
    { q: 'Master numbers (11, 22, 33) kya hote hain?', a: 'Numerology me ye numbers reduce nahi kiye jaate — inhe special maana jaata hai: 11 (intuition), 22 (master builder), 33 (master teacher).' },
    { q: 'Chaldean aur Pythagorean me kya difference hai?', a: 'Do alag systems hain — Pythagorean letters ko alphabetical order me 1-9 deta hai (ye tool yahi use karta hai); Chaldean sound-based hai aur 1-8 use karta hai. Results alag aa sakte hain.' },
    { q: 'Kya ye scientific hai?', a: 'Nahi — numerology ek traditional belief system hai, iska koi scientific evidence nahi hai. Fun aur curiosity ke liye enjoy karo!' },
  ],
};
