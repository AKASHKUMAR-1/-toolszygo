module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Options</div>
    <div class="field-row">
      <div class="field">
        <label for="li-count">Kitna chahiye?</label>
        <input type="number" id="li-count" value="3" min="1" max="50" step="1">
      </div>
      <div class="field">
        <label for="li-type">Type</label>
        <select id="li-type">
          <option value="paragraphs" selected>Paragraphs</option>
          <option value="sentences">Sentences</option>
          <option value="words">Words</option>
        </select>
      </div>
    </div>
    <div class="checks">
      <label><input type="checkbox" id="li-start" checked> "Lorem ipsum dolor sit amet…" se start karo</label>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <textarea id="li-result" readonly style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-size:13.5px;line-height:1.6;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="li-generate">Generate text</button>
  <button class="btn btn-secondary" id="li-copy">Copy text</button>
</div>`,
  howto: [
    'Kitne paragraphs, sentences ya words chahiye wo set karo.',
    'Classic "Lorem ipsum dolor…" se start karna hai ya nahi, checkbox se choose karo.',
    '<strong>Generate</strong> dabao aur text copy karke apne design/mockup me use karo.',
  ],
  faq: [
    { q: 'Lorem ipsum kya hai aur kahan use hota hai?', a: 'Lorem ipsum 1500s se printing industry ka standard dummy text hai. Designs, websites aur mockups me placeholder ke roop me use hota hai taaki dhyan layout pe rahe, content pe nahi.' },
    { q: 'Kya ye real Latin hai?', a: 'Ye Cicero ke "De finibus bonorum et malorum" (45 BC) se scrambled hai — dikhta Latin jaisa hai lekin meaningful nahi. Isi liye ye distract nahi karta.' },
    { q: 'Lorem ipsum hi kyun, koi bhi text kyun nahi?', a: 'Real text pe log content padhne lagte hain aur design pe focus nahi rehta. Lorem ipsum me letters ka natural distribution hota hai isliye layout realistic dikhta hai.' },
    { q: 'Kitna text generate kar sakta hoon?', a: '50 paragraphs tak ek baar me — zyada chahiye to phir se generate karke append kar lo.' },
  ],
};
