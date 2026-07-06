module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <textarea id="gc-input" placeholder="Apna English text yahan paste karo…" style="min-height:220px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Issues</div>
    <div id="gc-summary" style="font-size:13px;font-weight:600;"></div>
    <div id="gc-issues" style="display:flex;flex-direction:column;gap:8px;font-size:13px;overflow:auto;max-height:320px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="gc-check">Check grammar</button>
</div>`,
  howto: [
    'Apna English text paste karo.',
    '<strong>Check grammar</strong> dabao — common mistakes list ho jayengi.',
    'Har issue ke saath suggestion milta hai — text theek karke dobara check karo.',
  ],
  faq: [
    { q: 'Ye kya-kya check karta hai?', a: 'Repeated words (the the), lowercase "i", sentence capital se shuru na hona, double spaces, punctuation ke pehle space, common confusions (your/you\\u2019re, its/it\\u2019s ke patterns), aur bahut common misspellings.' },
    { q: 'Kya ye Grammarly jaisa hai?', a: 'Nahi — ye basic rule-based checker hai jo common galtiyan pakadta hai. Deep grammar (tense, prepositions) ke liye AI tools chahiye. Quick check ke liye ye fast aur private hai.' },
    { q: 'Hindi text check hoga?', a: 'Nahi — rules English ke liye hain. Hindi text pe sirf spacing/punctuation wale checks kaam karenge.' },
  ],
};
