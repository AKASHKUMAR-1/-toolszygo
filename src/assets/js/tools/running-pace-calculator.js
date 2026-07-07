(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var updating = false;

  function parsePace(str) {
    var m = /^(\d+):(\d{1,2})$/.exec(str.trim());
    if (!m) return null;
    return parseInt(m[1], 10) + parseInt(m[2], 10) / 60; // min per km
  }
  function fmtPace(minPerKm) {
    var m = Math.floor(minPerKm);
    var s = Math.round((minPerKm - m) * 60);
    if (s === 60) { m++; s = 0; }
    return m + ':' + String(s).padStart(2, '0') + ' /km';
  }
  function fmtTime(totalMin) {
    var h = Math.floor(totalMin / 60);
    var m = Math.floor(totalMin % 60);
    var s = Math.round((totalMin - Math.floor(totalMin)) * 60);
    return (h ? h + 'h ' : '') + m + 'm ' + s + 's';
  }

  function getTimeMin() {
    var h = parseFloat($('rp-hours').value) || 0;
    var m = parseFloat($('rp-mins').value) || 0;
    var s = parseFloat($('rp-secs').value) || 0;
    return h * 60 + m + s / 60;
  }

  function recalc(source) {
    if (updating) return;
    updating = true;
    var dist = parseFloat($('rp-distance').value);
    var timeMin = getTimeMin();
    var paceVal = parsePace($('rp-pace').value);

    var pace = null;
    if (source !== 'pace' && dist && timeMin) {
      pace = timeMin / dist;
      $('rp-pace').value = fmtPace(pace);
    } else if (source === 'pace' && paceVal && dist) {
      pace = paceVal;
      var t = pace * dist;
      $('rp-hours').value = Math.floor(t / 60);
      $('rp-mins').value = Math.floor(t % 60);
      $('rp-secs').value = Math.round((t - Math.floor(t)) * 60);
    } else if (paceVal) {
      pace = paceVal;
    }

    if (pace && dist) {
      $('rp-out-pace').textContent = fmtPace(pace);
      $('rp-out-time').textContent = fmtTime(pace * dist);
      $('rp-out-dist').textContent = dist + ' km';
      $('rp-5k').textContent = fmtTime(pace * 5);
      $('rp-10k').textContent = fmtTime(pace * 10);
      $('rp-half').textContent = fmtTime(pace * 21.0975);
      $('rp-full').textContent = fmtTime(pace * 42.195);
    }
    updating = false;
  }

  $('rp-distance').addEventListener('input', function () { recalc('dist'); });
  ['rp-hours', 'rp-mins', 'rp-secs'].forEach(function (id) {
    $(id).addEventListener('input', function () { recalc('time'); });
  });
  $('rp-pace').addEventListener('input', function () { recalc('pace'); });

  $('rp-distance').value = '5';
  $('rp-mins').value = '25';
  recalc('time');
})();
