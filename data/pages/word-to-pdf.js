module.exports = {
  libs: ['/assets/js/vendor/mammoth.min.js'],
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="dropzone" id="wp-drop">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" stroke="#A39C8B" stroke-width="1.6" stroke-linecap="round"/></svg>
      <div><strong>Choose a DOCX file</strong> or drop it here</div>
      <div id="wp-info" style="font-size:11.5px;">.docx only (new Word format)</div>
    </div>
    <input type="file" id="wp-file" accept=".docx" style="display:none;">
    <div id="wp-status" style="font-size:13px;font-weight:600;color:#B98E63;"></div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Preview</div>
    <div id="wp-preview" style="flex:1;min-height:220px;max-height:400px;border:1px solid #F0E0CC;border-radius:10px;background:#FFF;font-size:13.5px;line-height:1.6;color:#222;padding:16px;overflow:auto;">
      <span style="color:#B98E63;font-family:monospace;font-size:12px;">document preview will appear here</span>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="wp-print" disabled>🖨 Save as PDF</button>
</div>`,
  howto: [
    'Select your .docx file — the preview appears instantly.',
    'Click <strong>Save as PDF</strong> — the print dialog opens.',
    'Choose <strong>"Save as PDF"</strong> as the printer and save.',
  ],
  faq: [
    { q: 'How is the PDF created?', a: 'The document is rendered in the browser and you do "Save as PDF" from the print dialog — this uses Chrome/Edge\'s built-in high-quality PDF engine, completely reliable.' },
    { q: 'Will an old .doc file work?', a: 'No — .docx only (Word 2007+). Open an old .doc in Word/Google Docs first and save it as .docx.' },
    { q: 'How accurate is the formatting?', a: 'Headings, bold/italic, lists, tables, and images come through. Very complex layouts (columns, text boxes) may be simplified.' },
  ],
};
