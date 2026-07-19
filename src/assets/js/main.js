/* ToolsDo — shared behavior: sidebar filter search, home search grid, mobile drawer */
(function () {
  'use strict';

  /* ---------- Mobile drawer ---------- */
  var menuBtn = document.querySelector('.menu-btn');
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.querySelector('.sidebar-overlay');
  if (menuBtn && sidebar && overlay) {
    menuBtn.addEventListener('click', function () {
      sidebar.classList.add('open');
      overlay.classList.add('show');
    });
    overlay.addEventListener('click', function () {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  }

  /* ---------- Theme picker (4 accent variants from the design's Tweaks) ---------- */
  var picker = document.getElementById('theme-picker');
  if (picker) {
    var swatches = picker.querySelectorAll('.theme-swatch');
    var saved = null;
    try { saved = localStorage.getItem('toolsdo-accent'); } catch (e) {}
    var currentAccent = saved || 'terracotta';
    function applyAccent(name) {
      document.documentElement.setAttribute('data-accent', name);
      Array.prototype.forEach.call(swatches, function (s) {
        s.classList.toggle('selected', s.getAttribute('data-accent') === name);
      });
      try { localStorage.setItem('toolsdo-accent', name); } catch (e) {}
    }
    applyAccent(currentAccent);
    Array.prototype.forEach.call(swatches, function (s) {
      s.addEventListener('click', function () {
        applyAccent(s.getAttribute('data-accent'));
      });
    });
  }

  /* ---------- Sidebar live filter ---------- */
  var sideInput = document.getElementById('sidebar-search');
  var toolList = document.getElementById('tool-list');
  if (sideInput && toolList) {
    var groups = Array.prototype.slice.call(toolList.querySelectorAll('.cat-group'));
    var noRes = document.getElementById('no-results');
    sideInput.addEventListener('input', function () {
      var q = sideInput.value.trim().toLowerCase();
      var any = false;
      groups.forEach(function (g) {
        var catName = (g.getAttribute('data-cat') || '').toLowerCase();
        var items = g.querySelectorAll('.tool-item');
        var visible = 0;
        Array.prototype.forEach.call(items, function (it) {
          var name = (it.getAttribute('data-name') || '').toLowerCase();
          var show = !q || name.indexOf(q) !== -1 || catName.indexOf(q) !== -1;
          it.style.display = show ? '' : 'none';
          if (show) visible++;
        });
        g.style.display = visible ? '' : 'none';
        if (visible) any = true;
      });
      if (noRes) {
        noRes.style.display = (q && !any) ? '' : 'none';
        var qEl = noRes.querySelector('.q');
        if (qEl) qEl.textContent = sideInput.value;
      }
    });
  }

  /* ---------- Home hero search: filter popular grid into results ---------- */
  var heroInput = document.getElementById('hero-search');
  var popularGrid = document.getElementById('popular-grid');
  var popularHead = document.getElementById('popular-head');
  if (heroInput && popularGrid && window.TOOLSDO_TOOLS) {
    var defaultHTML = popularGrid.innerHTML;
    var defaultHead = popularHead ? popularHead.innerHTML : '';
    heroInput.addEventListener('input', function () {
      var q = heroInput.value.trim().toLowerCase();
      if (!q) {
        popularGrid.innerHTML = defaultHTML;
        if (popularHead) popularHead.innerHTML = defaultHead;
        return;
      }
      var matches = window.TOOLSDO_TOOLS.filter(function (t) {
        return t.name.toLowerCase().indexOf(q) !== -1 || t.category.toLowerCase().indexOf(q) !== -1;
      });
      if (popularHead) {
        popularHead.innerHTML = '<h2>Search results</h2><span class="sub">' + matches.length + ' tool' + (matches.length === 1 ? '' : 's') + ' found</span>';
      }
      if (!matches.length) {
        popularGrid.innerHTML = '<div class="no-results" style="grid-column:1/-1;">No tools found for &ldquo;' + heroInput.value.replace(/[<>&"]/g, '') + '&rdquo;</div>';
        return;
      }
      popularGrid.innerHTML = matches.map(function (t) {
        var inner =
          '<div class="tool-card-chip" style="background:' + t.chipBg + ';color:' + t.chipFg + ';">' + t.initials + '</div>' +
          '<div class="tool-card-name">' + t.name + (t.built ? '' : ' <span class="soon-tag">soon</span>') + '</div>' +
          '<div class="tool-card-cat">' + t.category + '</div>';
        return t.built
          ? '<a class="tool-card" href="' + t.url + '">' + inner + '</a>'
          : '<div class="tool-card" style="cursor:default;opacity:0.55;">' + inner + '</div>';
      }).join('');
    });
  }

  /* ---------- Copy helper (used by tool pages) ---------- */
  window.toolsdoCopy = function (text, btn) {
    function done() {
      if (!btn) return;
      var old = btn.textContent;
      btn.textContent = 'Copied ✓';
      setTimeout(function () { btn.textContent = old; }, 1400);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done);
    } else {
      var ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      done();
    }
  };

  /* ---------- Formatters ---------- */
  window.toolsdoINR = function (n, decimals) {
    return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: decimals === undefined ? 0 : decimals });
  };

  /* Currency-aware amount formatter */
  window.toolsdoAmt = function (n, decimals, currency) {
    var d = decimals === undefined ? 0 : decimals;
    if (currency === 'USD') {
      return '$' + Number(n).toLocaleString('en-US', { maximumFractionDigits: d });
    }
    return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: d });
  };

  /* Approximate reference rate (July 2026) — used only to keep a switched calculator's own
     input amounts representing the same real-world value, not for live/financial conversion.
     For an actual live rate, point people to the Currency Converter tool. */
  window.TOOLSDO_USD_RATE = 96.5;

  /* Converts a numeric input value between INR and USD using the reference rate above. */
  window.toolsdoConvertAmount = function (value, fromCur, toCur) {
    if (fromCur === toCur || !value) return value;
    var rate = window.TOOLSDO_USD_RATE;
    var result = fromCur === 'INR' ? value / rate : value * rate;
    return Math.round(result * 100) / 100;
  };

  /* Renders a ₹/$ toggle into containerId; calls onChange(currency) whenever it's switched.
     defaultCur ('INR' unless specified) controls which button starts active. */
  window.toolsdoCurrencyToggle = function (containerId, onChange, defaultCur) {
    var el = document.getElementById(containerId);
    if (!el) return;
    var start = defaultCur === 'USD' ? 'USD' : 'INR';
    var base = 'padding:6px 14px;border-radius:8px;border:1px solid #D9CDBA;background:#fff;color:#6B5F53;font-size:13px;font-weight:600;cursor:pointer;font-family:Arial,Helvetica,sans-serif;';
    var active = 'padding:6px 14px;border-radius:8px;border:1px solid #D97757;background:#D97757;color:#fff;font-size:13px;font-weight:600;cursor:pointer;font-family:Arial,Helvetica,sans-serif;';
    el.style.display = 'flex';
    el.style.gap = '8px';
    el.style.marginBottom = '12px';
    el.innerHTML =
      '<button type="button" data-cur="INR" style="' + (start === 'INR' ? active : base) + '">₹ INR</button>' +
      '<button type="button" data-cur="USD" style="' + (start === 'USD' ? active : base) + '">$ USD</button>';
    var buttons = el.querySelectorAll('button');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.setAttribute('style', b === btn ? active : base); });
        onChange(btn.getAttribute('data-cur'));
      });
    });
  };

  window.toolsdoFmtSize = function (bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(2) + ' MB';
  };

  window.toolsdoEsc = function (s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  /* ---------- Print helper: opens a clean window with just the document and triggers print (Save as PDF) ---------- */
  window.toolsdoPrint = function (elementId, title) {
    var el = document.getElementById(elementId);
    if (!el) return;
    var w = window.open('', '_blank');
    if (!w) { alert('The popup was blocked — please allow popups for this site.'); return; }
    w.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + (title || 'Document') + '</title>' +
      '<style>body{font-family:Arial,Helvetica,sans-serif;color:#222;margin:0;padding:24px;} table{border-collapse:collapse;} @media print{body{padding:0;}} @page{margin:14mm;}</style>' +
      '</head><body>' + el.innerHTML + '</body></html>');
    w.document.close();
    setTimeout(function () { w.focus(); w.print(); }, 400);
  };

  /* ---------- Amount in words (Indian system) — shared by invoice/salary tools ---------- */
  window.toolsdoWords = (function () {
    var ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    var TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    function below1000(n) {
      var out = '';
      if (n >= 100) { out += ONES[Math.floor(n / 100)] + ' Hundred'; n %= 100; if (n) out += ' '; }
      if (n >= 20) { out += TENS[Math.floor(n / 10)]; if (n % 10) out += ' ' + ONES[n % 10]; }
      else if (n > 0) out += ONES[n];
      return out;
    }
    function indian(n) {
      if (n === 0) return 'Zero';
      var parts = [];
      var crore = Math.floor(n / 10000000); n %= 10000000;
      var lakh = Math.floor(n / 100000); n %= 100000;
      var thousand = Math.floor(n / 1000); n %= 1000;
      if (crore) parts.push(below1000(crore) + ' Crore');
      if (lakh) parts.push(below1000(lakh) + ' Lakh');
      if (thousand) parts.push(below1000(thousand) + ' Thousand');
      if (n) parts.push(below1000(n));
      return parts.join(' ');
    }
    return function (amount) {
      var intPart = Math.floor(amount);
      var paise = Math.round((amount - intPart) * 100);
      var out = 'Rupees ' + indian(intPart);
      if (paise) out += ' and ' + below1000(paise) + ' Paise';
      return out + ' Only';
    };
  })();
})();
