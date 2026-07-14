(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var file = null;
  var origW = 0, origH = 0;
  var resultBlob = null;
  var resultName = '';

  var fmtSize = window.toolsdoFmtSize;

  var drop = $('ir-drop');
  var input = $('ir-file');
  drop.addEventListener('click', function () { input.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
  drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault();
    drop.classList.remove('drag');
    if (e.dataTransfer.files.length) setFile(e.dataTransfer.files[0]);
  });
  input.addEventListener('change', function () {
    if (input.files.length) setFile(input.files[0]);
  });

  function setFile(f) {
    if (!/^image\/(jpeg|png|webp)$/.test(f.type)) {
      alert('Sirf JPG, PNG ya WEBP images supported hain.');
      return;
    }
    file = f;
    var img = new Image();
    var url = URL.createObjectURL(f);
    img.onload = function () {
      origW = img.naturalWidth;
      origH = img.naturalHeight;
      $('ir-width').value = origW;
      $('ir-height').value = origH;
      drop.querySelector('strong').textContent = f.name + ' (' + origW + '×' + origH + ')';
      $('ir-resize').disabled = false;
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }

  // aspect lock
  $('ir-width').addEventListener('input', function () {
    if ($('ir-lock').checked && origW) {
      var w = parseInt(this.value, 10);
      if (w > 0) $('ir-height').value = Math.round(w * origH / origW);
    }
  });
  $('ir-height').addEventListener('input', function () {
    if ($('ir-lock').checked && origH) {
      var h = parseInt(this.value, 10);
      if (h > 0) $('ir-width').value = Math.round(h * origW / origH);
    }
  });

  $('ir-resize').addEventListener('click', function () {
    if (!file) return;
    var w = parseInt($('ir-width').value, 10);
    var h = parseInt($('ir-height').value, 10);
    if (!w || !h || w < 1 || h < 1 || w > 10000 || h > 10000) {
      alert('Enter a valid width/height (1–10000 px).');
      return;
    }
    var btn = this;
    btn.textContent = 'Resizing…';
    btn.disabled = true;
    var img = new Image();
    var url = URL.createObjectURL(file);
    img.onload = function () {
      var canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      var ctx = canvas.getContext('2d');
      if (file.type === 'image/jpeg') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, w, h);
      }
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, w, h);
      canvas.toBlob(function (blob) {
        URL.revokeObjectURL(url);
        btn.textContent = 'Resize image';
        btn.disabled = false;
        if (!blob) return;
        resultBlob = blob;
        var ext = file.type === 'image/png' ? 'png' : file.type === 'image/webp' ? 'webp' : 'jpg';
        resultName = file.name.replace(/\.[^.]+$/, '') + '-' + w + 'x' + h + '.' + ext;
        $('ir-preview').src = URL.createObjectURL(blob);
        $('ir-preview').style.display = '';
        $('ir-placeholder').style.display = 'none';
        $('ir-stats').style.display = '';
        $('ir-orig').textContent = origW + '×' + origH + ' (' + fmtSize(file.size) + ')';
        $('ir-new').textContent = w + '×' + h + ' (' + fmtSize(blob.size) + ')';
        $('ir-download').disabled = false;
      }, file.type, file.type === 'image/png' ? undefined : 0.92);
    };
    img.src = url;
  });

  $('ir-download').addEventListener('click', function () {
    if (!resultBlob) return;
    var a = document.createElement('a');
    a.download = resultName;
    a.href = URL.createObjectURL(resultBlob);
    a.click();
  });
})();
