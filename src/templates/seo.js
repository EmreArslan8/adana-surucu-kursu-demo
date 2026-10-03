// SEO katmanı: <head>, canonical, Open Graph ve JSON-LD şemaları tek yerden üretilir.
import { site, fullAddress } from "../../data/site.js";
import { img } from "../../data/images.js";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
export const abs = (path) => site.url + path;

export const orgId = `${site.url}/#kurs`;

export const orgSchema = () => ({
  "@type": "DrivingSchool",
  "@id": orgId,
  name: site.name,
  url: site.url + "/",
  telephone: site.phone,
  email: site.email,
  image: img("hero", 1200),
  logo: abs("/assets/logo.svg"),
  description: site.description,
  priceRange: "₺₺",
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: site.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.schema,
    opens: h.opens,
    closes: h.closes,
  })),
  areaServed: ["Seyhan", "Çukurova", "Yüreğir", "Sarıçam", "Ceyhan", "Kozan"].map((n) => ({
    "@type": "AdministrativeArea",
    name: `${n}, Adana`,
  })),
  aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating.value, reviewCount: site.rating.count },
  sameAs: Object.values(site.social),
});

export const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url + "/",
  name: site.name,
  inLanguage: "tr-TR",
  publisher: { "@id": orgId },
});

export const breadcrumbSchema = (crumbs) => ({
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.label,
    item: abs(c.href),
  })),
});

export const faqSchema = (faqs) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const courseSchema = (l, path) => ({
  "@type": "Course",
  name: `${l.name} Kursu – Adana`,
  description: l.metaDescription,
  url: abs(path),
  provider: { "@id": orgId },
  inLanguage: "tr-TR",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: ["Onsite", "Blended"],
    location: { "@type": "Place", name: site.name, address: fullAddress() },
  },
});

export const articleSchema = (p, path) => ({
  "@type": "BlogPosting",
  headline: p.title,
  description: p.excerpt,
  image: img(p.image, 1200),
  datePublished: p.date,
  dateModified: p.date,
  mainEntityOfPage: abs(path),
  author: { "@type": "Organization", name: site.name, url: site.url + "/" },
  publisher: { "@id": orgId },
});

export const head = ({ title, description, path, image = "hero", schemas = [], noindex = false }) => {
  const graph = { "@context": "https://schema.org", "@graph": [orgSchema(), websiteSchema(), ...schemas] };
  const ogImg = img(image, 1200);
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${abs(path)}">
${noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
<meta property="og:type" content="website">
<meta property="og:locale" content="tr_TR">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${abs(path)}">
<meta property="og:image" content="${ogImg}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0b1f3a">
<meta name="geo.region" content="TR-01">
<meta name="geo.placename" content="Adana">
<link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
<link rel="preconnect" href="https://images.unsplash.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap">
<link rel="preload" as="image" imagesrcset="${img(image, 800)} 800w, ${img(image, 1600)} 1600w, ${img(image, 3200)} 3200w" imagesizes="(max-width: 760px) 100vw, 1600px" fetchpriority="high">
<link rel="stylesheet" href="/assets/css/style.css">
<script type="application/ld+json">${JSON.stringify(graph)}</script>`;
};
