// Genel içerik: SSS, yorumlar, süreç adımları, avantajlar, e-sınav deneme soruları.
export const faqs = [
  { q: "Adana'da ehliyet almak kaç gün sürer?", a: "Kayıttan direksiyon sınavına kadar süreç ortalama 4–6 hafta sürer. Süre; e-sınav takvimine ve direksiyon dersi planınıza göre değişebilir." },
  { q: "Kursa kayıt için hangi belgeler gerekiyor?", a: "Kimlik kartı ve sürücü adayı sağlık raporu yeterlidir. Diploma ve adli sicil sorgulaması e-Devlet üzerinden kursumuz tarafından yapılır." },
  { q: "Taksitli ödeme yapabilir miyim?", a: "Evet. Kredi kartına taksit ve kampanya dönemlerinde peşin ödeme indirimi uyguluyoruz." },
  { q: "Direksiyon derslerini hafta sonu alabilir miyim?", a: "Evet. Cumartesi ve pazar günleri de direksiyon dersi veriyoruz; çalışanlar için akşam saatleri de mevcut." },
  { q: "E-sınavdan kalırsam ne olur?", a: "E-sınav hakkınız 4'tür. Kalmanız halinde bir sonraki sınav dönemine ücretsiz tekrar dersleri ile hazırlanırsınız." },
  { q: "Direksiyon sınavı nerede yapılıyor?", a: "Direksiyon sınavları Adana İl Milli Eğitim Müdürlüğü'nün belirlediği güzergâhlarda yapılır. Derslerimizin son aşaması bu güzergâhlarda prova şeklindedir." },
  { q: "Kadın eğitmen talep edebilir miyim?", a: "Evet, direksiyon derslerinde kadın eğitmen seçeneğimiz mevcuttur." },
  { q: "Online teorik ders var mı?", a: "Evet. Teorik dersleri sınıfta veya canlı çevrim içi sınıf olarak alabilirsiniz." },
];

export const testimonials = [
  { name: "Elif K.", district: "Çukurova", license: "B Otomatik", text: "Hiç araç kullanmamıştım, ilk sınavda geçtim. Eğitmenim çok sabırlıydı, sınav güzergâhında yaptığımız provalar çok işe yaradı." },
  { name: "Mehmet A.", district: "Seyhan", license: "A2", text: "Motosiklet derslerinde ekipman eksiksizdi. Parkur birebir sınavdakiyle aynıydı, hiç sürpriz yaşamadım." },
  { name: "Zeynep T.", district: "Sarıçam", license: "B Manuel", text: "Üniversite programıma göre ders saatlerimi ayarladılar. WhatsApp'tan her şeye hızlı dönüş yapıyorlar." },
  { name: "Hasan Y.", district: "Yüreğir", license: "C", text: "C ehliyetinden sonra SRC belgesi için de yönlendirdiler. İki ay içinde lojistik firmasında işe başladım." },
  { name: "Ayşe D.", district: "Ceyhan", license: "B Otomatik", text: "Teorik dersleri online aldım, direksiyonu hafta sonu bloklar halinde tamamladım. Ceyhan'dan gelip gitmek hiç zor olmadı." },
  { name: "Burak S.", district: "Çukurova", license: "A1", text: "16 yaşında kayıt oldum, babamla birlikte tüm süreci anlattılar. Kurye işine başladım bile." },
];

export const steps = [
  { t: "Ön görüşme & kayıt", d: "Ehliyet sınıfınızı birlikte belirleyelim, evrakları tek seferde tamamlayalım." },
  { t: "Teorik eğitim", d: "Sınıfta veya çevrim içi; trafik, ilk yardım, motor ve trafik adabı dersleri." },
  { t: "E-sınav", d: "Deneme sınavlarıyla hazırlanıp MEB e-sınavına giriş." },
  { t: "Direksiyon eğitimi", d: "Kapalı alandan şehir trafiğine, sınav güzergâhında provayla." },
  { t: "Direksiyon sınavı", d: "Kendi eğitim aracınızla sınav; ehliyetiniz nüfus müdürlüğünden teslim." },
];

export const features = [
  { icon: "shield", t: "MEB onaylı eğitim", d: "Milli Eğitim Bakanlığı'na bağlı, resmi müfredatla eğitim veren kurum." },
  { icon: "clock", t: "Esnek ders saatleri", d: "Hafta içi akşam, hafta sonu ve blok ders seçenekleri." },
  { icon: "user", t: "Kadın eğitmen seçeneği", d: "Direksiyon derslerinde tercih ettiğiniz eğitmenle çalışın." },
  { icon: "card", t: "Taksitli ödeme", d: "Kredi kartına taksit ve öğrenci indirimleri." },
  { icon: "route", t: "Sınav güzergâhı provası", d: "Gerçek sınav güzergâhlarında birebir prova dersleri." },
  { icon: "laptop", t: "Online teorik ders", d: "Teorik derslere evden canlı sınıfla katılın." },
];

// E-sınav mini deneme: örnek sorular (demo amaçlı).
export const quiz = [
  { q: "Kavşaklarda geçiş önceliği kimindir? (Işık ve trafik görevlisi yoksa)", o: ["Sağdan gelen araç", "Soldan gelen araç", "Büyük araç", "Hızlı giden araç"], a: 0 },
  { q: "Yerleşim yeri içinde, aksine bir işaret yoksa otomobiller için azami hız kaç km/s'dir?", o: ["30", "50", "70", "82"], a: 1 },
  { q: "Bilinci kapalı ancak solunumu olan bir yaralıya hangi pozisyon verilir?", o: ["Sırt üstü yatış", "Yarı oturuş", "Koma (derin) pozisyonu", "Şok pozisyonu"], a: 2 },
  { q: "Motor soğutma suyuna antifriz katılmasının temel amacı nedir?", o: ["Yakıt tasarrufu", "Suyun donmasını önlemek", "Yağın incelmesini sağlamak", "Fren gücünü artırmak"], a: 1 },
  { q: "Yaya geçidine yaklaşırken sürücünün öncelikli davranışı ne olmalıdır?", o: ["Korna çalıp geçmek", "Hızını artırmak", "Yavaşlayıp yayalara yol vermek", "Şerit değiştirmek"], a: 2 },
  { q: "Takip mesafesi için genel kural nedir?", o: ["Hızın yarısı kadar metre", "En az 1 araç boyu", "Hız göstergesindeki değer kadar metre", "Sabit 10 metre"], a: 0 },
  { q: "Kırmızı ışıkla birlikte yanan sarı ışık neyi ifade eder?", o: ["Geç", "Dur", "Harekete hazırlan", "Hızlan"], a: 2 },
  { q: "Arka sis lambası hangi durumda kullanılır?", o: ["Her gece", "Görüşü önemli ölçüde azaltan sis/yağışta", "Şehir içinde", "Park ederken"], a: 1 },
];
