module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Original Text</div>
    <div class="field">
      <textarea id="diff-a" placeholder="Pehla (original) text…" spellcheck="false" style="min-height:170px;font-family:monospace;font-size:13px;"></textarea>
    </div>
  </div>
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Changed Text</div>
    <div class="field">
      <textarea id="diff-b" placeholder="Doosra (changed) text…" spellcheck="false" style="min-height:170px;font-family:monospace;font-size:13px;"></textarea>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="diff-run">Compare texts</button>
</div>
<div class="panel panel-result" style="margin-top:16px;min-height:0;">
  <div class="panel-label">Result</div>
  <div id="diff-summary" style="font-size:13px;font-weight:600;color:#8A4B2A;"></div>
  <div id="diff-output" style="font-family:monospace;font-size:12.5px;line-height:1.6;white-space:pre-wrap;word-break:break-word;"></div>
</div>`,
  howto: [
    'Pehle box me original text paste karo.',
    'Doosre box me changed/naya text paste karo.',
    '<strong>Compare texts</strong> dabao — hati hui lines laal me, nayi lines hari me dikh jayengi.',
  ],
  faq: [
    { q: 'Diff kaise calculate hota hai?', a: 'Line-by-line comparison hota hai LCS (Longest Common Subsequence) algorithm se — wahi approach jo Git jaise version control tools use karte hain.' },
    { q: 'Kya mera text kahin upload hota hai?', a: 'Nahi — comparison poori tarah browser me hota hai. Contracts, code ya confidential documents compare karna bhi safe hai.' },
    { q: 'Colors ka kya matlab hai?', a: 'Laal background wali lines original me thi lekin nayi version me nahi (removed). Hari lines nayi version me add hui hain. Bina color wali lines dono me same hain.' },
    { q: 'Word-level diff milega kya?', a: 'Abhi line-level diff hai jo zyada tar cases me kaafi hai. Kisi line me chhota sa change hai to wo line removed+added dono me dikhegi.' },
  ],
};
