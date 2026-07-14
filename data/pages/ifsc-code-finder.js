module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="ifsc-code">IFSC Code</label>
      <input type="text" id="ifsc-code" placeholder="e.g. SBIN0000300" maxlength="11" style="font-family:monospace;text-transform:uppercase;">
    </div>
    <div style="font-size:12px;color:#A39C8B;">The IFSC code is found on your chequebook, passbook, or bank app — it's 11 characters long.</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ifsc-placeholder">bank branch details will appear here</div>
    <div class="result-rows" id="ifsc-result" style="display:none;">
      <div class="result-row"><span class="k">Bank</span><span class="v" id="ifsc-bank">—</span></div>
      <div class="result-row"><span class="k">Branch</span><span class="v" id="ifsc-branch">—</span></div>
      <div class="result-row"><span class="k">City</span><span class="v" id="ifsc-city">—</span></div>
      <div class="result-row"><span class="k">State</span><span class="v" id="ifsc-state">—</span></div>
      <div class="result-row"><span class="k">Address</span><span class="v" id="ifsc-address" style="font-weight:400;font-size:12.5px;max-width:60%;">—</span></div>
      <div class="result-row"><span class="k">MICR</span><span class="v" id="ifsc-micr">—</span></div>
      <div class="result-row"><span class="k">UPI / IMPS / NEFT / RTGS</span><span class="v" id="ifsc-services">—</span></div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ifsc-search">Search IFSC</button>
  <button class="btn btn-secondary" id="ifsc-copy">Copy details</button>
</div>`,
  howto: [
    'Enter your 11-character IFSC code (e.g. SBIN0000300).',
    'Click <strong>Search IFSC</strong> — bank, branch, address, and service details appear.',
    'Copy the details for use in an NEFT/RTGS form.',
  ],
  faq: [
    { q: 'What is an IFSC code?', a: 'IFSC (Indian Financial System Code) is a unique 11-character code for every bank branch — the first 4 letters are the bank name, the 5th character is 0, and the last 6 are the branch code. It\'s required for NEFT, RTGS, and IMPS transfers.' },
    { q: 'Where does this data come from?', a: 'From Razorpay\'s free IFSC directory API, which is based on the RBI\'s official list and updated regularly.' },
    { q: 'Where do I find the IFSC code?', a: 'On every chequebook page, the bank passbook, the bank\'s app/net-banking, or the bank\'s website. Always verify the IFSC along with the account number.' },
    { q: 'What happens to money sent with a wrong IFSC?', a: 'If the IFSC+account combination is invalid, the transfer fails and the money is returned. But with a valid-but-wrong combination, money can go to the wrong account — always double-check.' },
  ],
};
