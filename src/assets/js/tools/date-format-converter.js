(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var pad = function (n) { return String(n).padStart(2, '0'); };

  function setToday() {
    var now = new Date();
    $('df-date').value = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
    $('df-time').value = pad(now.getHours()) + ':' + pad(now.getMinutes());
    update();
  }

  function update() {
    var dv = $('df-date').value;
    if (!dv) return;
    var tv = $('df-time').value || '00:00';
    var d = new Date(dv + 'T' + tv + ':00');
    if (isNaN(d)) return;
    var dd = pad(d.getDate()), mm = pad(d.getMonth() + 1), yyyy = d.getFullYear();
    $('df-dmy').textContent = dd + '/' + mm + '/' + yyyy;
    $('df-mdy').textContent = mm + '/' + dd + '/' + yyyy;
    $('df-iso').textContent = yyyy + '-' + mm + '-' + dd;
    $('df-dmmm').textContent = dd + '-' + MONTHS[d.getMonth()] + '-' + yyyy;
    $('df-long').textContent = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    $('df-day').textContent = d.toLocaleDateString('en-IN', { weekday: 'long' });
    $('df-iso-full').textContent = d.toISOString();
    $('df-unix').textContent = Math.floor(d.getTime() / 1000);
  }

  $('df-date').addEventListener('change', update);
  $('df-time').addEventListener('change', update);
  $('df-today').addEventListener('click', setToday);
  $('df-copy').addEventListener('click', function () {
    var rows = ['DD/MM/YYYY: ' + $('df-dmy').textContent, 'MM/DD/YYYY: ' + $('df-mdy').textContent,
      'ISO: ' + $('df-iso').textContent, 'Long: ' + $('df-long').textContent,
      'Day: ' + $('df-day').textContent, 'Unix: ' + $('df-unix').textContent];
    toolsdoCopy(rows.join('\n'), this);
  });
  setToday();
})();
