(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var file = null;
  var resultBlob = null;
  var resultName = '';

  var fmtSize = function (b) {
    return b < 1048576 ? (b / 1024).toFixed(1) + ' KB' : (b / 1048576).toFixed(2) + ' MB';
  };
  var extOf = function (mime) {
    return mime === 'image/png' ? 'PNG' : mime === 'image/webp' ? 'WEBP' : 'JPG';
  };

  var drop = $('ifc-drop');
  var input = $('ifc-file');
  drop.addEventListener('click', function () { input.click(); });
  drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
  drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
  drop.addEventListener('drop', function (e) {
    e.preventDefault();
    drop.classList.remove('drag');
    if (e.dataTransfer.files.length) setFile(e.dataTransfer.files[0]);
  });
  input.addEventListener('change', function () {
    if (input.files.length) setFile(input.files[0]);
  });

  function setFile(f) {
    if (!/^image\/(jpeg|png|webp)$/.test(f.type)) {
      alert('Sirf JPG, PNG ya WEBP images supported hain.');
      return;
    }
    file = f;
    drop.querySelector('strong').textContent = f.name;
    $('ifc-convert').disabled = false;
  }

  function updateQualityRow() {
    $('ifc-quality-row').style.display = $('ifc-format').value === 'image/png' ? 'none' : '';
  }
  $('ifc-format').addEventListener('change', updateQualityRow);
  $('ifc-quality').addEventListener('input', function () {
    $('ifc-quality-val').textContent = this.value;
  });

  $('ifc-convert').addEventListener('click', function () {
    if (!file) return;
    var btn = this;
    var format = $('ifc-format').value;
    btn.textContent = 'Converting…';
    btn.disabled = true;
    var img = new Image();
    var url = URL.createObjectURL(file);
    img.onload = function () {
      var canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      var ctx = canvas.getContext('2d');
      if (format === 'image/jpeg') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0);
      var quality = parseInt($('ifc-quality').value, 10) / 100;
      canvas.toBlob(function (blob) {
        URL.revokeObjectURL(url);
        btn.textContent = 'Convert image';
        btn.disabled = false;
        if (!blob) return;
        resultBlob = blob;
        var ext = format === 'image/png' ? 'png' : format === 'image/webp' ? 'webp' : 'jpg';
        resultName = file.name.replace(/\.[^.]+$/, '') + '.' + ext;
        $('ifc-preview').src = URL.createObjectURL(blob);
        $('ifc-preview').style.display = '';
        $('ifc-placeholder').style.display = 'none';
        $('ifc-stats').style.display = '';
        $('ifc-orig').textContent = extOf(file.type) + ' (' + fmtSize(file.size) + ')';
        $('ifc-new').textContent = extOf(format) + ' (' + fmtSize(blob.size) + ')';
        $('ifc-download').disabled = false;
      }, format, format === 'image/png' ? undefined : quality);
    };
    img.src = url;
  });

  $('ifc-download').addEventListener('click', function () {
    if (!resultBlob) return;
    var a = document.createElement('a');
    a.download = resultName;
    a.href = URL.createObjectURL(resultBlob);
    a.click();
  });

  updateQualityRow();
})();
