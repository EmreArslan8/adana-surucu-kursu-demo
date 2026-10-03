import { posts } from "../../data/blog.js";
import { findLicense } from "../../data/licenses.js";
import { breadcrumbSchema, articleSchema } from "../templates/seo.js";
import { icon } from "../templates/icons.js";
import { pageHero, postCard, ctaBand, picture, formatDate } from "../templates/components.js";

const hubCrumbs = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/blog/", label: "Blog" },
];

const categories = [...new Set(posts.map((p) => p.category))];

export const blogHub = () => ({
  path: "/blog/",
  title: "Ehliyet Rehberi ve Blog | Adana Şehir Sürücü Kursu",
  description: "Ehliyet sınavı ipuçları, gerekli belgeler, direksiyon sınavı rehberi ve sürüş teknikleri. Adana Şehir Sürücü Kursu blogu.",
  image: "studying",
  schemas: [breadcrumbSchema(hubCrumbs)],
  body: `${pageHero({ crumbs: hubCrumbs, eyebrow: "Ehliyet rehberi", title: "Ehliyet ve Sürüş Rehberi", lead: "Kayıttan direksiyon sınavına kadar merak ettiğiniz her şey; uzman eğitmenlerimizin kaleminden.", image: "studying", actions: false })}
  <section class="section"><div class="wrap">
    <div class="filters" data-filters>
      <button class="chip active" data-filter="all">Tümü</button>
      ${categories.map((c) => `<button class="chip" data-filter="${c}">${c}</button>`).join("")}
    </div>
    <div class="grid-3" data-filter-grid>${posts.map((p) => `<div data-cat="${p.category}">${postCard(p)}</div>`).join("")}</div>
  </div></section>
  ${ctaBand()}`,
});

export const blogPost = (p) => {
  const path = `/blog/${p.slug}/`;
  const crumbs = [...hubCrumbs, { href: path, label: p.title }];
  const lic = findLicense(p.related);
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  return {
    path,
    title: `${p.title} | Adana Şehir Sürücü Kursu`,
    description: p.excerpt,
    image: p.image,
    schemas: [breadcrumbSchema(crumbs), articleSchema(p, path)],
    body: `${pageHero({ crumbs, eyebrow: p.category, title: p.title, lead: p.excerpt, image: p.image, actions: false })}
    <section class="section"><div class="wrap detail">
      <article class="prose">
        <p class="muted small">${icon("calendar")} ${formatDate(p.date)} · ${p.read} dk okuma · Yazar: Eğitim Ekibi</p>
        <nav class="toc" aria-label="İçindekiler"><b>İçindekiler</b><ol>${p.body.map((b, i) => `<li><a href="#b${i}">${b.h}</a></li>`).join("")}</ol></nav>
        ${p.body
          .map((b, i) => `<h2 id="b${i}">${b.h}</h2>${b.p ? `<p>${b.p}</p>` : ""}${b.list ? `<ul class="checks">${b.list.map((x) => `<li>${icon("check")} ${x}</li>`).join("")}</ul>` : ""}`)
          .join("")}
        ${lic ? `<div class="inline-cta">${picture(lic.image, 240)}<div><b>${lic.name} kursuna mı hazırlanıyorsunuz?</b><p>Ders saatleri, yaş şartı ve kayıt bilgileri için inceleyin.</p><a href="/ehliyet-siniflari/${lic.slug}/">${lic.name} sayfasına git ${icon("arrow")}</a></div></div>` : ""}
      </article>
      <aside class="sidebar">
        <div class="side-card sticky">
          <h3>Diğer yazılar</h3>
          <ul class="side-list">${more.map((m) => `<li><a href="/blog/${m.slug}/">${m.title}</a></li>`).join("")}</ul>
          <a class="btn btn-accent btn-block" href="/e-sinav-deneme/">${icon("book")} Ücretsiz Deneme Sınavı</a>
        </div>
      </aside>
    </div></section>
    <section class="section alt"><div class="wrap"><h2 class="h3">Okumaya devam edin</h2><div class="grid-3">${more.map(postCard).join("")}</div></div></section>
    ${ctaBand()}`,
  };
};
