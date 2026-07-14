(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var salary = parseFloat($('gr-salary').value);
    var years = parseFloat($('gr-years').value);
    if (!salary || !years || salary <= 0 || years <= 0) return;
    var note = $('gr-note');
    if (years < 5) {
      $('gr-amount').textContent = '₹0';
      $('gr-counted').textContent = years + ' years (less than 5)';
      note.style.display = '';
      note.textContent = 'Gratuity is only paid after 5 years of continuous service (except for death/disability).';
      lastSummary = '';
      return;
    }
    // fraction > 6 months rounds up
    var whole = Math.floor(years);
    var frac = years - whole;
    var counted = frac > 0.5 ? whole + 1 : whole;
    var gratuity = (15 / 26) * salary * counted;
    var capped = Math.min(gratuity, 2000000);
    $('gr-amount').textContent = toolsdoINR(Math.round(capped));
    $('gr-counted').textContent = counted + ' years';
    if (gratuity > 2000000) {
      note.style.display = '';
      note.textContent = 'Formula ke hisaab se ' + toolsdoINR(Math.round(gratuity)) + ' banti hai, lekin Act ke under max ₹20 lakh tax-free/payable hai.';
    } else {
      note.style.display = 'none';
    }
    lastSummary = 'Basic+DA ' + toolsdoINR(salary) + '/mo x ' + counted + ' saal | Gratuity: ' + toolsdoINR(Math.round(capped));
  }

  $('gr-calc').addEventListener('click', calc);
  ['gr-salary', 'gr-years'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
  $('gr-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
