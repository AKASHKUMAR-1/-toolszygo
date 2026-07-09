(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var canvas = $('br-canvas');
  var ctx = canvas.getContext('2d', { willReadFrequently: true });
  var original = null; // ImageData
  var current = null;

  var drop = $('br-drop');
  var input = $('br-file');
  drop.addEventListener('click', function () { input.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
  drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault(); drop.classList.remove('drag');
    if (e.dataTransfer.files.length) load(e.dataTransfer.files[0]);
  });
  input.addEventListener('change', function () {
    if (input.files.length) load(input.files[0]);
  });

  function load(f) {
    var img = new Image();
    var url = URL.createObjectURL(f);
    img.onload = function () {
      var max = 1600;
      var scale = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
      canvas.width = Math.round(img.naturalWidth * scale);
      canvas.height = Math.round(img.naturalHeight * scale);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      original = ctx.getImageData(0, 0, canvas.width, canvas.height);
      current = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.style.display = '';
      $('br-reset').disabled = false;
      URL.revokeObjectURL(url);
      updatePreview();
    };
    img.src = url;
  }

  $('br-tolerance').addEventListener('input', function () {
    $('br-tolerance-val').textContent = this.value;
  });

  // Flood-fill (magic-wand style): only erases pixels *connected* to the clicked
  // point and within color tolerance — not every matching pixel in the whole image.
  // A global match (old behavior) wrongly wiped out unrelated regions that happened
  // to share a similar color (e.g. a horse's tan coat matching a beige background).
  function floodErase(d, w, h, startX, startY, tr, tg, tb, tol) {
    var visited = new Uint8Array(w * h);
    var stack = new Int32Array(w * h);
    var sp = 0;
    var start = startY * w + startX;
    stack[sp++] = start;
    visited[start] = 1;
    while (sp > 0) {
      var pos = stack[--sp];
      var px = pos % w;
      var py = (pos / w) | 0;
      var pidx = pos * 4;
      if (d[pidx + 3] !== 0) {
        var dr = d[pidx] - tr, dg = d[pidx + 1] - tg, db = d[pidx + 2] - tb;
        if (Math.sqrt(dr * dr + dg * dg + db * db) > tol) continue;
        d[pidx + 3] = 0;
      }
      if (px > 0) { var n1 = pos - 1; if (!visited[n1]) { visited[n1] = 1; stack[sp++] = n1; } }
      if (px < w - 1) { var n2 = pos + 1; if (!visited[n2]) { visited[n2] = 1; stack[sp++] = n2; } }
      if (py > 0) { var n3 = pos - w; if (!visited[n3]) { visited[n3] = 1; stack[sp++] = n3; } }
      if (py < h - 1) { var n4 = pos + w; if (!visited[n4]) { visited[n4] = 1; stack[sp++] = n4; } }
    }
  }

  canvas.addEventListener('click', function (e) {
    if (!current) return;
    var rect = canvas.getBoundingClientRect();
    var x = Math.round((e.clientX - rect.left) * canvas.width / rect.width);
    var y = Math.round((e.clientY - rect.top) * canvas.height / rect.height);
    var d = current.data;
    var idx = (y * canvas.width + x) * 4;
    var tr = d[idx], tg = d[idx + 1], tb = d[idx + 2];
    var tol = parseInt($('br-tolerance').value, 10) * 2.5;
    floodErase(d, canvas.width, canvas.height, x, y, tr, tg, tb, tol);
    updatePreview();
  });

  function updatePreview() {
    ctx.putImageData(current, 0, 0);
    var out = document.createElement('canvas');
    out.width = canvas.width;
    out.height = canvas.height;
    out.getContext('2d').putImageData(current, 0, 0);
    $('br-preview').src = out.toDataURL('image/png');
    $('br-placeholder').style.display = 'none';
    $('br-result-wrap').style.display = '';
    $('br-download').disabled = false;
  }

  $('br-reset').addEventListener('click', function () {
    if (!original) return;
    current = new ImageData(new Uint8ClampedArray(original.data), original.width, original.height);
    updatePreview();
  });

  $('br-download').addEventListener('click', function () {
    if (!current) return;
    var out = document.createElement('canvas');
    out.width = canvas.width;
    out.height = canvas.height;
    out.getContext('2d').putImageData(current, 0, 0);
    var a = document.createElement('a');
    a.download = 'no-background.png';
    a.href = out.toDataURL('image/png');
    a.click();
  });
})();
