(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var fmt = function (n) { return toolsdoINR(n, 2); };
  var esc = window.toolsdoEsc;

  function addItem() {
    var row = document.createElement('div');
    row.className = 'field-row bill-item';
    row.style.alignItems = 'flex-end';
    row.innerHTML = '<div class="field" style="flex:3;"><label>Item</label><input type="text" class="it-name" placeholder="Item"></div>' +
      '<div class="field"><label>Qty</label><input type="number" class="it-qty" value="1" min="0"></div>' +
      '<div class="field"><label>Rate (₹)</label><input type="number" class="it-rate" min="0" placeholder="0"></div>' +
      '<button class="btn btn-secondary it-rm" style="padding:10px 12px;">✕</button>';
    $('bill-items').appendChild(row);
    row.querySelectorAll('input').forEach(function (i) { i.addEventListener('input', render); });
    row.querySelector('.it-rm').addEventListener('click', function () { row.remove(); render(); });
    render();
  }

  function render() {
    var items = Array.prototype.map.call(document.querySelectorAll('.bill-item'), function (row) {
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
      return '<tr><td style="border-bottom:1px dashed #bbb;padding:5px;">' + esc(it.name) + '</td>' +
        '<td style="border-bottom:1px dashed #bbb;padding:5px;text-align:right;">' + it.qty + ' × ' + fmt(it.rate) + '</td>' +
        '<td style="border-bottom:1px dashed #bbb;padding:5px;text-align:right;">' + fmt(amt) + '</td></tr>';
    }).join('');
    var d = $('bill-date').value ? new Date($('bill-date').value).toLocaleDateString('en-IN') : '';
    $('bill-preview').innerHTML =
      '<div style="font-family:Arial,sans-serif;color:#222;font-size:13px;max-width:400px;margin:0 auto;">' +
      '<div style="text-align:center;border-bottom:2px solid #333;padding-bottom:8px;margin-bottom:8px;">' +
      '<div style="font-size:18px;font-weight:bold;">' + esc($('bill-shop').value || 'Shop Name') + '</div>' +
      ($('bill-phone').value ? '<div style="font-size:12px;">📞 ' + esc($('bill-phone').value) + '</div>' : '') + '</div>' +
      '<div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px;">' +
      '<div>' + ($('bill-customer').value ? 'Customer: ' + esc($('bill-customer').value) : '') + '</div><div>' + d + '</div></div>' +
      '<table style="width:100%;border-collapse:collapse;">' + rows + '</table>' +
      '<div style="text-align:right;font-size:16px;margin-top:10px;border-top:2px solid #333;padding-top:6px;">TOTAL: <strong>' + fmt(total) + '</strong></div>' +
      '<div style="text-align:center;margin-top:14px;font-size:12px;color:#777;">Dhanyavaad! Phir aaiye 🙏</div>' +
      '</div>';
  }

  ['bill-shop', 'bill-phone', 'bill-customer', 'bill-date'].forEach(function (id) {
    $(id).addEventListener('input', render);
  });
  $('bill-add-item').addEventListener('click', addItem);
  $('bill-print').addEventListener('click', function () {
    toolsdoPrint('bill-preview', 'Bill');
  });
  $('bill-date').value = new Date().toISOString().slice(0, 10);
  addItem();
})();
