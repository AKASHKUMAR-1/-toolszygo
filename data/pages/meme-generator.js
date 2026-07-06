module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Meme Banao</div>
    <div class="dropzone" id="mg-drop" style="min-height:80px;">
      <div><strong>Image choose karo</strong> ya yahan drop karo</div>
    </div>
    <input type="file" id="mg-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <div class="field">
      <label for="mg-top">Top text</label>
      <input type="text" id="mg-top" placeholder="UPAR WALA TEXT" maxlength="60">
    </div>
    <div class="field">
      <label for="mg-bottom">Bottom text</label>
      <input type="text" id="mg-bottom" placeholder="NEECHE WALA TEXT" maxlength="60">
    </div>
    <div class="field">
      <label>Text size: <span id="mg-size-val">10</span>%</label>
      <div class="range-row"><input type="range" id="mg-size" min="5" max="18" value="10"></div>
    </div>
  </div>
  <div class="panel panel-result" style="align-items:center;">
    <div class="panel-label" style="align-self:flex-start;">Preview</div>
    <canvas id="mg-canvas" style="max-width:100%;border-radius:10px;display:none;"></canvas>
    <div class="panel-placeholder" id="mg-placeholder">meme preview yahan dikhega</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="mg-download" disabled>Download meme</button>
</div>`,
  howto: [
    'Koi bhi image upload karo (template ya apni photo).',
    'Top aur bottom text likho — classic meme style me white text + black outline aayega.',
    'Text size adjust karke <strong>Download</strong> dabao — WhatsApp pe bhejne ke liye ready!',
  ],
  faq: [
    { q: 'Kya watermark aata hai?', a: 'Nahi — bilkul clean meme, koi watermark nahi. Free ka matlab free!' },
    { q: 'Hindi text chalega?', a: 'Haan — Hindi, Hinglish, emoji sab chalta hai. Classic meme font style (bold + outline) me render hota hai.' },
    { q: 'Meme templates kahan se laun?', a: 'Google Images me "meme template" search karo, image save karke yahan upload kar do. Apni photos se original memes aur bhi mazedaar bante hain!' },
  ],
};
