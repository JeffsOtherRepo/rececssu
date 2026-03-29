// =====================
// Scroll animations
// =====================
function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

// =====================
// Navbar scroll effect
// =====================
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// =====================
// Mobile hamburger
// =====================
function initHamburger() {
  const trigger = document.querySelector('.navTrigger');
  const menu = document.querySelector('#mainListDiv');
  if (!trigger || !menu) return;
  trigger.addEventListener('click', () => {
    trigger.classList.toggle('active');
    menu.classList.toggle('show_list');
  });
  // close on link click
  document.querySelectorAll('.navlinks a').forEach(a => {
    a.addEventListener('click', () => {
      trigger.classList.remove('active');
      menu.classList.remove('show_list');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initFadeIn();
  initNavScroll();
  initHamburger();
});
