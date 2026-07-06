(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var canvas = $('cr-canvas');
  var ctx = canvas.getContext('2d');
  var img = null;
  var fileType = 'image/png';
  var fileName = 'cropped';
  // crop box in canvas display coordinates
  var box = { x: 20, y: 20, w: 150, h: 150 };
  var dragging = null; // 'move' | 'resize'
  var start = null;

  var drop = $('cr-drop');
  var input = $('cr-file');
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
    if (!/^image\/(jpeg|png|webp)$/.test(f.type)) return;
    fileType = f.type;
    fileName = f.name.replace(/\.[^.]+$/, '');
    img = new Image();
    var url = URL.createObjectURL(f);
    img.onload = function () {
      var maxW = Math.min(760, $('cr-stage').parentElement.clientWidth - 40);
      var scale = Math.min(1, maxW / img.naturalWidth);
      canvas.width = Math.round(img.naturalWidth * scale);
      canvas.height = Math.round(img.naturalHeight * scale);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      $('cr-stage').style.display = '';
      box = { x: canvas.width * 0.15, y: canvas.height * 0.15, w: canvas.width * 0.5, h: canvas.height * 0.5 };
      applyRatio();
      $('cr-crop').disabled = false;
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }

  function ratio() {
    var v = $('cr-ratio').value;
    return v === 'free' ? null : parseFloat(v);
  }

  function applyRatio() {
    var r = ratio();
    if (r) box.h = box.w / r;
    clamp();
    draw();
  }

  function clamp() {
    box.w = Math.max(30, Math.min(box.w, canvas.width));
    box.h = Math.max(30, Math.min(box.h, canvas.height));
    box.x = Math.max(0, Math.min(box.x, canvas.width - box.w));
    box.y = Math.max(0, Math.min(box.y, canvas.height - box.h));
  }

  function draw() {
    var el = $('cr-box');
    var rect = canvas.getBoundingClientRect();
    var sx = rect.width / canvas.width;
    var sy = rect.height / canvas.height;
    el.style.left = (box.x * sx) + 'px';
    el.style.top = (box.y * sy) + 'px';
    el.style.width = (box.w * sx) + 'px';
    el.style.height = (box.h * sy) + 'px';
    var scale = img ? img.naturalWidth / canvas.width : 1;
    $('cr-info').textContent = 'Crop: ' + Math.round(box.w * scale) + ' × ' + Math.round(box.h * scale) + ' px';
  }

  function pos(e) {
    var rect = canvas.getBoundingClientRect();
    var cx = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    var cy = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    return { x: cx * canvas.width / rect.width, y: cy * canvas.height / rect.height };
  }

  function down(e, mode) {
    e.preventDefault();
    e.stopPropagation();
    dragging = mode;
    var p = pos(e);
    start = { px: p.x, py: p.y, bx: box.x, by: box.y, bw: box.w, bh: box.h };
  }
  $('cr-box').addEventListener('mousedown', function (e) { down(e, 'move'); });
  $('cr-box').addEventListener('touchstart', function (e) { down(e, 'move'); }, { passive: false });
  $('cr-handle').addEventListener('mousedown', function (e) { down(e, 'resize'); });
  $('cr-handle').addEventListener('touchstart', function (e) { down(e, 'resize'); }, { passive: false });

  function move(e) {
    if (!dragging) return;
    e.preventDefault();
    var p = pos(e);
    var dx = p.x - start.px;
    var dy = p.y - start.py;
    if (dragging === 'move') {
      box.x = start.bx + dx;
      box.y = start.by + dy;
    } else {
      box.w = start.bw + dx;
      var r = ratio();
      box.h = r ? box.w / r : start.bh + dy;
    }
    clamp();
    draw();
  }
  document.addEventListener('mousemove', move);
  document.addEventListener('touchmove', move, { passive: false });
  document.addEventListener('mouseup', function () { dragging = null; });
  document.addEventListener('touchend', function () { dragging = null; });

  $('cr-ratio').addEventListener('change', applyRatio);
  window.addEventListener('resize', draw);

  $('cr-crop').addEventListener('click', function () {
    if (!img) return;
    var scale = img.naturalWidth / canvas.width;
    var out = document.createElement('canvas');
    out.width = Math.round(box.w * scale);
    out.height = Math.round(box.h * scale);
    var octx = out.getContext('2d');
    if (fileType === 'image/jpeg') {
      octx.fillStyle = '#FFF';
      octx.fillRect(0, 0, out.width, out.height);
    }
    octx.drawImage(img, box.x * scale, box.y * scale, box.w * scale, box.h * scale, 0, 0, out.width, out.height);
    var a = document.createElement('a');
    var ext = fileType === 'image/png' ? 'png' : fileType === 'image/webp' ? 'webp' : 'jpg';
    a.download = fileName + '-cropped.' + ext;
    a.href = out.toDataURL(fileType, 0.92);
    a.click();
  });
})();
