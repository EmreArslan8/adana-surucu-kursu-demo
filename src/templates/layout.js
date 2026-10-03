// Ortak iskelet: üst bar, header, footer, mobil sabit CTA çubuğu.
import { site, nav, waLink, telLink, mapsLink, fullAddress } from "../../data/site.js";
import { licenses } from "../../data/licenses.js";
import { districts } from "../../data/districts.js";
import { head } from "./seo.js";
import { icon } from "./icons.js";

const logo = () => `<a class="logo" href="/" aria-label="${site.name} ana sayfa">
  <span class="logo-mark">${icon("steering")}</span>
  <span class="logo-text">Şehir <em>Sürücü Kursu</em><small>Adana · MEB onaylı</small></span>
</a>`;

const header = (path) => `<header class="header" data-header><div class="wrap header-in">
  ${logo()}
  <nav class="nav" data-nav aria-label="Ana menü">
    ${nav.map((n) => `<a href="${n.href}"${path.startsWith(n.href) ? ' aria-current="page"' : ""}>${n.label}</a>`).join("")}
    <a class="btn btn-wa nav-cta" href="${waLink()}" target="_blank" rel="noopener">${icon("whatsapp")} WhatsApp</a>
  </nav>
  <a class="header-tel hide-md" href="${telLink()}" data-track="call"><span>${icon("phone")}</span><small>Hemen arayın</small><b>${site.phoneDisplay}</b></a>
  <button class="menu-btn" data-menu aria-label="Menüyü aç" aria-expanded="false">${icon("menu")}</button>
</div></header>`;

const footer = () => `<footer class="footer"><div class="wrap">
  <div class="footer-grid">
    <div>
      ${logo()}
      <p class="muted">${site.description}</p>
      <div class="nap" itemscope itemtype="https://schema.org/DrivingSchool">
        <strong itemprop="name">${site.name}</strong>
        <span itemprop="address">${fullAddress()}</span>
        <a itemprop="telephone" href="${telLink()}">${site.phoneDisplay}</a>
        <a href="mailto:${site.email}">${site.email}</a>
      </div>
    </div>
    <div><h3>Ehliyet Sınıfları</h3><ul>${licenses.map((l) => `<li><a href="/ehliyet-siniflari/${l.slug}/">${l.name}</a></li>`).join("")}</ul></div>
    <div><h3>Hizmet Bölgeleri</h3><ul>${districts.map((d) => `<li><a href="/adana-surucu-kursu/${d.slug}/">${d.name} Sürücü Kursu</a></li>`).join("")}</ul></div>
    <div><h3>Çalışma Saatleri</h3><ul class="hours">${site.hours.map((h) => `<li><span>${h.days}</span><b>${h.time}</b></li>`).join("")}</ul>
      <a class="btn btn-ghost" href="${mapsLink()}" target="_blank" rel="noopener">${icon("pin")} Yol Tarifi Al</a></div>
  </div>
  <div class="footer-word" aria-hidden="true">Şehir<em>Sürücü</em></div>
  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} ${site.name}. Tüm hakları saklıdır.</span>
    <span><a href="/kvkk/">KVKK</a> · <a href="/sitemap.xml">Site Haritası</a></span>
  </div>
</div></footer>`;

const mobileBar = () => `<div class="mobile-bar" role="navigation" aria-label="Hızlı iletişim">
  <a href="${telLink()}" data-track="call">${icon("phone")}<span>Ara</span></a>
  <a class="wa" href="${waLink()}" target="_blank" rel="noopener" data-track="whatsapp">${icon("whatsapp")}<span>WhatsApp</span></a>
  <a href="${mapsLink()}" target="_blank" rel="noopener" data-track="maps">${icon("pin")}<span>Yol Tarifi</span></a>
</div>
<a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp ile yazın" data-track="whatsapp">${icon("whatsapp")}</a>`;

export const page = (meta, body) => `<!doctype html>
<html lang="tr">
<head>
${head(meta)}
</head>
<body class="${meta.bodyClass || "inner"}">
<a class="skip" href="#main">İçeriğe geç</a>
<div class="demo-flag">Demo · iletişim bilgileri örnektir</div>
${header(meta.path)}
<main id="main">
${body}
</main>
${footer()}
${mobileBar()}
<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
