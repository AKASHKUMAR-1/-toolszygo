const fs = require('fs');
const zlib = require('zlib');
const html = fs.readFileSync('ToolsDo.html', 'utf8');

function grab(type) {
  const open = '<script type="__bundler/' + type + '">';
  const start = html.indexOf(open);
  if (start === -1) throw new Error('missing ' + type);
  const end = html.indexOf('</script>', start);
  return JSON.parse(html.slice(start + open.length, end));
}

const manifest = grab('manifest');
let template = grab('template');
fs.mkdirSync('design-extracted', { recursive: true });
for (const [uuid, entry] of Object.entries(manifest)) {
  let buf = Buffer.from(entry.data, 'base64');
  if (entry.compressed) buf = zlib.gunzipSync(buf);
  const ext = entry.mime.includes('javascript') ? 'js' : entry.mime.includes('css') ? 'css' : entry.mime.split('/')[1];
  const fname = uuid + '.' + ext;
  fs.writeFileSync('design-extracted/' + fname, buf);
  template = template.split(uuid).join(fname);
  console.log(uuid, entry.mime, buf.length);
}
fs.writeFileSync('design-extracted/index.html', template);
console.log('template bytes:', template.length);
