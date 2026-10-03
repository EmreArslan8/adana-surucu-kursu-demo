// Statik site üreticisi: data/ → dist/ (HTML + sitemap.xml + robots.txt).
// WordPress'e geçişte aynı veri yapısı CPT/ACF alanlarına birebir taşınır.
import { mkdirSync, writeFileSync, rmSync, cpSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { site } from "../data/site.js";
import { licenses } from "../data/licenses.js";
import { districts } from "../data/districts.js";
import { posts } from "../data/blog.js";
import { page } from "./templates/layout.js";
import { home } from "./pages/home.js";
import { licenseHub, licenseDetail } from "./pages/licenses.js";
import { districtHub, districtDetail } from "./pages/districts.js";
import { blogHub, blogPost } from "./pages/blog.js";
import { about, contact, faqPage, quizPage, kvkk, notFound } from "./pages/misc.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist");

const pages = [
  home(),
  licenseHub(), ...licenses.map(licenseDetail),
  districtHub(), ...districts.map(districtDetail),
  blogHub(), ...posts.map(blogPost),
  about(), contact(), faqPage(), quizPage(), kvkk(), notFound(),
];

rmSync(out, { recursive: true, force: true });
cpSync(join(root, "assets"), join(out, "assets"), { recursive: true });
// CSS parçaları (01-base, 02-components, 03-home) tek dosyada birleştirilir → tek istek.
const cssDir = join(root, "assets", "css");
const css = readdirSync(cssDir).filter((f) => f.endsWith(".css")).sort().map((f) => readFileSync(join(cssDir, f), "utf8")).join("\n");
rmSync(join(out, "assets", "css"), { recursive: true });

const write = (rel, content) => {
  const file = join(out, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
};

write("assets/css/style.css", css);

for (const p of pages) {
  write(p.path.endsWith(".html") ? p.path : join(p.path, "index.html"), page(p, p.body));
}

const today = new Date().toISOString().slice(0, 10);
const indexable = pages.filter((p) => !p.noindex);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${site.url}${p.path}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`);

write("robots.txt", `User-agent: *
Allow: /
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

Sitemap: ${site.url}/sitemap.xml
`);

const titles = new Set(pages.map((p) => p.title));
console.log(`✓ ${pages.length} sayfa üretildi (${indexable.length} indekslenebilir), benzersiz title: ${titles.size}`);
