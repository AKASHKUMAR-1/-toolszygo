(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var fmt = function (n) { return '₹' + n.toLocaleString('en-IN', { maximumFractionDigits: 2 }); };
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };

  function render() {
    var basic = parseFloat($('ss-basic').value) || 0;
    var hra = parseFloat($('ss-hra').value) || 0;
    var allow = parseFloat($('ss-allow').value) || 0;
    var pf = parseFloat($('ss-pf').value) || 0;
    var pt = parseFloat($('ss-pt').value) || 0;
    var other = parseFloat($('ss-other-ded').value) || 0;
    var gross = basic + hra + allow;
    var ded = pf + pt + other;
    var net = gross - ded;
    var monthVal = $('ss-month').value;
    var monthLabel = monthVal
      ? new Date(monthVal + '-01').toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })
      : '—';
    var cell = 'style="border:1px solid #bbb;padding:6px 10px;"';
    var cellR = 'style="border:1px solid #bbb;padding:6px 10px;text-align:right;"';
    $('ss-preview').innerHTML =
      '<div style="font-family:Arial,sans-serif;color:#222;font-size:13px;">' +
      '<div style="text-align:center;border-bottom:2px solid #333;padding-bottom:8px;margin-bottom:10px;">' +
      '<div style="font-size:18px;font-weight:bold;">' + esc($('ss-company').value || 'Company Name') + '</div>' +
      '<div style="font-size:13px;color:#555;">Salary Slip — ' + monthLabel + '</div></div>' +
      '<table style="width:100%;border-collapse:collapse;margin-bottom:10px;font-size:12.5px;">' +
      '<tr><td ' + cell + '><strong>Employee:</strong> ' + esc($('ss-employee').value || '—') + '</td>' +
      '<td ' + cell + '><strong>Designation:</strong> ' + esc($('ss-designation').value || '—') + '</td>' +
      ($('ss-empid').value ? '<td ' + cell + '><strong>Emp ID:</strong> ' + esc($('ss-empid').value) + '</td>' : '') + '</tr></table>' +
      '<table style="width:100%;border-collapse:collapse;font-size:12.5px;">' +
      '<tr style="background:#efefef;"><th ' + cell + '>Earnings</th><th ' + cellR + '>Amount</th><th ' + cell + '>Deductions</th><th ' + cellR + '>Amount</th></tr>' +
      '<tr><td ' + cell + '>Basic Salary</td><td ' + cellR + '>' + fmt(basic) + '</td><td ' + cell + '>Provident Fund</td><td ' + cellR + '>' + fmt(pf) + '</td></tr>' +
      '<tr><td ' + cell + '>HRA</td><td ' + cellR + '>' + fmt(hra) + '</td><td ' + cell + '>Professional Tax</td><td ' + cellR + '>' + fmt(pt) + '</td></tr>' +
      '<tr><td ' + cell + '>Other Allowances</td><td ' + cellR + '>' + fmt(allow) + '</td><td ' + cell + '>Other Deductions</td><td ' + cellR + '>' + fmt(other) + '</td></tr>' +
      '<tr style="background:#f7f7f7;font-weight:bold;"><td ' + cell + '>Gross Earnings</td><td ' + cellR + '>' + fmt(gross) + '</td><td ' + cell + '>Total Deductions</td><td ' + cellR + '>' + fmt(ded) + '</td></tr>' +
      '</table>' +
      '<div style="margin-top:12px;padding:10px;background:#EBF5EB;border:1px solid #BFDFBF;font-size:15px;text-align:center;">Net Pay: <strong>' + fmt(net) + '</strong><br><span style="font-size:11.5px;color:#555;"><em>' + toolsdoWords(net) + '</em></span></div>' +
      '<div style="margin-top:24px;display:flex;justify-content:space-between;font-size:11.5px;color:#666;">' +
      '<div>Ye computer-generated slip hai.</div><div>___________________<br>Authorised Signatory</div></div>' +
      '</div>';
  }

  ['ss-company', 'ss-month', 'ss-employee', 'ss-designation', 'ss-empid', 'ss-basic', 'ss-hra', 'ss-allow', 'ss-pf', 'ss-pt', 'ss-other-ded'].forEach(function (id) {
    $(id).addEventListener('input', render);
  });
  $('ss-print').addEventListener('click', function () {
    toolsdoPrint('ss-preview', 'Salary Slip');
  });
  $('ss-month').value = new Date().toISOString().slice(0, 7);
  render();
})();
