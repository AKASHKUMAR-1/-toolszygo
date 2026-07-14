module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Choose Your Zodiac Sign</div>
    <div id="rf-signs" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;"></div>
  </div>
</div>
<div class="panel panel-result" style="margin-top:16px;min-height:0;display:none;" id="rf-result-panel">
  <div class="panel-label">Today's Horoscope — <span id="rf-date"></span></div>
  <div id="rf-sign-name" style="font-family:var(--serif);font-size:24px;font-weight:600;color:#8A4B2A;"></div>
  <div id="rf-text" style="font-size:14.5px;line-height:1.7;color:#4E4636;"></div>
  <div class="stat-grid" style="margin-top:8px;">
    <div class="stat"><div class="num" id="rf-lucky-num">—</div><div class="lbl">Lucky number</div></div>
    <div class="stat"><div class="num" id="rf-lucky-color" style="font-size:16px;">—</div><div class="lbl">Lucky color</div></div>
    <div class="stat"><div class="num" id="rf-rating">—</div><div class="lbl">Day rating</div></div>
  </div>
</div>
<div style="font-size:12px;color:#A39C8B;margin-top:12px;">Note: This horoscope is for entertainment — make big decisions with your own judgment! 🙏</div>`,
  howto: [
    'Click on your zodiac sign (12 signs from Aries to Pisces).',
    'Get today\'s horoscope — love, career, health + a lucky number and color.',
    'A new horoscope appears daily — check back tomorrow!',
  ],
  faq: [
    { q: 'How do I find my zodiac sign?', a: 'By birth date range: Aries (Mar 21–Apr 19), Taurus (Apr 20–May 20), Gemini (May 21–Jun 20), Cancer (Jun 21–Jul 22), Leo (Jul 23–Aug 22), Virgo (Aug 23–Sep 22), Libra (Sep 23–Oct 22), Scorpio (Oct 23–Nov 21), Sagittarius (Nov 22–Dec 21), Capricorn (Dec 22–Jan 19), Aquarius (Jan 20–Feb 18), Pisces (Feb 19–Mar 20).' },
    { q: 'Does the horoscope change daily?', a: 'Yes — a new horoscope is generated for every sign each day, based on the date.' },
    { q: 'Is this based on astrology?', a: 'These are general predictions for entertainment. For serious astrological consultation, see a qualified astrologer.' },
  ],
};
