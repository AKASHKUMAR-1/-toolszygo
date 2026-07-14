(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var KEY = 'toolsdo-exams';
  var exams = [];
  try { exams = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) {}

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(exams)); } catch (e) {}
  }

  function render() {
    exams.sort(function (a, b) { return new Date(a.date) - new Date(b.date); });
    $('ec-list').innerHTML = exams.map(function (ex, i) {
      var d = new Date(ex.date);
      var past = d <= new Date();
      var when = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true });
      return '<div class="file-item">' +
        '<span class="fname">' + ex.name.replace(/</g, '&lt;') + '</span>' +
        '<span class="fsize">' + (past ? 'ho gaya ✓' : when) + '</span>' +
        '<button data-i="' + i + '" title="Remove">✕</button>' +
        '</div>';
    }).join('');
  }

  function tick() {
    var upcoming = exams.filter(function (ex) { return new Date(ex.date) > new Date(); })[0];
    if (!upcoming) {
      $('ec-title').textContent = exams.length ? 'All exams done! 🎉' : 'Add your first exam';
      ['ec-days', 'ec-hours', 'ec-mins', 'ec-secs'].forEach(function (id) { $(id).textContent = '—'; });
      return;
    }
    var diff = new Date(upcoming.date) - new Date();
    $('ec-title').textContent = '📚 ' + upcoming.name;
    $('ec-days').textContent = Math.floor(diff / 86400000);
    $('ec-hours').textContent = Math.floor(diff / 3600000) % 24;
    $('ec-mins').textContent = Math.floor(diff / 60000) % 60;
    $('ec-secs').textContent = Math.floor(diff / 1000) % 60;
  }

  $('ec-add').addEventListener('click', function () {
    var name = $('ec-name').value.trim();
    var date = $('ec-date').value;
    if (!name || !date) {
      $('ec-title').textContent = 'Enter both name and date';
      return;
    }
    exams.push({ name: name, date: date });
    save();
    render();
    tick();
    $('ec-name').value = '';
  });

  $('ec-list').addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    exams.splice(parseInt(btn.getAttribute('data-i'), 10), 1);
    save();
    render();
    tick();
  });

  render();
  tick();
  setInterval(tick, 1000);
})();
