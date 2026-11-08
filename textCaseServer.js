const http = require('http');
const textCase = require('text-case');

const server = http.createServer((request, response) => {
  const url = new URL(request.url, 'http://localhost:8080');
  const input = url.searchParams.get('text') || 'dynamic web technology';
  const output = textCase.camelCase(input);
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(`<!doctype html><html lang="en"><meta charset="utf-8"><title>Text Case</title><h1>Text case demonstration</h1><p>Input: ${escapeHtml(input)}</p><p>Camel case: <strong>${escapeHtml(output)}</strong></p></html>`);
});
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
}
server.listen(8080, () => console.log('Text-case server running at http://localhost:8080'));
