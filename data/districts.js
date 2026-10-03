// Lokal SEO: her ilçe için özgün içerikli landing sayfası (/adana-surucu-kursu/<slug>/).
// İnce/kopya içerikten kaçınmak için her ilçeye özel mahalle, ulaşım ve sınav güzergâhı bilgisi yazılır.
export const districts = [
  {
    slug: "seyhan-surucu-kursu",
    name: "Seyhan",
    image: "adana",
    distance: "Merkez şubemiz Seyhan'da",
    neighborhoods: ["Reşatbey", "Kurtuluş", "Ziyapaşa", "Döşeme", "Gürselpaşa", "Cemalpaşa"],
    transport: "Metro Hastane ve Cumhuriyet istasyonlarına yürüme mesafesi; Atatürk Caddesi ve Turhan Cemal Beriker Bulvarı üzerinden tüm hatlar.",
    intro:
      "Merkez şubemizin bulunduğu Seyhan'da teorik dersler, e-sınav hazırlığı ve direksiyon eğitimi aynı noktada. Kurtuluş'tan Ziyapaşa'ya kadar Seyhan'ın her mahallesinden kolayca ulaşabilirsiniz.",
    note: "Seyhan'ın yoğun kavşakları ve tek yönlü sokakları, direksiyon eğitimi için gerçekçi bir şehir içi pratik ortamı sunar.",
  },
  {
    slug: "cukurova-surucu-kursu",
    name: "Çukurova",
    image: "adanaBridge",
    distance: "Merkez şubeye ~10 dakika",
    neighborhoods: ["Toros", "Huzurevleri", "Belediye Evleri", "Yurt", "Güzelyalı", "Mahfesığmaz"],
    transport: "Turgut Özal Bulvarı ve Kenan Evren Bulvarı üzerinden; Çukurova'dan kalkan dolmuş ve belediye otobüsleriyle doğrudan ulaşım.",
    intro:
      "Çukurova'da yaşayan kursiyerlerimiz için direksiyon derslerine evinize yakın noktadan başlama imkânı sunuyoruz. Toros, Huzurevleri ve Belediye Evleri bölgesinde alım noktalarımız mevcut.",
    note: "Turgut Özal Bulvarı'nın geniş şeritleri, şerit değiştirme ve hız kontrolü pratiği için idealdir.",
  },
  {
    slug: "yuregir-surucu-kursu",
    name: "Yüreğir",
    image: "stone",
    distance: "Merkez şubeye ~12 dakika",
    neighborhoods: ["Kiremithane", "Levent", "Yamaçlı", "Cumhuriyet", "Serinevler", "Dadaloğlu"],
    transport: "Taşköprü, Girne ve Regülatör köprüleri üzerinden; Yüreğir hatlarından Seyhan merkeze aktarmasız otobüs.",
    intro:
      "Yüreğir'den kursiyerlerimiz için hafta içi akşam ve hafta sonu direksiyon saatleri planlıyoruz. Kiremithane ve Levent bölgesinden kolay ulaşım.",
    note: "Köprü geçişleri ve çevre yolu bağlantıları, şehirlerarası yola hazırlık için iyi bir pratik alanı sağlar.",
  },
  {
    slug: "saricam-surucu-kursu",
    name: "Sarıçam",
    image: "adanaAerial",
    distance: "Merkez şubeye ~20 dakika",
    neighborhoods: ["Buruk", "Yeni Mahalle", "Çarkıpare", "Gültepe", "Balcalı", "Sofulu"],
    transport: "Balcalı ve üniversite hattı otobüsleri; D-400 karayolu bağlantısı.",
    intro:
      "Çukurova Üniversitesi öğrencileri ve Sarıçam sakinleri için öğrenci dostu ders programları ve taksitli ödeme seçenekleri sunuyoruz.",
    note: "Üniversite öğrencilerine sınav dönemlerine göre esnek ders planlaması yapıyoruz.",
  },
  {
    slug: "ceyhan-surucu-kursu",
    name: "Ceyhan",
    image: "highway",
    distance: "Merkez şubeye ~40 dakika",
    neighborhoods: ["Konakoğlu", "Namık Kemal", "Hürriyet", "Büyükburhaniye", "Mithatpaşa"],
    transport: "Adana–Ceyhan otoyolu ve D-400 üzerinden düzenli minibüs seferleri.",
    intro:
      "Ceyhan'dan gelen kursiyerlerimiz için teorik dersleri yoğunlaştırılmış programla planlıyor, direksiyon derslerini blok saatler halinde veriyoruz.",
    note: "Yol süresini azaltmak için teorik dersler canlı çevrim içi sınıf seçeneğiyle de alınabilir.",
  },
  {
    slug: "kozan-surucu-kursu",
    name: "Kozan",
    image: "road",
    distance: "Merkez şubeye ~60 dakika",
    neighborhoods: ["Tufanpaşa", "Cumhuriyet", "Varsaklar", "Şevkiye", "Türkeli"],
    transport: "Adana–Kozan yolu üzerinden düzenli otobüs ve minibüs seferleri.",
    intro:
      "Kozan ve çevresindeki kursiyerlerimiz için hafta sonu yoğun direksiyon programı ve çevrim içi teorik ders imkânı sunuyoruz.",
    note: "Hafta sonu blok programı ile toplam yol sayısını en aza indiriyoruz.",
  },
];

// Türkçe ek uyumu (Yüreğir'den / Seyhan'dan) — son ünlüye göre.
const front = (w) => /[eiöü]/.test([...w].reverse().find((c) => /[aeıioöuü]/.test(c)));
for (const d of districts) {
  d.from = d.name + (front(d.name) ? "'den" : "'dan");
  d.at = d.name + (front(d.name) ? "'de" : "'da");
}
