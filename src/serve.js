// Bağımlılıksız yerel önizleme sunucusu: node src/serve.js → http://localhost:4400
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const port = process.env.PORT || 4400;
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".xml": "application/xml", ".txt": "text/plain" };

createServer(async (req, res) => {
  let path = join(dist, decodeURIComponent(req.url.split("?")[0]));
  try {
    if ((await stat(path)).isDirectory()) path = join(path, "index.html");
    res.writeHead(200, { "content-type": types[extname(path)] || "application/octet-stream" });
    res.end(await readFile(path));
  } catch {
    res.writeHead(404, { "content-type": types[".html"] });
    res.end(await readFile(join(dist, "404.html")));
  }
}).listen(port, () => console.log(`http://localhost:${port}`));
