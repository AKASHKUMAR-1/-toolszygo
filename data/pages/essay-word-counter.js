module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel">
    <div class="panel-label">Essay</div>
    <div class="field-row">
      <div class="field" style="max-width:200px;">
        <label for="ew-target">Word limit / target</label>
        <input type="number" id="ew-target" value="500" min="10" step="50">
      </div>
    </div>
    <div class="field">
      <textarea id="ew-text" placeholder="Apna essay yahan likho ya paste karo…" style="min-height:220px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Progress</div>
    <div style="background:rgba(255,255,255,0.65);border:1px solid #F0E0CC;border-radius:10px;height:18px;overflow:hidden;">
      <div id="ew-bar" style="height:100%;width:0%;background:linear-gradient(90deg,var(--accent),#E8A87C);border-radius:10px;transition:width 0.2s;"></div>
    </div>
    <div class="stat-grid" style="margin-top:6px;">
      <div class="stat"><div class="num" id="ew-words">0</div><div class="lbl">Words</div></div>
      <div class="stat"><div class="num" id="ew-remaining">500</div><div class="lbl">Bache hue</div></div>
      <div class="stat"><div class="num" id="ew-chars">0</div><div class="lbl">Characters</div></div>
      <div class="stat"><div class="num" id="ew-paras">0</div><div class="lbl">Paragraphs</div></div>
    </div>
    <div id="ew-status" style="font-size:13.5px;font-weight:600;text-align:center;"></div>
  </div>
</div>`,
  howto: [
    'Apna word limit set karo (e.g. 500 words ka essay).',
    'Essay likho ya paste karo — progress bar aur counts live update honge.',
    'Limit cross hone pe warning dikh jayegi.',
  ],
  faq: [
    { q: 'Word limit ke kitna paas jaana chahiye?', a: 'Target ka 90–100% ideal hai — 500-word essay me 450–500 words. Bahut kam likhna incomplete lagta hai; exams me limit cross karne pe marks kat sakte hain (UPSC jaise exams me strict hai).' },
    { q: 'Kya headings/references bhi count hote hain?', a: 'Ye tool sab visible text count karta hai. Aapke exam/assignment ke rules check karo — kuch me references/bibliography excluded hoti hai.' },
    { q: 'UPSC essay ke liye kitne words?', a: 'UPSC mains essay 1000–1200 words (roughly), Section me 2 essays. Word limit ka strict paalan karo — examiner ko lambe essays pasand nahi aate.' },
    { q: 'Mera essay save rahega kya?', a: 'Nahi — page refresh pe text chala jayega. Apna essay likhne ke liye Word/Docs use karo aur count check karne yahan paste karo.' },
  ],
};
