import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>DEVCATION<span className={styles.accent}>&rsquo;26</span></span>
          <p className={styles.org}>Organized by GDG On Campus IGDTUW × GDG IIT Delhi</p>
          <p className={styles.hashtag}>#NextStopDevcation</p>
        </div>

        <div className={styles.right}>
          <div className={styles.col}>
            <p className={styles.label}>CONTACT</p>
            <a href="mailto:dscigdtuw@gmail.com" className={styles.link}>dscigdtuw@gmail.com</a>
            <a href="tel:+919625580383" className={styles.link}>+91 96255 80383</a>
          </div>
          <div className={styles.col}>
            <p className={styles.label}>EVENT</p>
            <span className={styles.detail}>Grand Finale: April 12, 2026</span>
            <span className={styles.detail}>IIT Delhi, New Delhi</span>
            <span className={styles.detail}>Prize Pool: ₹1,50,000</span>
          </div>
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <div className={styles.bar}>
          <span className={styles.copyright}>
            © 2026 Devcation — Designed for Devcation Hack &apos;N&apos; Solve, IIT Delhi
          </span>
        </div>
        <a href="https://unstop.com/hackathons/devcation-hack-n-solve-iit-delhi-1659241" target="_blank" rel="noopener noreferrer" className={styles.registerBlock} data-cursor>
          <span className={styles.registerText}>REGISTER NOW</span>
          <span className={styles.registerArrow}>→</span>
        </a>
      </div>
    </footer>
  );
}
