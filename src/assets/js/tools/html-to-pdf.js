(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function render() {
    var html = $('hp-input').value;
    // strip script tags for safety
    html = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/\son\w+="[^"]*"/gi, '').replace(/\son\w+='[^']*'/gi, '');
    $('hp-preview').innerHTML = html || '<span style="color:#B98E63;font-family:monospace;font-size:12px;">rendered preview yahan dikhega</span>';
  }

  $('hp-input').addEventListener('input', render);
  $('hp-print').addEventListener('click', function () {
    render();
    toolsdoPrint('hp-preview', 'Document');
  });
})();
