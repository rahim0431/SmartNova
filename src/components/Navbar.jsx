import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', id: 'home', icon: 'H' },
  { label: 'Services', id: 'services', icon: 'S' },
  { label: 'Projects', id: 'projects', icon: 'R' },
  { label: 'Pricing', id: 'pricing', icon: 'P' },
  { label: 'Contact', id: 'contact', icon: 'C' },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('home');

  /* ── scroll: frosted glass on scroll ── */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* ── IntersectionObserver: active section ── */
  useEffect(() => {
    const els = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── close menu on desktop resize ── */
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  /* ── body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── smooth scroll ── */
  const goto = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  }, []);

  return (
    <>
      <nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar__inner">

          {/* Logo */}
          <button
            className="navbar__logo"
            onClick={() => goto('home')}
            aria-label="Back to top"
          >
            <img src="/Logo.svg" alt="SmartNova Logo" className="navbar__logo-image" />
          </button>

          {/* Desktop links */}
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button
                  className={`navbar__link${active === id ? ' active' : ''}`}
                  onClick={() => goto(id)}
                  aria-current={active === id ? 'page' : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: badge + CTA + hamburger */}
          <div className="navbar__right">
            <div className="navbar__avail" aria-label="Available for freelance work">
              <span className="navbar__avail-dot" aria-hidden="true" />
              Open to work
            </div>

            <button
              id="nav-hire-btn"
              className="navbar__cta"
              onClick={() => goto('contact')}
            >
              Hire Me
              <span className="navbar__cta-arrow" aria-hidden="true">→</span>
            </button>

            <button
              className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="navbar__bar" />
              <span className="navbar__bar" />
              <span className="navbar__bar" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`navbar__mobile${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, id, icon }) => (
          <button
            key={id}
            className={`navbar__mobile-link${active === id ? ' active' : ''}`}
            onClick={() => goto(id)}
            aria-current={active === id ? 'page' : undefined}
          >
            <span className="navbar__mobile-icon" aria-hidden="true">{icon}</span>
            {label}
          </button>
        ))}

        <div className="navbar__mobile-sep" />

        <button
          id="nav-mobile-hire-btn"
          className="navbar__mobile-cta"
          onClick={() => goto('contact')}
        >
          Hire Me
        </button>
      </div>
    </>
  );
};

export default Navbar;
