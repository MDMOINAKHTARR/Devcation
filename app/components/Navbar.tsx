'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = ['Timeline', 'Tracks', 'Features', 'Prizes', 'FAQ'];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const sections = links.map(l => document.getElementById(l.toLowerCase()));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.brandWrap}>
        <a href="#hero" className={styles.brand} data-cursor>
          DEVCATION<span className={styles.brandHighlight}>26</span>
        </a>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className={`${styles.link} ${active === l.toLowerCase() ? styles.activeLink : ''}`}
              onClick={() => setMenuOpen(false)}
              data-cursor
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <a href="https://unstop.com/hackathons/devcation-hack-n-solve-iit-delhi-1659241" target="_blank" rel="noopener noreferrer" className={styles.navBtn} data-cursor>
          REGISTER
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          data-cursor
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
