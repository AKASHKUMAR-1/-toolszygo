(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function hexToRgb(hex) {
    var m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
    if (!m) return null;
    var n = parseInt(m[1], 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }

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
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  function update(hex) {
    var rgb = hexToRgb(hex);
    if (!rgb) return;
    hex = '#' + hex.replace('#', '').toUpperCase();
    var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    $('cp-swatch').style.background = hex;
    $('cp-hex').textContent = hex;
    $('cp-rgb').textContent = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
    $('cp-hsl').textContent = 'hsl(' + hsl.h + ', ' + hsl.s + '%, ' + hsl.l + '%)';
  }

  $('cp-picker').addEventListener('input', function () {
    $('cp-hex-input').value = this.value.toUpperCase();
    update(this.value);
  });
  $('cp-hex-input').addEventListener('input', function () {
    var v = this.value.trim();
    if (/^#?[0-9a-f]{6}$/i.test(v)) {
      var hex = v.charAt(0) === '#' ? v : '#' + v;
      $('cp-picker').value = hex.toLowerCase();
      update(hex);
    }
  });
  $('cp-copy-hex').addEventListener('click', function () { toolsdoCopy($('cp-hex').textContent, this); });
  $('cp-copy-rgb').addEventListener('click', function () { toolsdoCopy($('cp-rgb').textContent, this); });
  $('cp-copy-hsl').addEventListener('click', function () { toolsdoCopy($('cp-hsl').textContent, this); });
  update('#D97757');
})();
