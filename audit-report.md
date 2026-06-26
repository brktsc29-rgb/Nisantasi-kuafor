# Prime Hair Nişantaşı — Kod Denetim Raporu

> Denetim tarihi: 2026-06-14  
> Denetlenen dosyalar: `index.html`, `mikro-kaynak-nisantasi.html`, `analytics.js`, `sitemap.xml`, `robots.txt`

---

## 1. GEO / AI Arama Uyumlu İçerik Yapısı

**Durum: Kısmen Yapıldı**

### Kanıt

- **İlgili dosyalar:** `index.html`, `mikro-kaynak-nisantasi.html`
- **FAQPage JSON-LD schema** → `index.html` satır 18–20 (5 soru-cevap)
- **H1 keyword'lü:** `"Nişantaşı'nda Doğal Görünümlü Mikro Kaynak"` (index), `"Mikro Kaynak Nişantaşı"` (mikro-kaynak)
- **Lokasyon tekrarı:** "Nişantaşı", "Şişli", "İstanbul" hem içerikte hem schema'da
- **BeautySalon entity** (name, address, telephone, geo) → `index.html` satır 15–17
- **Soru formatı içerik:** "Mikro Kaynak Nedir?", "Nasıl Uygulanır?" başlıklı H2'ler
- **FAQ içeriği** iki sayfada da var (HTML seviyesinde)

### Değerlendirme

Teklif listesinde kalmalı, ama **önemli bir eksik var:** `mikro-kaynak-nisantasi.html`'de 5 detaylı FAQ maddesi HTML'de var ancak bu sayfada **FAQPage JSON-LD schema yok.** Bu en önemli GEO kaybıdır.

### Eksik / Geliştirme Önerisi

- `mikro-kaynak-nisantasi.html`'e FAQPage JSON-LD ekle (5 soru zaten HTML'de yazılı)
- "Nişantaşı'nda mikro kaynak nerede yaptırılır?" gibi tam soru formatında başlıklar eklenebilir (H2 veya dedicated içerik bloğu)
- Coğrafi yakın referanslar yok: "Teşvikiye", "Osmanbey", "Harbiye" gibi komşu semt isimleri eklenmeli

---

## 2. SEO Uyumlu Sayfa Kurgusu

**Durum: Kısmen Yapıldı**

### Kanıt

- `index.html` — meta title: `"Prime Hair Nişantaşı | Mikro Kaynak ve Saç Kaynak Merkezi"` (satır 6)
- `index.html` — meta description (satır 7), keywords (satır 8), canonical (satır 9)
- `mikro-kaynak-nisantasi.html` — meta title (satır 6), description (satır 10), keywords (satır 11), canonical (satır 12)
- Her iki sayfada OG title / description / url / type var
- BeautySalon + FAQPage + BreadcrumbList → yalnızca `index.html`
- `sitemap.xml`: 2 URL, `lastmod: 2024-12-01`
- `robots.txt`: `Allow: *`, sitemap referansı
- `lang="tr"` HTML attribute her iki dosyada
- Semantic HTML: `<header>`, `<footer>`, `<section>`, `<article>`, `<nav>`, `<address>`

### Değerlendirme

Kalmalı, ama **birkaç somut eksiği var** — bunlar hem teklif hem de gerçek geliştirme açısından belirtilmeli.

### Eksik / Geliştirme Önerisi

- **`og:image` her iki sayfada eksik** — sosyal paylaşımda resim görünmez
- Twitter Card meta (`twitter:card`, `twitter:title` vb.) hiçbir sayfada yok
- `mikro-kaynak-nisantasi.html`'de FAQPage ve BreadcrumbList JSON-LD yok
- `mikro-kaynak-nisantasi.html` schema'sında `aggregateRating` yok (index.html'de 4.9/120 var)
- `mikro-kaynak-nisantasi.html` schema'sında `geo` koordinatları yok (index.html'de var)
- Sitemap `lastmod` tarihi statik `2024-12-01` — güncellenmiyor
- Google Fonts `font-display:swap` kullanılmıyor → render-blocking riski

---

## 3. Yerel SEO Sinyallerinin Güçlendirilmesi

**Durum: Kısmen Yapıldı**

### Kanıt

- BeautySalon schema her iki sayfada: `address`, `telephone`, `openingHours`
- `index.html` schema'da `geo: {latitude: 41.0565, longitude: 28.9940}` (satır 16)
- Adres topbar'da, footer'da ve `mikro-kaynak-nisantasi.html` location section'da tutarlı
- Google Maps embed her iki sayfada (Halaskargazi Mah. sorgusuyla)
- "Nişantaşı", "Şişli", "İstanbul" anahtar kelimeleri içerikte tekrarlı
- Çalışma saatleri schema (`Mo-Sa 10:30-20:00`) ve sayfa içeriğinde

### Değerlendirme

Kalmalı. Temel sinyaller güçlü, ama önemli boşluklar var.

### Eksik / Geliştirme Önerisi

- `mikro-kaynak-nisantasi.html` schema'sında `geo` koordinatları yok
- `sameAs` array'ine Google Business Profile URL eklenmeli (şu an sadece Instagram var)
- Schema'da `priceRange` yok
- `hasOfferCatalog` veya `makesOffer` ile hizmetler schema'ya eklenmemiş
- İçerikte çevre referansları yok (yakın metro durağı, landmark, komşu semtler)
- Maps iframe doğrudan `place_id` değil, metin query kullanıyor — hassasiyet düşük

---

## 4. Dönüşüm Odaklı Landing Page Yapısı

**Durum: Yapıldı (güçlü)**

### Kanıt

- `index.html`: Hero'da 2 CTA (`.btn-primary` WhatsApp + `.btn-secondary` Ücretsiz Ön Analiz)
- Photo CTA section (`#on-analiz`): "Saçınızı Yükleyin, Ücretsiz Ön Analiz Alın"
- Final CTA section: ayrı bölüm, warm gold arka plan
- Floating WA butonu (`wa-float wa-pulse`): sadece mobile, `display:none` desktop
- `mikro-kaynak-nisantasi.html`: header CTA, hero 2 buton, konum section 2 buton, `mobile-sticky-cta` (satır 1388)
- Header'da WA butonu (scrolled state'de dark temalı)
- Footer'da WhatsApp + telefon linkleri her iki sayfada
- Reviews section: 4.9 puan + 3 yorum kartı
- Trust strip: 6 güven unsuru (hero altında)
- FAQ: itirazları gideriyor

### Değerlendirme

Teklif listesinde **kesin kalmalı** — en güçlü bölüm. CTA sayısı ve dağılımı iyi.

### Eksik / Geliştirme Önerisi

- Müşteri yorumları placeholder (Ayşe K., Merve T., Selin A.) — gerçek değil
- Galeri görselleri SVG placeholder — dönüşümü artıracak gerçek before/after yok
- Aciliyet/kıtlık unsuru yok ("Bu hafta 3 randevu boş" gibi)

---

## 5. Hizmetlerin Net ve Anlaşılır Hale Getirilmesi

**Durum: Kısmen Yapıldı**

### Kanıt

- `index.html` services section: 6 kart (01 Mikro Kaynak, 02 Keratin Kaynak, 03 Saç Kaynak Bakımı, 04 Renk Uyumlu Kaynak, 05 Saç Renklendirme, 06 Ombre & Balyaj)
- Her kart: numara, başlık, 1–2 cümle açıklama
- `mikro-kaynak-nisantasi.html`: "Mikro Kaynak Nedir?" section — 3 maddeli özellik listesi
- 5 adım (index) / 4 adım (mikro-kaynak): uygulama süreci görselleştirilmiş
- Fiyat accordion: "Saç adedi ve gramajı", "Saç uzunluğu ve kalitesi", "Renk uyumu ihtiyacı", "Ek bakım gereksinimleri"

### Değerlendirme

Kalmalı, ama geliştirme notu eklenebilir.

### Eksik / Geliştirme Önerisi

- Servis kartlarında süre bilgisi yok ("ortalama 3–4 saat")
- Fiyat aralığı gösterilmiyor (bu bilinçli bir karar olabilir — ön analiz yönlendirmesi)
- Keratin kaynak, ombre/balyaj için ayrı landing page yok
- "Mikro kaynak" dışındaki hizmetler çok yüzeysel açıklanmış

---

## 6. Güven Veren Marka Anlatımı

**Durum: Kısmen Yapıldı**

### Kanıt

- `index.html` rfg-left: `rating-big` = "4.9", `rating-label` = "120+ Google Yorumu"
- 3 yorum kartı: Ayşe K., Merve T., Selin A.
- `mikro-kaynak-nisantasi.html` marquee trust band: "9+ Yıl Deneyim", "Renk Garantisi" (satır 962–963)
- Hero trust strip: "%100 Gerçek İnsan Saçı", "Renk Uyumlu Uygulama", "Doğal Görünüm", "Uzman Uygulama", "Garantili Hizmet", "Nişantaşı Lokasyonu"
- "Neden Prime Hair" section (mikro-kaynak): 3 kart (Gerçek İnsan Saçı, Uzman Renk Analizi, Bakım Desteği)

### Değerlendirme

Kalmalı, ama önemli kısıtlamalar var.

### Eksik / Geliştirme Önerisi

- "9+ Yıl Deneyim" iddiası `index.html`'de **yok** — sadece mikro-kaynak sayfasının marquee'sinde
- Yorum kartları placeholder isimlerle dolu (gerçek Google yorumları değil)
- "Tüm Yorumları Gör" linki `maps.google.com/maps/search/...` query'ye yönlendiriyor — doğrudan Google Business Profile sayfasına değil
- Before/after galeri tamamen SVG placeholder — gerçek görsel sosyal kanıt yok
- Ekip/uzman tanıtımı yok
- Sertifika/eğitim bilgisi yok

---

## 7. Teknik SEO Mantığına Uygun İçerik Düzeni

**Durum: Kısmen Yapıldı**

### Kanıt

- `index.html` H1: "Nişantaşı'nda / Doğal Görünümlü / Mikro Kaynak" (satır 539–543)
- `mikro-kaynak-nisantasi.html` H1: "Mikro Kaynak Nişantaşı" (satır 935)
- H2–H3 hiyerarşisi her iki sayfada tutarlı
- BeautySalon + FAQPage + BreadcrumbList JSON-LD: `index.html`
- BeautySalon (eksik FAQPage/BreadcrumbList): `mikro-kaynak-nisantasi.html`
- `sitemap.xml`: 2 URL, changefreq ve priority belirlenmiş
- `robots.txt`: `Allow: *`, sitemap URL'i
- `<link rel="canonical">`: her iki sayfada
- Google Fonts: `<link rel="preconnect">` her iki sayfada
- Semantic HTML elementleri tutarlı kullanılmış
- Internal links: footer'da çapraz bağlantı (index ↔ mikro-kaynak)

### Değerlendirme

Kalmalı. Teknik temel sağlam, ama belirgin eksikler var.

### Eksik / Geliştirme Önerisi

- `mikro-kaynak-nisantasi.html`'de FAQPage ve BreadcrumbList JSON-LD yok
- `og:image` her iki sayfada eksik
- Twitter Card metadata yok
- `font-display: swap` Google Fonts link'inde yok
- `loading="lazy"` sadece map iframe'de var, galeri/görsel elementlerde yok
- `hreflang` self-referencing tag yok

---

## 8. Mobil Kullanıcı Deneyimi Odaklı Kurgu

**Durum: Yapıldı (güçlü)**

### Kanıt

- `viewport` meta her iki sayfada
- Breakpoints: `@media (max-width:1200px/1024px/900px/767px/600px)` — `index.html` satır 399–451
- Mobil hero: `flex-direction:column`, video üste 45vh, içerik alta — `index.html` satır 383–398
- Hamburger menü: `display:none` → `display:flex` at 900px
- 900px altında `.btn-tel` ve `.btn-wa` header'da gizli (satır 409–411)
- 600px altında topbar adres gizli, sadece saat görünür (satır 441–449)
- Floating WA butonu: `display:none` → `display:block` at 900px
- `mikro-kaynak-nisantasi.html`: `mobile-sticky-cta` (satır 841–866)
- `-webkit-tap-highlight-color: transparent` — `index.html` satır 47
- `prefers-reduced-motion` her iki sayfada
- `overflow-x:hidden` hem `html` hem `body`
- Horizontal scroll: `.svc-track`, `.ig-track` — drag-to-scroll JS ile

### Değerlendirme

Teklif listesinde **kesin kalmalı** — en kapsamlı yapılan bölüm.

### Eksik / Geliştirme Önerisi

- Bazı font boyutları çok küçük: `.52rem`, `.58rem`, `.6rem` — mobilde okunabilirlik sınırında
- Drag-to-scroll strip'leri için "sürükle" ipucu (görsel hint) yok
- Hero trust strip mobilde 6 öğe 2x3 grid — küçük ekranlarda sıkışık

---

## 9. Rakiplerden Ayrışan Dijital Konumlandırma

**Durum: Kısmen Yapıldı**

### Kanıt

- Premium tasarım dili: Cormorant Garamond + Inter, altın/krem paleti
- "Renk Uyumlu Uygulama", "Kişiye Özel Analiz" — diferansiyasyon noktaları
- "9+ Yıl Deneyim" (mikro-kaynak marquee), "Ücretsiz Ön Analiz" — rakip avantajı
- "Neden Prime Hair Nişantaşı?" section: 3 kart (Gerçek İnsan Saçı, Uzman Renk Analizi, Bakım Desteği)
- Video hero: gerçek içerik, placeholder değil
- İki sayfalı yapı: farklı arama intent'lerine hitap

### Değerlendirme

Kalabilir, ama **açıklama zayıf** — "rakiplerden ayrışma" tasarım düzeyinde, içerik/mesaj düzeyinde sınırlı.

### Eksik / Geliştirme Önerisi

- "Neden bizi seçmelisiniz?" vs "mikro kaynak neden tercih edilmeli?" karışık — net ayrım yok
- Fiyat konumlandırması belirsiz (premium mi, orta segment mi?)
- "9+ Yıl Deneyim" `index.html`'de yok — ana sayfada vurgulanmıyor
- Rakip analizine dayalı içerik (ne söyleyip ne söylememe kararı) yapılmamış

---

## 10. Ölçülebilir Sonuçlara Uygun Altyapı Mantığı

**Durum: Yapıldı**

### Kanıt

- `analytics.js` (103 satır): GA4 altyapısı
- `window.GA_MEASUREMENT_ID` placeholder kontrolü — `index.html` satır 7, `mikro-kaynak-nisantasi.html` satır 7
- `/^G-[A-Z0-9]+$/` regex ile gerçek ID doğrulaması — `analytics.js` satır 12
- No-op stub'lar: ID yokken sessiz — `analytics.js` satır 16–21
- Event'ler: `whatsapp_click`, `phone_click`, `directions_click`, `instagram_click`
- Otomatik DOM binding: `querySelectorAll('a[href*="wa.me"]')` vb. — satır 64–100
- Context-aware label'lar: `mobile_float`, `header_button`, `primary_cta`, `secondary_cta`, `gallery_section`, `topbar`, `footer`
- `document.readyState === 'loading'` kontrolü: erken yükleme güvencesi — satır 104

### Değerlendirme

Teklif listesinde **kesin kalmalı** — en teknik olarak tam yapılmış bölüm.

### Eksik / Geliştirme Önerisi

- Measurement ID henüz eklenmemiş (deployment adımı, kod eksiği değil)
- `video_play` ve `video_pause` event tracking yok (hero video etkileşimi ölçülmüyor)
- Scroll depth tracking yok
- `appointment_submit` event yok — WA yönlendirmeli sistem, form yok, mantıklı

---

## 11. İşletmeye Sağlayacağı Beklenen Katkılar

**Durum: Fazla İddialı (kısmen kanıtlanabilir)**

### Kanıt

- WhatsApp conversion funneli: birden fazla CTA noktası → randevu alma kolaylaştırılmış ✓
- Yerel SEO temel sinyalleri: schema, adres tutarlılığı, harita ✓
- FAQ yapısı: bilgilendirme → güven → itiraz giderme ✓
- İki sayfa: farklı arama sorgularını karşılar ✓
- Analytics altyapısı: sonuç ölçümü mümkün (ID eklenince) ✓

### Değerlendirme

**Bu başlık pazarlama teklifine ait** — teknik olarak kanıtlanabilir değil. "Google'da üst sıra garantisi" veya "X% dönüşüm artışı" gibi iddialar kodda karşılığı olmayan beklentilerdir. Başlık çıkarılmalı veya ciddi biçimde revize edilmeli.

### Eksik / Geliştirme Önerisi

- "Beklenen katkılar" yerine **"Bu yapının sağladığı teknik avantajlar"** şeklinde revize edilebilir
- İddialar somut altyapı maddelerine indirgenebilir: "GA4 event tracking ile tıklama kaynaklarını ölçme", "Schema ile zengin sonuç görünümü", "WhatsApp funnel ile direkt dönüşüm"

---

---

## Özet Değerlendirme

---

### 1. Teklif Listesinde Kesin Kalması Gereken Başlıklar

| # | Başlık | Gerekçe |
|---|---|---|
| 4 | Dönüşüm Odaklı Landing Page Yapısı | CTA çokluğu, konumlandırma, trust strip kodda kanıtlı |
| 8 | Mobil Kullanıcı Deneyimi Odaklı Kurgu | Breakpoints, mobil video, sticky CTA, hamburger — en kapsamlı bölüm |
| 10 | Ölçülebilir Sonuçlara Uygun Altyapı Mantığı | analytics.js, event tracking, no-op stubs — tam çalışır altyapı |
| 7 | Teknik SEO Mantığına Uygun İçerik Düzeni | H1/H2/H3, canonical, schema, sitemap, robots — temel sağlam |
| 3 | Yerel SEO Sinyallerinin Güçlendirilmesi | Schema, adres tutarlılığı, harita, koordinatlar — belgeli |

---

### 2. Kısmen Doğru Ama Geliştirilmesi Gereken Başlıklar

| # | Başlık | Ne Eksik |
|---|---|---|
| 1 | GEO / AI Arama Uyumlu İçerik Yapısı | mikro-kaynak sayfasında FAQPage schema yok; coğrafi referanslar zayıf |
| 2 | SEO Uyumlu Sayfa Kurgusu | og:image eksik; mikro-kaynak sayfasında BreadcrumbList/FAQPage yok |
| 5 | Hizmetlerin Net ve Anlaşılır Hale Getirilmesi | Sadece index sayfasında 6 kart, diğer hizmetler için sayfa yok |
| 6 | Güven Veren Marka Anlatımı | Yorumlar placeholder, galeri SVG, "9+ yıl deneyim" index'te yok |
| 9 | Rakiplerden Ayrışan Dijital Konumlandırma | Tasarım düzeyinde var, içerik/mesaj düzeyinde sınırlı |

---

### 3. Fazla İddialı veya Kanıtı Zayıf Başlıklar

| # | Başlık | Öneri |
|---|---|---|
| 11 | İşletmeye Sağlayacağı Beklenen Katkılar | Tamamen çıkar veya "teknik altyapının sağladığı avantajlar" olarak yeniden yaz. "Beklenen katkılar" rakam veya garanti içeriyorsa gerçekçi değil |

---

### 4. Teklife Eklenebilecek Yeni Başlıklar

Kodda yapılmış ama mevcut teklif listesinde adı geçmeyen çalışmalar:

| Yeni Başlık | Kodda Kanıtı |
|---|---|
| **Open Graph ve Sosyal Paylaşım Altyapısı** | og:title, og:description, og:url, og:type — her iki sayfada (og:image eklenince tam olur) |
| **Schema Markup ile Zengin Sonuç Altyapısı** | BeautySalon, FAQPage, BreadcrumbList, aggregateRating JSON-LD — `index.html` |
| **GA4 Event Tracking Altyapısı** | `analytics.js`: whatsapp_click, phone_click, directions_click, instagram_click — deployment'a hazır |
| **Erişilebilirlik (Accessibility) Uyumu** | `aria-label`, `aria-expanded`, `aria-hidden`, `role="list"`, `role="listitem"` — semantic HTML |
| **Scroll Animasyonları ve Kullanıcı Etkileşimi** | IntersectionObserver, CSS transition, fade-up/slide-left/right — `index.html` ve `mikro-kaynak` |
| **Performans Uyumlu Video Yüklemesi** | Mobil/masaüstü farklı video (`matchMedia`), `preload="metadata"`, `playbackRate:0.65`, `prefers-reduced-motion` |
| **İki Sayfalı SEO Mimarisi** | Ana sayfa (genel) + hizmet landing (spesifik keyword) — farklı arama intent'leri |
| **WhatsApp Entegrasyonlu Randevu Funneli** | 7+ farklı CTA noktasından direkt WhatsApp yönlendirmesi (header, hero, sticky, footer, floating) |

---

### En Kritik 3 Aksiyon

1. **`mikro-kaynak-nisantasi.html`'e FAQPage JSON-LD ekle** — 5 soru HTML'de yazılı ama schema yok; hem SEO hem GEO açısından en kolay kapatılacak boşluk.
2. **Her iki sayfaya `og:image` ekle** — sosyal paylaşımda görsel çıkmıyor; logo veya hero frame yeter.
3. **`mikro-kaynak-nisantasi.html` schema'sına `geo` koordinatları ve `aggregateRating` ekle** — index.html'de var, alt sayfada yok.
