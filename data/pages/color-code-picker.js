module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Pick Color</div>
    <div class="field">
      <label for="cp-picker">Choose a color</label>
      <input type="color" id="cp-picker" value="#D97757" style="width:100%;height:64px;border:1px solid #E8E0D2;border-radius:10px;background:#FCFAF6;cursor:pointer;padding:4px;">
    </div>
    <div class="field">
      <label for="cp-hex-input">Or paste a HEX code</label>
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
    'Choose any color with the color picker, or paste a HEX code (e.g. #D97757).',
    'HEX, RGB, and HSL — all three codes update instantly.',
    'Click the Copy button for whichever format you need.',
  ],
  faq: [
    { q: 'What\'s the difference between HEX, RGB, and HSL?', a: 'All three describe the same color differently. HEX (#D97757) is the most common on the web. RGB (217, 119, 87) gives red-green-blue values. HSL (17°, 63%, 60%) is hue-saturation-lightness — the most intuitive for adjusting colors.' },
    { q: 'How do I read a HEX code?', a: '#RRGGBB — the first 2 digits are red, then green, then blue (00 to FF in hexadecimal). #FF0000 = pure red, #FFFFFF = white, #000000 = black.' },
    { q: 'What is a 3-digit HEX (#F00)?', a: 'A shorthand — each digit is doubled: #F00 = #FF0000, #ABC = #AABBCC. Use the full 6-digit format in this tool.' },
    { q: 'How do I pick a color from a website?', a: 'Chrome/Edge DevTools\' color picker has an eyedropper, or use browser extensions like ColorZilla. Then paste the HEX here to convert to RGB/HSL.' },
  ],
};
