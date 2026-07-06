(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var canvas = $('sig-canvas');
  var ctx = canvas.getContext('2d');
  var preview = $('sig-preview');
  var pctx = preview.getContext('2d');
  var drawing = false;
  var last = null;
  var hasInk = false;

  function setupPen() {
    ctx.strokeStyle = $('sig-color').value;
    ctx.lineWidth = parseFloat($('sig-width').value);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }

  function pos(e) {
    var rect = canvas.getBoundingClientRect();
    var cx = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    var cy = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    return { x: cx * canvas.width / rect.width, y: cy * canvas.height / rect.height };
  }

  function start(e) {
    if ($('sig-mode').value !== 'draw') return;
    e.preventDefault();
    drawing = true;
    last = pos(e);
    setupPen();
  }
  function move(e) {
    if (!drawing) return;
    e.preventDefault();
    var p = pos(e);
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last = p;
    hasInk = true;
    updatePreview();
  }
  function end() { drawing = false; }

  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('touchstart', start, { passive: false });
  document.addEventListener('mousemove', move);
  document.addEventListener('touchmove', move, { passive: false });
  document.addEventListener('mouseup', end);
  document.addEventListener('touchend', end);

  function renderTyped() {
    pctx.clearRect(0, 0, preview.width, preview.height);
    var text = $('sig-text').value.trim();
    if (!text) return;
    pctx.fillStyle = $('sig-color').value;
    var size = 64;
    do {
      pctx.font = 'italic ' + size + 'px ' + $('sig-font').value;
      size -= 4;
    } while (pctx.measureText(text).width > preview.width - 40 && size > 16);
    pctx.textAlign = 'center';
    pctx.textBaseline = 'middle';
    pctx.fillText(text, preview.width / 2, preview.height / 2);
  }

  function updatePreview() {
    if ($('sig-mode').value === 'draw') {
      pctx.clearRect(0, 0, preview.width, preview.height);
      pctx.drawImage(canvas, 0, 0);
    } else {
      renderTyped();
    }
  }

  $('sig-mode').addEventListener('change', function () {
    var draw = this.value === 'draw';
    $('sig-draw-area').style.display = draw ? '' : 'none';
    $('sig-type-area').style.display = draw ? 'none' : '';
    updatePreview();
  });
  $('sig-width').addEventListener('input', function () {
    $('sig-width-val').textContent = this.value;
  });
  $('sig-color').addEventListener('change', updatePreview);
  $('sig-text').addEventListener('input', updatePreview);
  $('sig-font').addEventListener('change', updatePreview);

  $('sig-clear').addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasInk = false;
    $('sig-text').value = '';
    updatePreview();
  });

  $('sig-download').addEventListener('click', function () {
    updatePreview();
    // trim transparent edges
    var data = pctx.getImageData(0, 0, preview.width, preview.height);
    var minX = preview.width, minY = preview.height, maxX = 0, maxY = 0, found = false;
    for (var y = 0; y < preview.height; y++) {
      for (var x = 0; x < preview.width; x++) {
        if (data.data[(y * preview.width + x) * 4 + 3] > 10) {
          found = true;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    if (!found) { alert('Pehle signature banao!'); return; }
    var pad = 10;
    var out = document.createElement('canvas');
    out.width = maxX - minX + pad * 2;
    out.height = maxY - minY + pad * 2;
    out.getContext('2d').drawImage(preview, minX - pad, minY - pad, out.width, out.height, 0, 0, out.width, out.height);
    var a = document.createElement('a');
    a.download = 'signature.png';
    a.href = out.toDataURL('image/png');
    a.click();
  });
})();
