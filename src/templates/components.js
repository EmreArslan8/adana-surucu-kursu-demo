// Tekrar kullanılan bölüm parçaları.
import { site, waLink, telLink } from "../../data/site.js";
import { img, alt } from "../../data/images.js";
import { icon, starIcon } from "./icons.js";

export const picture = (key, w = 800, cls = "", eager = false) =>
  `<img class="${cls}" src="${img(key, w)}" srcset="${img(key, Math.round(w / 2))} ${Math.round(w / 2)}w, ${img(key, w)} ${w}w, ${img(key, w * 2)} ${w * 2}w" sizes="(max-width: 760px) 100vw, ${w}px" alt="${alt(key)}" width="${w}" height="${Math.round(w * 0.66)}"${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}>`;

export const breadcrumb = (crumbs) => `<nav class="crumbs" aria-label="Breadcrumb"><ol>
  ${crumbs.map((c, i) => (i === crumbs.length - 1 ? `<li aria-current="page">${c.label}</li>` : `<li><a href="${c.href}">${c.label}</a></li>`)).join("")}
</ol></nav>`;

export const pageHero = ({ crumbs, eyebrow, title, lead, image, actions = true }) => `<section class="phero">
  ${picture(image, 1600, "phero-bg", true)}
  <div class="hero-shade"></div>
  <div class="wrap phero-in">
    ${breadcrumb(crumbs)}
    ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ""}
    <h1>${title}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ""}
    ${actions ? ctaButtons() : ""}
  </div>
</section>`;

export const ctaButtons = (text) => `<div class="actions">
  <a class="btn btn-primary btn-lg" href="${telLink()}" data-track="call">${icon("phone")} ${site.phoneDisplay}</a>
  <a class="btn btn-wa btn-lg" href="${waLink(text)}" target="_blank" rel="noopener" data-track="whatsapp">${icon("whatsapp")} WhatsApp'tan Yaz</a>
</div>`;

export const sectionHead = (eyebrow, title, lead, center = false) => `<div class="shead${center ? " center" : ""}">
  <span class="eyebrow">${eyebrow}</span>
  <h2>${title}</h2>
  ${lead ? `<p class="lead">${lead}</p>` : ""}
</div>`;

export const licenseCard = (l, cls = "") => `<a class="tile ${cls}" href="/ehliyet-siniflari/${l.slug}/">
  ${picture(l.image, cls ? 900 : 560, "tile-img")}
  <span class="tile-code">${l.code}</span>
  ${l.popular ? '<span class="badge">En çok tercih edilen</span>' : ""}
  <div class="tile-body">
    <small>${l.short}</small>
    <h3>${l.name}</h3>
    <ul class="tile-meta"><li>${l.age}+ yaş</li><li>${l.practice} saat direksiyon</li><li>${l.duration}</li></ul>
  </div>
  <span class="tile-go">${icon("arrow")}</span>
</a>`;

export const postCard = (p) => `<article class="pcard">
  <a href="/blog/${p.slug}/" class="pcard-img">${picture(p.image, 560)}</a>
  <div class="pcard-body">
    <span class="tag">${p.category}</span>
    <h3><a href="/blog/${p.slug}/">${p.title}</a></h3>
    <p>${p.excerpt}</p>
    <span class="muted small">${formatDate(p.date)} · ${p.read} dk okuma</span>
  </div>
</article>`;

export const faqList = (faqs) => `<div class="faq">${faqs
  .map(
    (f) => `<details><summary>${f.q}<span>${icon("plus")}</span></summary><p>${f.a}</p></details>`
  )
  .join("")}</div>`;

export const testimonialCard = (t) => `<figure class="tcard">
  <span class="tquote" aria-hidden="true">“</span>
  <div class="stars" aria-label="5 yıldız">${starIcon().repeat(5)}</div>
  <blockquote>${t.text}</blockquote>
  <figcaption><span class="avatar">${t.name[0]}</span><span><b>${t.name}</b><small>${t.district} · ${t.license}</small></span></figcaption>
</figure>`;

export const ctaBand = (title = "Ehliyetinizi almaya bugün başlayın", text = "Ücretsiz ön görüşme için arayın ya da WhatsApp'tan yazın; size en uygun ehliyet sınıfını ve ders programını birlikte planlayalım.") => `<section class="ctaband">${picture("dashboard", 1400, "ctaband-bg")}<div class="wrap ctaband-in">
  <div><span class="eyebrow">Kayıtlar açık</span><h2>${title}</h2><p>${text}</p></div>
  ${ctaButtons()}
</div></section>`;

export const ratingPill = () => `<span class="rating">${starIcon()} <b>${site.rating.value}</b> Google'da ${site.rating.count} yorum</span>`;

export const formatDate = (d) =>
  new Date(d).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

export const mapEmbed = () =>
  `<div class="map"><iframe title="${site.name} harita konumu" src="https://maps.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=15&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>`;
