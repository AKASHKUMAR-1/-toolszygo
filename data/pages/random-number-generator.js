module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Options</div>
    <div class="field-row">
      <div class="field">
        <label for="rn-min">Minimum</label>
        <input type="number" id="rn-min" value="1" step="1">
      </div>
      <div class="field">
        <label for="rn-max">Maximum</label>
        <input type="number" id="rn-max" value="100" step="1">
      </div>
    </div>
    <div class="field">
      <label for="rn-count">Kitne numbers chahiye?</label>
      <input type="number" id="rn-count" value="1" min="1" max="1000" step="1">
    </div>
    <div class="checks">
      <label><input type="checkbox" id="rn-unique"> Sab alag-alag hon (no repeat)</label>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="rn-result" style="word-break:break-word;font-size:28px;line-height:1.4;">—</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="rn-generate">Generate</button>
  <button class="btn btn-secondary" id="rn-copy">Copy result</button>
</div>`,
  howto: [
    'Range set karo — minimum aur maximum (dono included).',
    'Kitne numbers chahiye wo daalo — lucky draw ke liye 1, lottery jaisa list ke liye zyada.',
    'Agar repeat nahi chahiye to "no repeat" tick karo.',
    '<strong>Generate</strong> dabao — numbers turant mil jayenge.',
  ],
  faq: [
    { q: 'Kya numbers truly random hote hain?', a: 'Browser ka cryptographically secure generator (crypto.getRandomValues) use hota hai — Math.random() se kahin better. Lucky draws aur giveaways ke liye fair hai.' },
    { q: 'Min aur max included hote hain?', a: 'Haan — dono boundaries included hain. 1 se 100 set karne pe 1 aur 100 dono aa sakte hain.' },
    { q: '"No repeat" me kitne numbers nikal sakte hain?', a: 'Range ke size tak — 1 se 100 ki range me maximum 100 unique numbers. Isse zyada maangoge to tool bata dega.' },
    { q: 'Lucky draw winner kaise pick karoon?', a: 'Participants ko 1 se N tak number do (list order se). Min 1, Max N set karke ek number generate karo — wahi winner. Screenshot le lo proof ke liye.' },
  ],
};
