module.exports = {
  workspace: `
<div class="workspace">
  <div class="panel" style="min-height:0;">
    <div class="panel-label">Input</div>
    <div class="field">
      <label for="sn-ip">IP Address</label>
      <input type="text" id="sn-ip" value="192.168.1.0" spellcheck="false" style="font-family:monospace;">
    </div>
    <div class="field">
      <label for="sn-cidr">CIDR / Subnet Mask</label>
      <select id="sn-cidr"></select>
    </div>
    <div id="sn-error" style="font-size:13px;font-weight:600;color:#B84F4F;"></div>
  </div>
  <div class="panel panel-result" style="min-height:0;">
    <div class="panel-label">Result</div>
    <div class="result-rows">
      <div class="result-row"><span class="k">Network Address</span><span class="v" id="sn-network" style="font-family:monospace;">—</span></div>
      <div class="result-row"><span class="k">Broadcast Address</span><span class="v" id="sn-broadcast" style="font-family:monospace;">—</span></div>
      <div class="result-row"><span class="k">Subnet Mask</span><span class="v" id="sn-mask" style="font-family:monospace;">—</span></div>
      <div class="result-row"><span class="k">Wildcard Mask</span><span class="v" id="sn-wildcard" style="font-family:monospace;">—</span></div>
      <div class="result-row"><span class="k">Usable Host Range</span><span class="v" id="sn-range" style="font-family:monospace;font-size:12px;">—</span></div>
      <div class="result-row"><span class="k">Total Hosts</span><span class="v" id="sn-total">—</span></div>
      <div class="result-row"><span class="k">Usable Hosts</span><span class="v" id="sn-usable">—</span></div>
    </div>
  </div>
</div>`,
  howto: [
    'IP address daalo (e.g. 192.168.1.0) aur CIDR/subnet mask choose karo.',
    'Network address, broadcast address, usable host range aur total hosts turant mil jayenge.',
  ],
  faq: [
    { q: 'CIDR notation kya hai?', a: '/24 jaisa notation batata hai ki kitne bits network ke liye reserve hain. /24 = 255.255.255.0 subnet mask ke barabar hai, jisme 256 addresses hoti hain (254 usable).' },
    { q: 'Network aur broadcast address alag kyun hote hain usable range se?', a: 'Har subnet ka pehla address (network address) subnet ko identify karta hai, aakhri (broadcast) sabko message bhejne ke liye reserved hai — dono devices ko assign nahi kiye ja sakte.' },
    { q: 'Ye networking students/sysadmins ke liye kyun useful hai?', a: 'Subnetting manual calculation error-prone hai — ye tool turant sahi values deta hai IP planning, VLAN setup ya exam preparation (CCNA jaisi certifications) ke liye.' },
  ],
};
