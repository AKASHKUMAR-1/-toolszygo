(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  var drop = $('wp-drop');
  var input = $('wp-file');
  drop.addEventListener('click', function () { input.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
  drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault(); drop.classList.remove('drag');
    if (e.dataTransfer.files.length) convert(e.dataTransfer.files[0]);
  });
  input.addEventListener('change', function () {
    if (input.files.length) convert(input.files[0]);
  });

  async function convert(file) {
    if (!/\.docx$/i.test(file.name)) {
      $('wp-status').textContent = 'Only .docx files are supported (not .doc)';
      return;
    }
    $('wp-status').textContent = 'Rendering document…';
    try {
      var result = await mammoth.convertToHtml({ arrayBuffer: await file.arrayBuffer() });
      $('wp-preview').innerHTML = result.value || '<em>The document appears to be empty</em>';
      $('wp-status').textContent = '✓ Ready — now click "Save as PDF"';
      $('wp-print').disabled = false;
      $('wp-info').textContent = file.name;
    } catch (e) {
      $('wp-status').textContent = 'Couldn\'t open the file: ' + (e.message || e);
    }
  }

  $('wp-print').addEventListener('click', function () {
    toolsdoPrint('wp-preview', 'Document');
  });
})();
