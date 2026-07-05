(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var canvas = $('qr-canvas');
  var hasQR = false;

  canvas.style.display = 'none';

  function generate() {
    var text = $('qr-text').value.trim();
    if (!text) {
      $('qr-placeholder').textContent = 'Pehle kuch text ya URL daalo';
      return;
    }
    var size = parseInt($('qr-size').value, 10);
    try {
      var qr = qrcode(0, 'M'); // type 0 = auto-detect version
      qr.addData(text);
      qr.make();
      var count = qr.getModuleCount();
      var margin = 2; // modules
      var scale = Math.floor(size / (count + margin * 2)) || 1;
      var dim = (count + margin * 2) * scale;
      canvas.width = dim;
      canvas.height = dim;
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, dim, dim);
      ctx.fillStyle = '#3D3929';
      for (var r = 0; r < count; r++) {
        for (var c = 0; c < count; c++) {
          if (qr.isDark(r, c)) {
            ctx.fillRect((c + margin) * scale, (r + margin) * scale, scale, scale);
          }
        }
      }
      canvas.style.display = '';
      canvas.style.maxWidth = '260px';
      $('qr-placeholder').style.display = 'none';
      $('qr-download').disabled = false;
      hasQR = true;
    } catch (err) {
      $('qr-placeholder').style.display = '';
      canvas.style.display = 'none';
      $('qr-placeholder').textContent = 'QR nahi ban paya — text bahut lamba ho sakta hai';
      $('qr-download').disabled = true;
      hasQR = false;
    }
  }

  $('qr-generate').addEventListener('click', generate);
  $('qr-text').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); generate(); }
  });
  $('qr-download').addEventListener('click', function () {
    if (!hasQR) return;
    var a = document.createElement('a');
    a.download = 'qr-code.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  });
})();
