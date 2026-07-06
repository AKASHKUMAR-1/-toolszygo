(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var canvas = $('mg-canvas');
  var ctx = canvas.getContext('2d');
  var img = null;

  var drop = $('mg-drop');
  var input = $('mg-file');
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
      $('mg-placeholder').style.display = 'none';
      $('mg-download').disabled = false;
      render();
    };
    img.src = url;
  }

  function drawText(text, y, baseline, fontSize) {
    if (!text) return;
    text = text.toUpperCase();
    ctx.font = '900 ' + fontSize + 'px Impact, "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = baseline;
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = Math.max(2, fontSize / 12);
    ctx.lineJoin = 'round';
    // word-wrap
    var maxW = canvas.width * 0.92;
    var words = text.split(' ');
    var lines = [];
    var cur = '';
    words.forEach(function (w) {
      var test = cur ? cur + ' ' + w : w;
      if (ctx.measureText(test).width > maxW && cur) { lines.push(cur); cur = w; }
      else cur = test;
    });
    if (cur) lines.push(cur);
    var lineH = fontSize * 1.15;
    lines.forEach(function (line, i) {
      var ly = baseline === 'top' ? y + i * lineH : y - (lines.length - 1 - i) * lineH;
      ctx.strokeText(line, canvas.width / 2, ly);
      ctx.fillText(line, canvas.width / 2, ly);
    });
  }

  function render() {
    if (!img) return;
    var max = 1200;
    var scale = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
    canvas.width = Math.round(img.naturalWidth * scale);
    canvas.height = Math.round(img.naturalHeight * scale);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var fontSize = canvas.height * (parseInt($('mg-size').value, 10) / 100);
    drawText($('mg-top').value, canvas.height * 0.03, 'top', fontSize);
    drawText($('mg-bottom').value, canvas.height * 0.97, 'alphabetic', fontSize);
  }

  ['mg-top', 'mg-bottom', 'mg-size'].forEach(function (id) {
    $(id).addEventListener('input', function () {
      if (id === 'mg-size') $('mg-size-val').textContent = this.value;
      render();
    });
  });

  $('mg-download').addEventListener('click', function () {
    if (!img) return;
    var a = document.createElement('a');
    a.download = 'meme.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  });
})();
