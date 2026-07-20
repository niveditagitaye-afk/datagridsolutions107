/* ============================================
   CASE-STUDIES.JS — Filter functionality for the
   Case Studies listing page
   ============================================ */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".cs-filter-btn");
    const cards = document.querySelectorAll(".cs-grid .cs-card");
    const featuredCards = document.querySelectorAll(".cs-featured-grid .cs-featured-card");
    const featuredGrid = document.querySelector("[data-cs-featured]");
    const noResults = document.querySelector("[data-cs-no-results]");

    if (!filterButtons.length || !cards.length) return;

    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const filter = btn.getAttribute("data-filter");

        // Update active state on all buttons
        filterButtons.forEach(function (b) {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        let visibleCount = 0;

        // Toggle featured cards — only shown when "all" is selected
        if (featuredGrid) {
          if (filter === "all") {
            featuredGrid.style.display = "";
          } else {
            featuredGrid.style.display = "none";
          }
        }

        // Toggle regular grid cards based on category
        cards.forEach(function (card) {
          const category = card.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            card.style.display = "";
            card.removeAttribute("hidden");
            visibleCount++;
          } else {
            card.style.display = "none";
            card.setAttribute("hidden", "");
          }
        });

        // Show/hide no-results message
        if (noResults) {
          if (visibleCount === 0) {
            noResults.removeAttribute("hidden");
          } else {
            noResults.setAttribute("hidden", "");
          }
        }
      });
    });
  });
})();
