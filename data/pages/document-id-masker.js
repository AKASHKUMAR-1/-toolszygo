module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="dm-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose a photo</strong> of your Aadhaar/PAN or drop it here</div>
      <div style="font-size:11.5px;">nothing is uploaded — it stays on your device</div>
    </div>
    <input type="file" id="dm-file" accept="image/jpeg,image/png,image/webp" style="display:none;">
    <div id="dm-stage" style="position:relative;display:none;user-select:none;touch-action:none;max-width:100%;margin-top:10px;">
      <canvas id="dm-canvas" style="max-width:100%;display:block;border-radius:10px;cursor:crosshair;touch-action:none;"></canvas>
    </div>
    <div id="dm-info" style="font-size:12.5px;color:#A39C8B;margin-top:8px;"></div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="dm-undo" disabled>↩ Undo last box</button>
  <button class="btn btn-secondary" id="dm-clear" disabled>Clear all boxes</button>
  <button class="btn btn-primary" id="dm-download" disabled>⬇ Download masked image</button>
</div>`,
  howto: [
    'Upload a photo of your Aadhaar, PAN or any document — it opens right in your browser, nothing is uploaded anywhere.',
    'Click and drag over the ID number (or any sensitive part) to draw a solid black box on it.',
    'Draw as many boxes as you need. Use Undo or Clear all if you make a mistake.',
    'Click <strong>Download masked image</strong> — the blacked-out version saves to your device.',
  ],
  faq: [
    { q: 'Is my Aadhaar/PAN photo uploaded anywhere?', a: 'No. This tool runs 100% in your browser using the HTML5 Canvas API — the image is never sent to any server. You can even disconnect your internet after the page loads and it will still work.' },
    { q: 'Why should I mask my Aadhaar/PAN number before sharing?', a: 'Sharing a clear photo of your Aadhaar or PAN (on WhatsApp, email, etc.) exposes your full ID number, which can be misused for fraud — fake SIM cards, loan applications, or identity theft. Blacking out the number (while keeping the rest visible, if needed for verification) reduces that risk significantly.' },
    { q: 'Can I still prove the document is genuine after masking?', a: 'Yes — keep your name, photo and document design visible, and only black out the specific number. Many banks and services accept a masked Aadhaar (this is officially called a "Masked Aadhaar" and UIDAI itself offers a similar option on their site for downloads).' },
    { q: 'Can I undo a box after drawing it?', a: 'Yes, click "Undo last box" to remove the most recent one, or "Clear all boxes" to start over — until you click Download, nothing is permanent.' },
  ],
};
