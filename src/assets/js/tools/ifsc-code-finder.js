(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var lastDetails = '';

  function badge(label, active) {
    var style = active
      ? 'padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;background:#E3EEDD;color:#4A7A3A;border:1px solid #C9DFBE;'
      : 'padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;background:#F2EDE3;color:#B0A488;border:1px solid #E5DDCC;text-decoration:line-through;';
    return '<span style="' + style + '">' + (active ? '✓ ' : '') + label + '</span>';
  }

  function search() {
    var code = $('ifsc-code').value.trim().toUpperCase();
    var ph = $('ifsc-placeholder');
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(code)) {
      ph.style.display = '';
      $('ifsc-result').style.display = 'none';
      ph.textContent = 'Enter a valid IFSC format — 11 characters (e.g. SBIN0000300)';
      return;
    }
    ph.style.display = '';
    $('ifsc-result').style.display = 'none';
    ph.textContent = 'Searching…';
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
        $('ifsc-code-out').textContent = d.IFSC || code;
        $('ifsc-micr').textContent = d.MICR || 'Not available';
        $('ifsc-swift').textContent = d.SWIFT || 'Not available';
        $('ifsc-address').textContent = d.ADDRESS || '—';
        $('ifsc-city').textContent = (d.CITY || '—') + (d.DISTRICT && d.DISTRICT !== d.CITY ? ' / ' + d.DISTRICT : '');
        $('ifsc-state').textContent = d.STATE || '—';
        $('ifsc-centre').textContent = d.CENTRE || '—';
        $('ifsc-contact').textContent = d.CONTACT || 'Not listed';
        $('ifsc-services').innerHTML =
          badge('UPI', !!d.UPI) + badge('IMPS', !!d.IMPS) + badge('NEFT', !!d.NEFT) + badge('RTGS', !!d.RTGS);
        var services = ['UPI', 'IMPS', 'NEFT', 'RTGS'].filter(function (s) { return d[s]; });
        lastDetails = d.IFSC + ' | ' + d.BANK + ', ' + d.BRANCH + ', ' + d.CITY + ', ' + d.STATE +
          ' | MICR: ' + (d.MICR || 'N/A') + ' | SWIFT: ' + (d.SWIFT || 'N/A') +
          ' | Services: ' + (services.length ? services.join(', ') : 'None');
      })
      .catch(function (e) {
        ph.style.display = '';
        $('ifsc-result').style.display = 'none';
        ph.textContent = e.message === 'notfound'
          ? 'This IFSC code wasn\'t found — check the code and try again'
          : 'Network problem — check your internet and try again';
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
