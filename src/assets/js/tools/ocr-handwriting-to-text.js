(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var file = null;

  var drop = $('ocr-drop');
  var input = $('ocr-file');
  drop.addEventListener('click', function () { input.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
  drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault(); drop.classList.remove('drag');
    if (e.dataTransfer.files.length) setFile(e.dataTransfer.files[0]);
  });
  input.addEventListener('change', function () {
    if (input.files.length) setFile(input.files[0]);
  });

  function setFile(f) {
    file = f;
    $('ocr-preview').src = URL.createObjectURL(f);
    $('ocr-preview').style.display = '';
    $('ocr-run').disabled = false;
    $('ocr-status').textContent = '';
  }

  $('ocr-run').addEventListener('click', async function () {
    if (!file) return;
    var btn = this;
    btn.disabled = true;
    var lang = $('ocr-lang').value;
    $('ocr-status').textContent = 'Loading model (first time downloads ~10-15 MB)…';
    try {
      var worker = await Tesseract.createWorker(lang, 1, {
        logger: function (m) {
          if (m.status === 'recognizing text') {
            $('ocr-status').textContent = 'Reading text… ' + Math.round(m.progress * 100) + '%';
          }
        },
      });
      var result = await worker.recognize(file);
      await worker.terminate();
      $('ocr-output').value = result.data.text.trim();
      $('ocr-status').textContent = result.data.text.trim()
        ? '✓ Text extracted — review and copy it'
        : 'No text found — try a clearer/larger image';
    } catch (e) {
      $('ocr-status').textContent = 'Failed: ' + (e.message || 'check your internet — the model didn\'t download');
    }
    btn.disabled = false;
  });

  $('ocr-copy').addEventListener('click', function () {
    var t = $('ocr-output').value;
    if (t) toolsdoCopy(t, this);
  });
})();
