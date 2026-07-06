(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastDetails = '';

  function search() {
    var code = $('ifsc-code').value.trim().toUpperCase();
    var ph = $('ifsc-placeholder');
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(code)) {
      ph.style.display = '';
      $('ifsc-result').style.display = 'none';
      ph.textContent = 'Sahi IFSC format daalo — 11 characters (e.g. SBIN0000300)';
      return;
    }
    ph.style.display = '';
    $('ifsc-result').style.display = 'none';
    ph.textContent = 'Dhoond rahe hain…';
    fetch('https://ifsc.razorpay.com/' + encodeURIComponent(code))
      .then(function (r) {
        if (r.status === 404) throw new Error('notfound');
        if (!r.ok) throw new Error('network');
        return r.json();
      })
      .then(function (d) {
        ph.style.display = 'none';
        $('ifsc-result').style.display = '';
        $('ifsc-bank').textContent = d.BANK || '—';
        $('ifsc-branch').textContent = d.BRANCH || '—';
        $('ifsc-city').textContent = d.CITY || '—';
        $('ifsc-state').textContent = d.STATE || '—';
        $('ifsc-address').textContent = d.ADDRESS || '—';
        $('ifsc-micr').textContent = d.MICR || '—';
        var services = [];
        if (d.UPI) services.push('UPI');
        if (d.IMPS) services.push('IMPS');
        if (d.NEFT) services.push('NEFT');
        if (d.RTGS) services.push('RTGS');
        $('ifsc-services').textContent = services.length ? services.join(' · ') : '—';
        lastDetails = code + ' | ' + d.BANK + ', ' + d.BRANCH + ', ' + d.CITY + ', ' + d.STATE;
      })
      .catch(function (e) {
        ph.style.display = '';
        $('ifsc-result').style.display = 'none';
        ph.textContent = e.message === 'notfound'
          ? 'Ye IFSC code nahi mila — code check karke dobara try karo'
          : 'Network problem — internet check karke dobara try karo';
      });
  }

  $('ifsc-search').addEventListener('click', search);
  $('ifsc-code').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') search();
  });
  $('ifsc-copy').addEventListener('click', function () {
    if (lastDetails) toolsdoCopy(lastDetails, this);
  });
})();
