module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="tr-input" placeholder="Apna text yahan likho…" style="min-height:180px;"></textarea>
    </div>
    <div class="field">
      <label for="tr-mode">Kya reverse karna hai?</label>
      <select id="tr-mode">
        <option value="chars" selected>Characters (poora text ulta)</option>
        <option value="words">Words ka order</option>
        <option value="lines">Lines ka order</option>
        <option value="eachword">Har word apne me ulta (order same)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <textarea id="tr-output" readonly placeholder="reversed text yahan aayega…" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.5;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="tr-run">Reverse text</button>
  <button class="btn btn-secondary" id="tr-copy">Copy result</button>
</div>`,
  howto: [
    'Apna text input box me likho ya paste karo.',
    'Mode choose karo — poora text characters me ulta, words ka order ulta, lines ka order ulta, ya har word apne aap me ulta.',
    '<strong>Reverse text</strong> dabao aur result copy karo.',
  ],
  faq: [
    { q: '"Characters reverse" aur "words reverse" me kya difference hai?', a: '"hello world" characters me ulta = "dlrow olleh". Words ka order ulta = "world hello" (words khud sahi rehte hain, bas order palta hai).' },
    { q: 'Kya emoji aur Hindi text sahi reverse hota hai?', a: 'Haan — tool Unicode-aware hai, emoji aur Hindi matras toot te nahi. Simple string reverse karne wale tools me ye aksar kharab ho jaata hai.' },
    { q: 'Ye kis kaam aata hai?', a: 'Fun messages, palindrome check karne, word games, ya data me lines/words ka order ulta karne ke liye. Coders ke liye quick string manipulation.' },
    { q: 'Palindrome kaise check karoon?', a: 'Apna word/sentence daal kar characters reverse karo — agar result same hai to palindrome hai (jaise "madam", "nitin").' },
  ],
};
