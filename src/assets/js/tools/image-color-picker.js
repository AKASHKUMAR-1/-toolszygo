(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var canvas = $('icp-canvas');
  var ctx = canvas.getContext('2d', { willReadFrequently: true });

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        default: h = (r - g) / d + 4;
      }
      h /= 6;
    }
    return 'hsl(' + Math.round(h * 360) + ', ' + Math.round(s * 100) + '%, ' + Math.round(l * 100) + '%)';
  }

  function hex(r, g, b) {
    return '#' + [r, g, b].map(function (v) { return v.toString(16).padStart(2, '0'); }).join('').toUpperCase();
  }

  function setColor(r, g, b) {
    $('icp-swatch').style.background = hex(r, g, b);
    $('icp-hex').textContent = hex(r, g, b);
    $('icp-rgb').textContent = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    $('icp-hsl').textContent = rgbToHsl(r, g, b);
  }

  var drop = $('icp-drop');
  var input = $('icp-file');
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
      var max = 1400;
      var scale = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
      canvas.width = Math.round(img.naturalWidth * scale);
      canvas.height = Math.round(img.naturalHeight * scale);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.style.display = '';
      palette();
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }

  canvas.addEventListener('click', function (e) {
    var rect = canvas.getBoundingClientRect();
    var x = Math.round((e.clientX - rect.left) * canvas.width / rect.width);
    var y = Math.round((e.clientY - rect.top) * canvas.height / rect.height);
    var d = ctx.getImageData(x, y, 1, 1).data;
    setColor(d[0], d[1], d[2]);
  });

  function palette() {
    // quantize by sampling into 32-step buckets
    var d = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    var buckets = {};
    var step = Math.max(4, Math.floor(d.length / 4 / 20000)) * 4;
    for (var i = 0; i < d.length; i += step) {
      var key = (Math.round(d[i] / 32) * 32) + ',' + (Math.round(d[i + 1] / 32) * 32) + ',' + (Math.round(d[i + 2] / 32) * 32);
      buckets[key] = (buckets[key] || 0) + 1;
    }
    var top = Object.keys(buckets).sort(function (a, b) { return buckets[b] - buckets[a]; }).slice(0, 8);
    $('icp-palette').innerHTML = top.map(function (k) {
      var p = k.split(',').map(Number);
      var h = hex(Math.min(255, p[0]), Math.min(255, p[1]), Math.min(255, p[2]));
      return '<button class="theme-swatch" style="background:' + h + ';width:34px;height:34px;border-radius:8px;" data-c="' + h + '" title="' + h + '"></button>';
    }).join('');
  }

  $('icp-palette').addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    var h = btn.getAttribute('data-c');
    var r = parseInt(h.slice(1, 3), 16), g = parseInt(h.slice(3, 5), 16), b = parseInt(h.slice(5, 7), 16);
    setColor(r, g, b);
  });

  $('icp-copy-hex').addEventListener('click', function () {
    var t = $('icp-hex').textContent;
    if (t !== '—') toolsdoCopy(t, this);
  });
  $('icp-copy-rgb').addEventListener('click', function () {
    var t = $('icp-rgb').textContent;
    if (t !== '—') toolsdoCopy(t, this);
  });
})();
