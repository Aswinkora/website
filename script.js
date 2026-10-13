tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed": "#00164e", "surface-tint": "#3a608d", "inverse-surface": "#233144", "inverse-on-surface": "#ebf1ff", "on-tertiary": "#ffffff", "on-primary": "#ffffff", "tertiary": "#001d62", "secondary": "#904d00", "on-secondary": "#ffffff", "outline-variant": "#c3c6d0", "background": "#f8f9ff", "surface-variant": "#d5e3fd", "on-background": "#0d1c2f", "surface-container-lowest": "#ffffff", "surface-container-low": "#eff4ff", "surface-bright": "#f8f9ff", "on-tertiary-container": "#87a0f6", "primary-fixed-dim": "#a4c9fc", "on-secondary-fixed-variant": "#6e3900", "on-error-container": "#93000a", "on-secondary-container": "#663500", "secondary-fixed-dim": "#ffb77d", "tertiary-fixed-dim": "#b6c4ff", "surface": "#f8f9ff", "primary-container": "#0d3b66", "on-surface": "#0d1c2f", "surface-container-high": "#dde9ff", "surface-container": "#e6eeff", "on-surface-variant": "#42474f", "on-error": "#ffffff", "error-container": "#ffdad6", "tertiary-fixed": "#dce1ff", "error": "#ba1a1a", "surface-dim": "#ccdbf4", "on-tertiary-fixed-variant": "#264191", "on-secondary-fixed": "#2f1500", "primary-fixed": "#d3e4ff", "on-primary-container": "#81a6d7", "primary": "#002546", "on-primary-fixed": "#001c38", "on-primary-fixed-variant": "#204874", "secondary-container": "#fe932c", "secondary-fixed": "#ffdcc3", "outline": "#737780", "inverse-primary": "#a4c9fc", "tertiary-container": "#153383", "surface-container-highest": "#d5e3fd"
      },
      borderRadius: { DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem" },
      spacing: { "space-md": "1rem", gutter: "1.5rem", "space-lg": "1.5rem", "space-xl": "2.5rem", "space-xs": "0.25rem", "margin-mobile": "1rem", margin: "2rem", "space-sm": "0.5rem", "gutter-mobile": "1rem" },
      fontFamily: { "headline-md": ["Merriweather"], "body-sm": ["Inter"], "headline-sm": ["Merriweather"], "headline-lg": ["Merriweather"], "label-sm": ["Inter"], "display-hero": ["Merriweather"], "display-hero-mobile": ["Merriweather"], "title-md": ["Inter"], "headline-lg-mobile": ["Merriweather"], "body-md": ["Inter"], "label-lg": ["Inter"], "body-lg": ["Inter"], "title-lg": ["Inter"], "label-md": ["Inter"] },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "700" }], "body-sm": ["12px", { lineHeight: "18px", fontWeight: "400" }], "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "700" }], "headline-lg": ["36px", { lineHeight: "46px", letterSpacing: "-0.015em", fontWeight: "700" }], "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.06em", fontWeight: "700" }], "display-hero": ["48px", { lineHeight: "60px", letterSpacing: "-0.02em", fontWeight: "700" }], "display-hero-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }], "title-md": ["16px", { lineHeight: "24px", fontWeight: "600" }], "headline-lg-mobile": ["26px", { lineHeight: "34px", fontWeight: "700" }], "body-md": ["14px", { lineHeight: "22px", fontWeight: "400" }], "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "600" }], "body-lg": ["16px", { lineHeight: "26px", fontWeight: "400" }], "title-lg": ["18px", { lineHeight: "26px", fontWeight: "600" }], "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "600" }]
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".main-nav-links");
  const menuToggle = document.querySelector(".mobile-nav-toggle");

  const closeNavigation = () => {
    if (nav) nav.classList.remove("open");
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      const icon = menuToggle.querySelector(".material-symbols-outlined");
      if (icon) icon.textContent = "menu";
    }
    document.querySelectorAll(".nav-dropdown.open").forEach((dropdown) => {
      dropdown.classList.remove("open");
      const toggle = dropdown.querySelector(".nav-dropdown-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  };

  if (nav && menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      const icon = menuToggle.querySelector(".material-symbols-outlined");
      if (icon) icon.textContent = isOpen ? "close" : "menu";
      if (!isOpen) {
        document.querySelectorAll(".nav-dropdown.open").forEach((dropdown) => {
          dropdown.classList.remove("open");
          const toggle = dropdown.querySelector(".nav-dropdown-toggle");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  document.querySelectorAll(".nav-dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const dropdown = toggle.closest(".nav-dropdown");
      if (!dropdown) return;
      document.querySelectorAll(".nav-dropdown.open").forEach((openDropdown) => {
        if (openDropdown !== dropdown) {
          openDropdown.classList.remove("open");
          const openToggle = openDropdown.querySelector(".nav-dropdown-toggle");
          if (openToggle) openToggle.setAttribute("aria-expanded", "false");
        }
      });
      const isOpen = dropdown.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.querySelectorAll(".main-nav-links a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });

  document.addEventListener("click", (event) => {
    if (nav && menuToggle && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
      closeNavigation();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) closeNavigation();
  });

  const noticeSearch = document.querySelector("#noticeSearch");
  const noticeRows = [...document.querySelectorAll("#notices tbody tr[data-notice-category]")];
  const noticeFilters = [...document.querySelectorAll("[data-notice-filter]")];
  const noNoticeResults = document.querySelector("#noticeNoResults");
  let activeNoticeFilter = "all";

  const filterNotices = () => {
    const searchTerm = noticeSearch ? noticeSearch.value.toLowerCase().trim() : "";
    let visibleNotices = 0;

    noticeRows.forEach((row) => {
      const matchesCategory = activeNoticeFilter === "all" || row.dataset.noticeCategory === activeNoticeFilter;
      const matchesSearch = !searchTerm || row.textContent.toLowerCase().includes(searchTerm);
      row.hidden = !matchesCategory || !matchesSearch;
      if (!row.hidden) visibleNotices += 1;
    });

    if (noNoticeResults) noNoticeResults.hidden = visibleNotices !== 0;
  };

  noticeFilters.forEach((button) => {
    button.addEventListener("click", () => {
      activeNoticeFilter = button.dataset.noticeFilter || "all";
      noticeFilters.forEach((filterButton) => {
        filterButton.setAttribute("aria-pressed", String(filterButton === button));
      });
      filterNotices();
    });
  });

  if (noticeSearch) noticeSearch.addEventListener("input", filterNotices);
});
