import { csvFormat } from 'd3';

export default function downloadCSV(data, name = 'download') {
  const prefix = 'data:text/csv;charset=utf-8,';
  const content = encodeURIComponent(csvFormat(data));
  const href = prefix + content;
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', href);
  downloadAnchorNode.setAttribute('download', name + '.csv');
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
