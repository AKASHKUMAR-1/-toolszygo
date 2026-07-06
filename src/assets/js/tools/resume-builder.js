(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };

  function parseLines(val, parts) {
    return val.split('\n').map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) {
      var seg = l.split('|').map(function (s) { return s.trim(); });
      var obj = {};
      parts.forEach(function (p, i) { obj[p] = seg[i] || ''; });
      return obj;
    });
  }

  function render() {
    var name = $('rb-name').value || 'Aapka Naam';
    var contacts = [$('rb-phone').value, $('rb-email').value, $('rb-city').value].filter(Boolean).map(esc).join(' • ');
    var exp = parseLines($('rb-experience').value, ['role', 'company', 'duration', 'work']);
    var edu = parseLines($('rb-education').value, ['degree', 'college', 'year', 'marks']);
    var skills = $('rb-skills').value.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    var h2 = 'style="font-size:13px;letter-spacing:1.5px;color:#1A5276;border-bottom:1.5px solid #1A5276;padding-bottom:3px;margin:16px 0 8px 0;"';

    $('rb-preview').innerHTML =
      '<div style="font-family:Arial,sans-serif;color:#222;font-size:12.5px;line-height:1.55;">' +
      '<div style="text-align:center;margin-bottom:6px;">' +
      '<div style="font-size:22px;font-weight:bold;">' + esc(name) + '</div>' +
      ($('rb-title').value ? '<div style="font-size:13px;color:#1A5276;font-weight:bold;">' + esc($('rb-title').value) + '</div>' : '') +
      '<div style="font-size:11.5px;color:#555;margin-top:3px;">' + contacts + '</div></div>' +
      ($('rb-summary').value ? '<h2 ' + h2 + '>SUMMARY</h2><p style="margin:0;">' + esc($('rb-summary').value) + '</p>' : '') +
      (exp.length ? '<h2 ' + h2 + '>EXPERIENCE</h2>' + exp.map(function (e) {
        return '<div style="margin-bottom:8px;"><div style="display:flex;justify-content:space-between;"><strong>' + esc(e.role) + (e.company ? ' — ' + esc(e.company) : '') + '</strong><span style="color:#555;">' + esc(e.duration) + '</span></div>' +
          (e.work ? '<div>' + esc(e.work) + '</div>' : '') + '</div>';
      }).join('') : '') +
      (edu.length ? '<h2 ' + h2 + '>EDUCATION</h2>' + edu.map(function (e) {
        return '<div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span><strong>' + esc(e.degree) + '</strong>' + (e.college ? ' — ' + esc(e.college) : '') + '</span><span style="color:#555;">' + [e.year, e.marks].filter(Boolean).map(esc).join(' • ') + '</span></div>';
      }).join('') : '') +
      (skills.length ? '<h2 ' + h2 + '>SKILLS</h2><div>' + skills.map(function (s) {
        return '<span style="display:inline-block;background:#EBF0F5;border-radius:4px;padding:2px 9px;margin:0 5px 5px 0;">' + esc(s) + '</span>';
      }).join('') + '</div>' : '') +
      '</div>';
  }

  ['rb-name', 'rb-title', 'rb-phone', 'rb-email', 'rb-city', 'rb-summary', 'rb-experience', 'rb-education', 'rb-skills'].forEach(function (id) {
    $(id).addEventListener('input', render);
  });
  $('rb-print').addEventListener('click', function () {
    toolsdoPrint('rb-preview', ($('rb-name').value || 'Resume'));
  });
  render();
})();
