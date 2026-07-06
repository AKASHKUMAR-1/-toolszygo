(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var fmt = function (n) { return toolsdoINR(n, 2); };
  var esc = window.toolsdoEsc;

  function addItem(name, qty, rate) {
    var row = document.createElement('div');
    row.className = 'field-row inv-item';
    row.style.alignItems = 'flex-end';
    row.innerHTML = '<div class="field" style="flex:3;"><label>Item</label><input type="text" class="it-name" value="' + (name || '') + '" placeholder="Item / service"></div>' +
      '<div class="field"><label>Qty</label><input type="number" class="it-qty" value="' + (qty || 1) + '" min="0" step="1"></div>' +
      '<div class="field"><label>Rate (₹)</label><input type="number" class="it-rate" value="' + (rate || '') + '" min="0" placeholder="0"></div>' +
      '<button class="btn btn-secondary it-rm" style="padding:10px 12px;" title="Remove">✕</button>';
    $('inv-items').appendChild(row);
    row.querySelectorAll('input').forEach(function (i) { i.addEventListener('input', render); });
    row.querySelector('.it-rm').addEventListener('click', function () { row.remove(); render(); });
    render();
  }

  function items() {
    return Array.prototype.map.call(document.querySelectorAll('.inv-item'), function (row) {
      return {
        name: row.querySelector('.it-name').value,
        qty: parseFloat(row.querySelector('.it-qty').value) || 0,
        rate: parseFloat(row.querySelector('.it-rate').value) || 0,
      };
    }).filter(function (it) { return it.name || it.rate; });
  }

  function render() {
    var list = items();
    var subtotal = list.reduce(function (s, it) { return s + it.qty * it.rate; }, 0);
    var taxPct = parseFloat($('inv-tax').value) || 0;
    var tax = subtotal * taxPct / 100;
    var total = subtotal + tax;
    var rows = list.map(function (it, i) {
      return '<tr><td style="border:1px solid #ccc;padding:6px 8px;">' + (i + 1) + '</td>' +
        '<td style="border:1px solid #ccc;padding:6px 8px;">' + esc(it.name) + '</td>' +
        '<td style="border:1px solid #ccc;padding:6px 8px;text-align:right;">' + it.qty + '</td>' +
        '<td style="border:1px solid #ccc;padding:6px 8px;text-align:right;">' + fmt(it.rate) + '</td>' +
        '<td style="border:1px solid #ccc;padding:6px 8px;text-align:right;">' + fmt(it.qty * it.rate) + '</td></tr>';
    }).join('');
    var d = $('inv-date').value ? new Date($('inv-date').value).toLocaleDateString('en-IN') : '';
    $('inv-preview').innerHTML =
      '<div style="font-family:Arial,sans-serif;color:#222;font-size:13px;">' +
      '<div style="display:flex;justify-content:space-between;border-bottom:2px solid #333;padding-bottom:10px;margin-bottom:14px;">' +
      '<div><div style="font-size:20px;font-weight:bold;">' + esc($('inv-seller').value || 'Business Name') + '</div></div>' +
      '<div style="text-align:right;"><div style="font-size:18px;font-weight:bold;color:#555;">INVOICE</div>' +
      '<div>' + esc($('inv-number').value) + '</div><div>' + d + '</div></div></div>' +
      '<div style="margin-bottom:12px;"><strong>Bill To:</strong> ' + esc($('inv-buyer').value || '—') + '</div>' +
      '<table style="width:100%;border-collapse:collapse;font-size:12.5px;">' +
      '<tr style="background:#f0f0f0;"><th style="border:1px solid #ccc;padding:6px 8px;">#</th><th style="border:1px solid #ccc;padding:6px 8px;text-align:left;">Item</th><th style="border:1px solid #ccc;padding:6px 8px;">Qty</th><th style="border:1px solid #ccc;padding:6px 8px;">Rate</th><th style="border:1px solid #ccc;padding:6px 8px;">Amount</th></tr>' +
      rows + '</table>' +
      '<div style="margin-top:12px;text-align:right;">' +
      '<div>Subtotal: <strong>' + fmt(subtotal) + '</strong></div>' +
      (taxPct ? '<div>Tax (' + taxPct + '%): <strong>' + fmt(tax) + '</strong></div>' : '') +
      '<div style="font-size:16px;margin-top:4px;">Total: <strong>' + fmt(total) + '</strong></div></div>' +
      '<div style="margin-top:8px;font-size:12px;color:#555;"><em>' + toolsdoWords(total) + '</em></div>' +
      '<div style="margin-top:30px;text-align:right;">___________________<br>Authorised Signature</div>' +
      '</div>';
  }

  ['inv-seller', 'inv-buyer', 'inv-number', 'inv-date', 'inv-tax'].forEach(function (id) {
    $(id).addEventListener('input', render);
  });
  $('inv-add-item').addEventListener('click', function () { addItem(); });
  $('inv-print').addEventListener('click', function () {
    toolsdoPrint('inv-preview', 'Invoice ' + $('inv-number').value);
  });
  $('inv-date').value = new Date().toISOString().slice(0, 10);
  addItem('', 1, '');
})();
