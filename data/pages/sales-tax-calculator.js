module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Details</div>
    <div class="field">
      <label for="stx-amount">Amount (₹)</label>
      <input type="number" id="stx-amount" value="1000" min="0" step="1">
    </div>
    <div class="field">
      <label for="stx-rate">Tax Rate (%)</label>
      <input type="number" id="stx-rate" value="8" min="0" max="50" step="0.1">
    </div>
    <div class="field">
      <label for="stx-mode">Mode</label>
      <select id="stx-mode">
        <option value="add" selected>Add tax (amount is pre-tax)</option>
        <option value="remove">Remove tax (amount is tax-included)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-big" id="stx-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;" id="stx-label">Total (with tax)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Pre-tax amount</span><span class="v" id="stx-pretax">—</span></div>
      <div class="result-row"><span class="k">Tax amount</span><span class="v" id="stx-tax">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'Enter the amount and tax rate.',
    'Choose "Add tax" if the amount is pre-tax, or "Remove tax" if the amount is already tax-included.',
    'The result appears instantly — with both the pre-tax amount and the tax breakup.',
  ],
  faq: [
    { q: 'What is sales tax?', a: 'A tax on goods/services added to the final price — common in US states (India uses GST instead, for which we have a separate GST Calculator).' },
    { q: 'What is the formula to remove tax?', a: 'Pre-tax = Total ÷ (1 + rate/100). E.g. if $108 includes 8% tax, pre-tax = 108 ÷ 1.08 = $100.' },
    { q: 'For India, should I use the GST Calculator or this?', a: 'For GST, use our dedicated GST Calculator (it gives a CGST/SGST breakup). This general sales-tax tool is for any single-rate tax.' },
  ],
};
