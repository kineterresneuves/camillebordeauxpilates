/* =============================================
   CAMILLE BORDEAUX PILATES – script.js
   ============================================= */

/* ---- Hamburger / Mobile Nav ---- */
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header__nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen.toString());
  });

  // Close nav when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---- Smooth scroll: Contact → Footer ---- */
const contactLink = document.getElementById('contact-link');
if (contactLink) {
  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* ---- Scroll reveal animation ---- */
function initScrollReveal() {
  // Add .reveal class to sections and cards
  const targets = document.querySelectorAll(
    '.method__card, .review-card, .parcours__text, .parcours__photo, .info__pricing, .info__location, .cta-final__inner'
  );

  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = Array.from(entry.target.parentElement.children);
        const delay = siblings.indexOf(entry.target) * 100;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
}

/* ---- Header shadow on scroll ---- */
function initHeaderShadow() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 2px 16px rgba(0,0,0,0.08)'
      : 'none';
  }, { passive: true });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initHeaderShadow();
});
