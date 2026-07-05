(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var file = null;
  var resultBlob = null;
  var resultName = '';

  var fmtSize = function (b) {
    if (b < 1024) return b + ' B';
    if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
    return (b / 1048576).toFixed(2) + ' MB';
  };

  var drop = $('ic-drop');
  var input = $('ic-file');
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
    if (f.size > 25 * 1048576) {
      alert('File 25 MB se badi hai.');
      return;
    }
    file = f;
    drop.querySelector('strong').textContent = f.name;
    $('ic-compress').disabled = false;
  }

  $('ic-quality').addEventListener('input', function () {
    $('ic-quality-val').textContent = this.value;
  });

  $('ic-compress').addEventListener('click', function () {
    if (!file) return;
    var btn = this;
    btn.textContent = 'Compressing…';
    btn.disabled = true;
    var img = new Image();
    var url = URL.createObjectURL(file);
    img.onload = function () {
      var canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      var ctx = canvas.getContext('2d');
      var format = $('ic-format').value;
      if (format === 'image/jpeg') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0);
      var quality = parseInt($('ic-quality').value, 10) / 100;
      canvas.toBlob(function (blob) {
        URL.revokeObjectURL(url);
        btn.textContent = 'Compress image';
        btn.disabled = false;
        if (!blob) return;
        resultBlob = blob;
        var ext = format === 'image/png' ? 'png' : format === 'image/webp' ? 'webp' : 'jpg';
        resultName = file.name.replace(/\.[^.]+$/, '') + '-compressed.' + ext;
        $('ic-preview').src = URL.createObjectURL(blob);
        $('ic-preview').style.display = '';
        $('ic-placeholder').style.display = 'none';
        $('ic-stats').style.display = '';
        $('ic-orig').textContent = fmtSize(file.size);
        $('ic-comp').textContent = fmtSize(blob.size);
        var saved = Math.max(0, Math.round((1 - blob.size / file.size) * 100));
        $('ic-saved').textContent = saved + '% smaller';
        $('ic-download').disabled = false;
      }, format, quality);
    };
    img.onerror = function () {
      URL.revokeObjectURL(url);
      btn.textContent = 'Compress image';
      btn.disabled = false;
      alert('Image load nahi ho payi.');
    };
    img.src = url;
  });

  $('ic-download').addEventListener('click', function () {
    if (!resultBlob) return;
    var a = document.createElement('a');
    a.download = resultName;
    a.href = URL.createObjectURL(resultBlob);
    a.click();
  });
})();
