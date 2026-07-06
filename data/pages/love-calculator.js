module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Names</div>
    <div class="field">
      <label for="love-name1">Pehla naam</label>
      <input type="text" id="love-name1" placeholder="e.g. Rahul">
    </div>
    <div class="field">
      <label for="love-name2">Doosra naam</label>
      <input type="text" id="love-name2" placeholder="e.g. Priya">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;justify-content:center;align-items:center;">
    <div class="panel-label" style="align-self:flex-start;">Result</div>
    <div class="result-big" id="love-percent" style="font-size:44px;">💘</div>
    <div id="love-message" style="font-size:14px;font-weight:600;color:#A85585;text-align:center;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="love-calc">💘 Calculate love</button>
</div>
<div style="font-size:12px;color:#A39C8B;margin-top:12px;">Note: Ye sirf entertainment ke liye hai — asli rishte mehnat, samajh aur bharose se bante hain! 😄</div>`,
  howto: [
    'Dono naam daalo.',
    '<strong>💘 Calculate love</strong> dabao — compatibility percentage aur message milega.',
    'Doston ke saath try karke maza lo!',
  ],
  faq: [
    { q: 'Kya ye sach me love compatibility batata hai?', a: 'Nahi! 😄 Ye purely entertainment ke liye hai — names ke letters se ek fun number banta hai. Asli compatibility values, communication aur respect se aati hai, calculators se nahi.' },
    { q: 'Same names pe hamesha same result kyun aata hai?', a: 'Result names se mathematically banta hai (random nahi) — taaki dost same names daal kar cross-check karein to same answer mile. Warna pakde jaate! 😉' },
    { q: 'Naam ka order matter karta hai?', a: 'Nahi — "Rahul + Priya" aur "Priya + Rahul" same result dete hain, jaisa hona chahiye.' },
    { q: '100% kabhi aata hai kya?', a: 'Bahut rare hai — jaise real life me! Lekin kuch lucky pairs ko mil jaata hai. Try karte raho. 💕' },
  ],
};
