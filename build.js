/* ToolsDo static site builder
 * Usage: node build.js
 * Output: dist/ (upload contents to Hostinger public_html)
 */
const fs = require('fs');
const path = require('path');
const { categories, popularSlugs } = require('./data/tools');

const SITE_URL = 'https://toolszygo.com';
const SITE_NAME = 'Toolszygo';

const allTools = categories.flatMap(c => c.tools);
const builtTools = allTools.filter(t => t.built);
const toolUrl = t => `/tools/${t.slug}/`;

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function adSlot(pos) {
  // AdSense lagane ke baad: is div ke andar apna <ins class="adsbygoogle"> code daalo
  return `<div class="ad-slot" data-ad-pos="${pos}">Advertisement</div>`;
}

function svgSearch(size, color) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 15 15" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="${color}" stroke-width="1.5"></circle><line x1="10.5" y1="10.5" x2="14" y2="14" stroke="${color}" stroke-width="1.5" stroke-linecap="round"></line></svg>`;
}

function sidebar(activeSlug) {
  const groups = categories.map(cat => {
    const items = cat.tools.map(t => {
      const chip = `<div class="tool-chip" style="background:${cat.chipBg};color:${cat.chipFg};">${t.initials}</div>`;
      if (t.built) {
        const active = t.slug === activeSlug ? ' active' : '';
        return `<a class="tool-item${active}" href="${toolUrl(t)}" data-name="${esc(t.name)}">${chip}<div class="tool-item-name">${esc(t.name)}</div></a>`;
      }
      return `<div class="tool-item soon" data-name="${esc(t.name)}" title="Coming soon">${chip}<div class="tool-item-name">${esc(t.name)}</div><span class="soon-tag">soon</span></div>`;
    }).join('\n');
    return `<div class="cat-group" data-cat="${esc(cat.name)}">
  <div class="cat-label">${esc(cat.name)}</div>
${items}
</div>`;
  }).join('\n');

  return `<button class="menu-btn" aria-label="Menu">
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="#3D3929" stroke-width="1.6" stroke-linecap="round"/></svg>
</button>
<div class="sidebar-overlay"></div>
<aside class="sidebar">
  <a class="brand" href="/">
    <div class="brand-logo">T</div>
    <div class="brand-name">${SITE_NAME}</div>
    <div class="brand-badge">${allTools.length} tools</div>
  </a>
  <div class="sidebar-search">
    <div class="search-box">
      ${svgSearch(15, '#A39C8B')}
      <input id="sidebar-search" type="text" placeholder="Search ${allTools.length} tools…" autocomplete="off">
    </div>
  </div>
  <div class="tool-list" id="tool-list">
    <div class="no-results" id="no-results" style="display:none;">No tools found for<br>&ldquo;<span class="q"></span>&rdquo;</div>
${groups}
  </div>
  <div class="theme-picker" id="theme-picker">
    <span class="tp-label">Theme</span>
    <button class="theme-swatch" data-accent="terracotta" style="background:#D97757;" title="Terracotta" aria-label="Terracotta theme"></button>
    <button class="theme-swatch" data-accent="gold" style="background:#C98A3B;" title="Gold" aria-label="Gold theme"></button>
    <button class="theme-swatch" data-accent="rose" style="background:#B8695E;" title="Rose" aria-label="Rose theme"></button>
    <button class="theme-swatch" data-accent="olive" style="background:#8FA36B;" title="Olive" aria-label="Olive theme"></button>
  </div>
</aside>`;
}

function footer() {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
  <div>© ${year} ${SITE_NAME} — all tools free, run entirely in your browser.</div>
  <div><a href="/">Home</a> · <a href="/about.html">About</a> · <a href="/privacy.html">Privacy Policy</a> · <a href="/contact.html">Contact</a></div>
</footer>`;
}

function layout({ title, metaDesc, canonical, activeSlug, bodyMain, extraHead = '', extraScripts = '', jsonLd = '' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CPFQVWRSFS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-CPFQVWRSFS');
</script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="google-site-verification" content="4AEUWhy_ncQiCEvB1jpJD_1glwVy_FYWz4ficA-OK6k" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(metaDesc)}">
<link rel="canonical" href="${SITE_URL}${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(metaDesc)}">
<meta property="og:url" content="${SITE_URL}${canonical}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/instrument-sans-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/source-serif-latin.woff2" as="font" type="font/woff2" crossorigin>
<script>try{var a=localStorage.getItem('toolsdo-accent');if(a)document.documentElement.setAttribute('data-accent',a);}catch(e){}</script>
<link rel="stylesheet" href="/assets/css/style.css">
${jsonLd}${extraHead}
</head>
<body>
<div class="app">
${sidebar(activeSlug)}
<main class="main">
${bodyMain}
${footer()}
</main>
</div>
<script src="/assets/js/search-data.js" defer></script>
<script src="/assets/js/main.js" defer></script>
${extraScripts}
</body>
</html>`;
}

/* ---------- Home page ---------- */
function homePage() {
  const popular = popularSlugs.map(slug => allTools.find(t => t.slug === slug)).filter(Boolean);
  const popularCards = popular.map(t => `<a class="tool-card" href="${toolUrl(t)}">
  <div class="tool-card-chip" style="background:${t.chipBg};color:${t.chipFg};">${t.initials}</div>
  <div class="tool-card-name">${esc(t.name)}</div>
  <div class="tool-card-cat">${esc(t.category)}</div>
</a>`).join('\n');

  const chips = categories.map(c =>
    `<span class="cat-chip" style="background:${c.chipBg};color:${c.chipFg};" data-cat-chip="${esc(c.name)}">${esc(c.name)} <span class="count">${c.tools.length}</span></span>`
  ).join('\n');

  const jsonLd = `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: '100 free online tools — calculators, converters, PDF, image, text and developer tools. No signup needed.',
  })}</script>\n`;

  const bodyMain = `
<div class="hero">
  <div class="hero-inner">
    <div class="hero-pill"><span class="dot"></span> 100% free, all in one place</div>
    <h1>Every tool you need,<br>in one place.</h1>
    <p>Text, image, developer, calculator — ${allTools.length} simple tools that run entirely in your browser. No signup, no clutter.</p>
    <div class="hero-search">
      ${svgSearch(17, '#B8AD97')}
      <input id="hero-search" type="text" placeholder="What do you want to do today? e.g. &ldquo;image compress&rdquo;" autocomplete="off">
    </div>
  </div>
</div>
<div class="home-content">
  <div class="section-head" id="popular-head">
    <h2>Popular tools</h2>
    <span class="sub">most used tools</span>
  </div>
  <div class="tool-grid" id="popular-grid">
${popularCards}
  </div>
  ${adSlot('home-middle')}
  <div style="margin-top: 44px;">
    <h2 style="margin-bottom: 18px;">Browse by category</h2>
    <div class="cat-chips">
${chips}
    </div>
  </div>
</div>
<script>
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('[data-cat-chip]').forEach(function(chip){
    chip.style.cursor = 'pointer';
    chip.addEventListener('click', function(){
      var inp = document.getElementById('hero-search');
      inp.value = chip.getAttribute('data-cat-chip');
      inp.dispatchEvent(new Event('input'));
      inp.scrollIntoView({behavior:'smooth', block:'center'});
    });
  });
});
</script>`;

  return layout({
    title: `${SITE_NAME} — 100 Free Online Tools: Calculators, Converters, PDF & Image Tools`,
    metaDesc: 'Free online tools — EMI calculator, GST calculator, image compressor, PDF merge, word counter, QR code generator and 90+ more. No signup, works in your browser.',
    canonical: '/',
    activeSlug: null,
    bodyMain,
    jsonLd,
  });
}

/* ---------- Tool pages ---------- */
function toolPage(tool, def) {
  const cat = categories.find(c => c.name === tool.category);
  const related = cat.tools.filter(t => t.built && t.slug !== tool.slug).slice(0, 3);
  const relatedOther = related.length < 3
    ? builtTools.filter(t => t.slug !== tool.slug && !related.includes(t)).slice(0, 3 - related.length)
    : [];
  const rel = [...related, ...relatedOther];

  const relatedCards = rel.map(t => `<a class="related-card" href="${toolUrl(t)}">
  <div class="related-chip" style="background:${t.chipBg};color:${t.chipFg};">${t.initials}</div>
  <div class="related-name">${esc(t.name)}</div>
</a>`).join('\n');

  const howto = def.howto.map(s => `<li>${s}</li>`).join('\n');
  const faqs = def.faq.map(f => `<details>
  <summary>${esc(f.q)}</summary>
  <p>${f.a}</p>
</details>`).join('\n');

  const jsonLd = `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: def.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
    })),
  })}</script>\n`;

  const bodyMain = `
<div class="tool-page">
  <nav class="breadcrumb">
    <a href="/">Home</a><span>›</span><span>${esc(tool.category)}</span><span>›</span><span class="current">${esc(tool.name)}</span>
  </nav>
  <div class="tool-header">
    <div class="tool-header-chip" style="background:${tool.chipBg};color:${tool.chipFg};">${tool.initials}</div>
    <div>
      <h1>${esc(tool.name)}</h1>
      <div class="meta">${esc(tool.category)} · Free · Runs entirely in your browser</div>
    </div>
  </div>
  <p class="tool-desc">${esc(tool.desc)}</p>
  ${adSlot('tool-top')}
${def.workspace}
  ${adSlot('tool-middle')}
  <div class="seo-content">
    <h2>How to use — ${esc(tool.name)}</h2>
    <ol>
${howto}
    </ol>
    <div class="faq">
      <h2>FAQ</h2>
${faqs}
    </div>
  </div>
  ${adSlot('tool-bottom')}
  <div class="related">
    <h2>Related tools</h2>
    <div class="related-grid">
${relatedCards}
    </div>
  </div>
</div>`;

  const extraScripts = (def.libs || []).map(src => `<script src="${src}"></script>`).join('\n')
    + `\n<script src="/assets/js/tools/${tool.slug}.js" defer></script>`;

  return layout({
    title: tool.title,
    metaDesc: tool.metaDesc,
    canonical: toolUrl(tool),
    activeSlug: tool.slug,
    bodyMain,
    extraScripts,
    jsonLd,
  });
}

/* ---------- Static extras ---------- */
function simplePage(title, canonical, bodyHTML) {
  return layout({
    title: `${title} — ${SITE_NAME}`,
    metaDesc: `${title} page of ${SITE_NAME} — 100 free online tools.`,
    canonical,
    activeSlug: null,
    bodyMain: `<div class="tool-page"><nav class="breadcrumb"><a href="/">Home</a><span>›</span><span class="current">${esc(title)}</span></nav>${bodyHTML}</div>`,
  });
}

/* ---------- Build ---------- */
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function build() {
  const dist = path.join(__dirname, 'dist');
  fs.rmSync(dist, { recursive: true, force: true });
  fs.mkdirSync(dist, { recursive: true });

  // assets
  copyDir(path.join(__dirname, 'src', 'assets'), path.join(dist, 'assets'));

  // favicon
  fs.writeFileSync(path.join(dist, 'assets', 'favicon.svg'),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="url(#g)"/><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D97757"/><stop offset="1" stop-color="#E8A87C"/></linearGradient></defs><text x="32" y="44" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="600" fill="#FFF">T</text></svg>`);

  // search data (for hero search)
  const searchData = allTools.map(t => ({
    name: t.name, category: t.category, url: toolUrl(t),
    chipBg: t.chipBg, chipFg: t.chipFg, initials: t.initials, built: !!t.built,
  }));
  fs.writeFileSync(path.join(dist, 'assets', 'js', 'search-data.js'),
    'window.TOOLSDO_TOOLS = ' + JSON.stringify(searchData) + ';');

  // home
  fs.writeFileSync(path.join(dist, 'index.html'), homePage());

  // tool pages
  for (const tool of builtTools) {
    const defPath = path.join(__dirname, 'data', 'pages', tool.slug + '.js');
    if (!fs.existsSync(defPath)) {
      console.warn('! missing page def:', tool.slug);
      continue;
    }
    const def = require(defPath);
    const dir = path.join(dist, 'tools', tool.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), toolPage(tool, def));
  }

  // static pages
  fs.writeFileSync(path.join(dist, 'about.html'), simplePage('About', '/about.html', `
<div class="seo-content" style="margin-top:0;">
<h2>About ${SITE_NAME}</h2>
<p style="font-size:14.5px;color:#6E6552;line-height:1.7;">${SITE_NAME} is a free online tools website with ${allTools.length} tools for everyday tasks — finance calculators, PDF tools, image tools, text tools and developer utilities. No signup, no charges. Most tools run entirely in your browser, which means your data never leaves your device.</p>
</div>`));
  fs.writeFileSync(path.join(dist, 'privacy.html'), simplePage('Privacy Policy', '/privacy.html', `
<div class="seo-content" style="margin-top:0;">
<h2>Privacy Policy</h2>
<p style="font-size:14.5px;color:#6E6552;line-height:1.7;">Most ${SITE_NAME} tools are processed entirely in your browser — your files and data are never uploaded to our server. We show Google AdSense ads; Google may use cookies for ad personalization. See Google's privacy policy for details. We do not collect or store any personal data ourselves.</p>
</div>`));
  fs.writeFileSync(path.join(dist, 'contact.html'), simplePage('Contact', '/contact.html', `
<div class="seo-content" style="margin-top:0;">
<h2>Contact</h2>
<p style="font-size:14.5px;color:#6E6552;line-height:1.7;">Have a suggestion, bug report or business query? Email us: <a href="mailto:akash906kr@gmail.com" style="color:#D97757;">akash906kr@gmail.com</a></p>
</div>`));

  // robots + sitemap
  fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  const urls = ['/', ...builtTools.map(toolUrl), '/about.html', '/privacy.html', '/contact.html'];
  const today = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url><loc>${SITE_URL}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
    `\n</urlset>\n`);

  console.log(`Built: home + ${builtTools.length} tool pages + 3 static pages -> dist/`);
}

build();
