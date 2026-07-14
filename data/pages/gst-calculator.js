module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel">
    <div class="panel-label">Amount &amp; Rate</div>
    <div class="field">
      <label for="gst-amount">Amount (₹)</label>
      <input type="number" id="gst-amount" value="1000" min="0" step="1">
    </div>
    <div class="field">
      <label for="gst-rate">GST Rate</label>
      <select id="gst-rate">
        <option value="0.25">0.25%</option>
        <option value="3">3%</option>
        <option value="5">5%</option>
        <option value="12">12%</option>
        <option value="18" selected>18%</option>
        <option value="28">28%</option>
      </select>
    </div>
    <div class="field">
      <label for="gst-mode">Calculation</label>
      <select id="gst-mode">
        <option value="add" selected>Add GST (amount is without GST)</option>
        <option value="remove">Remove GST (amount includes GST)</option>
      </select>
    </div>
  </div>
  <div class="panel panel-result">
    <div class="panel-label">Result</div>
    <div class="result-big" id="gst-result">—</div>
    <div style="font-size:12.5px;color:#B98E63;margin-top:-6px;" id="gst-result-label">Total (with GST)</div>
    <div class="result-rows" style="margin-top:8px;">
      <div class="result-row"><span class="k">Base amount (without GST)</span><span class="v" id="gst-base">—</span></div>
      <div class="result-row"><span class="k">GST amount</span><span class="v" id="gst-tax">—</span></div>
      <div class="result-row"><span class="k">CGST</span><span class="v" id="gst-cgst">—</span></div>
      <div class="result-row"><span class="k">SGST</span><span class="v" id="gst-sgst">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="gst-calc">Calculate GST</button>
  <button class="btn btn-secondary" id="gst-copy">Copy result</button>
</div>`,
  howto: [
    'Enter the amount — with GST or without GST, either works.',
    'Choose the GST rate (0.25%, 3%, 5%, 12%, 18%, or 28%).',
    'Select <strong>Add GST</strong> to add GST to the amount, or <strong>Remove GST</strong> to extract the base price from a GST-inclusive price.',
    'Click Calculate — the GST amount, CGST/SGST breakup, and total appear instantly.',
  ],
  faq: [
    { q: 'What are CGST and SGST?', a: 'For sales within the same state, GST is split into two parts — CGST (Central GST) and SGST (State GST), each half of the GST rate. E.g. 18% GST = 9% CGST + 9% SGST.' },
    { q: 'How is GST removed (reverse GST) calculated?', a: 'The formula to extract the base price from a GST-inclusive amount: Base = Total ÷ (1 + rate/100). E.g. if ₹1180 includes 18% GST, base = 1180 ÷ 1.18 = ₹1000.' },
    { q: 'What are the GST rates in India?', a: 'Common rates: 0.25% (rough diamonds), 3% (gold), 5%, 12%, 18%, and 28%. Most services are taxed at 18%.' },
    { q: 'Does this calculator work for IGST too?', a: 'Yes — for inter-state sales, the entire GST amount is IGST. This tool\'s "GST amount" is your IGST.' },
  ],
};
