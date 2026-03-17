import styles from './MarqueeTicker.module.css';

const text = "HACK 'N' SOLVE · GRAND FINALE @ IIT DELHI · APR 12, 2026 · ₹1,50,000 IN PRIZES · REGISTER BY APR 2 · TIGERGRAPH TRACK · FOUR TRACKS · ₹1.5L PRIZE POOL ·";

export default function MarqueeTicker() {
  return (
    <div className={styles.strip} aria-label="Event highlights ticker">
      <div className={styles.track}>
        <span className={styles.text}>{text}&nbsp;&nbsp;</span>
        <span className={styles.text} aria-hidden="true">{text}&nbsp;&nbsp;</span>
      </div>
    </div>
  );
}
