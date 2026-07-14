module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;max-width:380px;margin:0 auto;">
    <input type="text" id="sc-display" readonly style="width:100%;font-family:monospace;font-size:22px;text-align:right;padding:14px;border:1px solid #E8E0D2;border-radius:10px;background:#FCFAF6;color:#3D3929;margin-bottom:10px;" value="0">
    <div id="sc-keys" style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;"></div>
  </div>
</div>`,
  howto: [
    'Use numbers and operations like a normal calculator.',
    'Scientific functions like sin, cos, tan, log, ln, √, x², xʸ are available too.',
    'Switch between DEG/RAD mode for trig functions.',
  ],
  faq: [
    { q: 'What\'s the difference between DEG and RAD?', a: 'In DEG (degrees), a full circle is 360° — common in school math. In RAD (radians), a full circle is 2π — used in higher math/physics. The default is DEG.' },
    { q: 'How do I use memory (M+, MR, MC)?', a: 'M+ adds the current result to memory, MR recalls the value from memory, MC clears memory — for saving intermediate results in long calculations.' },
    { q: 'Does it handle scientific notation?', a: 'Yes — very large or small numbers automatically display in scientific notation (e.g. 1.5e+10).' },
  ],
};
