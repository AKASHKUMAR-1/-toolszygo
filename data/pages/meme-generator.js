module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Make a Meme</div>
    <div class="dropzone" id="mg-drop" style="min-height:80px;">
      <div><strong>Choose an image</strong> or drop it here</div>
    </div>
    <input type="file" id="mg-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <div class="field">
      <label for="mg-top">Top text</label>
      <input type="text" id="mg-top" placeholder="TOP TEXT" maxlength="60">
    </div>
    <div class="field">
      <label for="mg-bottom">Bottom text</label>
      <input type="text" id="mg-bottom" placeholder="BOTTOM TEXT" maxlength="60">
    </div>
    <div class="field">
      <label>Text size: <span id="mg-size-val">10</span>%</label>
      <div class="range-row"><input type="range" id="mg-size" min="5" max="18" value="10"></div>
    </div>
  </div>
  <div class="panel panel-result" style="align-items:center;">
    <div class="panel-label" style="align-self:flex-start;">Preview</div>
    <canvas id="mg-canvas" style="max-width:100%;border-radius:10px;display:none;"></canvas>
    <div class="panel-placeholder" id="mg-placeholder">meme preview will appear here</div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="mg-download" disabled>Download meme</button>
</div>`,
  howto: [
    'Upload any image (a template or your own photo).',
    'Write top and bottom text — it renders in classic meme style with white text + black outline.',
    'Adjust the text size and click <strong>Download</strong> — ready to share!',
  ],
  faq: [
    { q: 'Does it add a watermark?', a: 'No — a completely clean meme, no watermark. Free means free!' },
    { q: 'Does non-English text work?', a: 'Yes — any language and emoji work. It renders in the classic meme font style (bold + outline).' },
    { q: 'Where do I find meme templates?', a: 'Search "meme template" on Google Images, save the image, and upload it here. Original memes from your own photos are even more fun!' },
  ],
};
