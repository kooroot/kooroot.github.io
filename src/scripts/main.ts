// Mobile menu toggle
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Close menu on link click
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// Header scroll background
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const update = () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-primary/95', 'backdrop-blur-lg', 'border-b', 'border-border');
    } else {
      header.classList.remove('bg-primary/95', 'backdrop-blur-lg', 'border-b', 'border-border');
    }
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

// IntersectionObserver scroll animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.fade-in-up, .stagger-children').forEach((el) => {
    observer.observe(el);
  });
}

// Typing animation (homepage only)
function initTypingAnimation() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const text = "Hi, I'm KOOROOT";
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent = text.slice(0, i + 1);
      i++;
      setTimeout(type, 80);
    }
  }

  type();
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initScrollAnimations();
  initTypingAnimation();
});

// Re-init on Astro page transitions (if using View Transitions)
document.addEventListener('astro:after-swap', () => {
  initMobileMenu();
  initHeaderScroll();
  initScrollAnimations();
  initTypingAnimation();
});
