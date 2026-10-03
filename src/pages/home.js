import { site, waLink, telLink } from "../../data/site.js";
import { licenses } from "../../data/licenses.js";
import { districts } from "../../data/districts.js";
import { posts } from "../../data/blog.js";
import { faqs, testimonials, steps, features, quiz } from "../../data/content.js";
import { faqSchema } from "../templates/seo.js";
import { icon, starIcon } from "../templates/icons.js";
import {
  picture, ctaButtons, sectionHead, licenseCard, postCard, faqList,
  testimonialCard, ratingPill, mapEmbed,
} from "../templates/components.js";

const years = new Date().getFullYear() - site.founded;

const hero = () => `<section class="hero">
  ${picture("night", 1600, "hero-bg", true)}
  <div class="hero-shade"></div>
  <div class="wrap hero-in">
    <div class="hero-copy">
      <span class="pill">${icon("shield")} MEB onaylı · ${site.founded}'dan beri Adana'da</span>
      <h1>Direksiyon sizde,<br><em>ehliyet</em> bizde.</h1>
      <p class="lead">B otomatik ve manuel, A1, A2, C ve D sınıfı ehliyet kursları. Adana trafiğini en iyi bilen eğitmenlerle, gerçek sınav güzergâhında hazırlanın.</p>
      ${ctaButtons()}
      <div class="hero-proof">
        ${ratingPill()}
        <div class="avatars">${["E", "M", "Z", "H"].map((l) => `<span>${l}</span>`).join("")}<b>+12.000</b></div>
        <small>kursiyer ehliyetini bizimle aldı</small>
      </div>
    </div>
    <form class="finder glass" data-finder>
      <span class="finder-kicker">${icon("steering")} Ehliyet bulucu</span>
      <h2>Size hangi ehliyet uygun?</h2>
      <p>İki soruyu yanıtlayın, doğru sınıfı ve eğitim süresini söyleyelim.</p>
      <label>Yaşınız<select name="age" required>
        <option value="">Seçin</option><option value="16">16–17</option><option value="18">18–20</option><option value="21">21–23</option><option value="24">24 ve üzeri</option>
      </select></label>
      <label>Ne kullanmak istiyorsunuz?<select name="type" required>
        <option value="">Seçin</option><option value="auto">Otomobil · otomatik</option><option value="manual">Otomobil · manuel</option><option value="moto">Motosiklet</option><option value="truck">Kamyon / Tır</option><option value="bus">Otobüs</option>
      </select></label>
      <button class="btn btn-primary btn-block btn-lg" type="submit">Ehliyetimi bul ${icon("arrow")}</button>
      <output class="finder-out" data-finder-out hidden></output>
    </form>
  </div>
  <div class="lane" aria-hidden="true"></div>
</section>`;

const marquee = () => {
  const items = licenses.map((l) => `<span>${l.code}<i>${l.short}</i></span>`).join("<b>✦</b>");
  return `<div class="marquee" aria-hidden="true"><div class="marquee-track">${items}<b>✦</b>${items}<b>✦</b></div></div>`;
};

const stats = () => `<section class="stats"><div class="wrap stats-in">
  ${site.stats.map((s) => `<div><b data-count="${s.value}" data-suffix="${s.suffix}">${s.value.toLocaleString("tr-TR")}${s.suffix}</b><span>${s.label}</span></div>`).join("")}
</div></section>`;

const bento = () => `<section class="section" id="ehliyet-siniflari"><div class="wrap">
  <div class="shead-row">
    ${sectionHead("01 — Ehliyet sınıfları", "Otomobilden otobüse,<br><em>tek adreste</em> eğitim.", "")}
    <a class="link-arrow" href="/ehliyet-siniflari/">Tüm sınıfları karşılaştır ${icon("arrow")}</a>
  </div>
  <div class="bento">${licenses.map((l, i) => licenseCard(l, i < 2 ? "tile-lg" : "")).join("")}</div>
</div></section>`;

const why = () => `<section class="section paper"><div class="wrap why">
  <div class="why-media">
    ${picture("carInterior", 760, "why-img")}
    <div class="why-badge glass-dark"><b>${years}</b><span>yıldır Adana<br>sokaklarında</span></div>
    ${picture("classroom", 360, "why-img2")}
  </div>
  <div>
    ${sectionHead("02 — Neden biz", "Sınavı değil,<br><em>trafiği</em> öğretiyoruz.", "Ezber değil, refleks kazandıran bir eğitim: kapalı alanda temel, şehir trafiğinde pratik, sınav güzergâhında prova.")}
    <div class="features">${features.map((f, i) => `<div class="feature"><span class="feature-n">${String(i + 1).padStart(2, "0")}</span><div><h3>${f.t}</h3><p>${f.d}</p></div></div>`).join("")}</div>
  </div>
</div></section>`;

const road = () => `<section class="section dark road-sec"><div class="wrap">
  ${sectionHead("03 — Süreç", "Kayıttan ehliyete<br><em>beş durak.</em>", "Evrak işlerini biz takip ederiz; siz yalnızca derslere odaklanırsınız.", true)}
  <div class="road" data-road>
    <div class="road-line" aria-hidden="true"><i data-road-car>${icon("car")}</i></div>
    <ol>${steps.map((s, i) => `<li><span class="road-n">${String(i + 1).padStart(2, "0")}</span><div class="road-card"><h3>${s.t}</h3><p>${s.d}</p></div></li>`).join("")}</ol>
  </div>
</div></section>`;

const quizTeaser = () => `<section class="section"><div class="wrap">
  <div class="quiz-teaser">
    ${picture("classroom2", 900, "qt-bg")}
    <div class="qt-copy">
      <span class="eyebrow">Ücretsiz · 3 dakika</span>
      <h2>E-sınava hazır mısınız?</h2>
      <p>Gerçek sınav formatında ${quiz.length} soruluk mini deneme ile seviyenizi hemen ölçün.</p>
      <a class="btn btn-primary btn-lg" href="/e-sinav-deneme/">${icon("book")} Denemeyi başlat</a>
    </div>
    <div class="qt-card glass">
      <span class="qt-step">Soru 2 / ${quiz.length}</span>
      <b>${quiz[1].q}</b>
      ${quiz[1].o.map((o, k) => `<span class="qt-opt${k === quiz[1].a ? " ok" : ""}">${"ABCD"[k]}) ${o}</span>`).join("")}
    </div>
  </div>
</div></section>`;

const reviews = () => `<section class="section paper"><div class="wrap">
  <div class="shead-row">
    ${sectionHead("04 — Yorumlar", "Ehliyetini bizimle<br>alanlar <em>anlatıyor.</em>", "")}
    <div class="google-score">${starIcon().repeat(5)}<b>${site.rating.value}</b><span>${site.rating.count} Google yorumu</span></div>
  </div>
  <div class="carousel" data-carousel>${testimonials.map(testimonialCard).join("")}</div>
  <div class="carousel-nav"><button data-prev aria-label="Önceki">${icon("arrow")}</button><button data-next aria-label="Sonraki">${icon("arrow")}</button></div>
</div></section>`;

const areas = () => `<section class="section"><div class="wrap areas">
  <div>
    ${sectionHead("05 — Hizmet bölgeleri", "Adana'nın her<br><em>köşesinden.</em>", "Merkez şubemiz Seyhan'da. Uzak ilçeler için online teorik ders ve blok direksiyon programı.")}
    <ul class="area-list">${districts.map((d) => `<li><a href="/adana-surucu-kursu/${d.slug}/"><b>${d.name}</b><small>${d.distance}</small>${icon("arrow")}</a></li>`).join("")}</ul>
  </div>
  ${mapEmbed()}
</div></section>`;

const blog = () => {
  const [first, ...rest] = posts;
  return `<section class="section paper"><div class="wrap">
  <div class="shead-row">
    ${sectionHead("06 — Rehber", "Ehliyet yolunda<br><em>bilmeniz gerekenler.</em>", "")}
    <a class="link-arrow" href="/blog/">Tüm yazılar ${icon("arrow")}</a>
  </div>
  <div class="blog-grid">
    <a class="feature-post" href="/blog/${first.slug}/">${picture(first.image, 900)}<div><span class="tag">${first.category}</span><h3>${first.title}</h3><p>${first.excerpt}</p></div></a>
    <div class="blog-side">${rest.slice(0, 3).map(postCard).join("")}</div>
  </div>
</div></section>`;
};

const faq = () => `<section class="section"><div class="wrap faq-split">
  <div class="faq-head">
    ${sectionHead("07 — SSS", "Aklınızdaki<br><em>sorular.</em>", "Cevabını bulamadığınız soruyu WhatsApp'tan sorun, dakikalar içinde yanıtlayalım.")}
    <a class="btn btn-wa" href="${waLink("Merhaba, bir sorum var:")}" target="_blank" rel="noopener">${icon("whatsapp")} Soru sor</a>
  </div>
  ${faqList(faqs.slice(0, 7))}
</div></section>`;

const bigCta = () => `<section class="bigcta">
  ${picture("dashboard", 1600, "bigcta-bg")}
  <div class="wrap bigcta-in">
    <span class="eyebrow">Yeni dönem kayıtları açık</span>
    <h2>İlk dersiniz<br><em>bu hafta</em> başlasın.</h2>
    <p>Ücretsiz ön görüşme için arayın ya da WhatsApp'tan yazın.</p>
    ${ctaButtons()}
    <a class="bigcta-tel" href="${telLink()}">${site.phoneDisplay}</a>
  </div>
</section>`;

export const home = () => ({
  path: "/",
  title: "Adana Sürücü Kursu | Ehliyet Kursu – Adana Şehir Sürücü Kursu",
  description: site.description,
  image: "night",
  bodyClass: "home",
  schemas: [faqSchema(faqs.slice(0, 7))],
  body: [hero(), marquee(), stats(), bento(), why(), road(), quizTeaser(), reviews(), areas(), blog(), faq(), bigCta()].join("\n"),
});
