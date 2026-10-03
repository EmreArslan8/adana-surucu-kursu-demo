// Etkileşimler: mobil menü, sayaçlar, ehliyet bulucu, blog filtresi, WhatsApp formu, e-sınav denemesi, CTA takibi.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const WA = "905000000000";
  document.documentElement.classList.add("js");

  // Header: hero üstünde şeffaf, kaydırınca koyu cam
  const header = $("[data-header]");
  const road = $("[data-road]"), car = $("[data-road-car]");
  const onScroll = () => {
    header?.classList.toggle("scrolled", scrollY > 30);
    if (road && car) {
      const r = road.getBoundingClientRect(), vh = innerHeight;
      const k = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height));
      car.parentElement.style.setProperty("--car", `${4 + k * 92}%`);
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Yorum karuseli
  const car0 = $("[data-carousel]");
  const slide = (dir) => car0?.scrollBy({ left: dir * (car0.firstElementChild.offsetWidth + 20), behavior: "smooth" });
  $("[data-prev]")?.addEventListener("click", () => slide(-1));
  $("[data-next]")?.addEventListener("click", () => slide(1));

  // Mobil menü
  const btn = $("[data-menu]"), nav = $("[data-nav]");
  btn?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });

  // Sayaçlar + scroll'da beliren bölümler
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target;
      io.unobserve(el);
      if (el.dataset.count) {
        const end = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now();
        const step = (t) => {
          const k = Math.min(1, (t - t0) / 1400);
          el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString("tr-TR") + suf;
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      } else el.classList.add("in");
    }
  }, { threshold: 0.15 });
  $$("[data-count]").forEach((el) => io.observe(el));
  $$(".section .shead, .tile, .tcard, .pcard, .road li, .feature, .dcard, .stats-in > div, .feature-post, .quiz-teaser").forEach((el) => { el.classList.add("reveal"); io.observe(el); });

  // Ehliyet bulucu
  const rules = {
    auto: [18, "b-sinifi-otomatik-ehliyet", "B Sınıfı Otomatik Ehliyet"],
    manual: [18, "b-sinifi-manuel-ehliyet", "B Sınıfı Manuel Ehliyet"],
    truck: [21, "c-sinifi-ehliyet", "C Sınıfı Ehliyet"],
    bus: [24, "d-sinifi-ehliyet", "D Sınıfı Ehliyet"],
  };
  $("[data-finder]")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target), age = +f.get("age"), type = f.get("type");
    const out = $("[data-finder-out]");
    let msg;
    if (type === "moto") {
      const r = age >= 24 ? ["a-sinifi-ehliyet", "A Sınıfı"] : age >= 18 ? ["a2-sinifi-ehliyet", "A2 Sınıfı"] : ["a1-sinifi-ehliyet", "A1 Sınıfı"];
      msg = `Size uygun: <a href="/ehliyet-siniflari/${r[0]}/">${r[1]} Motosiklet Ehliyeti →</a>`;
    } else {
      const [min, slug, name] = rules[type];
      msg = age >= min
        ? `Size uygun: <a href="/ehliyet-siniflari/${slug}/">${name} →</a>`
        : `${name} için en az ${min} yaş gerekiyor. Şimdilik <a href="/ehliyet-siniflari/${age >= 18 ? "b-sinifi-otomatik-ehliyet" : "a1-sinifi-ehliyet"}/">${age >= 18 ? "B sınıfı" : "A1 sınıfı"} ehliyet →</a> ile başlayabilirsiniz.`;
    }
    out.innerHTML = msg;
    out.hidden = false;
  });

  // Blog kategori filtresi
  $$("[data-filter]").forEach((b) => b.addEventListener("click", () => {
    $$("[data-filter]").forEach((x) => x.classList.toggle("active", x === b));
    $$("[data-filter-grid] > [data-cat]").forEach((c) => { c.hidden = b.dataset.filter !== "all" && c.dataset.cat !== b.dataset.filter; });
  }));

  // Ön kayıt formu → WhatsApp mesajı
  $("[data-wa-form]")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const text = `Ön kayıt talebi\nAd Soyad: ${f.get("name")}\nTelefon: ${f.get("phone")}\nEhliyet: ${f.get("license")}\nDers saati: ${f.get("time")}\nMesaj: ${f.get("msg") || "-"}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });

  // E-sınav mini deneme
  const quiz = $("[data-quiz]");
  if (quiz) {
    const qs = JSON.parse(quiz.dataset.quiz);
    let i = 0, score = 0;
    const render = () => {
      $("[data-quiz-step]").textContent = `Soru ${i + 1} / ${qs.length}`;
      $("[data-quiz-bar]").style.width = `${(i / qs.length) * 100}%`;
      $("[data-quiz-q]").textContent = qs[i].q;
      const box = $("[data-quiz-opts]");
      box.innerHTML = "";
      qs[i].o.forEach((o, k) => {
        const b = document.createElement("button");
        b.textContent = `${"ABCD"[k]}) ${o}`;
        b.onclick = () => {
          const ok = k === qs[i].a;
          score += ok;
          b.classList.add(ok ? "ok" : "no");
          box.children[qs[i].a].classList.add("ok");
          $$("button", box).forEach((x) => (x.disabled = true));
          setTimeout(() => (++i < qs.length ? render() : finish()), 900);
        };
        box.append(b);
      });
    };
    const finish = () => {
      const pts = Math.round((score / qs.length) * 100);
      $("[data-quiz-bar]").style.width = "100%";
      $("[data-quiz-q]").hidden = $("[data-quiz-opts]").hidden = true;
      const r = $("[data-quiz-result]");
      r.hidden = false;
      r.innerHTML = `<p>Puanınız</p><b>${pts}</b><p>${pts >= 70 ? "Tebrikler, baraj puanını geçtiniz! Gerçek sınava bizimle hazırlanın." : "Baraj puanı 70. Kursumuzun deneme havuzuyla kısa sürede hazır olabilirsiniz."}</p>
        <a class="btn btn-wa btn-lg" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent(`Merhaba, e-sınav denemesinden ${pts} puan aldım. Kurs hakkında bilgi almak istiyorum.`)}">WhatsApp'tan Bilgi Al</a>
        <button class="btn btn-ghost btn-lg" onclick="location.reload()">Tekrar Çöz</button>`;
    };
    render();
  }

  // Dönüşüm takibi (GA4 kurulunca gtag'e gider)
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-track]");
    if (a && window.gtag) window.gtag("event", "contact_click", { method: a.dataset.track, page: location.pathname });
  });
})();
