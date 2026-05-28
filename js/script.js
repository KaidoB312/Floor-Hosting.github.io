/* ========================================
   FLOOR HOSTING — Scripts
   ======================================== */

(function () {
  'use strict';

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const navLinks = nav.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  /* ---- Mobile menu toggle ---- */
  hamburger.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('nav--open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav--open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- Active nav link on scroll ---- */
  function setActiveLink() {
    var scrollY = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* ---- Close FAQ siblings ---- */
  var details = document.querySelectorAll('.faq__item');
  details.forEach(function (detail) {
    detail.addEventListener('toggle', function () {
      if (!this.open) return;
      details.forEach(function (other) {
        if (other !== detail) other.open = false;
      });
    });
  });

  /* ---- Scroll Reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ---- Background Particles ---- */
  (function initParticles() {
    var container = document.getElementById('particles');
    if (!container) return;
    var colors = ['#e53935', '#ff5252', '#43a047', '#69f0ae'];
    var particleCount = window.innerWidth < 768 ? 20 : 40;

    for (var i = 0; i < particleCount; i++) {
      var particle = document.createElement('div');
      particle.className = 'bg-particle';
      var size = Math.random() * 3 + 1;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.animationDuration = (Math.random() * 12 + 8) + 's';
      particle.style.animationDelay = (Math.random() * 12) + 's';
      container.appendChild(particle);
    }
  })();

})();
