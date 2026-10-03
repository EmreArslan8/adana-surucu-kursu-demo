// Kurumsal sayfalar: hakkımızda, iletişim, SSS, e-sınav deneme, KVKK, 404.
import { site, waLink, telLink, mapsLink, fullAddress } from "../../data/site.js";
import { licenses } from "../../data/licenses.js";
import { faqs, quiz, features, testimonials } from "../../data/content.js";
import { breadcrumbSchema, faqSchema } from "../templates/seo.js";
import { icon } from "../templates/icons.js";
import { pageHero, sectionHead, faqList, ctaBand, picture, mapEmbed, testimonialCard } from "../templates/components.js";

const crumbs = (href, label) => [{ href: "/", label: "Ana Sayfa" }, { href, label }];

export const about = () => {
  const c = crumbs("/hakkimizda/", "Hakkımızda");
  return {
    path: "/hakkimizda/",
    title: "Hakkımızda | Adana Şehir Sürücü Kursu",
    description: `${site.founded}'dan bu yana Adana'da ehliyet eğitimi veren Adana Şehir Sürücü Kursu'nu tanıyın: eğitmen kadromuz, araç filomuz ve değerlerimiz.`,
    image: "classroom",
    schemas: [breadcrumbSchema(c)],
    body: `${pageHero({ crumbs: c, eyebrow: `${site.founded}'dan beri`, title: "Adana'da güvenli sürücüler yetiştiriyoruz", lead: "Amacımız yalnızca sınavı geçirmek değil; trafikte kendinden emin, kurallara saygılı sürücüler yetiştirmek.", image: "classroom" })}
    <section class="section"><div class="wrap split">
      <div class="prose">
        <h2>Hikâyemiz</h2>
        <p>${site.name}, ${site.founded} yılında Seyhan'da küçük bir sınıf ve üç eğitim aracıyla kuruldu. Bugün ${site.stats[3].value} eğitim aracı, deneyimli eğitmen kadrosu ve ${site.stats[0].value.toLocaleString("tr-TR")}'den fazla mezun kursiyeriyle Adana'nın köklü sürücü kurslarından biri.</p>
        <p>Teorik derslerimizi modern sınıflarda ve çevrim içi canlı sınıfta, direksiyon derslerimizi ise yeni model otomatik ve manuel araçlarla veriyoruz.</p>
        <h2>Değerlerimiz</h2>
        <ul class="checks"><li>${icon("check")} Şeffaf ücret politikası, gizli masraf yok</li><li>${icon("check")} Kursiyere özel ders planı</li><li>${icon("check")} Sabırlı, sertifikalı eğitmenler</li><li>${icon("check")} Güvenli ve bakımlı araç filosu</li></ul>
      </div>
      <div class="split-media">${picture("lesson3", 640)}</div>
    </div></section>
    <section class="section alt"><div class="wrap">
      ${sectionHead("Farkımız", "Kursiyerlerimiz bizi neden tercih ediyor?", "", true)}
      <div class="grid-3">${features.map((f) => `<div class="feature card">${icon(f.icon)}<div><h3>${f.t}</h3><p>${f.d}</p></div></div>`).join("")}</div>
    </div></section>
    <section class="section"><div class="wrap"><div class="grid-3">${testimonials.slice(0, 3).map(testimonialCard).join("")}</div></div></section>
    ${ctaBand()}`,
  };
};

export const contact = () => {
  const c = crumbs("/iletisim/", "İletişim");
  return {
    path: "/iletisim/",
    title: "İletişim ve Ön Kayıt | Adana Şehir Sürücü Kursu",
    description: `Adana Şehir Sürücü Kursu iletişim: ${site.phoneDisplay}, ${fullAddress()}. WhatsApp'tan ön kayıt ve yol tarifi.`,
    image: "adana",
    schemas: [breadcrumbSchema(c)],
    body: `${pageHero({ crumbs: c, eyebrow: "Bize ulaşın", title: "İletişim ve Ön Kayıt", lead: "Arayın, WhatsApp'tan yazın ya da formu doldurun; en geç 30 dakika içinde dönüş yapalım.", image: "adana" })}
    <section class="section"><div class="wrap split top">
      <div>
        <div class="contact-cards">
          <a href="${telLink()}" data-track="call">${icon("phone")}<span><small>Telefon</small><b>${site.phoneDisplay}</b></span></a>
          <a href="${waLink()}" target="_blank" rel="noopener" data-track="whatsapp">${icon("whatsapp")}<span><small>WhatsApp</small><b>Hemen yazın</b></span></a>
          <a href="${mapsLink()}" target="_blank" rel="noopener" data-track="maps">${icon("pin")}<span><small>Adres</small><b>${fullAddress()}</b></span></a>
          <a href="mailto:${site.email}">${icon("mail")}<span><small>E-posta</small><b>${site.email}</b></span></a>
        </div>
        <ul class="hours card">${site.hours.map((h) => `<li><span>${h.days}</span><b>${h.time}</b></li>`).join("")}</ul>
      </div>
      <form class="form card" data-wa-form>
        <h2 class="h3">Ön kayıt formu</h2>
        <p class="muted small">Form, bilgilerinizle hazırlanmış bir WhatsApp mesajı açar.</p>
        <label>Ad Soyad<input name="name" required autocomplete="name"></label>
        <label>Telefon<input name="phone" type="tel" required autocomplete="tel" placeholder="05xx xxx xx xx"></label>
        <label>Ehliyet sınıfı<select name="license" required><option value="">Seçin</option>${licenses.map((l) => `<option>${l.name}</option>`).join("")}</select></label>
        <label>Tercih ettiğiniz ders saati<select name="time"><option>Hafta içi gündüz</option><option>Hafta içi akşam</option><option>Hafta sonu</option></select></label>
        <label>Mesajınız<textarea name="msg" rows="3"></textarea></label>
        <label class="check"><input type="checkbox" required> <span><a href="/kvkk/">KVKK aydınlatma metnini</a> okudum.</span></label>
        <button class="btn btn-wa btn-block btn-lg" type="submit">${icon("whatsapp")} WhatsApp ile Gönder</button>
      </form>
    </div></section>
    <section class="section alt"><div class="wrap">${mapEmbed()}</div></section>`,
  };
};

export const faqPage = () => {
  const c = crumbs("/sikca-sorulan-sorular/", "Sıkça Sorulan Sorular");
  const all = [...faqs, ...licenses.flatMap((l) => l.faqs)];
  return {
    path: "/sikca-sorulan-sorular/",
    title: "Ehliyet Hakkında Sıkça Sorulan Sorular | Adana Şehir Sürücü Kursu",
    description: "Ehliyet kursu süresi, belgeler, ödeme, e-sınav ve direksiyon sınavı hakkında en çok sorulan soruların cevapları.",
    image: "signs",
    schemas: [breadcrumbSchema(c), faqSchema(all)],
    body: `${pageHero({ crumbs: c, eyebrow: `${all.length} soru & cevap`, title: "Sıkça Sorulan Sorular", lead: "Aradığınız cevabı bulamazsanız WhatsApp'tan sorun, hemen yanıtlayalım.", image: "signs" })}
    <section class="section"><div class="wrap narrow">
      <h2 class="h3">Genel</h2>${faqList(faqs)}
      ${licenses.map((l) => `<h2 class="h3 mt"><a href="/ehliyet-siniflari/${l.slug}/">${l.name}</a></h2>${faqList(l.faqs)}`).join("")}
    </div></section>
    ${ctaBand()}`,
  };
};

export const quizPage = () => {
  const c = crumbs("/e-sinav-deneme/", "E-Sınav Deneme");
  return {
    path: "/e-sinav-deneme/",
    title: "Ücretsiz Ehliyet E-Sınav Deneme Testi | Adana Şehir Sürücü Kursu",
    description: "Ehliyet e-sınavına hazır mısınız? Trafik, ilk yardım ve motor konularından örnek sorularla ücretsiz mini deneme sınavı.",
    image: "classroom2",
    schemas: [breadcrumbSchema(c)],
    body: `${pageHero({ crumbs: c, eyebrow: "Ücretsiz · 3 dakika", title: "Ehliyet E-Sınav Mini Deneme", lead: `${quiz.length} soruluk mini deneme ile seviyenizi ölçün. Gerçek sınavda 50 soru sorulur ve 70 puan baraj puanıdır.`, image: "classroom2", actions: false })}
    <section class="section"><div class="wrap narrow">
      <div class="quiz card" data-quiz='${JSON.stringify(quiz).replace(/'/g, "&#39;")}'>
        <div class="quiz-top"><span data-quiz-step>Soru 1 / ${quiz.length}</span><div class="bar"><i data-quiz-bar></i></div></div>
        <h2 class="h3" data-quiz-q></h2>
        <div class="quiz-opts" data-quiz-opts></div>
        <div class="quiz-result" data-quiz-result hidden></div>
      </div>
    </div></section>
    ${ctaBand("Gerçek sınava bizimle hazırlanın", "Kursiyerlerimiz binlerce soruluk deneme havuzuna ve haftalık deneme sınavlarına erişir.")}`,
  };
};

export const kvkk = () => {
  const c = crumbs("/kvkk/", "KVKK");
  return {
    path: "/kvkk/",
    title: "KVKK Aydınlatma Metni | Adana Şehir Sürücü Kursu",
    description: "Adana Şehir Sürücü Kursu kişisel verilerin korunması aydınlatma metni.",
    image: "studying",
    schemas: [breadcrumbSchema(c)],
    body: `${pageHero({ crumbs: c, title: "KVKK Aydınlatma Metni", image: "studying", actions: false })}
    <section class="section"><div class="wrap narrow prose">
      <p>Bu metin demo amaçlıdır. Yayına alınmadan önce kurumun hukuk danışmanı tarafından hazırlanan aydınlatma metni ile değiştirilecektir.</p>
      <h2>Veri sorumlusu</h2><p>${site.name}, ${fullAddress()}.</p>
      <h2>İşlenen veriler</h2><p>Ön kayıt formu aracılığıyla paylaştığınız ad, soyad, telefon ve ehliyet sınıfı tercihi; yalnızca size dönüş yapılması amacıyla işlenir.</p>
    </div></section>`,
  };
};

export const notFound = () => ({
  path: "/404.html",
  noindex: true,
  title: "Sayfa bulunamadı | Adana Şehir Sürücü Kursu",
  description: "Aradığınız sayfa bulunamadı.",
  image: "stopSign",
  body: `${pageHero({ crumbs: crumbs("/404.html", "404"), eyebrow: "404", title: "Bu yol kapalı", lead: "Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ehliyet sınıflarımıza göz atın ya da bize yazın.", image: "stopSign" })}
  <section class="section"><div class="wrap center"><a class="btn btn-primary btn-lg" href="/">Ana sayfaya dön</a></div></section>`,
});
