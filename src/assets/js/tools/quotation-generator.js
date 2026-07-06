(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var fmt = function (n) { return '₹' + n.toLocaleString('en-IN', { maximumFractionDigits: 2 }); };
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };

  function addItem() {
    var row = document.createElement('div');
    row.className = 'field-row qt-item';
    row.style.alignItems = 'flex-end';
    row.innerHTML = '<div class="field" style="flex:3;"><label>Item / Service</label><input type="text" class="it-name" placeholder="Description"></div>' +
      '<div class="field"><label>Qty</label><input type="number" class="it-qty" value="1" min="0"></div>' +
      '<div class="field"><label>Rate (₹)</label><input type="number" class="it-rate" min="0" placeholder="0"></div>' +
      '<button class="btn btn-secondary it-rm" style="padding:10px 12px;">✕</button>';
    $('qt-items').appendChild(row);
    row.querySelectorAll('input').forEach(function (i) { i.addEventListener('input', render); });
    row.querySelector('.it-rm').addEventListener('click', function () { row.remove(); render(); });
    render();
  }

  function render() {
    var items = Array.prototype.map.call(document.querySelectorAll('.qt-item'), function (row) {
      return {
        name: row.querySelector('.it-name').value,
        qty: parseFloat(row.querySelector('.it-qty').value) || 0,
        rate: parseFloat(row.querySelector('.it-rate').value) || 0,
      };
    }).filter(function (it) { return it.name || it.rate; });
    var total = 0;
    var rows = items.map(function (it, i) {
      var amt = it.qty * it.rate;
      total += amt;
      return '<tr><td style="border:1px solid #ccc;padding:6px 8px;">' + (i + 1) + '</td>' +
        '<td style="border:1px solid #ccc;padding:6px 8px;">' + esc(it.name) + '</td>' +
        '<td style="border:1px solid #ccc;padding:6px 8px;text-align:right;">' + it.qty + '</td>' +
        '<td style="border:1px solid #ccc;padding:6px 8px;text-align:right;">' + fmt(it.rate) + '</td>' +
        '<td style="border:1px solid #ccc;padding:6px 8px;text-align:right;">' + fmt(amt) + '</td></tr>';
    }).join('');
    var d = $('qt-date').value ? new Date($('qt-date').value) : new Date();
    var validity = parseInt($('qt-validity').value, 10) || 30;
    var validTill = new Date(d.getTime() + validity * 86400000);
    $('qt-preview').innerHTML =
      '<div style="font-family:Arial,sans-serif;color:#222;font-size:13px;">' +
      '<div style="display:flex;justify-content:space-between;border-bottom:2px solid #1A5276;padding-bottom:10px;margin-bottom:14px;">' +
      '<div style="font-size:19px;font-weight:bold;">' + esc($('qt-seller').value || 'Business Name') + '</div>' +
      '<div style="text-align:right;"><div style="font-size:17px;font-weight:bold;color:#1A5276;">QUOTATION</div>' +
      '<div>' + esc($('qt-number').value) + '</div><div>' + d.toLocaleDateString('en-IN') + '</div></div></div>' +
      '<div style="margin-bottom:12px;"><strong>To:</strong> ' + esc($('qt-client').value || '—') + '</div>' +
      '<table style="width:100%;border-collapse:collapse;font-size:12.5px;">' +
      '<tr style="background:#EBF0F5;"><th style="border:1px solid #ccc;padding:6px 8px;">#</th><th style="border:1px solid #ccc;padding:6px 8px;text-align:left;">Description</th><th style="border:1px solid #ccc;padding:6px 8px;">Qty</th><th style="border:1px solid #ccc;padding:6px 8px;">Rate</th><th style="border:1px solid #ccc;padding:6px 8px;">Amount</th></tr>' +
      rows + '</table>' +
      '<div style="margin-top:12px;text-align:right;font-size:16px;">Total: <strong>' + fmt(total) + '</strong></div>' +
      '<div style="margin-top:4px;font-size:12px;color:#555;"><em>' + toolsdoWords(total) + '</em></div>' +
      '<div style="margin-top:14px;padding:8px;background:#FFF8E7;border:1px solid #EEDFA9;font-size:12px;">' +
      '<strong>Validity:</strong> Ye quotation ' + validTill.toLocaleDateString('en-IN') + ' tak valid hai.' +
      ($('qt-terms').value ? '<br><strong>Terms:</strong> ' + esc($('qt-terms').value).replace(/\n/g, '<br>') : '') + '</div>' +
      '<div style="margin-top:26px;text-align:right;">For ' + esc($('qt-seller').value || 'Business') + '<br><br>___________________<br>Authorised Signatory</div>' +
      '</div>';
  }

  ['qt-seller', 'qt-client', 'qt-number', 'qt-date', 'qt-validity', 'qt-terms'].forEach(function (id) {
    $(id).addEventListener('input', render);
  });
  $('qt-add-item').addEventListener('click', addItem);
  $('qt-print').addEventListener('click', function () {
    toolsdoPrint('qt-preview', 'Quotation ' + $('qt-number').value);
  });
  $('qt-date').value = new Date().toISOString().slice(0, 10);
  addItem();
})();
