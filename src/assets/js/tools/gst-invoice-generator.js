(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var fmt = function (n) { return toolsdoINR(n, 2); };
  var esc = window.toolsdoEsc;

  function addItem() {
    var row = document.createElement('div');
    row.className = 'field-row gi-item';
    row.style.alignItems = 'flex-end';
    row.innerHTML = '<div class="field" style="flex:3;"><label>Item</label><input type="text" class="it-name" placeholder="Item / service"></div>' +
      '<div class="field"><label>HSN</label><input type="text" class="it-hsn" placeholder="9983"></div>' +
      '<div class="field"><label>Qty</label><input type="number" class="it-qty" value="1" min="0"></div>' +
      '<div class="field"><label>Rate (₹)</label><input type="number" class="it-rate" min="0" placeholder="0"></div>' +
      '<div class="field"><label>GST %</label><select class="it-gst"><option value="0">0</option><option value="5">5</option><option value="12">12</option><option value="18" selected>18</option><option value="28">28</option></select></div>' +
      '<button class="btn btn-secondary it-rm" style="padding:10px 12px;">✕</button>';
    $('gi-items').appendChild(row);
    row.querySelectorAll('input,select').forEach(function (i) {
      i.addEventListener('input', render);
      i.addEventListener('change', render);
    });
    row.querySelector('.it-rm').addEventListener('click', function () { row.remove(); render(); });
    render();
  }

  function render() {
    var inter = $('gi-type').value === 'inter';
    var items = Array.prototype.map.call(document.querySelectorAll('.gi-item'), function (row) {
      return {
        name: row.querySelector('.it-name').value,
        hsn: row.querySelector('.it-hsn').value,
        qty: parseFloat(row.querySelector('.it-qty').value) || 0,
        rate: parseFloat(row.querySelector('.it-rate').value) || 0,
        gst: parseFloat(row.querySelector('.it-gst').value) || 0,
      };
    }).filter(function (it) { return it.name || it.rate; });

    var subtotal = 0, totalTax = 0;
    var rows = items.map(function (it, i) {
      var amount = it.qty * it.rate;
      var tax = amount * it.gst / 100;
      subtotal += amount;
      totalTax += tax;
      return '<tr><td style="border:1px solid #bbb;padding:5px 7px;">' + (i + 1) + '</td>' +
        '<td style="border:1px solid #bbb;padding:5px 7px;">' + esc(it.name) + '</td>' +
        '<td style="border:1px solid #bbb;padding:5px 7px;">' + esc(it.hsn) + '</td>' +
        '<td style="border:1px solid #bbb;padding:5px 7px;text-align:right;">' + it.qty + '</td>' +
        '<td style="border:1px solid #bbb;padding:5px 7px;text-align:right;">' + fmt(it.rate) + '</td>' +
        '<td style="border:1px solid #bbb;padding:5px 7px;text-align:right;">' + it.gst + '%</td>' +
        '<td style="border:1px solid #bbb;padding:5px 7px;text-align:right;">' + fmt(amount) + '</td></tr>';
    }).join('');

    var total = subtotal + totalTax;
    var d = $('gi-date').value ? new Date($('gi-date').value).toLocaleDateString('en-IN') : '';
    var taxRows = inter
      ? '<div>IGST: <strong>' + fmt(totalTax) + '</strong></div>'
      : '<div>CGST: <strong>' + fmt(totalTax / 2) + '</strong></div><div>SGST: <strong>' + fmt(totalTax / 2) + '</strong></div>';

    $('gi-preview').innerHTML =
      '<div style="font-family:Arial,sans-serif;color:#222;font-size:12.5px;">' +
      '<div style="text-align:center;font-size:15px;font-weight:bold;border-bottom:2px solid #333;padding-bottom:6px;margin-bottom:10px;">TAX INVOICE</div>' +
      '<div style="display:flex;justify-content:space-between;margin-bottom:10px;">' +
      '<div><div style="font-size:16px;font-weight:bold;">' + esc($('gi-seller').value || 'Seller') + '</div>' +
      '<div>GSTIN: ' + esc($('gi-seller-gstin').value.toUpperCase() || '—') + '</div></div>' +
      '<div style="text-align:right;"><div>Invoice: <strong>' + esc($('gi-number').value) + '</strong></div><div>Date: ' + d + '</div></div></div>' +
      '<div style="margin-bottom:10px;padding:8px;background:#f7f7f7;border:1px solid #ddd;"><strong>Bill To:</strong> ' + esc($('gi-buyer').value || '—') +
      ($('gi-buyer-gstin').value ? '<br>GSTIN: ' + esc($('gi-buyer-gstin').value.toUpperCase()) : '') + '</div>' +
      '<table style="width:100%;border-collapse:collapse;">' +
      '<tr style="background:#efefef;"><th style="border:1px solid #bbb;padding:5px 7px;">#</th><th style="border:1px solid #bbb;padding:5px 7px;text-align:left;">Item</th><th style="border:1px solid #bbb;padding:5px 7px;">HSN</th><th style="border:1px solid #bbb;padding:5px 7px;">Qty</th><th style="border:1px solid #bbb;padding:5px 7px;">Rate</th><th style="border:1px solid #bbb;padding:5px 7px;">GST</th><th style="border:1px solid #bbb;padding:5px 7px;">Taxable</th></tr>' +
      rows + '</table>' +
      '<div style="margin-top:10px;text-align:right;">' +
      '<div>Taxable Value: <strong>' + fmt(subtotal) + '</strong></div>' + taxRows +
      '<div style="font-size:15px;margin-top:4px;border-top:1px solid #999;padding-top:4px;">Grand Total: <strong>' + fmt(Math.round(total)) + '</strong></div></div>' +
      '<div style="margin-top:6px;font-size:11.5px;color:#555;"><em>' + toolsdoWords(Math.round(total)) + '</em></div>' +
      '<div style="margin-top:26px;display:flex;justify-content:space-between;font-size:11.5px;">' +
      '<div>Ye computer-generated invoice hai.</div>' +
      '<div style="text-align:right;">For ' + esc($('gi-seller').value || 'Seller') + '<br><br>___________________<br>Authorised Signatory</div></div>' +
      '</div>';
  }

  ['gi-seller', 'gi-seller-gstin', 'gi-buyer', 'gi-buyer-gstin', 'gi-number', 'gi-date', 'gi-type'].forEach(function (id) {
    $(id).addEventListener('input', render);
    $(id).addEventListener('change', render);
  });
  $('gi-add-item').addEventListener('click', addItem);
  $('gi-print').addEventListener('click', function () {
    toolsdoPrint('gi-preview', 'Tax Invoice ' + $('gi-number').value);
  });
  $('gi-date').value = new Date().toISOString().slice(0, 10);
  addItem();
})();
