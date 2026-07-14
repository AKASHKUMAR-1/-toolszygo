module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="sd-numbers">Numbers (separated by comma or space)</label>
      <textarea id="sd-numbers" placeholder="e.g. 10, 12, 23, 23, 16, 23, 21, 16" style="min-height:120px;"></textarea>
    </div>
    <div class="field">
      <label for="sd-type">Type</label>
      <select id="sd-type">
        <option value="sample" selected>Sample (a subset of data)</option>
        <option value="population">Population (all the data)</option>
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
    'Paste your numbers — separated by comma, space, or new line.',
    'Choose Sample or Population type (keep Sample as default if unsure).',
    'Get the mean, variance, and standard deviation instantly.',
  ],
  faq: [
    { q: 'What does standard deviation tell you?', a: 'How spread out the data is around the mean (average). A low SD means values are close to the mean, a high SD means they\'re widely spread.' },
    { q: 'What\'s the difference between Sample and Population?', a: 'Population = the entire dataset (like the whole class\'s marks). Sample = a small part of it (like 10 students from the class). The sample formula uses (n-1), which gives a slightly larger estimate (Bessel\'s correction).' },
    { q: 'What\'s the difference between variance and SD?', a: 'Variance = the square of SD. SD is more useful because its unit matches the original data (variance\'s unit is squared).' },
  ],
};
