module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;max-width:380px;margin:0 auto;">
    <input type="text" id="sc-display" readonly style="width:100%;font-family:monospace;font-size:22px;text-align:right;padding:14px;border:1px solid #E8E0D2;border-radius:10px;background:#FCFAF6;color:#3D3929;margin-bottom:10px;" value="0">
    <div id="sc-keys" style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;"></div>
  </div>
</div>`,
  howto: [
    'Normal calculator ki tarah numbers aur operations use karo.',
    'sin, cos, tan, log, ln, √, x², xʸ jaise scientific functions bhi available hain.',
    'DEG/RAD mode switch kar sakte ho trig functions ke liye.',
  ],
  faq: [
    { q: 'DEG aur RAD me kya farak hai?', a: 'DEG (degrees) me ek circle 360° ka hota hai — school math me common hai. RAD (radians) me ek circle 2π ka hota hai — higher math/physics me use hota hai. Default DEG rakha hai.' },
    { q: 'Memory (M+, MR, MC) kaise use karein?', a: 'M+ current result memory me add karta hai, MR memory se value wapas laata hai, MC memory clear karta hai — lambi calculations me intermediate results save karne ke liye.' },
    { q: 'Kya ye scientific notation handle karta hai?', a: 'Haan — bahut bade ya chhote numbers automatically scientific notation (e.g. 1.5e+10) me dikh jaate hain.' },
  ],
};
