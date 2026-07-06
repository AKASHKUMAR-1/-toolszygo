(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function update() {
    var dpr = window.devicePixelRatio || 1;
    var vw = window.innerWidth, vh = window.innerHeight;
    $('sr-screen').textContent = screen.width + '×' + screen.height;
    $('sr-viewport').textContent = vw + '×' + vh;
    $('sr-dpr').textContent = dpr;
    $('sr-depth').textContent = screen.colorDepth + '-bit';
    $('sr-effective').textContent = Math.round(screen.width * dpr) + '×' + Math.round(screen.height * dpr) + ' px';
    $('sr-avail').textContent = screen.availWidth + '×' + screen.availHeight;
    $('sr-orientation').textContent = vw >= vh ? 'Landscape' : 'Portrait';
    var device = vw < 768 ? 'Mobile 📱' : vw < 1100 ? 'Tablet 📲' : 'Desktop / Laptop 💻';
    $('sr-device').textContent = device;
  }

  window.addEventListener('resize', update);
  if (screen.orientation) {
    screen.orientation.addEventListener('change', update);
  }
  $('sr-copy').addEventListener('click', function () {
    var info = 'Screen: ' + $('sr-screen').textContent +
      ' | Viewport: ' + $('sr-viewport').textContent +
      ' | DPR: ' + $('sr-dpr').textContent +
      ' | Effective: ' + $('sr-effective').textContent +
      ' | Color: ' + $('sr-depth').textContent;
    toolsdoCopy(info, this);
  });
  update();
})();
