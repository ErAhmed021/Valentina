/**
 * Valentina Precious — Navigation Controller
 * navigation.js: Hash routing, mobile drawer, focus management, and accessibility
 */

(function () {
  'use strict';

  var PAGE_TITLES = {
    home: 'Valentina Precious — Activewear & Lifestyle',
    about: 'About Us | Valentina Precious',
    founder: 'Founder’s Story | Valentina Precious',
    brand: 'The Brand & Collections | Valentina Precious',
    contact: 'Corporate Enquiries & Contact | Valentina Precious',
    privacy: 'Privacy Policy | Valentina Precious',
    terms: 'Terms & Conditions | Valentina Precious'
  };

  var navEl = document.getElementById('nav');
  var menuBtn = document.getElementById('mb');

  /**
   * Switch views based on URL hash
   */
  function route() {
    var rawHash = (window.location.hash || '#home').slice(1).toLowerCase();
    var routeKey = PAGE_TITLES[rawHash] ? rawHash : 'home';

    // Toggle active view
    var views = document.querySelectorAll('.view');
    views.forEach(function (view) {
      var isTarget = view.id === 'v-' + routeKey;
      view.classList.toggle('on', isTarget);
      if (isTarget) {
        view.removeAttribute('hidden');
      } else {
        view.setAttribute('hidden', 'until-found');
      }
    });

    // Update nav aria-current
    var navLinks = document.querySelectorAll('nav a[data-r]');
    navLinks.forEach(function (link) {
      if (link.getAttribute('data-r') === routeKey) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    // Update page title
    document.title = PAGE_TITLES[routeKey] || 'Valentina Precious';

    // Close mobile drawer if open
    closeMenu();

    // Scroll to top of content smoothly
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  /**
   * Mobile menu toggle helpers
   */
  function openMenu() {
    if (!navEl || !menuBtn) return;
    navEl.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Close menu');
  }

  function closeMenu() {
    if (!navEl || !menuBtn) return;
    navEl.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open navigation menu');
  }

  function toggleMenu() {
    var isOpen = navEl && navEl.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Bind menu button click
  if (menuBtn) {
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Close menu when clicking any nav link
  if (navEl) {
    navEl.addEventListener('click', function (e) {
      var target = e.target.closest('a');
      if (target) {
        closeMenu();
      }
    });
  }

  // Close menu on clicking outside
  document.addEventListener('click', function (e) {
    if (navEl && navEl.classList.contains('open')) {
      if (!navEl.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
      }
    }
  });

  // Close menu on Escape key press
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navEl && navEl.classList.contains('open')) {
      closeMenu();
      if (menuBtn) {
        menuBtn.focus();
      }
    }
  });

  // Listen for hash routing events
  window.addEventListener('hashchange', route);

  // Initialize on script load
  route();

  // Export controller for debugging if needed
  window.VPNavigation = {
    route: route,
    openMenu: openMenu,
    closeMenu: closeMenu
  };
})();
