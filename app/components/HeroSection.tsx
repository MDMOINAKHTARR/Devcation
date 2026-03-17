'use client';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid}>
        
        {/* Left Column */}
        <div className={styles.left}>
          {/* Decorative Sticker */}
          <div className={styles.starSticker}>
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
             </svg>
          </div>

          <div className={styles.eyebrow}>
            <span className={styles.liveDot} /> HACK 'N' SOLVE
          </div>
          
          <h1 className={styles.title}>
            DEVCATION<span className={styles.titleAccent}>'26</span>
          </h1>
          
          <div className={styles.subtitle}>
            GDG IIT DELHI × GDG IGDTUW
          </div>
          
          <p className={styles.desc}>
             India's premier 48-hour student hackathon. Build the future of technology with bleeding-edge AI, immersive Web3, and transformative cloud solutions.
          </p>

          <div className={styles.ctas}>
             <a href="https://unstop.com/hackathons/devcation-hack-n-solve-iit-delhi-1659241" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} data-cursor>REGISTER NOW</a>
             <a href="#tracks" className={styles.secondaryBtn} data-cursor>EXPLORE TRACKS</a>
          </div>

          {/* Marquee */}
          <div className={styles.marqueeWrap}>
             <div className={styles.marquee}>
                <span>INNOVATE • DISRUPT • BUILD • DEVCATION 2026 • </span>
                <span>INNOVATE • DISRUPT • BUILD • DEVCATION 2026 • </span>
                <span>INNOVATE • DISRUPT • BUILD • DEVCATION 2026 • </span>
             </div>
          </div>

          {/* Cyber Deer Mascot */}
          <div className={styles.mascot}>
             <img src="/cyber_deer_alpha.png" alt="Cyber Deer Mascot" />
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.right}>
          <div className={`${styles.statBlock} ${styles.bgGreen}`}>
            <span className={styles.statNum}>48</span>
            <span className={styles.statLabel}>HOURS TO BUILD</span>
            <div className={styles.blockIcon}>⚡</div>
          </div>
          
          <div className={`${styles.statBlock} ${styles.bgOrange}`}>
            <span className={styles.statNum}>₹1.5Lakh</span>
            <span className={styles.statLabel}>PRIZE POOL</span>
            <div className={styles.blockIcon}>🏆</div>
          </div>
          
          <div className={`${styles.statBlock} ${styles.bgCream}`}>
            <span className={styles.statNum}>1K+</span>
            <span className={styles.statLabel}>DEVELOPERS</span>
            <div className={styles.blockIcon}>💻</div>
          </div>
          
          <div className={styles.footerStrip}>
            Feb 27-28, 2026 • IIT Delhi
          </div>
        </div>
      </div>
    </section>
  );
}
