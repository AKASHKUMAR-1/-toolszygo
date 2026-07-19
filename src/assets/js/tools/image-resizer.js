(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var file = null;
  var origW = 0, origH = 0;
  var resultBlob = null;
  var resultName = '';
  var mode = 'size';

  var fmtSize = window.toolsdoFmtSize;

  /* ---------- file input ---------- */
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
      alert('Only JPG, PNG and WEBP images are supported.');
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
      $('ir-unit').value = 'px';
      $('ir-dpi-field').style.display = 'none';
      drop.querySelector('strong').textContent = f.name + ' (' + origW + '×' + origH + ')';
      $('ir-resize').disabled = false;
      updatePctInfo();
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }

  /* ---------- tabs ---------- */
  var tabActive = 'flex:1;padding:8px 4px;border-radius:8px;border:1px solid #D97757;background:#D97757;color:#fff;font-size:12.5px;font-weight:600;cursor:pointer;';
  var tabBase = 'flex:1;padding:8px 4px;border-radius:8px;border:1px solid #D9CDBA;background:#fff;color:#6B5F53;font-size:12.5px;font-weight:600;cursor:pointer;';
  document.querySelectorAll('.ir-tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
      mode = btn.getAttribute('data-mode');
      document.querySelectorAll('.ir-tab').forEach(function (b) {
        b.setAttribute('style', b === btn ? tabActive : tabBase);
      });
      $('ir-mode-size').style.display = mode === 'size' ? '' : 'none';
      $('ir-mode-percent').style.display = mode === 'percent' ? '' : 'none';
      $('ir-mode-preset').style.display = mode === 'preset' ? '' : 'none';
    });
  });

  /* ---------- By Size: units + aspect lock ---------- */
  function unitToPx(v) {
    var unit = $('ir-unit').value;
    if (unit === 'px') return v;
    var dpi = parseFloat($('ir-dpi').value);
    if (unit === 'inch') return v * dpi;
    if (unit === 'cm') return v * dpi / 2.54;
    return v * dpi / 25.4; // mm
  }
  function pxToUnit(px) {
    var unit = $('ir-unit').value;
    if (unit === 'px') return Math.round(px);
    var dpi = parseFloat($('ir-dpi').value);
    var v;
    if (unit === 'inch') v = px / dpi;
    else if (unit === 'cm') v = px * 2.54 / dpi;
    else v = px * 25.4 / dpi;
    return Math.round(v * 100) / 100;
  }

  $('ir-unit').addEventListener('change', function () {
    $('ir-dpi-field').style.display = this.value === 'px' ? 'none' : '';
    if (origW) {
      $('ir-width').value = pxToUnit(origW);
      $('ir-height').value = pxToUnit(origH);
    }
  });
  $('ir-dpi').addEventListener('change', function () {
    if (origW) {
      $('ir-width').value = pxToUnit(origW);
      $('ir-height').value = pxToUnit(origH);
    }
  });

  $('ir-width').addEventListener('input', function () {
    if ($('ir-lock').checked && origW) {
      var w = parseFloat(this.value);
      if (w > 0) {
        var hPx = unitToPx(w) * origH / origW;
        $('ir-height').value = pxToUnit(hPx);
      }
    }
  });
  $('ir-height').addEventListener('input', function () {
    if ($('ir-lock').checked && origH) {
      var h = parseFloat(this.value);
      if (h > 0) {
        var wPx = unitToPx(h) * origW / origH;
        $('ir-width').value = pxToUnit(wPx);
      }
    }
  });

  /* ---------- Percentage ---------- */
  function updatePctInfo() {
    if (!origW) return;
    var pct = parseFloat($('ir-percent').value) || 0;
    if (pct > 0) {
      $('ir-pct-info').textContent = 'Result: ' + Math.max(1, Math.round(origW * pct / 100)) + ' × ' +
        Math.max(1, Math.round(origH * pct / 100)) + ' px';
    }
  }
  $('ir-percent').addEventListener('input', updatePctInfo);
  document.querySelectorAll('.ir-pct-quick').forEach(function (btn) {
    btn.addEventListener('click', function () {
      $('ir-percent').value = btn.getAttribute('data-pct');
      updatePctInfo();
    });
  });

  /* ---------- quality slider ---------- */
  $('ir-quality').addEventListener('input', function () {
    $('ir-quality-val').textContent = this.value;
  });

  /* ---------- compute target pixel dimensions ---------- */
  function targetDims() {
    if (mode === 'percent') {
      var pct = parseFloat($('ir-percent').value);
      if (!pct || pct < 1 || pct > 500) return null;
      return { w: Math.max(1, Math.round(origW * pct / 100)), h: Math.max(1, Math.round(origH * pct / 100)) };
    }
    if (mode === 'preset') {
      var parts = $('ir-preset').value.split('x');
      return { w: parseInt(parts[0], 10), h: parseInt(parts[1], 10) };
    }
    var w = Math.round(unitToPx(parseFloat($('ir-width').value)));
    var h = Math.round(unitToPx(parseFloat($('ir-height').value)));
    if (!w || !h || w < 1 || h < 1 || w > 10000 || h > 10000) return null;
    return { w: w, h: h };
  }

  function outputType() {
    var fmt = $('ir-format').value;
    return fmt === 'original' ? file.type : fmt;
  }

  /* ---------- resize + optional target-KB compression ---------- */
  function blobAtQuality(canvas, type, q) {
    return new Promise(function (resolve) {
      canvas.toBlob(function (b) { resolve(b); }, type, q);
    });
  }

  function compressToTarget(canvas, type, targetBytes) {
    // Binary search quality (JPG/WEBP) to fit under targetBytes as closely as possible
    var lo = 0.05, hi = 1.0, best = null;
    var steps = 8;
    function step(i) {
      if (i >= steps) return Promise.resolve(best);
      var mid = (lo + hi) / 2;
      return blobAtQuality(canvas, type, mid).then(function (b) {
        if (!b) return best;
        if (b.size <= targetBytes) {
          best = b;
          lo = mid;
        } else {
          hi = mid;
        }
        return step(i + 1);
      });
    }
    return step(0).then(function (result) {
      if (result) return result;
      return blobAtQuality(canvas, type, 0.05); // smallest possible if target unreachable
    });
  }

  $('ir-resize').addEventListener('click', function () {
    if (!file) return;
    var dims = targetDims();
    if (!dims) {
      alert('Enter a valid size (1–10000 px, or 1–500%).');
      return;
    }
    var btn = this;
    btn.textContent = 'Resizing…';
    btn.disabled = true;
    var type = outputType();
    var targetKB = parseFloat($('ir-target').value) || 0;
    var quality = parseInt($('ir-quality').value, 10) / 100;

    var img = new Image();
    var url = URL.createObjectURL(file);
    img.onload = function () {
      var canvas = document.createElement('canvas');
      canvas.width = dims.w;
      canvas.height = dims.h;
      var ctx = canvas.getContext('2d');
      if (type === 'image/jpeg') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, dims.w, dims.h);
      }
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, dims.w, dims.h);
      URL.revokeObjectURL(url);

      var promise;
      if (targetKB > 0 && (type === 'image/jpeg' || type === 'image/webp')) {
        promise = compressToTarget(canvas, type, targetKB * 1024);
      } else {
        promise = blobAtQuality(canvas, type, type === 'image/png' ? undefined : quality);
      }

      promise.then(function (blob) {
        btn.textContent = 'Resize image';
        btn.disabled = false;
        if (!blob) return;
        resultBlob = blob;
        var ext = type === 'image/png' ? 'png' : type === 'image/webp' ? 'webp' : 'jpg';
        resultName = file.name.replace(/\.[^.]+$/, '') + '-' + dims.w + 'x' + dims.h + '.' + ext;
        $('ir-preview').src = URL.createObjectURL(blob);
        $('ir-preview').style.display = '';
        $('ir-placeholder').style.display = 'none';
        $('ir-stats').style.display = '';
        $('ir-orig').textContent = origW + '×' + origH + ' px (' + fmtSize(file.size) + ')';
        $('ir-new').textContent = dims.w + '×' + dims.h + ' px (' + fmtSize(blob.size) + ')';
        if (targetKB > 0 && (type === 'image/jpeg' || type === 'image/webp')) {
          $('ir-target-row').style.display = '';
          var achieved = blob.size <= targetKB * 1024;
          $('ir-target-out').textContent = achieved
            ? '✓ Under ' + targetKB + ' KB'
            : 'Closest possible: ' + fmtSize(blob.size) + ' (try smaller dimensions)';
          $('ir-target-out').style.color = achieved ? '#5D8A4E' : '#B84F4F';
        } else {
          $('ir-target-row').style.display = 'none';
        }
        $('ir-download').disabled = false;
      });
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
