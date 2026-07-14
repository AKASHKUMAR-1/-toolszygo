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
    'Enter an IP address (e.g. 192.168.1.0) and choose the CIDR/subnet mask.',
    'Get the network address, broadcast address, usable host range, and total hosts instantly.',
  ],
  faq: [
    { q: 'What is CIDR notation?', a: 'Notation like /24 indicates how many bits are reserved for the network. /24 equals a 255.255.255.0 subnet mask, which has 256 addresses (254 usable).' },
    { q: 'Why are the network and broadcast addresses separate from the usable range?', a: 'Each subnet\'s first address (network address) identifies the subnet, and the last (broadcast) is reserved for sending messages to everyone — neither can be assigned to devices.' },
    { q: 'Why is this useful for networking students/sysadmins?', a: 'Manual subnetting is error-prone — this tool gives correct values instantly for IP planning, VLAN setup, or exam prep (certifications like CCNA).' },
  ],
};
