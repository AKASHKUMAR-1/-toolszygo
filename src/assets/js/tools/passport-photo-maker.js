(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var SIZES = {
    passport: { w: 600, h: 600, label: '2×2 inch @ 300 DPI' },
    visa: { w: 413, h: 531, label: '35×45 mm @ 300 DPI' },
    stamp: { w: 236, h: 295, label: '2×2.5 cm @ 300 DPI' },
  };
  var img = null;
  var canvas = $('pp2-canvas');
  var ctx = canvas.getContext('2d');

  var drop = $('pp2-drop');
  var input = $('pp2-file');
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
    img = new Image();
    var url = URL.createObjectURL(f);
    img.onload = function () {
      canvas.style.display = '';
      $('pp2-placeholder').style.display = 'none';
      $('pp2-download').disabled = false;
      render();
    };
    img.src = url;
  }

  function render() {
    if (!img) return;
    var size = SIZES[$('pp2-size').value];
    canvas.width = size.w;
    canvas.height = size.h;
    var zoom = parseInt($('pp2-zoom').value, 10) / 100;
    var px = parseInt($('pp2-x').value, 10) / 100;
    var py = parseInt($('pp2-y').value, 10) / 100;
    // cover-fit base scale
    var base = Math.max(size.w / img.naturalWidth, size.h / img.naturalHeight);
    var s = base * zoom;
    var drawW = img.naturalWidth * s;
    var drawH = img.naturalHeight * s;
    var x = -(drawW - size.w) * px;
    var y = -(drawH - size.h) * py;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, size.w, size.h);
    ctx.drawImage(img, x, y, drawW, drawH);
    $('pp2-dims').textContent = size.w + '×' + size.h + ' px (' + size.label + ')';
  }

  ['pp2-size', 'pp2-zoom', 'pp2-x', 'pp2-y'].forEach(function (id) {
    $(id).addEventListener('input', function () {
      if (id === 'pp2-zoom') $('pp2-zoom-val').textContent = this.value;
      render();
    });
    $(id).addEventListener('change', render);
  });

  $('pp2-download').addEventListener('click', function () {
    if (!img) return;
    var a = document.createElement('a');
    a.download = $('pp2-size').value + '-photo.jpg';
    a.href = canvas.toDataURL('image/jpeg', 0.95);
    a.click();
  });
})();
