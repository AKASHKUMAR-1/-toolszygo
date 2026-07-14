(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var esc = window.toolsdoEsc;
  var fmt = window.toolsdoINR;

  function months(fromVal, toVal) {
    if (!fromVal) return [];
    var from = new Date(fromVal + '-01');
    var to = toVal ? new Date(toVal + '-01') : from;
    if (to < from) to = from;
    var list = [];
    var cur = new Date(from);
    var guard = 0;
    while (cur <= to && guard < 24) {
      list.push(new Date(cur));
      cur.setMonth(cur.getMonth() + 1);
      guard++;
    }
    return list;
  }

  function render() {
    var rent = parseFloat($('rr-rent').value) || 0;
    var list = months($('rr-from').value, $('rr-to').value);
    if (!list.length) {
      $('rr-preview').innerHTML = '<em style="color:#999;">Choose a From month</em>';
      return;
    }
    var receipts = list.map(function (m, i) {
      var label = m.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
      return '<div style="border:1px solid #999;padding:16px;margin-bottom:14px;page-break-inside:avoid;font-family:Arial,sans-serif;font-size:13px;color:#222;">' +
        '<div style="text-align:center;font-weight:bold;font-size:15px;border-bottom:1px solid #999;padding-bottom:6px;margin-bottom:10px;">RENT RECEIPT — ' + label + '</div>' +
        '<p style="line-height:1.8;margin:0;">Received a sum of <strong>' + fmt(rent) + '</strong> (' + toolsdoWords(rent) + ') from <strong>' + esc($('rr-tenant').value || '____________') + '</strong> towards rent for the month of <strong>' + label + '</strong> for the property at <strong>' + esc($('rr-address').value || '____________') + '</strong>.</p>' +
        '<div style="display:flex;justify-content:space-between;margin-top:22px;align-items:flex-end;">' +
        '<div>Landlord: <strong>' + esc($('rr-landlord').value || '____________') + '</strong>' +
        ($('rr-pan').value ? '<br>PAN: <strong>' + esc($('rr-pan').value.toUpperCase()) + '</strong>' : '') + '</div>' +
        '<div style="text-align:center;"><div style="border:1px dashed #999;width:80px;height:56px;display:flex;align-items:center;justify-content:center;font-size:9px;color:#999;margin-bottom:4px;">Revenue<br>Stamp<br>(cash pe)</div>___________________<br>Signature</div></div>' +
        '</div>';
    }).join('');
    $('rr-preview').innerHTML = receipts;
  }

  ['rr-tenant', 'rr-landlord', 'rr-address', 'rr-rent', 'rr-pan', 'rr-from', 'rr-to'].forEach(function (id) {
    $(id).addEventListener('input', render);
    $(id).addEventListener('change', render);
  });
  $('rr-print').addEventListener('click', function () {
    toolsdoPrint('rr-preview', 'Rent Receipts');
  });
  var now = new Date();
  $('rr-from').value = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
  $('rr-to').value = $('rr-from').value;
  render();
})();
