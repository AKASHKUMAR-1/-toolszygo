module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="dl-input" placeholder="Apni list yahan paste karo — har line ek item…" style="min-height:200px;"></textarea>
    </div>
    <div class="checks">
      <label><input type="checkbox" id="dl-case"> Case-insensitive matching (Apple = apple)</label>
      <label><input type="checkbox" id="dl-trim" checked> Aage-peeche ke spaces ignore karo</label>
      <label><input type="checkbox" id="dl-empty" checked> Khaali lines bhi hatao</label>
      <label><input type="checkbox" id="dl-sort"> Result ko A–Z sort karo</label>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div id="dl-summary" style="font-size:13px;font-weight:600;color:#8A4B2A;"></div>
    <textarea id="dl-output" readonly placeholder="unique lines yahan aayengi…" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.5;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="dl-run">Remove duplicates</button>
  <button class="btn btn-secondary" id="dl-copy">Copy result</button>
</div>`,
  howto: [
    'Apni list paste karo — har line ek item (names, emails, URLs, kuch bhi).',
    'Options choose karo — case-insensitive matching, space trimming, sorting.',
    '<strong>Remove duplicates</strong> dabao — sirf unique lines bachegi, kitni duplicates hati ye bhi dikhega.',
  ],
  faq: [
    { q: 'Lines ka original order preserve hota hai?', a: 'Haan — har line ki pehli occurrence apni jagah rehti hai, sirf baad wali copies hatati hain. Agar A–Z order chahiye to "sort karo" option on kar lo.' },
    { q: 'Case-insensitive matching kab use karein?', a: 'Jab "Apple", "apple" aur "APPLE" ko same maanna ho — jaise email lists me. Result me pehli occurrence ka original case rehta hai.' },
    { q: 'Kitni badi list handle ho sakti hai?', a: 'Lakhs of lines aaram se — processing browser me instant hoti hai.' },
    { q: 'Kya ye emails/URLs ki list ke liye kaam karega?', a: 'Haan — ye har line ko as-is compare karta hai. Email lists ke liye case-insensitive + trim dono on rakho, best results milenge.' },
  ],
};
