(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function calc() {
    var basic = parseFloat($('hra-basic').value);
    var hra = parseFloat($('hra-received').value);
    var rent = parseFloat($('hra-rent').value);
    var metro = $('hra-city').value === 'metro';
    if (!basic || isNaN(hra) || isNaN(rent) || basic <= 0) return;

    // annual figures
    var aBasic = basic * 12, aHra = hra * 12, aRent = rent * 12;
    var opt1 = aHra;
    var opt2 = Math.max(0, aRent - aBasic * 0.10);
    var opt3 = aBasic * (metro ? 0.50 : 0.40);
    var exempt = Math.min(opt1, opt2, opt3);
    var taxable = aHra - exempt;

    var basisNames = ['Actual HRA received', 'Rent − 10% of basic', (metro ? '50%' : '40%') + ' of basic'];
    var vals = [opt1, opt2, opt3];
    var basis = basisNames[vals.indexOf(Math.min.apply(null, vals))];

    $('hra-exempt').textContent = toolsdoINR(Math.round(exempt));
    $('hra-total').textContent = toolsdoINR(Math.round(aHra));
    $('hra-taxable').textContent = toolsdoINR(Math.round(taxable));
    $('hra-basis').textContent = basis + ' (' + toolsdoINR(Math.round(Math.min.apply(null, vals))) + ') sabse kam hai';
    lastSummary = 'Basic ' + toolsdoINR(basic) + ', HRA ' + toolsdoINR(hra) + ', Rent ' + toolsdoINR(rent) +
      '/mo (' + (metro ? 'metro' : 'non-metro') + ') | Exempt: ' + toolsdoINR(Math.round(exempt)) +
      '/yr | Taxable: ' + toolsdoINR(Math.round(taxable)) + '/yr';
  }

  $('hra-calc').addEventListener('click', calc);
  ['hra-basic', 'hra-received', 'hra-rent', 'hra-city'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('hra-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
