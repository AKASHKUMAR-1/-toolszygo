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

  canvas.addEventListener('click', function (e) {
    if (!current) return;
    var rect = canvas.getBoundingClientRect();
    var x = Math.round((e.clientX - rect.left) * canvas.width / rect.width);
    var y = Math.round((e.clientY - rect.top) * canvas.height / rect.height);
    var d = current.data;
    var idx = (y * canvas.width + x) * 4;
    var tr = d[idx], tg = d[idx + 1], tb = d[idx + 2];
    var tol = parseInt($('br-tolerance').value, 10) * 2.5;
    for (var i = 0; i < d.length; i += 4) {
      if (d[i + 3] === 0) continue;
      var dist = Math.sqrt(
        (d[i] - tr) * (d[i] - tr) + (d[i + 1] - tg) * (d[i + 1] - tg) + (d[i + 2] - tb) * (d[i + 2] - tb)
      );
      if (dist <= tol) d[i + 3] = 0;
    }
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
