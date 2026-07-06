module.exports = {
  workspace: `
<div class="workspace single">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Apni Rashi Choose Karo</div>
    <div id="rf-signs" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;"></div>
  </div>
</div>
<div class="panel panel-result" style="margin-top:16px;min-height:0;display:none;" id="rf-result-panel">
  <div class="panel-label">Aaj Ka Rashifal — <span id="rf-date"></span></div>
  <div id="rf-sign-name" style="font-family:var(--serif);font-size:24px;font-weight:600;color:#8A4B2A;"></div>
  <div id="rf-text" style="font-size:14.5px;line-height:1.7;color:#4E4636;"></div>
  <div class="stat-grid" style="margin-top:8px;">
    <div class="stat"><div class="num" id="rf-lucky-num">—</div><div class="lbl">Lucky number</div></div>
    <div class="stat"><div class="num" id="rf-lucky-color" style="font-size:16px;">—</div><div class="lbl">Lucky color</div></div>
    <div class="stat"><div class="num" id="rf-rating">—</div><div class="lbl">Din ki rating</div></div>
  </div>
</div>
<div style="font-size:12px;color:#A39C8B;margin-top:12px;">Note: Rashifal manoranjan ke liye hai — bade faisle apni samajh se lo! 🙏</div>`,
  howto: [
    'Apni rashi pe click karo (Mesh se Meen tak 12 rashiyan).',
    'Aaj ka rashifal — love, career, health + lucky number aur color mil jayega.',
    'Roz naya rashifal aata hai — kal phir check karo!',
  ],
  faq: [
    { q: 'Apni rashi kaise pata karoon?', a: 'Naam ke pehle akshar se: Mesh (A,L,E), Vrishabh (B,V,U), Mithun (K,Chh,Gh), Kark (D,H), Simha (M,T), Kanya (P,Th,N), Tula (R,T), Vrishchik (N,Y), Dhanu (Bh,Dh,F), Makar (Kh,J), Kumbh (G,S,Sh), Meen (D,Ch,Z,Th). Janm rashi ke liye pandit ji ya janm kundali dekho.' },
    { q: 'Rashifal roz badalta hai?', a: 'Haan — har din har rashi ka naya rashifal generate hota hai, date ke hisaab se.' },
    { q: 'Kya ye jyotish shastra pe based hai?', a: 'Ye entertainment ke liye general predictions hain. Serious jyotish consultation ke liye qualified astrologer se milo.' },
  ],
};
