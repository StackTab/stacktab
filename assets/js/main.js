/* ==========================================================================
   StackTab Main Script v2
   Theme toggle, scroll effects, and smooth scrolling
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavScroll();
  initSmoothScroll();
  initCopyrightYear();
});

/* --------------------------------------------------------------------------
   Theme Toggle — Light / Dark
   Reads from localStorage, respects system preference as fallback
-------------------------------------------------------------------------- */
function initThemeToggle() {
  const html   = document.documentElement;
  const btn    = document.getElementById('theme-toggle');

  // Determine initial theme:
  // 1. Saved preference, or
  // 2. OS preference, or
  // 3. Default to light
  const saved    = localStorage.getItem('stacktab-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial  = saved || (prefersDark ? 'dark' : 'light');

  applyTheme(initial);

  if (!btn) return;

  btn.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const next   = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('stacktab-theme', next);
  });

  // Sync when OS preference changes (e.g., user switches system theme)
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (!localStorage.getItem('stacktab-theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
}

function applyTheme(theme) {
  const html = document.documentElement;
  if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
  }
}

/* --------------------------------------------------------------------------
   Nav scroll shadow
-------------------------------------------------------------------------- */
function initNavScroll() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  const observer = new IntersectionObserver(
    ([entry]) => nav.classList.toggle('scrolled', !entry.isIntersecting),
    { rootMargin: '-1px 0px 0px 0px', threshold: 0 }
  );

  // Observe a sentinel element at the top of the page
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px;';
  document.body.prepend(sentinel);
  observer.observe(sentinel);
}

/* --------------------------------------------------------------------------
   Smooth scroll for anchor links
-------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#' || !id) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Dynamic Copyright Year
-------------------------------------------------------------------------- */
function initCopyrightYear() {
  const el = document.getElementById('copyright-year');
  if (el) {
    el.textContent = new Date().getFullYear();
  }
}
