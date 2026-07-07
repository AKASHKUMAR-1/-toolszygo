module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="sd-numbers">Numbers (comma ya space se alag)</label>
      <textarea id="sd-numbers" placeholder="e.g. 10, 12, 23, 23, 16, 23, 21, 16" style="min-height:120px;"></textarea>
    </div>
    <div class="field">
      <label for="sd-type">Type</label>
      <select id="sd-type">
        <option value="sample" selected>Sample (data ka ek hissa)</option>
        <option value="population">Population (poora data)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="sd-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Standard Deviation</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Count (n)</span><span class="v" id="sd-count">—</span></div>
      <div class="result-row"><span class="k">Mean (average)</span><span class="v" id="sd-mean">—</span></div>
      <div class="result-row"><span class="k">Variance</span><span class="v" id="sd-variance">—</span></div>
      <div class="result-row"><span class="k">Sum</span><span class="v" id="sd-sum">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Numbers paste karo — comma, space ya nayi line se alag kar sakte ho.',
    'Sample ya Population type choose karo (agar pata na ho to Sample default rakho).',
    'Mean, variance aur standard deviation turant mil jayenge.',
  ],
  faq: [
    { q: 'Standard deviation kya batata hai?', a: 'Data mean (average) ke aas-paas kitna phaila hua hai. Kam SD matlab values mean ke paas hain, zyada SD matlab widely spread hain.' },
    { q: 'Sample aur Population me kya farak hai?', a: 'Population = poora dataset (jaise pure class ke marks). Sample = usme se ek chhota hissa (jaise class ke 10 students). Sample formula me (n-1) use hota hai jo thoda bada estimate deta hai (Bessel\'s correction).' },
    { q: 'Variance aur SD me kya farak hai?', a: 'Variance = SD ka square. SD zyada useful hai kyunki iski unit original data jaisi hoti hai (variance ki unit squared hoti hai).' },
  ],
};
