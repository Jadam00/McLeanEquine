(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. Mobile nav toggle with aria-expanded
  ---------------------------------------------------------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks  = document.querySelector('.nav-links');

  function openNav() {
    navLinks.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.contains('is-open') ? closeNav() : openNav();
    });

    /* Close on nav-link click */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (
        navLinks.classList.contains('is-open') &&
        !navToggle.contains(e.target) &&
        !navLinks.contains(e.target)
      ) {
        closeNav();
      }
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
        closeNav();
        navToggle.focus();
      }
    });
  }

  /* ----------------------------------------------------------
     2. Active nav link based on current page filename
  ---------------------------------------------------------- */
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';
  if (currentFile === '') currentFile = 'index.html';

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    if (link.getAttribute('href') === currentFile) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ----------------------------------------------------------
     3. Header shadow on scroll
  ---------------------------------------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    function updateHeader() {
      header.classList.toggle('scrolled', window.scrollY > 80);
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ----------------------------------------------------------
     4. Smooth scroll for anchor links (respects prefers-reduced-motion)
  ---------------------------------------------------------- */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ----------------------------------------------------------
     5. FAQ accordion
  ---------------------------------------------------------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      /* Close all */
      document.querySelectorAll('.faq-item.is-open').forEach(function (openItem) {
        openItem.classList.remove('is-open');
        var openBtn = openItem.querySelector('.faq-question');
        if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
      });

      /* Open clicked if it was closed */
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ----------------------------------------------------------
     6. IntersectionObserver scroll reveal
  ---------------------------------------------------------- */
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ----------------------------------------------------------
     7. Gracefully hide broken logo images (show text fallback)
  ---------------------------------------------------------- */
  document.querySelectorAll('.logo-img').forEach(function (img) {
    img.addEventListener('error', function () {
      this.style.display = 'none';
    });
  });

})();
