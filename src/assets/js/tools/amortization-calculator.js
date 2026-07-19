(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var fullSchedule = [];
  var currency = 'INR';
  var fmt = function (n) { return toolsdoAmt(n, 0, currency); };

  function calc() {
    var P = parseFloat($('am-amount').value);
    var annual = parseFloat($('am-rate').value);
    var years = parseFloat($('am-years').value);
    if (!P || !annual || !years) return;
    var r = annual / 12 / 100;
    var n = years * 12;
    var emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);

    var balance = P;
    fullSchedule = [];
    for (var i = 1; i <= n; i++) {
      var interest = balance * r;
      var principal = emi - interest;
      balance = Math.max(0, balance - principal);
      fullSchedule.push({ month: i, principal: principal, interest: interest, balance: balance });
    }
    var totalInterest = emi * n - P;

    $('am-emi').textContent = fmt(Math.round(emi));
    $('am-total-interest').textContent = fmt(Math.round(totalInterest));

    var rows = fullSchedule.slice(0, 12).map(function (row) {
      return '<tr><td style="padding:4px 8px;border-bottom:1px solid #EDE6DA;">' + row.month + '</td>' +
        '<td style="padding:4px 8px;border-bottom:1px solid #EDE6DA;text-align:right;">' + fmt(Math.round(row.principal)) + '</td>' +
        '<td style="padding:4px 8px;border-bottom:1px solid #EDE6DA;text-align:right;">' + fmt(Math.round(row.interest)) + '</td>' +
        '<td style="padding:4px 8px;border-bottom:1px solid #EDE6DA;text-align:right;">' + fmt(Math.round(row.balance)) + '</td></tr>';
    }).join('');
    $('am-table').innerHTML = '<table style="width:100%;border-collapse:collapse;">' +
      '<tr style="font-weight:600;color:#8A7A5C;"><td style="padding:4px 8px;">Month</td><td style="padding:4px 8px;text-align:right;">Principal</td><td style="padding:4px 8px;text-align:right;">Interest</td><td style="padding:4px 8px;text-align:right;">Balance</td></tr>' +
      rows + '</table>';
  }

  toolsdoCurrencyToggle('am-currency-toggle', function (c) {
    $('am-amount').value = toolsdoConvertAmount(parseFloat($('am-amount').value) || 0, currency, c);
    currency = c;
    $('am-unit').textContent = c === 'USD' ? '$' : '₹';
    calc();
  });
  ['am-amount', 'am-rate', 'am-years'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });

  $('am-download').addEventListener('click', function () {
    if (!fullSchedule.length) return;
    var lines = ['Month,Principal,Interest,Balance'];
    fullSchedule.forEach(function (row) {
      lines.push(row.month + ',' + Math.round(row.principal) + ',' + Math.round(row.interest) + ',' + Math.round(row.balance));
    });
    var a = document.createElement('a');
    a.download = 'amortization-schedule.csv';
    a.href = URL.createObjectURL(new Blob(['﻿' + lines.join('\n')], { type: 'text/csv;charset=utf-8' }));
    a.click();
  });

  calc();
})();
