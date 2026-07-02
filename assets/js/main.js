/* Yingying Han — personal homepage interactivity
 * Vanilla JS, no dependencies. Three behaviors:
 *   1. Sticky masthead gains a shadow after scrolling 4px.
 *   2. Hamburger toggle (mobile only) opens/closes the nav, updates aria-expanded,
 *      closes on link click and on Escape.
 *   3. Section reveal: .reveal elements get .is-visible when they enter the viewport.
 *      Disabled when prefers-reduced-motion: reduce.
 */
(function () {
  "use strict";

  // ----- 1. Sticky masthead shadow -----
  var masthead = document.getElementById("masthead");
  function onScroll() {
    if (!masthead) return;
    if (window.scrollY > 4) {
      masthead.classList.add("is-scrolled");
    } else {
      masthead.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ----- 2. Hamburger toggle -----
  var toggle = document.querySelector(".masthead__toggle");
  var nav = document.getElementById("site-nav");

  function setNav(open) {
    if (!toggle || !nav) return;
    toggle.classList.toggle("is-open", open);
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNav(!nav.classList.contains("is-open"));
    });

    // Close after clicking a link (mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setNav(false);
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setNav(false);
        toggle.focus();
      }
    });

    // Reset state when leaving mobile breakpoint
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) setNav(false);
    });
  }

  // ----- 3. Section reveal on scroll -----
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  var sections = document.querySelectorAll(".section");
  sections.forEach(function (s) { s.classList.add("reveal"); });

  if (!("IntersectionObserver" in window)) {
    sections.forEach(function (s) { s.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

  sections.forEach(function (s) { observer.observe(s); });
})();
