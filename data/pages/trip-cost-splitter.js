module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Trip Expenses</div>
    <div class="field-row">
      <div class="field">
        <label for="tcs-travel">Travel / Fuel (₹)</label>
        <input type="number" id="tcs-travel" value="4000" min="0" step="100">
      </div>
      <div class="field">
        <label for="tcs-stay">Hotel / Stay (₹)</label>
        <input type="number" id="tcs-stay" value="6000" min="0" step="100">
      </div>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="tcs-food">Khana-peena (₹)</label>
        <input type="number" id="tcs-food" value="3000" min="0" step="100">
      </div>
      <div class="field">
        <label for="tcs-other">Baaki kharche (₹)</label>
        <input type="number" id="tcs-other" value="1000" min="0" step="100">
      </div>
    </div>
    <div class="field">
      <label for="tcs-people">Kitne log?</label>
      <input type="number" id="tcs-people" value="4" min="1" max="100" step="1">
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="tcs-person">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;">Har bande ka hissa</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Total trip cost</span><span class="v" id="tcs-total">—</span></div>
      <div class="result-row"><span class="k">Breakdown</span><span class="v" id="tcs-breakdown" style="font-weight:400;font-size:12px;">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-secondary" id="tcs-copy">Copy result (WhatsApp ke liye)</button>
</div>`,
  howto: [
    'Trip ke sab kharche categories me daalo — travel, hotel, khana, baaki.',
    'Kitne log the wo daalo.',
    'Har bande ka hissa turant — "Copy result" se WhatsApp group me bhej do.',
  ],
  faq: [
    { q: 'Alag-alag logo ne alag amounts diye hon to?', a: 'Pehle per-person share nikalo is tool se. Phir jisne share se zyada diya usko baaki log difference wapas karenge. E.g. share ₹3,500 hai aur Rahul ne ₹6,000 diye to usse ₹2,500 wapas milne hain.' },
    { q: 'Kisi ne sirf kuch cheezein use ki hon to?', a: 'Fair splitting ke liye wo kharcha alag karo — e.g. drinks sirf 3 logo ne li to wo amount unme 3 me baanto, baaki sab me. Do baar calculator use kar lo.' },
    { q: 'Couple/family ko ek unit maane ya alag?', a: 'Group ki marzi — aam taur pe khana-hotel me per-head hi fair hota hai. Room sharing me couples ek room = ek share bhi kar sakte ho.' },
    { q: 'WhatsApp me kaise share karein?', a: '"Copy result" dabao — total, breakdown aur per-person share text me copy ho jayega, seedha group me paste kar do.' },
  ],
};
