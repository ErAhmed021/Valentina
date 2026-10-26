/**
 * Valentina Precious — Micro-Interactions Controller
 * interactions.js: Scroll transitions, header elevation, and reveal animations
 */

(function () {
  'use strict';

  var header = document.querySelector('header');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Header scroll elevation
   */
  function handleScroll() {
    if (!header) return;
    var isScrolled = window.scrollY > 12;
    header.classList.toggle('scrolled', isScrolled);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /**
   * Scroll Reveal Observers
   */
  function initScrollReveals() {
    var targets = document.querySelectorAll(
      '.view section > *:not(.grid), .grid > *, .cards > *, .pills, .form-group'
    );

    targets.forEach(function (el) {
      el.classList.add('rv');
    });

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) {
        el.classList.add('in');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          var el = entry.target;
          var parent = el.parentNode;
          var index = parent ? [].indexOf.call(parent.children, el) : 0;
          var delay = Math.min(index, 6) * 80;

          el.style.transitionDelay = delay + 'ms';
          el.classList.add('in');
          observer.unobserve(el);

          setTimeout(function () {
            el.style.transitionDelay = '';
          }, 1200);
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveals);
  } else {
    initScrollReveals();
  }

  // Re-observe when view changes
  window.addEventListener('hashchange', function () {
    setTimeout(function () {
      var currentView = document.querySelector('.view.on');
      if (!currentView) return;
      var hiddenItems = currentView.querySelectorAll('.rv:not(.in)');
      hiddenItems.forEach(function (el) {
        el.classList.add('in');
      });
    }, 100);
  });
})();
