module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Pick Color</div>
    <div class="field">
      <label for="cp-picker">Color choose karo</label>
      <input type="color" id="cp-picker" value="#D97757" style="width:100%;height:64px;border:1px solid #E8E0D2;border-radius:10px;background:#FCFAF6;cursor:pointer;padding:4px;">
    </div>
    <div class="field">
      <label for="cp-hex-input">Ya HEX code paste karo</label>
      <input type="text" id="cp-hex-input" value="#D97757" placeholder="#D97757" maxlength="7" style="font-family:monospace;">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div id="cp-swatch" style="height:56px;border-radius:10px;border:1px solid #F0E0CC;background:#D97757;"></div>
    <div class="result-rows">
      <div class="result-row"><span class="k">HEX</span><span class="v" style="font-family:monospace;" id="cp-hex">#D97757</span></div>
      <div class="result-row"><span class="k">RGB</span><span class="v" style="font-family:monospace;" id="cp-rgb">—</span></div>
      <div class="result-row"><span class="k">HSL</span><span class="v" style="font-family:monospace;" id="cp-hsl">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="cp-copy-hex">Copy HEX</button>
  <button class="btn btn-secondary" id="cp-copy-rgb">Copy RGB</button>
  <button class="btn btn-secondary" id="cp-copy-hsl">Copy HSL</button>
</div>`,
  howto: [
    'Color picker se koi bhi color choose karo, ya HEX code (e.g. #D97757) paste karo.',
    'HEX, RGB aur HSL — teeno codes turant update ho jaate hain.',
    'Jo format chahiye uska Copy button dabao.',
  ],
  faq: [
    { q: 'HEX, RGB aur HSL me kya difference hai?', a: 'Teeno same color ko alag tarah likhte hain. HEX (#D97757) web me sabse common hai. RGB (217, 119, 87) red-green-blue values deta hai. HSL (17°, 63%, 60%) hue-saturation-lightness — colors ko adjust karne ke liye sabse intuitive.' },
    { q: 'HEX code kaise padhte hain?', a: '#RRGGBB — pehle 2 digits red, phir green, phir blue (00 se FF tak hexadecimal me). #FF0000 = pure red, #FFFFFF = white, #000000 = black.' },
    { q: '3-digit HEX (#F00) kya hota hai?', a: 'Shorthand — har digit double ho jaata hai: #F00 = #FF0000, #ABC = #AABBCC. Tool me full 6-digit format use karo.' },
    { q: 'Website se color kaise pick karoon?', a: 'Chrome/Edge DevTools ke color picker me eyedropper hota hai, ya browser extensions (ColorZilla) use karo. Phir HEX yahan paste karke RGB/HSL me convert kar lo.' },
  ],
};
