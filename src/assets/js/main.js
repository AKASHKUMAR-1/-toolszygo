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
        popularHead.innerHTML = '<h2>Search results</h2><span class="sub">' + matches.length + ' tool' + (matches.length === 1 ? '' : 's') + ' mile</span>';
      }
      if (!matches.length) {
        popularGrid.innerHTML = '<div class="no-results" style="grid-column:1/-1;">Koi tool nahi mila &ldquo;' + heroInput.value.replace(/[<>&"]/g, '') + '&rdquo; ke liye</div>';
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
  window.toolsdoINR = function (n) {
    return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 0 });
  };
})();
