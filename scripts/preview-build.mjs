import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildDir = path.resolve(__dirname, '..', 'build');
const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT || '4177');

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.wasm': 'application/wasm'
};

const safeJoin = (pathname) => {
  const normalized = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  return path.join(buildDir, normalized);
};

const resolveFile = (requestPath) => {
  const cleanPath = requestPath.split('?')[0].split('#')[0];
  const requested = cleanPath === '/' ? '/index.html' : cleanPath;
  const directPath = safeJoin(requested);

  if (existsSync(directPath) && !directPath.endsWith(path.sep)) {
    return directPath;
  }

  if (!path.extname(directPath)) {
    const htmlPath = `${directPath}.html`;
    if (existsSync(htmlPath)) {
      return htmlPath;
    }
  }

  return path.join(buildDir, 'index.html');
};

createServer(async (req, res) => {
  try {
    const filePath = resolveFile(req.url || '/');
    const ext = path.extname(filePath);
    const content = await readFile(filePath);
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=600'
    });
    res.end(content);
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`Preview server error: ${error instanceof Error ? error.message : String(error)}`);
  }
}).listen(port, host, () => {
  console.log(`Preview server running at http://${host}:${port}`);
});
