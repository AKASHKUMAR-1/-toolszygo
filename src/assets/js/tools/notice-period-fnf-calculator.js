(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var fmt = function (n) { return '₹' + Math.round(n).toLocaleString('en-IN'); };

  function calc() {
    var gross = parseFloat($('nf-gross').value) || 0;
    var basic = parseFloat($('nf-basic').value) || 0;
    var required = parseFloat($('nf-required').value) || 0;
    var served = parseFloat($('nf-served').value) || 0;
    var leaves = parseFloat($('nf-leaves').value) || 0;
    var bonus = parseFloat($('nf-bonus').value) || 0;
    var deductions = parseFloat($('nf-deductions').value) || 0;
    if (gross < 0 || basic < 0) return;

    var shortfallDays = Math.max(0, required - served);
    var noticeDeduction = (gross / 30) * shortfallDays;
    var encashment = (basic / 26) * leaves;
    var net = encashment + bonus - noticeDeduction - deductions;

    $('nf-shortfall-days').textContent = shortfallDays + (shortfallDays === 1 ? ' day' : ' days');
    $('nf-shortfall-amt').textContent = fmt(noticeDeduction);
    $('nf-encashment').textContent = fmt(encashment);
    $('nf-bonus-out').textContent = fmt(bonus);
    $('nf-deductions-out').textContent = fmt(deductions);
    $('nf-net').textContent = fmt(net);

    lastSummary = 'Notice: served ' + served + '/' + required + ' days (shortfall ' + shortfallDays + ') | Deduction: ' +
      fmt(noticeDeduction) + ' | Leave encashment: ' + fmt(encashment) + ' | Bonus: ' + fmt(bonus) +
      ' | Recoveries: ' + fmt(deductions) + ' | Net F&F: ' + fmt(net);
  }

  $('nf-calc').addEventListener('click', calc);
  ['nf-gross', 'nf-basic', 'nf-required', 'nf-served', 'nf-leaves', 'nf-bonus', 'nf-deductions'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('nf-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
