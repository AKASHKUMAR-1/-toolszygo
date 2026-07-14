module.exports = {
  libs: ['/assets/js/vendor/pdf-lib.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="pn-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose a PDF</strong> or drop it here</div>
      <div id="pn-info" style="font-size:11.5px;">no file selected</div>
    </div>
    <input type="file" id="pn-file" accept="application/pdf" style="display:none;">
    <div class="field-row">
      <div class="field">
        <label for="pn-position">Position</label>
        <select id="pn-position">
          <option value="bc" selected>Bottom center</option>
          <option value="br">Bottom right</option>
          <option value="bl">Bottom left</option>
        </select>
      </div>
      <div class="field">
        <label for="pn-start">Start from</label>
        <input type="number" id="pn-start" value="1" min="0" step="1">
      </div>
    </div>
    <div class="field">
      <label for="pn-format">Format</label>
      <select id="pn-format">
        <option value="n" selected>1, 2, 3…</option>
        <option value="page">Page 1, Page 2…</option>
        <option value="of">1 of N, 2 of N…</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="pn-placeholder">numbered PDF will be ready here</div>
    <div class="result-rows" id="pn-stats" style="display:none;">
      <div class="result-row"><span class="k">Pages numbered</span><span class="v" id="pn-pages">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="pn-add" disabled>Add page numbers</button>
  <button class="btn btn-secondary" id="pn-download" disabled>Download PDF</button>
</div>`,
  howto: [
    'Select a PDF.',
    'Choose the position, starting number, and format.',
    'Click <strong>Add page numbers</strong> and download the numbered PDF.',
  ],
  faq: [
    { q: 'What style are the numbers in?', a: 'Clean Helvetica font, at the bottom of the page — center, left, or right, your choice. "Page 1" or "1 of 10" formats are available too.' },
    { q: 'Will the numbers overlap with the original content?', a: 'Numbers are placed in the bottom margin — they don\'t clash with content in normal documents. If your PDF has no margin at all, overlap can occur.' },
    { q: 'I need page numbers for an assignment/thesis — will this work?', a: 'Absolutely — that\'s the main use case. Just check the numbered PDF before printing.' },
  ],
};
