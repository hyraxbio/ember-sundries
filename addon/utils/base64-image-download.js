export default function base64ImageDownload(base64Image, filename) {
  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = base64Image;
  a.download = filename;
  a.click();
}
