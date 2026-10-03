import { licenses } from "../../data/licenses.js";
import { posts } from "../../data/blog.js";
import { breadcrumbSchema, faqSchema, courseSchema } from "../templates/seo.js";
import { icon } from "../templates/icons.js";
import { pageHero, sectionHead, licenseCard, faqList, ctaBand, picture, postCard } from "../templates/components.js";
import { waLink } from "../../data/site.js";

const hubCrumbs = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/ehliyet-siniflari/", label: "Ehliyet Sınıfları" },
];

const compareTable = () => `<div class="table-wrap"><table class="table">
  <thead><tr><th>Sınıf</th><th>Araç</th><th>Min. yaş</th><th>Teorik</th><th>Direksiyon</th><th>Süre</th></tr></thead>
  <tbody>${licenses
    .map((l) => `<tr><td><a href="/ehliyet-siniflari/${l.slug}/"><b>${l.code}</b> ${l.name.replace(/^[A-Z0-9]+ Sınıfı /, "")}</a></td><td>${l.short}</td><td>${l.age}</td><td>${l.theory ? l.theory + " saat" : "Muaf"}</td><td>${l.practice} saat</td><td>${l.duration}</td></tr>`)
    .join("")}</tbody>
</table></div>`;

export const licenseHub = () => ({
  path: "/ehliyet-siniflari/",
  title: "Ehliyet Sınıfları ve Kursları | Adana Şehir Sürücü Kursu",
  description: "Adana'da B otomatik, B manuel, A1, A2, A, BE, C ve D sınıfı ehliyet kursları. Yaş şartları, ders saatleri ve süreleri tek sayfada karşılaştırın.",
  image: "steering",
  schemas: [breadcrumbSchema(hubCrumbs)],
  body: `${pageHero({
    crumbs: hubCrumbs,
    eyebrow: "8 farklı ehliyet sınıfı",
    title: "Adana Ehliyet Sınıfları ve Kursları",
    lead: "Otomobil, motosiklet, kamyon ve otobüs: ihtiyacınıza uygun ehliyet sınıfını seçin, eğitim süresini ve şartlarını inceleyin.",
    image: "steering",
  })}
  <section class="section"><div class="wrap"><div class="grid-4">${licenses.map(licenseCard).join("")}</div></div></section>
  <section class="section alt"><div class="wrap">
    ${sectionHead("Karşılaştırma", "Ehliyet sınıfları karşılaştırma tablosu", "Ders saatleri MEB müfredatına göre asgari saatlerdir; ihtiyaca göre ek ders planlanabilir.")}
    ${compareTable()}
  </div></section>
  ${ctaBand("Hangi sınıfı seçeceğinizden emin değil misiniz?", "Yaşınızı ve kullanmak istediğiniz aracı yazın, size en uygun ehliyeti önerelim.")}`,
});

export const licenseDetail = (l) => {
  const path = `/ehliyet-siniflari/${l.slug}/`;
  const crumbs = [...hubCrumbs, { href: path, label: l.name }];
  const others = licenses.filter((x) => x.slug !== l.slug).slice(0, 4);
  const related = posts.filter((p) => p.related === l.slug).concat(posts).slice(0, 3);
  const wa = `Merhaba, ${l.name} kursu hakkında bilgi almak istiyorum.`;
  return {
    path,
    title: l.metaTitle,
    description: l.metaDescription,
    image: l.image,
    schemas: [breadcrumbSchema(crumbs), courseSchema(l, path), faqSchema(l.faqs)],
    body: `${pageHero({ crumbs, eyebrow: `${l.code} Sınıfı · ${l.short}`, title: `Adana ${l.name} Kursu`, lead: l.intro, image: l.image })}
    <section class="section"><div class="wrap detail">
      <article class="prose">
        <div class="facts">
          <div>${icon("user")}<span>Minimum yaş</span><b>${l.age}</b></div>
          <div>${icon("book")}<span>Teorik ders</span><b>${l.theory ? l.theory + " saat" : "Muaf"}</b></div>
          <div>${icon("steering")}<span>Direksiyon</span><b>${l.practice} saat</b></div>
          <div>${icon("calendar")}<span>Ortalama süre</span><b>${l.duration}</b></div>
        </div>
        <h2>${l.name} ile hangi araçları kullanabilirsiniz?</h2>
        <p><b>${l.vehicles}.</b></p>
        ${l.sections.map((s) => `<h2>${s.h}</h2><p>${s.p}</p>`).join("")}
        <figure>${picture(l.image === "manual" ? "lesson" : "lesson2", 820)}<figcaption>Direksiyon eğitimleri gerçek trafik koşullarında, sınav güzergâhında prova ile tamamlanır.</figcaption></figure>
        <h2>Kursumuzda ${l.code} sınıfı eğitimin avantajları</h2>
        <ul class="checks">${l.highlights.map((h) => `<li>${icon("check")} ${h}</li>`).join("")}</ul>
        <h2>Kayıt için gerekli belgeler</h2>
        <p>Kimlik kartınız ve sürücü adayı sağlık raporunuz yeterli. Diploma ve adli sicil sorgulamaları e-Devlet üzerinden tarafımızca yapılır. Detaylı liste için <a href="/blog/ehliyet-almak-icin-gerekli-belgeler/">ehliyet için gerekli belgeler</a> yazımıza göz atabilirsiniz.</p>
        <h2>Sıkça sorulan sorular</h2>
        ${faqList(l.faqs)}
      </article>
      <aside class="sidebar">
        <div class="side-card sticky">
          <h3>${l.name}</h3>
          <p class="muted">Güncel ücret ve sınav tarihleri için hemen bilgi alın.</p>
          <a class="btn btn-wa btn-block" href="${waLink(wa)}" target="_blank" rel="noopener" data-track="whatsapp">${icon("whatsapp")} WhatsApp'tan Sor</a>
          <a class="btn btn-primary btn-block" href="/iletisim/">${icon("calendar")} Ön Kayıt Formu</a>
          <ul class="side-list">${others.map((o) => `<li><a href="/ehliyet-siniflari/${o.slug}/">${o.name} ${icon("arrow")}</a></li>`).join("")}</ul>
        </div>
      </aside>
    </div></section>
    <section class="section alt"><div class="wrap">
      ${sectionHead("Rehber", "İlgili yazılar", "")}
      <div class="grid-3">${related.filter((p, i, a) => a.indexOf(p) === i).slice(0, 3).map(postCard).join("")}</div>
    </div></section>
    ${ctaBand(`${l.name} için kayıtlar açık`, "Yeni dönem teorik dersleri her hafta başlıyor. Yerinizi şimdiden ayırın.")}`,
  };
};
