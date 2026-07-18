(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastSummary = '';

  function utilScore(u) {
    if (u <= 10) return 100;
    if (u <= 30) return 90;
    if (u <= 50) return 65;
    if (u <= 75) return 40;
    return 20;
  }

  function ageScore(y) {
    if (y >= 7) return 100;
    if (y >= 5) return 85;
    if (y >= 3) return 70;
    if (y >= 1) return 50;
    return 30;
  }

  function calc() {
    var history = parseFloat($('cse-history').value);
    var util = parseFloat($('cse-util').value) || 0;
    var age = parseFloat($('cse-age').value) || 0;
    var inquiries = parseFloat($('cse-inquiries').value);
    var mix = parseFloat($('cse-mix').value);

    // Standard factor weights: history 35%, utilization 30%, age 15%, inquiries 10%, mix 10%
    var composite = history * 0.35 + utilScore(util) * 0.30 + ageScore(age) * 0.15 + inquiries * 0.10 + mix * 0.10;
    var score = Math.round(300 + composite / 100 * 600);
    var low = Math.max(300, score - 25);
    var high = Math.min(900, score + 25);

    var category, color, outlook;
    if (score >= 750) { category = 'Excellent ✅'; color = '#5D8A4E'; outlook = 'Smooth approvals, best interest rates'; }
    else if (score >= 650) { category = 'Good'; color = '#5D8A4E'; outlook = 'Approval likely, decent rates'; }
    else if (score >= 550) { category = 'Fair'; color = '#A98423'; outlook = 'Approval harder, higher rates likely'; }
    else { category = 'Needs work'; color = '#B84F4F'; outlook = 'Rebuild for 6-12 months before applying'; }

    $('cse-score').textContent = low + ' – ' + high;
    $('cse-category').textContent = category;
    $('cse-category').style.color = color;
    $('cse-outlook').textContent = outlook;

    var tips = [];
    if (history < 100) tips.push('📌 <strong>Fix payment history first</strong> — it\'s ~35% of your score. Set up auto-pay for every EMI and at least the minimum due on cards.');
    if (util > 30) tips.push('📌 <strong>Bring card utilization under 30%</strong> (yours: ' + util + '%). Pay mid-cycle or request a limit increase — both cut the ratio fast.');
    if (inquiries < 100) tips.push('📌 <strong>Stop applying for new credit</strong> for 6 months — each application adds a hard inquiry that dips your score.');
    if (age < 3) tips.push('📌 <strong>Keep your oldest card open</strong> even if unused — account age helps, and closing old cards shortens your history.');
    if (mix === 40) tips.push('📌 <strong>Start building history</strong> — a secured credit card (against an FD) is the safest first step, used lightly and paid in full.');
    if (!tips.length) tips.push('🎉 Your habits look strong — keep paying on time, keep utilization low, and your score will hold or climb.');
    $('cse-tips').innerHTML = tips.slice(0, 3).join('<br>');

    lastSummary = 'Estimated CIBIL range: ' + low + '-' + high + ' (' + category.replace(' ✅', '') + ') | ' + outlook +
      ' | Note: educational estimate, official score at cibil.com';
  }

  $('cse-calc').addEventListener('click', calc);
  ['cse-history', 'cse-util', 'cse-age', 'cse-inquiries', 'cse-mix'].forEach(function (id) {
    $(id).addEventListener('input', calc);
    $(id).addEventListener('change', calc);
  });
  $('cse-copy').addEventListener('click', function () {
    if (lastSummary) toolsdoCopy(lastSummary, this);
  });
  calc();
})();
