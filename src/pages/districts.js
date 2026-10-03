import { site } from "../../data/site.js";
import { districts } from "../../data/districts.js";
import { licenses } from "../../data/licenses.js";
import { testimonials } from "../../data/content.js";
import { breadcrumbSchema, faqSchema } from "../templates/seo.js";
import { icon } from "../templates/icons.js";
import { pageHero, sectionHead, licenseCard, faqList, ctaBand, testimonialCard, mapEmbed } from "../templates/components.js";

const hubCrumbs = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/adana-surucu-kursu/", label: "Hizmet Bölgeleri" },
];

export const districtHub = () => ({
  path: "/adana-surucu-kursu/",
  title: "Adana Sürücü Kursu – Tüm İlçeler | Adana Şehir Sürücü Kursu",
  description: "Seyhan, Çukurova, Yüreğir, Sarıçam, Ceyhan ve Kozan'dan kursiyerlere ehliyet eğitimi. İlçenize göre ulaşım ve ders programı bilgileri.",
  image: "adanaAerial",
  schemas: [breadcrumbSchema(hubCrumbs)],
  body: `${pageHero({ crumbs: hubCrumbs, eyebrow: "Adana geneli", title: "Adana'nın Tüm İlçelerinde Sürücü Kursu", lead: "Merkez şubemiz Seyhan'da; ilçenize göre ulaşım, alım noktası ve ders programı seçeneklerini inceleyin.", image: "adanaAerial" })}
  <section class="section"><div class="wrap grid-3">
    ${districts.map((d) => `<a class="dcard" href="/adana-surucu-kursu/${d.slug}/">
      <h2>${d.name} Sürücü Kursu</h2><p>${d.intro}</p>
      <span class="muted small">${icon("pin")} ${d.distance}</span>
      <span class="more">İncele ${icon("arrow")}</span></a>`).join("")}
  </div></section>
  <section class="section alt"><div class="wrap">${mapEmbed()}</div></section>
  ${ctaBand()}`,
});

export const districtDetail = (d) => {
  const path = `/adana-surucu-kursu/${d.slug}/`;
  const crumbs = [...hubCrumbs, { href: path, label: `${d.name} Sürücü Kursu` }];
  const faqs = [
    { q: `${d.from} kursa nasıl ulaşırım?`, a: d.transport },
    { q: `${d.at} direksiyon dersi alabilir miyim?`, a: `${d.note} Ders saatlerini size uygun gün ve saatlere göre planlıyoruz.` },
    { q: `${d.from} kayıt için şubeye gelmem gerekir mi?`, a: "Ön kaydı WhatsApp üzerinden yapabilirsiniz. Sözleşme ve biyometrik fotoğraf için tek seferlik şube ziyareti yeterlidir." },
  ];
  const reviews = testimonials.filter((t) => t.district === d.name).concat(testimonials).slice(0, 3);
  return {
    path,
    title: `${d.name} Sürücü Kursu | ${d.name} Ehliyet Kursu – Adana`,
    description: `${d.name} sürücü kursu arıyorsanız: B otomatik/manuel, A1, A2 ehliyet eğitimi. ${d.distance}. Esnek ders saatleri, taksit imkânı.`,
    image: d.image,
    schemas: [breadcrumbSchema(crumbs), faqSchema(faqs)],
    body: `${pageHero({ crumbs, eyebrow: `${d.name}, Adana`, title: `${d.name} Sürücü Kursu`, lead: d.intro, image: d.image })}
    <section class="section"><div class="wrap split">
      <div class="prose">
        <h2>${d.at} ehliyet almak isteyenler için</h2>
        <p>${site.name}, ${d.name} ve çevresindeki kursiyerlere B sınıfı otomatik ve manuel, A1, A2 ve diğer ehliyet sınıflarında eğitim veriyor. ${d.note}</p>
        <h3>Hizmet verdiğimiz mahalleler</h3>
        <ul class="chips">${d.neighborhoods.map((n) => `<li>${n}</li>`).join("")}</ul>
        <h3>Ulaşım</h3>
        <p>${d.transport}</p>
        <ul class="checks">
          <li>${icon("check")} ${d.distance}</li>
          <li>${icon("check")} Online teorik ders seçeneği</li>
          <li>${icon("check")} Hafta sonu ve akşam direksiyon saatleri</li>
        </ul>
      </div>
      ${mapEmbed()}
    </div></section>
    <section class="section alt"><div class="wrap">
      ${sectionHead("Ehliyet Sınıfları", `${d.from} en çok tercih edilen ehliyetler`, "")}
      <div class="grid-4">${licenses.slice(0, 4).map(licenseCard).join("")}</div>
    </div></section>
    <section class="section"><div class="wrap">
      ${sectionHead("Yorumlar", `${d.from} kursiyerlerimiz`, "")}
      <div class="grid-3">${reviews.filter((p, i, a) => a.indexOf(p) === i).slice(0, 3).map(testimonialCard).join("")}</div>
    </div></section>
    <section class="section alt"><div class="wrap narrow">
      ${sectionHead("SSS", `${d.name} sürücü kursu hakkında sorular`, "", true)}
      ${faqList(faqs)}
    </div></section>
    <section class="section"><div class="wrap">
      <h2 class="h3">Diğer hizmet bölgeleri</h2>
      <ul class="chips links">${districts.filter((x) => x.slug !== d.slug).map((x) => `<li><a href="/adana-surucu-kursu/${x.slug}/">${x.name} Sürücü Kursu</a></li>`).join("")}</ul>
    </div></section>
    ${ctaBand(`${d.from} kayıt olun`, "Size en yakın alım noktasını ve ders programını WhatsApp'tan birlikte planlayalım.")}`,
  };
};
