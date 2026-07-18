(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';
  var fmt = function (n) { return '$' + Number(n).toLocaleString('en-US', { maximumFractionDigits: 0 }); };
  var fmt2 = function (n) { return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };

  // Official 2026 figures — IRS Rev. Proc. 2025-32
  var DATA = {
    single: {
      deduction: 16100,
      brackets: [[12400, 0.10], [50400, 0.12], [105700, 0.22], [201775, 0.24], [256225, 0.32], [640600, 0.35], [Infinity, 0.37]],
      addlMedicareOver: 200000,
    },
    married: {
      deduction: 32200,
      brackets: [[24800, 0.10], [100800, 0.12], [211400, 0.22], [403550, 0.24], [512450, 0.32], [768700, 0.35], [Infinity, 0.37]],
      addlMedicareOver: 250000,
    },
    hoh: {
      deduction: 24150,
      brackets: [[17700, 0.10], [67450, 0.12], [105700, 0.22], [201775, 0.24], [256200, 0.32], [640600, 0.35], [Infinity, 0.37]],
      addlMedicareOver: 200000,
    },
  };
  var SS_WAGE_BASE = 184500; // 2026 Social Security wage base
  var SS_RATE = 0.062;
  var MEDICARE_RATE = 0.0145;
  var ADDL_MEDICARE = 0.009;

  function federalTax(taxable, brackets) {
    var tax = 0, prev = 0;
    for (var i = 0; i < brackets.length; i++) {
      var cap = brackets[i][0], rate = brackets[i][1];
      if (taxable <= prev) break;
      tax += (Math.min(taxable, cap) - prev) * rate;
      prev = cap;
    }
    return tax;
  }

  function marginalRate(taxable, brackets) {
    if (taxable <= 0) return 0;
    for (var i = 0; i < brackets.length; i++) {
      if (taxable <= brackets[i][0]) return brackets[i][1];
    }
    return brackets[brackets.length - 1][1];
  }

  function calc() {
    var amount = parseFloat($('pc-amount').value);
    var freq = $('pc-freq').value;
    var status = $('pc-status').value;
    var stateRate = parseFloat($('pc-state').value) || 0;
    var k401Pct = parseFloat($('pc-401k').value) || 0;
    var healthMonthly = parseFloat($('pc-health').value) || 0;
    if (!amount || amount <= 0) return;

    var gross;
    if (freq === 'hour') {
      var hours = parseFloat($('pc-hours').value) || 40;
      gross = amount * hours * 52;
    } else if (freq === 'week') {
      gross = amount * 52;
    } else if (freq === 'month') {
      gross = amount * 12;
    } else {
      gross = amount;
    }

    var d = DATA[status];
    var k401 = gross * k401Pct / 100;
    var health = healthMonthly * 12;

    // Section 125 health premiums are exempt from BOTH income tax and FICA;
    // 401(k) is exempt from income tax only (still FICA-taxed).
    var ficaWages = Math.max(0, gross - health);
    var ss = SS_RATE * Math.min(ficaWages, SS_WAGE_BASE);
    var medicare = MEDICARE_RATE * ficaWages + ADDL_MEDICARE * Math.max(0, ficaWages - d.addlMedicareOver);

    var taxable = Math.max(0, gross - health - k401 - d.deduction);
    var fed = federalTax(taxable, d.brackets);
    var state = stateRate / 100 * Math.max(0, gross - health - k401);

    var totalTax = fed + ss + medicare + state;
    var takeHome = gross - totalTax - k401 - health;
    var effective = gross > 0 ? totalTax / gross * 100 : 0;
    var marginal = marginalRate(taxable, d.brackets) * 100;

    $('pc-takehome').textContent = fmt(Math.round(takeHome));
    $('pc-monthly').textContent = fmt2(takeHome / 12);
    $('pc-biweekly').textContent = fmt2(takeHome / 26);
    $('pc-gross').textContent = fmt(Math.round(gross));
    $('pc-fed').textContent = fmt(Math.round(fed));
    $('pc-ss').textContent = fmt(Math.round(ss));
    $('pc-medicare').textContent = fmt(Math.round(medicare));
    $('pc-state-amt').textContent = stateRate > 0 ? fmt(Math.round(state)) : '$0 (no state tax)';
    $('pc-401k-row').style.display = k401 > 0 ? '' : 'none';
    $('pc-health-row').style.display = health > 0 ? '' : 'none';
    if (k401 > 0) $('pc-401k-amt').textContent = fmt(Math.round(k401)) + '/year';
    if (health > 0) $('pc-health-amt').textContent = fmt(Math.round(health)) + '/year';
    $('pc-effective').textContent = (Math.round(effective * 10) / 10) + '%';
    $('pc-marginal').textContent = Math.round(marginal) + '%';

    var keepPct = Math.max(0, takeHome / gross * 100);
    var taxPct = Math.max(0, totalTax / gross * 100);
    var savePct = Math.max(0, (k401 + health) / gross * 100);
    $('pc-bar').style.display = '';
    $('pc-bar-legend').style.display = '';
    $('pc-bar-keep').style.width = keepPct + '%';
    $('pc-bar-tax').style.width = taxPct + '%';
    $('pc-bar-save').style.width = savePct + '%';

    var statusText = status === 'single' ? 'Single' : status === 'married' ? 'Married Filing Jointly' : 'Head of Household';
    lastSummary = 'Gross ' + fmt(Math.round(gross)) + '/yr (' + statusText + ', 2026) | Take-home: ' + fmt(Math.round(takeHome)) +
      '/yr = ' + fmt2(takeHome / 12) + '/mo | Federal: ' + fmt(Math.round(fed)) + ', SS: ' + fmt(Math.round(ss)) +
      ', Medicare: ' + fmt(Math.round(medicare)) + (state > 0 ? ', State: ' + fmt(Math.round(state)) : '') +
      ' | Effective rate: ' + (Math.round(effective * 10) / 10) + '%';
  }

  $('pc-freq').addEventListener('change', function () {
    $('pc-hours-field').style.display = this.value === 'hour' ? '' : 'none';
    calc();
  });
  $('pc-calc').addEventListener('click', calc);
  ['pc-amount', 'pc-hours', 'pc-status', 'pc-state', 'pc-401k', 'pc-health'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('pc-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
