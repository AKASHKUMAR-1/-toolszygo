(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var hasBarcode = false;

  function generate() {
    var text = $('bc-text').value.trim();
    var format = $('bc-format').value;
    var err = $('bc-error');
    err.style.display = 'none';
    if (!text) {
      err.style.display = '';
      err.textContent = 'Enter text/number first';
      return;
    }
    try {
      JsBarcode('#bc-canvas', text, {
        format: format,
        lineColor: '#3D3929',
        background: '#FFFFFF',
        width: 2,
        height: 90,
        displayValue: true,
        font: 'monospace',
        fontSize: 16,
        margin: 14,
      });
      hasBarcode = true;
      $('bc-download').disabled = false;
    } catch (e) {
      hasBarcode = false;
      $('bc-download').disabled = true;
      err.style.display = '';
      err.textContent = format === 'EAN13'
        ? 'EAN-13 needs exactly 12-13 digits (numbers only)'
        : format === 'UPC'
          ? 'UPC needs 11-12 digits (numbers only)'
          : 'This text can\'t be encoded in this format — try CODE128';
    }
  }

  $('bc-generate').addEventListener('click', generate);
  $('bc-text').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') generate();
  });
  $('bc-format').addEventListener('change', generate);
  $('bc-download').addEventListener('click', function () {
    if (!hasBarcode) return;
    var a = document.createElement('a');
    a.download = 'barcode.png';
    a.href = $('bc-canvas').toDataURL('image/png');
    a.click();
  });
  generate();
})();
