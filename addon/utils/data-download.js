export default function dataDownload(data, filename) {
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  var blob = new Blob([data], { type: 'octet/stream' });
  var url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}
