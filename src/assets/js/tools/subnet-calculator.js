(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  function fillCidr() {
    var opts = [];
    for (var i = 8; i <= 30; i++) {
      var mask = cidrToMask(i);
      opts.push('<option value="' + i + '"' + (i === 24 ? ' selected' : '') + '>/' + i + ' (' + mask + ')</option>');
    }
    $('sn-cidr').innerHTML = opts.join('');
  }

  function ipToInt(ip) {
    var parts = ip.split('.').map(Number);
    if (parts.length !== 4 || parts.some(function (p) { return isNaN(p) || p < 0 || p > 255; })) return null;
    return ((parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0;
  }
  function intToIp(n) {
    return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');
  }
  function cidrToMask(cidr) {
    var mask = cidr === 0 ? 0 : (0xFFFFFFFF << (32 - cidr)) >>> 0;
    return intToIp(mask);
  }

  function calc() {
    var ip = $('sn-ip').value.trim();
    var cidr = parseInt($('sn-cidr').value, 10);
    var err = $('sn-error');
    err.textContent = '';
    var ipInt = ipToInt(ip);
    if (ipInt === null) {
      err.textContent = 'Enter a valid IPv4 address (e.g. 192.168.1.0)';
      return;
    }
    var maskInt = cidr === 0 ? 0 : (0xFFFFFFFF << (32 - cidr)) >>> 0;
    var networkInt = (ipInt & maskInt) >>> 0;
    var broadcastInt = (networkInt | (~maskInt >>> 0)) >>> 0;
    var wildcardInt = (~maskInt) >>> 0;
    var totalHosts = Math.pow(2, 32 - cidr);
    var usableHosts = cidr >= 31 ? totalHosts : Math.max(0, totalHosts - 2);

    $('sn-network').textContent = intToIp(networkInt) + '/' + cidr;
    $('sn-broadcast').textContent = intToIp(broadcastInt);
    $('sn-mask').textContent = intToIp(maskInt);
    $('sn-wildcard').textContent = intToIp(wildcardInt);
    if (cidr >= 31) {
      $('sn-range').textContent = 'N/A (point-to-point)';
    } else {
      $('sn-range').textContent = intToIp(networkInt + 1) + ' – ' + intToIp(broadcastInt - 1);
    }
    $('sn-total').textContent = totalHosts.toLocaleString('en-IN');
    $('sn-usable').textContent = usableHosts.toLocaleString('en-IN');
  }

  $('sn-ip').addEventListener('input', calc);
  $('sn-cidr').addEventListener('change', calc);
  fillCidr();
  calc();
})();
