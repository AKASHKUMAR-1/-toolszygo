# ToolsDo — Free Online Tools Website

Static tools website (100 tools ka structure, 10 tools live). Design: Claude design `ToolsDo.dc.html` se same-to-same.

## Structure

- `data/tools.js` — sabhi 100 tools ki master list (name, slug, SEO title/description, `built` flag)
- `data/pages/<slug>.js` — har built tool ka page content (workspace UI, How-to, FAQ)
- `src/assets/` — CSS, fonts (self-hosted), shared JS, per-tool JS (`js/tools/`), vendor libs (`js/vendor/`)
- `build.js` — static site generator
- `dist/` — **final website** (ye folder Hostinger pe upload hota hai)

## Build kaise kare

```
node build.js
```

Output `dist/` me aata hai: homepage, `/tools/<slug>/` pages, sitemap.xml, robots.txt, about/privacy/contact.

## Hostinger pe live kaise kare

1. `node build.js` chalao
2. `dist/` folder ke **andar ka sara content** Hostinger ke `public_html/` me upload karo (File Manager ya FTP)
3. Bas — koi server setup nahi chahiye, sab static hai

## Naya tool add kaise kare

1. `data/tools.js` me us tool pe `built: true` + `title`, `metaDesc`, `desc` add karo
2. `data/pages/<slug>.js` banao (kisi existing file ko copy karke edit karo)
3. `src/assets/js/tools/<slug>.js` me tool ki logic likho
4. `node build.js` chalao aur naya `dist/` upload karo

## AdSense lagane ke liye

Har page me 3 ad slots hain: `data-ad-pos="tool-top"`, `"tool-middle"`, `"tool-bottom"` (homepage pe `"home-middle"`).
AdSense approve hone ke baad `build.js` me `adSlot()` function ke andar placeholder ki jagah apna `<ins class="adsbygoogle">` code daalo aur rebuild karo.

## Domain set karna

`build.js` me upar `SITE_URL` apne final domain pe set karo (abhi `https://toolsdo.in` placeholder hai) — sitemap, canonical aur OG tags isi se bante hain.
