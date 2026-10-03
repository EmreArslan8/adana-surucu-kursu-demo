// Tek NAP kaynağı: isim/adres/telefon her sayfaya, schema'ya ve footer'a buradan basılır.
// Demo verisidir — gerçek bilgiler müşteriden alınınca yalnızca bu dosya değişir.
export const site = {
  name: "Adana Şehir Sürücü Kursu",
  shortName: "Şehir Sürücü Kursu",
  url: "https://www.adanasehirsurucukursu.com",
  tagline: "Adana'da ilk seferde ehliyet",
  description:
    "Adana Şehir Sürücü Kursu: B sınıfı otomatik ve manuel, A1, A2, A, C ve D sınıfı ehliyet kursları. MEB onaylı eğitim, uzman eğitmenler, esnek ders saatleri.",
  phone: "+90 322 000 00 00",
  phoneDisplay: "0 (322) 000 00 00",
  whatsapp: "905000000000",
  email: "bilgi@adanasehirsurucukursu.com",
  address: {
    street: "Örnek Mah. Demo Cad. No: 1/A",
    district: "Seyhan",
    city: "Adana",
    postalCode: "01010",
    country: "TR",
  },
  geo: { lat: 36.9914, lng: 35.3308 },
  mapsQuery: "Seyhan Adana",
  hours: [
    { days: "Pazartesi – Cuma", time: "08:30 – 20:00", schema: ["Mo", "Tu", "We", "Th", "Fr"], opens: "08:30", closes: "20:00" },
    { days: "Cumartesi", time: "09:00 – 18:00", schema: ["Sa"], opens: "09:00", closes: "18:00" },
    { days: "Pazar", time: "10:00 – 16:00 (yalnızca direksiyon)", schema: ["Su"], opens: "10:00", closes: "16:00" },
  ],
  founded: 2009,
  stats: [
    { value: 12000, suffix: "+", label: "Ehliyet alan kursiyer" },
    { value: 94, suffix: "%", label: "İlk sınavda başarı" },
    { value: 17, suffix: "", label: "Yıllık deneyim" },
    { value: 22, suffix: "", label: "Eğitim aracı" },
  ],
  rating: { value: 4.9, count: 386 },
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};

export const nav = [
  { href: "/ehliyet-siniflari/", label: "Ehliyet Sınıfları" },
  { href: "/adana-surucu-kursu/", label: "Hizmet Bölgeleri" },
  { href: "/e-sinav-deneme/", label: "E-Sınav Deneme" },
  { href: "/blog/", label: "Blog" },
  { href: "/sikca-sorulan-sorular/", label: "SSS" },
  { href: "/hakkimizda/", label: "Hakkımızda" },
  { href: "/iletisim/", label: "İletişim" },
];

export const waLink = (text = "Merhaba, ehliyet kursu hakkında bilgi almak istiyorum.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = () => `tel:${site.phone.replace(/\s/g, "")}`;

export const mapsLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.name + " " + site.mapsQuery)}`;

export const fullAddress = () =>
  `${site.address.street}, ${site.address.district}/${site.address.city}`;
