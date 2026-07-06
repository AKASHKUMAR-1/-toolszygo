module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="dom-keyword">Keyword (business/idea)</label>
      <input type="text" id="dom-keyword" placeholder="e.g. bakery, fitness, tools">
    </div>
    <div class="field">
      <label for="dom-ext">Preferred extension</label>
      <select id="dom-ext">
        <option value=".com" selected>.com</option>
        <option value=".in">.in</option>
        <option value=".co.in">.co.in</option>
        <option value=".io">.io</option>
        <option value=".shop">.shop</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Domain Ideas</div>
    <div id="dom-results" style="display:flex;flex-direction:column;gap:6px;font-family:monospace;font-size:14px;color:#8A4B2A;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="dom-generate">Generate ideas</button>
  <button class="btn btn-secondary" id="dom-copy">Copy all</button>
</div>
<div style="font-size:12px;color:#A39C8B;margin-top:12px;">Note: Ye sirf ideas hain — availability check karne ke liye GoDaddy/Namecheap/Hostinger pe search karo.</div>`,
  howto: [
    'Apne business/idea ka main keyword daalo.',
    'Preferred extension choose karo (.com, .in…).',
    '<strong>Generate</strong> dabao — 20 creative domain ideas mil jayenge. Pasand aaye to registrar pe availability check karo.',
  ],
  faq: [
    { q: 'Achha domain naam kaisa hota hai?', a: 'Chhota (6–14 characters), bolne-likhne me aasan, numbers/hyphens ke bina, aur brand jaisa yaadgar. .com sabse trusted hai; India-focused business ke liye .in bhi achha hai.' },
    { q: 'Availability kaise check karein?', a: 'Ideas copy karke GoDaddy, Namecheap ya Hostinger pe search karo — wahan available/taken dikh jaata hai aur price bhi. Ye tool sirf ideas generate karta hai.' },
    { q: '.com nahi mil raha to kya karein?', a: 'Prefix/suffix try karo (get-, -app, -hq), ya .in/.io/.co jaisi extensions dekho. Bas confusingly similar naam kisi established brand se mat lo.' },
    { q: 'Domain kitne ka aata hai?', a: '.com ~₹800–1,200/saal, .in ~₹500–800/saal. Pehle saal ke discounts aam hain — renewal price zaroor check karo.' },
  ],
};
