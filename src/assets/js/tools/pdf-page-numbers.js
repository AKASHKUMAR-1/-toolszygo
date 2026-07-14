(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var file = null;
  var resultBlob = null;

  var drop = $('pn-drop');
  var input = $('pn-file');
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
    $('pn-info').textContent = f.name;
    $('pn-add').disabled = false;
  }

  $('pn-add').addEventListener('click', async function () {
    if (!file) return;
    var btn = this;
    btn.textContent = 'Adding…';
    btn.disabled = true;
    try {
      var doc = await PDFLib.PDFDocument.load(await file.arrayBuffer());
      var font = await doc.embedFont(PDFLib.StandardFonts.Helvetica);
      var total = doc.getPageCount();
      var start = parseInt($('pn-start').value, 10) || 1;
      var pos = $('pn-position').value;
      var format = $('pn-format').value;
      doc.getPages().forEach(function (page, i) {
        var num = start + i;
        var label = format === 'page' ? 'Page ' + num : format === 'of' ? num + ' of ' + (start + total - 1) : String(num);
        var size = 10;
        var width = font.widthOfTextAtSize(label, size);
        var pw = page.getWidth();
        var x = pos === 'bl' ? 36 : pos === 'br' ? pw - width - 36 : (pw - width) / 2;
        page.drawText(label, { x: x, y: 22, size: size, font: font, color: PDFLib.rgb(0.25, 0.23, 0.16) });
      });
      var bytes = await doc.save();
      resultBlob = new Blob([bytes], { type: 'application/pdf' });
      $('pn-placeholder').style.display = 'none';
      $('pn-stats').style.display = '';
      $('pn-pages').textContent = total;
      $('pn-download').disabled = false;
    } catch (e) {
      alert('Failed: ' + (e.message || 'password-protected PDF?'));
    }
    btn.textContent = 'Add page numbers';
    btn.disabled = false;
  });

  $('pn-download').addEventListener('click', function () {
    if (!resultBlob) return;
    var a = document.createElement('a');
    a.download = file.name.replace(/\.pdf$/i, '') + '-numbered.pdf';
    a.href = URL.createObjectURL(resultBlob);
    a.click();
  });
})();
