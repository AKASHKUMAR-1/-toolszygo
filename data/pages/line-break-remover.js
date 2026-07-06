module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="lb-input" placeholder="PDF ya email se copy kiya text yahan paste karo…" style="min-height:200px;"></textarea>
    </div>
    <div class="field">
      <label for="lb-mode">Mode</label>
      <select id="lb-mode">
        <option value="space" selected>Line breaks ko space se replace karo</option>
        <option value="none">Line breaks bilkul hatao (jodo)</option>
        <option value="para">Paragraphs rakho, andar ke breaks hatao</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <textarea id="lb-output" readonly placeholder="clean text yahan aayega…" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.5;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="lb-run">Remove line breaks</button>
  <button class="btn btn-secondary" id="lb-copy">Copy result</button>
</div>`,
  howto: [
    'PDF, email ya kahin se bhi copy kiya hua text paste karo.',
    'Mode choose karo — sab breaks ko space banao, bilkul hatao, ya paragraphs preserve karke andar ke breaks hatao.',
    '<strong>Remove line breaks</strong> dabao aur clean text copy karo.',
  ],
  faq: [
    { q: 'PDF se copy karne pe har line pe break kyun aata hai?', a: 'PDF me text visually lines me store hota hai, isliye copy karne pe har visual line ke baad newline aa jaati hai. Ye tool un faltu breaks ko hata kar natural flowing text bana deta hai.' },
    { q: '"Paragraphs rakho" mode kaise kaam karta hai?', a: 'Do ya zyada consecutive line breaks (khaali line) paragraph boundary maane jaate hain — wo preserve hote hain. Sirf paragraph ke andar ke single breaks space bante hain.' },
    { q: 'Kya double spaces ban jayenge?', a: 'Nahi — replace karne ke baad tool multiple spaces ko single space me collapse kar deta hai.' },
    { q: 'Word/Docs me paste karne pe formatting sahi rahegi?', a: 'Haan — output plain text hai, aap use kahin bhi paste kar sakte ho aur wahan ki formatting apply hogi.' },
  ],
};
