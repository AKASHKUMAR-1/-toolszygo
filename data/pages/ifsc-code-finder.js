module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="ifsc-code">IFSC Code</label>
      <input type="text" id="ifsc-code" placeholder="e.g. SBIN0000300" maxlength="11" style="font-family:monospace;letter-spacing:1px;text-transform:uppercase;">
    </div>
    <div style="font-size:12px;color:#A39C8B;">The IFSC code is found on your chequebook, passbook, or bank app — it's 11 characters long.</div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="panel-placeholder" id="ifsc-placeholder">bank branch details will appear here</div>
    <div id="ifsc-result" style="display:none;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px;">
        <div>
          <div id="ifsc-bank" style="font-size:16px;font-weight:700;color:#3A322A;">—</div>
          <div id="ifsc-branch" style="font-size:13px;color:#8A7A5C;">—</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
        <div style="flex:1;min-width:140px;background:#fff;border:1px solid #EDE6DA;border-radius:8px;padding:8px 12px;">
          <div style="font-size:10.5px;color:#B98E63;text-transform:uppercase;letter-spacing:0.5px;">IFSC</div>
          <div id="ifsc-code-out" style="font-family:monospace;font-weight:700;font-size:13.5px;">—</div>
        </div>
        <div style="flex:1;min-width:140px;background:#fff;border:1px solid #EDE6DA;border-radius:8px;padding:8px 12px;">
          <div style="font-size:10.5px;color:#B98E63;text-transform:uppercase;letter-spacing:0.5px;">MICR</div>
          <div id="ifsc-micr" style="font-family:monospace;font-weight:700;font-size:13.5px;">—</div>
        </div>
        <div style="flex:1;min-width:140px;background:#fff;border:1px solid #EDE6DA;border-radius:8px;padding:8px 12px;">
          <div style="font-size:10.5px;color:#B98E63;text-transform:uppercase;letter-spacing:0.5px;">SWIFT (international)</div>
          <div id="ifsc-swift" style="font-family:monospace;font-weight:700;font-size:13.5px;">—</div>
        </div>
      </div>
      <div class="result-rows">
        <div class="result-row"><span class="k">Address</span><span class="v" id="ifsc-address" style="font-weight:400;font-size:12.5px;max-width:60%;">—</span></div>
        <div class="result-row"><span class="k">City / District</span><span class="v" id="ifsc-city">—</span></div>
        <div class="result-row"><span class="k">State</span><span class="v" id="ifsc-state">—</span></div>
        <div class="result-row"><span class="k">Centre</span><span class="v" id="ifsc-centre">—</span></div>
        <div class="result-row"><span class="k">Contact</span><span class="v" id="ifsc-contact">—</span></div>
      </div>
      <div style="margin-top:12px;">
        <div style="font-size:10.5px;color:#B98E63;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Transfer services</div>
        <div id="ifsc-services" style="display:flex;gap:6px;flex-wrap:wrap;"></div>
      </div>
    </div>
  </div>
</div>
<div class="btn-row">
  <button class="btn btn-primary" id="ifsc-search">Search IFSC</button>
  <button class="btn btn-secondary" id="ifsc-copy">Copy details</button>
</div>`,
  howto: [
    'Enter your 11-character IFSC code (e.g. SBIN0000300).',
    'Click <strong>Search IFSC</strong> — bank, branch, address, MICR, SWIFT and service details appear.',
    'Copy the details for use in an NEFT/RTGS form, or for an international wire (SWIFT).',
  ],
  faq: [
    { q: 'What is an IFSC code?', a: 'IFSC (Indian Financial System Code) is a unique 11-character code for every bank branch — the first 4 letters are the bank name, the 5th character is 0, and the last 6 are the branch code. It\'s required for NEFT, RTGS, and IMPS transfers.' },
    { q: 'What is MICR and how is it different from IFSC?', a: 'MICR (Magnetic Ink Character Recognition) is a 9-digit code printed on cheques, used for cheque clearing. IFSC is used for electronic transfers (NEFT/RTGS/IMPS). A branch has both, and they\'re not interchangeable — always use the right one for the right purpose.' },
    { q: 'What is the SWIFT code for and when do I need it?', a: 'SWIFT/BIC codes identify a bank internationally — you need this (not IFSC) when receiving money from abroad. Not every branch has one; usually only branches authorized for foreign transactions do.' },
    { q: 'Where does this data come from?', a: 'From Razorpay\'s free IFSC directory API, which is based on the RBI\'s official list and updated regularly.' },
    { q: 'Where do I find the IFSC code?', a: 'On every chequebook page, the bank passbook, the bank\'s app/net-banking, or the bank\'s website. Always verify the IFSC along with the account number.' },
    { q: 'What happens to money sent with a wrong IFSC?', a: 'If the IFSC+account combination is invalid, the transfer fails and the money is returned. But with a valid-but-wrong combination, money can go to the wrong account — always double-check.' },
  ],
};
