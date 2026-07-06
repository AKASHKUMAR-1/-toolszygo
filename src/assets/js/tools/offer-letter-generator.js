(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var esc = window.toolsdoEsc;
  var lastText = '';

  function render() {
    var company = $('ol-company').value || '[Company]';
    var candidate = $('ol-candidate').value || '[Candidate]';
    var role = $('ol-role').value || '[Role]';
    var ctc = parseFloat($('ol-ctc').value) || 0;
    var d = $('ol-date').value ? new Date($('ol-date').value).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : '—';
    var joining = $('ol-joining').value ? new Date($('ol-joining').value).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : '[Joining Date]';
    var location = $('ol-location').value || '[Location]';
    var probation = parseInt($('ol-probation').value, 10) || 0;
    var hr = $('ol-hr').value || '[HR Name]';
    var ctcStr = '₹' + ctc.toLocaleString('en-IN') + ' (' + toolsdoWords(ctc).replace(' Only', '') + ') per annum';

    lastText = 'Date: ' + d + '\n\nDear ' + candidate + ',\n\n' +
      'Subject: Offer of Employment — ' + role + '\n\n' +
      'We are pleased to offer you the position of ' + role + ' at ' + company + ', based at our ' + location + ' office. Your total annual compensation (CTC) will be ' + ctcStr + '.\n\n' +
      'Your expected date of joining is ' + joining + '.' +
      (probation ? ' You will be on probation for a period of ' + probation + ' months from your date of joining, after which your employment will be confirmed subject to satisfactory performance.' : '') + '\n\n' +
      'This offer is contingent upon verification of your documents and credentials. Detailed terms of employment will be shared in your appointment letter upon joining.\n\n' +
      'Please sign and return a copy of this letter as acceptance of this offer within 7 days.\n\n' +
      'We look forward to welcoming you to the team!\n\n' +
      'Sincerely,\n\n' + hr + '\n' + company;

    $('ol-preview').innerHTML =
      '<div style="font-family:Georgia,serif;color:#222;font-size:13.5px;line-height:1.8;">' +
      '<div style="font-size:18px;font-weight:bold;border-bottom:2px solid #333;padding-bottom:8px;margin-bottom:14px;">' + esc(company) + '</div>' +
      lastText.split('\n\n').map(function (p) { return '<p style="margin:0 0 12px 0;">' + esc(p).replace(/\n/g, '<br>') + '</p>'; }).join('') +
      '<div style="margin-top:20px;border-top:1px dashed #999;padding-top:10px;font-size:12px;">Accepted by: ____________________ &nbsp;&nbsp; Date: ____________</div>' +
      '</div>';
  }

  ['ol-company', 'ol-date', 'ol-candidate', 'ol-role', 'ol-ctc', 'ol-joining', 'ol-location', 'ol-probation', 'ol-hr'].forEach(function (id) {
    $(id).addEventListener('input', render);
  });
  $('ol-print').addEventListener('click', function () {
    toolsdoPrint('ol-preview', 'Offer Letter');
  });
  $('ol-copy').addEventListener('click', function () {
    if (lastText) toolsdoCopy(lastText, this);
  });
  $('ol-date').value = new Date().toISOString().slice(0, 10);
  render();
})();
