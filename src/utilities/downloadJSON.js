export default function downloadJSON(data, name = 'download') {
  const prefix = 'data:text/json;charset=utf-8,';
  const content = encodeURIComponent(JSON.stringify(data));
  const href = prefix + content;
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', href);
  downloadAnchorNode.setAttribute('download', name + '.json');
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
