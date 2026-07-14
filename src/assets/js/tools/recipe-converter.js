(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var esc = window.toolsdoEsc;

  function addRow(name, qty, unit) {
    var row = document.createElement('div');
    row.className = 'field-row rc-item';
    row.style.alignItems = 'flex-end';
    row.innerHTML = '<div class="field" style="flex:2;"><label>Ingredient</label><input type="text" class="rc-name" value="' + (name || '') + '" placeholder="e.g. Flour"></div>' +
      '<div class="field"><label>Quantity</label><input type="number" class="rc-qty" value="' + (qty !== undefined ? qty : '') + '" min="0" step="any"></div>' +
      '<div class="field"><label>Unit</label><input type="text" class="rc-unit" value="' + (unit || '') + '" placeholder="cups"></div>' +
      '<button class="btn btn-secondary rc-rm" style="padding:10px 12px;">✕</button>';
    $('rc-items').appendChild(row);
    row.querySelectorAll('input').forEach(function (el) { el.addEventListener('input', calc); });
    row.querySelector('.rc-rm').addEventListener('click', function () { row.remove(); calc(); });
    calc();
  }

  function calc() {
    var orig = parseFloat($('rc-original').value) || 1;
    var target = parseFloat($('rc-target').value) || 1;
    var factor = target / orig;
    var items = Array.prototype.map.call(document.querySelectorAll('.rc-item'), function (row) {
      return {
        name: row.querySelector('.rc-name').value,
        qty: parseFloat(row.querySelector('.rc-qty').value) || 0,
        unit: row.querySelector('.rc-unit').value,
      };
    }).filter(function (it) { return it.name; });

    if (!items.length) {
      $('rc-output').innerHTML = '<span style="color:#A39C8B;">Add ingredients above</span>';
      return;
    }
    $('rc-output').innerHTML = items.map(function (it) {
      var scaled = Math.round(it.qty * factor * 1000) / 1000;
      return '<div>' + esc(scaled) + ' ' + esc(it.unit) + ' <strong>' + esc(it.name) + '</strong> <span style="color:#B98E63;">(original: ' + esc(it.qty) + ' ' + esc(it.unit) + ')</span></div>';
    }).join('');
  }

  $('rc-add').addEventListener('click', function () { addRow(); });
  $('rc-original').addEventListener('input', calc);
  $('rc-target').addEventListener('input', calc);

  addRow('Flour', 2, 'cups');
  addRow('Sugar', 1, 'cup');
  addRow('Butter', 0.5, 'cup');
})();
