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
    $('ocr-status').textContent = 'Model load ho raha hai (pehli baar ~10-15 MB download hota hai)…';
    try {
      var worker = await Tesseract.createWorker(lang, 1, {
        logger: function (m) {
          if (m.status === 'recognizing text') {
            $('ocr-status').textContent = 'Text padh rahe hain… ' + Math.round(m.progress * 100) + '%';
          }
        },
      });
      var result = await worker.recognize(file);
      await worker.terminate();
      $('ocr-output').value = result.data.text.trim();
      $('ocr-status').textContent = result.data.text.trim()
        ? '✓ Text nikal gaya — check karke copy karo'
        : 'Koi text nahi mila — saaf/badi image try karo';
    } catch (e) {
      $('ocr-status').textContent = 'Fail: ' + (e.message || 'internet check karo — model download nahi hua');
    }
    btn.disabled = false;
  });

  $('ocr-copy').addEventListener('click', function () {
    var t = $('ocr-output').value;
    if (t) toolsdoCopy(t, this);
  });
})();
