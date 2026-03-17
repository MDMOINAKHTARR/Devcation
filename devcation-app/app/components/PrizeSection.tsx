import styles from './PrizeSection.module.css';

const prizes = [
  { place: '1st Place', amount: '₹75,000', bg: 'gold', rank: 1 },
  { place: '2nd Place', amount: '₹40,000', bg: 'standard', rank: 2 },
  { place: '3rd Place', amount: '₹20,000', bg: 'bronze', rank: 3 },
];

export default function PrizeSection() {
  return (
    <section id="prizes" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>PRIZES</h2>
        <p className={styles.subtitle}>Building something extraordinary deserves a prize that matches the ambition.</p>
      </div>

      {/* Cyber Deer Background Graphic */}
      <div className={styles.leapingDeer}>
         <img src="/cyber_deer_leaping.png" alt="Leaping Cyber Deer" />
      </div>

      <div className={styles.podium}>
        {/* Reorder to 2-1-3 podium layout */}
        {[prizes[1], prizes[0], prizes[2]].map((p) => (
          <div key={p.place} className={`${styles.card} ${styles[p.bg]} ${p.rank === 1 ? styles.elevated : ''}`} data-cursor>
            <span className={`${styles.place} mono`}>{p.place}</span>
            <span className={styles.amount}>{p.amount}</span>
            {p.rank === 1 && <span className={`${styles.crown}`}>🏆</span>}
          </div>
        ))}
      </div>

      <div className={styles.totalBar}>
        <span className={`${styles.totalLabel} mono`}>TOTAL PRIZE POOL</span>
        <span className={styles.totalAmount}>₹1,50,000</span>
        <span className={`${styles.totalNote} mono`}>+ TigerGraph Premium Track prizes awarded separately</span>
      </div>
    </section>
  );
}
