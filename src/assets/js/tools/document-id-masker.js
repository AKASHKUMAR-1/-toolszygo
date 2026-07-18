(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var canvas = $('dm-canvas');
  var ctx = canvas.getContext('2d');
  var img = null;
  var fileType = 'image/png';
  var fileName = 'masked';
  var boxes = []; // in canvas display coordinates: {x, y, w, h}
  var drawing = null; // {x, y} start point while dragging a new box

  var drop = $('dm-drop');
  var input = $('dm-file');
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
      var maxW = Math.min(760, $('dm-stage').parentElement.clientWidth - 20);
      var scale = Math.min(1, maxW / img.naturalWidth);
      canvas.width = Math.round(img.naturalWidth * scale);
      canvas.height = Math.round(img.naturalHeight * scale);
      boxes = [];
      redraw();
      $('dm-stage').style.display = '';
      $('dm-info').textContent = 'Click and drag over the ID number to black it out. Boxes drawn: 0';
      updateButtons();
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }

  function redraw(preview) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (img) ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    boxes.forEach(function (b) { ctx.fillRect(b.x, b.y, b.w, b.h); });
    if (preview) {
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      ctx.fillRect(preview.x, preview.y, preview.w, preview.h);
    }
  }

  function pos(e) {
    var rect = canvas.getBoundingClientRect();
    var cx = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    var cy = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    return { x: cx * canvas.width / rect.width, y: cy * canvas.height / rect.height };
  }

  function updateButtons() {
    $('dm-undo').disabled = boxes.length === 0;
    $('dm-clear').disabled = boxes.length === 0;
    $('dm-download').disabled = !img;
    $('dm-info').textContent = img ? 'Click and drag over the ID number to black it out. Boxes drawn: ' + boxes.length : '';
  }

  function down(e) {
    if (!img) return;
    e.preventDefault();
    var p = pos(e);
    drawing = { startX: p.x, startY: p.y, x: p.x, y: p.y, w: 0, h: 0 };
  }
  function move(e) {
    if (!drawing) return;
    e.preventDefault();
    var p = pos(e);
    drawing.x = Math.min(drawing.startX, p.x);
    drawing.y = Math.min(drawing.startY, p.y);
    drawing.w = Math.abs(p.x - drawing.startX);
    drawing.h = Math.abs(p.y - drawing.startY);
    redraw(drawing);
  }
  function up() {
    if (!drawing) return;
    if (drawing.w > 4 && drawing.h > 4) {
      boxes.push({ x: drawing.x, y: drawing.y, w: drawing.w, h: drawing.h });
    }
    drawing = null;
    redraw();
    updateButtons();
  }

  canvas.addEventListener('mousedown', down);
  canvas.addEventListener('touchstart', down, { passive: false });
  document.addEventListener('mousemove', move);
  document.addEventListener('touchmove', move, { passive: false });
  document.addEventListener('mouseup', up);
  document.addEventListener('touchend', up);

  $('dm-undo').addEventListener('click', function () {
    boxes.pop();
    redraw();
    updateButtons();
  });
  $('dm-clear').addEventListener('click', function () {
    boxes = [];
    redraw();
    updateButtons();
  });

  $('dm-download').addEventListener('click', function () {
    if (!img) return;
    var scale = img.naturalWidth / canvas.width;
    var out = document.createElement('canvas');
    out.width = img.naturalWidth;
    out.height = img.naturalHeight;
    var octx = out.getContext('2d');
    octx.drawImage(img, 0, 0, out.width, out.height);
    octx.fillStyle = '#000';
    boxes.forEach(function (b) {
      octx.fillRect(b.x * scale, b.y * scale, b.w * scale, b.h * scale);
    });
    var a = document.createElement('a');
    var ext = fileType === 'image/png' ? 'png' : fileType === 'image/webp' ? 'webp' : 'jpg';
    a.download = fileName + '-masked.' + ext;
    a.href = out.toDataURL(fileType, 0.92);
    a.click();
  });
})();
