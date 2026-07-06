module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="min-type">Code Type</label>
      <select id="min-type">
        <option value="css" selected>CSS</option>
        <option value="js">JavaScript</option>
        <option value="html">HTML</option>
      </select>
    </div>
    <div class="field">
      <textarea id="min-input" placeholder="Apna code yahan paste karo…" spellcheck="false" style="min-height:200px;font-family:monospace;font-size:13px;"></textarea>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Minified Output</div>
    <div id="min-stats" style="font-size:13px;font-weight:600;color:#5D8A4E;"></div>
    <textarea id="min-output" readonly spellcheck="false" style="flex:1;min-height:200px;border:1px solid #F0E0CC;border-radius:10px;background:rgba(255,255,255,0.65);font-family:monospace;font-size:12.5px;color:#3D3929;padding:12px;resize:vertical;"></textarea>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="min-run">Minify code</button>
  <button class="btn btn-secondary" id="min-copy">Copy result</button>
</div>`,
  howto: [
    'Code type choose karo — CSS, JavaScript ya HTML.',
    'Apna code paste karo.',
    '<strong>Minify</strong> dabao — comments aur extra whitespace hat jayega, size saving dikh jayegi.',
  ],
  faq: [
    { q: 'Minify karne se kya fayda hai?', a: 'File size 20–60% kam ho jaata hai — page fast load hota hai, jo SEO aur user experience dono ke liye achha hai. Browser ko formatted code ki zaroorat nahi hoti.' },
    { q: 'Kya minified code ka behavior badal sakta hai?', a: 'Ye tool safe minification karta hai — comments aur whitespace hatata hai, variable names nahi badalta. Phir bhi JS me ASI (missing semicolons) wale edge cases me test kar lena. Production builds ke liye Terser/cssnano jaise tools bhi dekh sakte ho.' },
    { q: 'Minified code wapas readable kaise banega?', a: 'Ye one-way hai — original sambhal kar rakho. Formatted version wapas chahiye to "beautifier" tools use karo.' },
    { q: 'HTML minify me kya hota hai?', a: 'HTML comments aur tags ke beech ka extra whitespace hatta hai. &lt;pre&gt; aur &lt;textarea&gt; ka content preserve hota hai.' },
  ],
};
