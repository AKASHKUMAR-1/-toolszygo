(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var ZONES = [
    ['Asia/Kolkata', 'India (IST)'],
    ['America/New_York', 'New York (EST/EDT)'],
    ['America/Chicago', 'Chicago (CST/CDT)'],
    ['America/Denver', 'Denver (MST/MDT)'],
    ['America/Los_Angeles', 'Los Angeles (PST/PDT)'],
    ['Europe/London', 'London (GMT/BST)'],
    ['Europe/Paris', 'Paris / Berlin (CET)'],
    ['Europe/Moscow', 'Moscow (MSK)'],
    ['Asia/Dubai', 'Dubai (GST)'],
    ['Asia/Riyadh', 'Riyadh (AST)'],
    ['Asia/Karachi', 'Karachi (PKT)'],
    ['Asia/Dhaka', 'Dhaka (BST)'],
    ['Asia/Kathmandu', 'Kathmandu (NPT)'],
    ['Asia/Singapore', 'Singapore (SGT)'],
    ['Asia/Hong_Kong', 'Hong Kong (HKT)'],
    ['Asia/Shanghai', 'China (CST)'],
    ['Asia/Tokyo', 'Tokyo (JST)'],
    ['Asia/Seoul', 'Seoul (KST)'],
    ['Australia/Sydney', 'Sydney (AEST/AEDT)'],
    ['Australia/Perth', 'Perth (AWST)'],
    ['Pacific/Auckland', 'Auckland (NZST)'],
    ['Africa/Johannesburg', 'Johannesburg (SAST)'],
    ['Africa/Lagos', 'Lagos (WAT)'],
    ['America/Sao_Paulo', 'São Paulo (BRT)'],
    ['America/Toronto', 'Toronto (EST/EDT)'],
    ['UTC', 'UTC'],
  ];

  function fill() {
    var opts = ZONES.map(function (z) { return '<option value="' + z[0] + '">' + z[1] + '</option>'; }).join('');
    $('tz-from').innerHTML = opts;
    $('tz-to').innerHTML = opts;
    $('tz-from').value = 'Asia/Kolkata';
    $('tz-to').value = 'America/New_York';
    // default: now
    var now = new Date();
    var pad = function (n) { return String(n).padStart(2, '0'); };
    $('tz-datetime').value = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate()) + 'T' + pad(now.getHours()) + ':' + pad(now.getMinutes());
  }

  // offset (ms) of tz at given UTC date
  function tzOffset(tz, date) {
    var f = new Intl.DateTimeFormat('en-US', {
      timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    });
    var parts = {};
    f.formatToParts(date).forEach(function (p) { parts[p.type] = p.value; });
    var asUTC = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour === '24' ? 0 : parts.hour, parts.minute, parts.second);
    return asUTC - date.getTime();
  }

  function convert() {
    var val = $('tz-datetime').value;
    var from = $('tz-from').value;
    var to = $('tz-to').value;
    if (!val) return;
    // interpret input wall-clock time in `from` zone
    var naive = new Date(val); // parsed as local — use as starting guess
    var guess = new Date(naive.getTime());
    // iterate: find UTC instant whose wall clock in `from` == input
    for (var i = 0; i < 3; i++) {
      var off = tzOffset(from, guess);
      var target = Date.UTC(
        parseInt(val.slice(0, 4), 10), parseInt(val.slice(5, 7), 10) - 1, parseInt(val.slice(8, 10), 10),
        parseInt(val.slice(11, 13), 10), parseInt(val.slice(14, 16), 10), 0
      );
      guess = new Date(target - off);
    }
    var fmt = new Intl.DateTimeFormat('en-IN', {
      timeZone: to, weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
      hour: 'numeric', minute: '2-digit', hour12: true,
    });
    $('tz-result').textContent = fmt.format(guess);
    var toName = ZONES.find(function (z) { return z[0] === to; })[1];
    $('tz-detail').textContent = toName;
    var diffMin = Math.round((tzOffset(to, guess) - tzOffset(from, guess)) / 60000);
    var sign = diffMin >= 0 ? '+' : '−';
    var abs = Math.abs(diffMin);
    $('tz-diff').textContent = sign + Math.floor(abs / 60) + 'h' + (abs % 60 ? ' ' + (abs % 60) + 'm' : '');
  }

  $('tz-convert').addEventListener('click', convert);
  ['tz-datetime', 'tz-from', 'tz-to'].forEach(function (id) {
    $(id).addEventListener('change', convert);
  });
  $('tz-swap').addEventListener('click', function () {
    var f = $('tz-from').value;
    $('tz-from').value = $('tz-to').value;
    $('tz-to').value = f;
    convert();
  });
  fill();
  convert();
})();
