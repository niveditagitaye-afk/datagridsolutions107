/* ============================================
   SERVICES.JS — Services page interactions
   The Services page is primarily a static content
   page with anchor-linked sections. Scroll-reveal
   animations are handled globally by global.js.
   This file adds smooth-scroll offset handling
   for in-page anchor navigation and active
   highlighting in the hero quick-nav.
   ============================================ */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // ── Active quick-nav highlighting via IntersectionObserver ──
    var quicknavLinks = document.querySelectorAll(".svc-hero-quicknav a");
    var sections = [];
    quicknavLinks.forEach(function (link) {
      var hash = link.getAttribute("href");
      if (hash && hash.charAt(0) === "#" && hash.length > 1) {
        var target = document.querySelector(hash);
        if (target) {
          sections.push({ link: link, target: target });
        }
      }
    });

    if (sections.length > 0 && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            var match = sections.find(function (s) {
              return s.target === entry.target;
            });
            if (match) {
              if (entry.isIntersecting) {
                match.link.classList.add("active");
              } else {
                match.link.classList.remove("active");
              }
            }
          });
        },
        {
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        }
      );
      sections.forEach(function (s) {
        observer.observe(s.target);
      });
    }

    // ── Smooth scroll with header offset for in-page anchors ──
    // The CSS `scroll-margin-top` handles the offset for native scroll,
    // but we also handle it here for click-based navigation to ensure
    // consistent behavior across browsers.
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var href = this.getAttribute("href");
        if (!href || href === "#" || href.length < 2) return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        var headerHeight = 0;
        var header = document.getElementById("header-slot");
        if (header && header.firstElementChild) {
          headerHeight = header.firstElementChild.offsetHeight || 0;
        }
        var offsetTop =
          target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      });
    });
  });
})();
