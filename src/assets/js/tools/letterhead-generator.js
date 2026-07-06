(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };

  function render() {
    var color = $('lh-color').value;
    var contacts = [$('lh-phone').value, $('lh-email').value, $('lh-web').value].filter(Boolean).map(esc).join(' &nbsp;|&nbsp; ');
    $('lh-preview').innerHTML =
      '<div style="font-family:Arial,sans-serif;color:#222;width:100%;min-height:500px;display:flex;flex-direction:column;background:#FFF;">' +
      '<div style="border-top:8px solid ' + color + ';padding:22px 28px 14px 28px;border-bottom:2px solid ' + color + ';">' +
      '<div style="font-size:24px;font-weight:bold;color:' + color + ';letter-spacing:0.5px;">' + esc($('lh-company').value || 'Company Name') + '</div>' +
      ($('lh-tagline').value ? '<div style="font-size:12px;color:#666;font-style:italic;margin-top:2px;">' + esc($('lh-tagline').value) + '</div>' : '') +
      '</div>' +
      '<div style="flex:1;min-height:300px;"></div>' +
      '<div style="border-top:2px solid ' + color + ';padding:10px 28px;font-size:11px;color:#555;display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px;">' +
      '<div>' + esc($('lh-address').value || '') + '</div>' +
      '<div>' + contacts + '</div>' +
      '</div></div>';
  }

  ['lh-company', 'lh-tagline', 'lh-address', 'lh-phone', 'lh-email', 'lh-web', 'lh-color'].forEach(function (id) {
    $(id).addEventListener('input', render);
  });
  $('lh-print').addEventListener('click', function () {
    toolsdoPrint('lh-preview', 'Letterhead');
  });
  render();
})();
