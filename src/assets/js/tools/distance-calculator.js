(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  // [name, lat, lon] — 60+ major Indian cities
  var CITIES = [
    ['Agra', 27.18, 78.02], ['Ahmedabad', 23.03, 72.58], ['Ajmer', 26.45, 74.64], ['Aligarh', 27.88, 78.08],
    ['Allahabad (Prayagraj)', 25.44, 81.85], ['Amritsar', 31.63, 74.87], ['Aurangabad', 19.88, 75.34],
    ['Bengaluru', 12.97, 77.59], ['Bhopal', 23.26, 77.41], ['Bhubaneswar', 20.30, 85.82],
    ['Chandigarh', 30.73, 76.78], ['Chennai', 13.08, 80.27], ['Coimbatore', 11.02, 76.96],
    ['Dehradun', 30.32, 78.03], ['Delhi', 28.61, 77.21], ['Dhanbad', 23.80, 86.44],
    ['Faridabad', 28.41, 77.31], ['Ghaziabad', 28.67, 77.42], ['Goa (Panaji)', 15.49, 73.83],
    ['Gorakhpur', 26.76, 83.37], ['Gurugram', 28.46, 77.03], ['Guwahati', 26.14, 91.74],
    ['Gwalior', 26.22, 78.18], ['Haridwar', 29.95, 78.16], ['Hyderabad', 17.39, 78.49],
    ['Indore', 22.72, 75.86], ['Jaipur', 26.91, 75.79], ['Jalandhar', 31.33, 75.58],
    ['Jammu', 32.73, 74.87], ['Jamshedpur', 22.80, 86.20], ['Jodhpur', 26.24, 73.02],
    ['Kanpur', 26.45, 80.33], ['Kochi', 9.93, 76.27], ['Kolkata', 22.57, 88.36],
    ['Kota', 25.21, 75.86], ['Lucknow', 26.85, 80.95], ['Ludhiana', 30.90, 75.86],
    ['Madurai', 9.93, 78.12], ['Mangaluru', 12.91, 74.86], ['Meerut', 28.98, 77.71],
    ['Mumbai', 19.08, 72.88], ['Mysuru', 12.30, 76.64], ['Nagpur', 21.15, 79.09],
    ['Nashik', 20.00, 73.79], ['Noida', 28.54, 77.39], ['Patna', 25.59, 85.14],
    ['Pune', 18.52, 73.86], ['Raipur', 21.25, 81.63], ['Rajkot', 22.30, 70.80],
    ['Ranchi', 23.34, 85.31], ['Shimla', 31.10, 77.17], ['Srinagar', 34.08, 74.80],
    ['Surat', 21.17, 72.83], ['Thiruvananthapuram', 8.52, 76.94], ['Tiruchirappalli', 10.79, 78.70],
    ['Udaipur', 24.58, 73.71], ['Vadodara', 22.31, 73.18], ['Varanasi', 25.32, 82.99],
    ['Vijayawada', 16.51, 80.65], ['Visakhapatnam', 17.69, 83.22],
  ];

  function fill() {
    var opts = CITIES.map(function (c, i) { return '<option value="' + i + '">' + c[0] + '</option>'; }).join('');
    $('dist-from').innerHTML = opts;
    $('dist-to').innerHTML = opts;
    $('dist-from').value = CITIES.findIndex(function (c) { return c[0] === 'Delhi'; });
    $('dist-to').value = CITIES.findIndex(function (c) { return c[0] === 'Mumbai'; });
  }

  function haversine(lat1, lon1, lat2, lon2) {
    var R = 6371;
    var toRad = function (d) { return d * Math.PI / 180; };
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function calc() {
    var from = CITIES[parseInt($('dist-from').value, 10)];
    var to = CITIES[parseInt($('dist-to').value, 10)];
    if (!from || !to) return;
    if (from === to) {
      $('dist-road').textContent = '0 km';
      $('dist-air').textContent = '0 km';
      $('dist-time').textContent = '—';
      $('dist-fuel').textContent = '—';
      return;
    }
    var air = haversine(from[1], from[2], to[1], to[2]);
    var road = air * 1.25;
    var hours = road / 60;
    var h = Math.floor(hours), m = Math.round((hours - h) * 60);
    var fuel = road / 15 * 105;
    $('dist-road').textContent = '~' + Math.round(road).toLocaleString('en-IN') + ' km';
    $('dist-air').textContent = Math.round(air).toLocaleString('en-IN') + ' km';
    $('dist-time').textContent = '~' + h + 'h ' + m + 'm';
    $('dist-fuel').textContent = '~₹' + Math.round(fuel).toLocaleString('en-IN');
  }

  $('dist-from').addEventListener('change', calc);
  $('dist-to').addEventListener('change', calc);
  $('dist-swap').addEventListener('click', function () {
    var f = $('dist-from').value;
    $('dist-from').value = $('dist-to').value;
    $('dist-to').value = f;
    calc();
  });
  fill();
  calc();
})();
