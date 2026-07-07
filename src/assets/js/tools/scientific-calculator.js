(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var display = $('sc-display');
  var current = '0';
  var memory = 0;
  var degMode = true;
  var fresh = true;

  var KEYS = [
    ['DEG', 'RAD', '(', ')', 'C'],
    ['sin', 'cos', 'tan', 'x²', '√'],
    ['log', 'ln', 'xʸ', 'π', 'e'],
    ['MC', 'MR', 'M+', '±', '⌫'],
    ['7', '8', '9', '/', '%'],
    ['4', '5', '6', '*', ''],
    ['1', '2', '3', '-', ''],
    ['0', '.', '=', '+', ''],
  ];

  function render() {
    $('sc-keys').innerHTML = KEYS.flat().map(function (k) {
      if (k === '') return '<div></div>';
      var isOp = ['/', '*', '-', '+', '='].indexOf(k) !== -1;
      var isMode = (k === 'DEG' && degMode) || (k === 'RAD' && !degMode);
      return '<button data-k="' + k.replace(/"/g, '&quot;') + '" style="padding:12px 4px;border:1px solid #E8E0D2;border-radius:8px;background:' +
        (isOp ? '#F3E7D7' : isMode ? '#D97757' : '#FFF') + ';color:' + (isMode ? '#FFF' : '#3D3929') +
        ';font-family:var(--sans);font-size:13px;cursor:pointer;">' + k + '</button>';
    }).join('');
  }

  function safeEval(expr) {
    try {
      var js = expr
        .replace(/π/g, '(' + Math.PI + ')')
        .replace(/(?<![a-zA-Z])e(?![a-zA-Z(])/g, '(' + Math.E + ')')
        .replace(/\^/g, '**');
      js = js.replace(/√\(([^)]*)\)/g, function (m, inner) { return 'Math.sqrt(' + inner + ')'; });
      js = js.replace(/(sin|cos|tan)\(([^)]*)\)/g, function (m, fn, inner) {
        var val = Function('"use strict";return (' + inner + ')')();
        var rad = degMode ? val * Math.PI / 180 : val;
        return 'Math.' + fn + '(' + rad + ')';
      });
      js = js.replace(/log\(([^)]*)\)/g, function (m, inner) { return 'Math.log10(' + inner + ')'; });
      js = js.replace(/ln\(([^)]*)\)/g, function (m, inner) { return 'Math.log(' + inner + ')'; });
      var result = Function('"use strict";return (' + js + ')')();
      if (typeof result !== 'number' || !isFinite(result)) return 'Error';
      return Math.round(result * 1e10) / 1e10;
    } catch (e) {
      return 'Error';
    }
  }

  function press(k) {
    if (k === 'DEG') { degMode = true; render(); return; }
    if (k === 'RAD') { degMode = false; render(); return; }
    if (k === 'C') { current = '0'; fresh = true; display.value = current; return; }
    if (k === '⌫') { current = current.length > 1 ? current.slice(0, -1) : '0'; display.value = current; return; }
    if (k === 'MC') { memory = 0; return; }
    if (k === 'MR') { current = String(memory); fresh = false; display.value = current; return; }
    if (k === 'M+') { memory += parseFloat(safeEval(current)) || 0; return; }
    if (k === '±') { current = current.charAt(0) === '-' ? current.slice(1) : '-' + current; display.value = current; return; }
    if (k === '=') {
      current = String(safeEval(current));
      fresh = true;
      display.value = current;
      return;
    }
    if (fresh) {
      current = '0';
      fresh = false;
    }
    if (current === '0' && /^[0-9]$/.test(k)) current = k;
    else if (k === 'x²') current += '^2';
    else if (k === 'xʸ') current += '^';
    else if (['sin', 'cos', 'tan', 'log', 'ln', '√'].indexOf(k) !== -1) current = (current === '0' ? '' : current) + k + '(';
    else if (k === 'π' || k === 'e') current = (current === '0' ? '' : current) + k;
    else current += k;
    display.value = current;
  }

  $('sc-keys').addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (btn) press(btn.getAttribute('data-k'));
  });
  render();
})();
