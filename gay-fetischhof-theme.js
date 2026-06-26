/* =========================================================
   GAY-FETISCHHOF — GLOBAL THEME (JS)  ·  "NEON CRUISE"
   ---------------------------------------------------------
   Підключати ПІСЛЯ gay-fetischhof-theme.css.
   Чистий JS (без <script>-обгортки) — завантажується як зовнішній
   файл через Theme-Manager → "JavaScript-Datei".

   Робить:
     1) html.gf-neon          — активує тему (корінь усіх CSS-селекторів)
     2) gf-scrolled            — стан хедера при скролі
     3) .gf-topbar             — неон-смужка над хедером (USP/повідомлення)
     4) data-gf-animate        — scroll-reveal (IntersectionObserver)
     5) auto-tagging CMS-секцій для анімації появи

   БЕЗПЕЧНО: жодних маніпуляцій з кошиком/чекаутом — лише класи та анімації.
   ========================================================= */
(function () {
  "use strict";

  console.log("%cGay-Fetischhof theme JS · v1-neon-cruise", "color:#ff2d95;font-weight:bold;");

  var root = document.documentElement;

  /* ---- 1) активуємо тему ---- */
  root.classList.add("gf-neon");

  /* ---- 3) неон top-bar (повідомлення / USP) ---- */
  var TOPBAR_HTML =
    '<span>★ Diskreter Versand weltweit</span>' +
    '<span>·</span>' +
    '<span>Handmade in Berlin-Neukölln</span>' +
    '<span>·</span>' +
    '<span>Von der Community, für die Community</span>';

  function injectTopbar() {
    if (document.querySelector(".gf-topbar")) return;
    var header = document.querySelector("header.header-main");
    if (!header || !header.parentNode) return;
    var bar = document.createElement("div");
    bar.className = "gf-topbar";
    bar.setAttribute("role", "complementary");
    bar.innerHTML = TOPBAR_HTML;
    header.parentNode.insertBefore(bar, header);
  }

  /* ---- 2) стан хедера при скролі ---- */
  function onScroll() {
    if (window.pageYOffset > 24) {
      root.classList.add("gf-scrolled");
    } else {
      root.classList.remove("gf-scrolled");
    }
  }

  /* ---- 4) scroll-reveal ---- */
  function setupReveal() {
    var els = document.querySelectorAll("[data-gf-animate]");
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("gf-in-view"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("gf-in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- 5) авто-теги для CMS-секцій головної (плавна поява) ---- */
  function autoTagCms() {
    if (!document.body.classList.contains("is-act-frontend-home-page") &&
        !document.body.classList.contains("is-active-route-frontend-home-page")) {
      return;
    }
    document.querySelectorAll(".cms-block").forEach(function (block, i) {
      if (!block.hasAttribute("data-gf-animate")) {
        block.setAttribute("data-gf-animate", "");
        block.style.transitionDelay = Math.min(i, 6) * 60 + "ms";
      }
    });
  }

  /* ---- init ---- */
  function init() {
    injectTopbar();
    autoTagCms();
    setupReveal();
    onScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
})();
