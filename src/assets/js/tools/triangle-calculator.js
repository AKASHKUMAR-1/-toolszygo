(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var toRad = function (d) { return d * Math.PI / 180; };
  var toDeg = function (r) { return r * 180 / Math.PI; };

  function calc() {
    var a = parseFloat($('tr-a').value) || null;
    var b = parseFloat($('tr-b').value) || null;
    var c = parseFloat($('tr-c').value) || null;
    var A = parseFloat($('tr-A').value) || null;
    var B = parseFloat($('tr-B').value) || null;
    var C = parseFloat($('tr-C').value) || null;
    var err = $('tr-error');
    err.textContent = '';

    var known = [a, b, c, A, B, C].filter(function (v) { return v !== null; }).length;
    if (known < 3) return;

    try {
      // SSS
      if (a && b && c) {
        if (a + b <= c || a + c <= b || b + c <= a) throw new Error('Invalid triangle — sides ka sum theek nahi hai');
        A = toDeg(Math.acos((b * b + c * c - a * a) / (2 * b * c)));
        B = toDeg(Math.acos((a * a + c * c - b * b) / (2 * a * c)));
        C = 180 - A - B;
      }
      // SAS variants
      else if (a && b && C) {
        c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(toRad(C)));
        A = toDeg(Math.acos((b * b + c * c - a * a) / (2 * b * c)));
        B = 180 - A - C;
      } else if (a && c && B) {
        b = Math.sqrt(a * a + c * c - 2 * a * c * Math.cos(toRad(B)));
        A = toDeg(Math.acos((b * b + c * c - a * a) / (2 * b * c)));
        C = 180 - A - B;
      } else if (b && c && A) {
        a = Math.sqrt(b * b + c * c - 2 * b * c * Math.cos(toRad(A)));
        B = toDeg(Math.acos((a * a + c * c - b * b) / (2 * a * c)));
        C = 180 - A - B;
      }
      // ASA/AAS: two angles known, find third, then use law of sines with one side
      else if (A && B && !C) {
        C = 180 - A - B;
        if (a) { var k = a / Math.sin(toRad(A)); b = k * Math.sin(toRad(B)); c = k * Math.sin(toRad(C)); }
        else if (b) { var k2 = b / Math.sin(toRad(B)); a = k2 * Math.sin(toRad(A)); c = k2 * Math.sin(toRad(C)); }
        else if (c) { var k3 = c / Math.sin(toRad(C)); a = k3 * Math.sin(toRad(A)); b = k3 * Math.sin(toRad(B)); }
        else throw new Error('Kam se kam ek side chahiye');
      } else if (A && C && !B) {
        B = 180 - A - C;
        if (a) { var m = a / Math.sin(toRad(A)); b = m * Math.sin(toRad(B)); c = m * Math.sin(toRad(C)); }
        else if (b) { var m2 = b / Math.sin(toRad(B)); a = m2 * Math.sin(toRad(A)); c = m2 * Math.sin(toRad(C)); }
        else if (c) { var m3 = c / Math.sin(toRad(C)); a = m3 * Math.sin(toRad(A)); b = m3 * Math.sin(toRad(B)); }
        else throw new Error('Kam se kam ek side chahiye');
      } else if (B && C && !A) {
        A = 180 - B - C;
        if (a) { var n = a / Math.sin(toRad(A)); b = n * Math.sin(toRad(B)); c = n * Math.sin(toRad(C)); }
        else if (b) { var n2 = b / Math.sin(toRad(B)); a = n2 * Math.sin(toRad(A)); c = n2 * Math.sin(toRad(C)); }
        else if (c) { var n3 = c / Math.sin(toRad(C)); a = n3 * Math.sin(toRad(A)); b = n3 * Math.sin(toRad(B)); }
        else throw new Error('Kam se kam ek side chahiye');
      } else {
        throw new Error('Ye combination supported nahi hai — 3 sides, 2 sides+angle, ya 2 angles+side try karo');
      }

      if (Math.abs(A + B + C - 180) > 0.5) throw new Error('Angles ka sum 180° nahi hai — invalid input');

      var area = 0.5 * a * b * Math.sin(toRad(C));
      var perimeter = a + b + c;
      var round2 = function (v) { return Math.round(v * 100) / 100; };
      $('tr-out-sides').textContent = round2(a) + ' / ' + round2(b) + ' / ' + round2(c);
      $('tr-out-angles').textContent = round2(A) + '° / ' + round2(B) + '° / ' + round2(C) + '°';
      $('tr-out-area').textContent = round2(area);
      $('tr-out-perimeter').textContent = round2(perimeter);

      var sides = [round2(a), round2(b), round2(c)];
      var shape = (sides[0] === sides[1] && sides[1] === sides[2]) ? 'Equilateral' :
        (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2]) ? 'Isosceles' : 'Scalene';
      var maxAngle = Math.max(A, B, C);
      var kind = Math.abs(maxAngle - 90) < 0.5 ? 'Right' : maxAngle > 90 ? 'Obtuse' : 'Acute';
      $('tr-out-type').textContent = shape + ', ' + kind + ' triangle';
    } catch (e) {
      err.textContent = e.message;
    }
  }

  ['tr-a', 'tr-b', 'tr-c', 'tr-A', 'tr-B', 'tr-C'].forEach(function (id) {
    $(id).addEventListener('input', calc);
  });
})();
