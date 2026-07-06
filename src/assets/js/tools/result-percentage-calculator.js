(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function calc() {
    var obtained = parseFloat($('rp-obtained').value);
    var total = parseFloat($('rp-total').value);
    if (isNaN(obtained) || isNaN(total) || total <= 0 || obtained < 0) return;
    var pct = obtained / total * 100;
    var rounded = Math.round(pct * 100) / 100;
    var div, color;
    if (obtained > total) { div = 'Marks total se zyada?'; color = '#B84F4F'; }
    else if (pct >= 75) { div = 'Distinction 🏆'; color = '#5D8A4E'; }
    else if (pct >= 60) { div = 'First Division'; color = '#5D8A4E'; }
    else if (pct >= 45) { div = 'Second Division'; color = '#A98423'; }
    else if (pct >= 33) { div = 'Third Division / Pass'; color = '#A98423'; }
    else { div = 'Fail — agli baar aur mehnat 💪'; color = '#B84F4F'; }
    $('rp-percent').textContent = rounded + '%';
    $('rp-division').textContent = div;
    $('rp-division').style.color = color;
    $('rp-marks').textContent = obtained.toLocaleString('en-IN') + ' / ' + total.toLocaleString('en-IN');
    $('rp-cgpa').textContent = Math.round(pct / 9.5 * 100) / 100;
  }

  $('rp-obtained').addEventListener('input', calc);
  $('rp-total').addEventListener('input', calc);
  calc();
})();
