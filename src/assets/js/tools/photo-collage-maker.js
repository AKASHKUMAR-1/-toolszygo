(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var canvas = $('col-canvas');
  var ctx = canvas.getContext('2d');
  var images = [];
  var LAYOUTS = {
    '2x1': { cols: 2, rows: 1, need: 2 },
    '1x2': { cols: 1, rows: 2, need: 2 },
    '2x2': { cols: 2, rows: 2, need: 4 },
    '3x1': { cols: 3, rows: 1, need: 3 },
    '3x3': { cols: 3, rows: 3, need: 9 },
  };

  var drop = $('col-drop');
  var input = $('col-file');
  drop.addEventListener('click', function () { input.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
  drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault(); drop.classList.remove('drag');
    addFiles(e.dataTransfer.files);
  });
  input.addEventListener('change', function () {
    addFiles(input.files);
    input.value = '';
  });

  function addFiles(list) {
    var loads = [];
    Array.prototype.forEach.call(list, function (f) {
      if (!/^image\//.test(f.type)) return;
      loads.push(new Promise(function (res) {
        var im = new Image();
        im.onload = function () { images.push(im); res(); };
        im.onerror = res;
        im.src = URL.createObjectURL(f);
      }));
    });
    Promise.all(loads).then(function () {
      $('col-info').textContent = images.length + ' photos selected';
      render();
    });
  }

  function render() {
    var layout = LAYOUTS[$('col-layout').value];
    if (!images.length) return;
    var gap = parseInt($('col-gap').value, 10);
    var bg = $('col-bg').value;
    var SIZE = 2048;
    var cellW = Math.floor((SIZE - gap * (layout.cols + 1)) / layout.cols);
    var cellH = Math.floor((cellW * 1)); // square cells
    canvas.width = SIZE;
    canvas.height = cellH * layout.rows + gap * (layout.rows + 1);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var r = 0; r < layout.rows; r++) {
      for (var c = 0; c < layout.cols; c++) {
        var idx = r * layout.cols + c;
        var im = images[idx];
        if (!im) continue;
        var x = gap + c * (cellW + gap);
        var y = gap + r * (cellH + gap);
        // center-crop cover
        var scale = Math.max(cellW / im.naturalWidth, cellH / im.naturalHeight);
        var sw = cellW / scale, sh = cellH / scale;
        var sx = (im.naturalWidth - sw) / 2, sy = (im.naturalHeight - sh) / 2;
        ctx.drawImage(im, sx, sy, sw, sh, x, y, cellW, cellH);
      }
    }
    canvas.style.display = '';
    $('col-placeholder').style.display = 'none';
    $('col-download').disabled = false;
  }

  ['col-layout', 'col-gap', 'col-bg'].forEach(function (id) {
    $(id).addEventListener('input', function () {
      if (id === 'col-gap') $('col-gap-val').textContent = this.value;
      render();
    });
    $(id).addEventListener('change', render);
  });

  $('col-download').addEventListener('click', function () {
    if (!images.length) return;
    var a = document.createElement('a');
    a.download = 'collage.jpg';
    a.href = canvas.toDataURL('image/jpeg', 0.92);
    a.click();
  });
})();
