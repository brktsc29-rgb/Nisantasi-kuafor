// analytics.js — Prime Hair Nişantaşı
//
// GA4 altyapısı. Measurement ID olmadan site normal çalışır; tracking sessizce atlanır.
// Domain kesinleştiğinde index.html ve mikro-kaynak-nisantasi.html'deki tek satırı güncelle:
//   window.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';   ← gerçek ID buraya
// Başka hiçbir kod değişikliğine gerek yok.

(function () {
  'use strict';

  var GA_ID = (typeof window !== 'undefined' && window.GA_MEASUREMENT_ID) || '';

  // Gerçek bir GA4 ID'si mi? (G- ile başlamalı)
  var isLive = /^G-[A-Z0-9]+$/.test(GA_ID);

  // ── No-op stubs: ID yokken hata fırlatmaz ────────────────────────────────
  var _t = {
    whatsappClick:   function () {},
    phoneClick:      function () {},
    directionsClick: function () {},
    instagramClick:  function () {}
  };
  window.phTrack = _t;

  if (!isLive) return; // Placeholder ise buradan çık, site normal çalışır

  // ── GA4 script'ini dinamik yükle ─────────────────────────────────────────
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  // ── Tracking fonksiyonları ────────────────────────────────────────────────
  function send(name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
  }

  _t.whatsappClick = function (label) {
    send('whatsapp_click', { event_category: 'engagement', event_label: label || 'whatsapp_button' });
  };
  _t.phoneClick = function (label) {
    send('phone_click', { event_category: 'engagement', event_label: label || 'phone_button' });
  };
  _t.directionsClick = function () {
    send('directions_click', { event_category: 'engagement', event_label: 'directions_button' });
  };
  _t.instagramClick = function (label) {
    send('instagram_click', { event_category: 'engagement', event_label: label || 'instagram_link' });
  };

  // ── DOM elementlerine otomatik event binding ──────────────────────────────
  function wireEvents() {

    // WhatsApp linkleri — konuma göre label
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (el) {
      var label = el.classList.contains('wa-float')      ? 'mobile_float'
                : el.classList.contains('btn-wa')        ? 'header_button'
                : el.classList.contains('btn-primary')   ? 'primary_cta'
                : el.classList.contains('btn-secondary') ? 'secondary_cta'
                : 'whatsapp_link';
      el.addEventListener('click', function () { _t.whatsappClick(label); });
    });

    // Telefon linkleri
    document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
      el.addEventListener('click', function () { _t.phoneClick('phone_link'); });
    });

    // Instagram linkleri — konuma göre label
    document.querySelectorAll('a[href*="instagram.com"]').forEach(function (el) {
      var label = el.classList.contains('ig-link')          ? 'gallery_section'
                : el.closest && el.closest('.topbar-social') ? 'topbar'
                : el.closest && el.closest('footer')         ? 'footer'
                : 'instagram_link';
      el.addEventListener('click', function () { _t.instagramClick(label); });
    });

    // Harita (iframe kapsayıcısı veya harici harita linkleri)
    document.querySelectorAll('.map-wrap, a[href*="maps.google"], a[href*="goo.gl/maps"], a[href*="maps.app"]').forEach(function (el) {
      el.addEventListener('click', function () { _t.directionsClick(); });
    });
  }

  // DOMContentLoaded geçtiyse hemen çalıştır, geçmediyse bekle
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireEvents);
  } else {
    wireEvents();
  }

})();
