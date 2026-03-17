import styles from './TimelineSection.module.css';

const stages = [
  {
    num: '01',
    title: 'Mandatory Registration',
    range: 'Mar 15 → Apr 2',
    desc: 'Register your team on Unstop. Open to all college students across India. Solo participants allowed.',
    status: '● Live Now',
    statusClass: 'live',
    current: true,
  },
  {
    num: '02',
    title: "Hack 'N' Solve Submission",
    range: 'Apr 3 → Apr 4',
    desc: 'Submit your GitHub repository, a 10-slide PPT, and a 3-minute demo video on Unstop.',
    status: 'Upcoming',
    statusClass: 'upcoming',
    current: false,
  },
  {
    num: '03',
    title: 'Mentorship Round',
    range: 'Apr 5 → Apr 7',
    desc: 'Top shortlisted teams receive 30-minute mentorship sessions. Eliminatory — only finalists proceed.',
    status: 'Eliminatory',
    statusClass: 'elim',
    current: false,
  },
  {
    num: '04',
    title: 'Grand Finale at IIT Delhi',
    range: 'Apr 12, 2026',
    desc: 'In-person finale at IIT Delhi campus. Top teams present live to a panel of judges. ₹1,50,000 in prizes.',
    status: '★ Finale',
    statusClass: 'finale',
    current: false,
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className={styles.section}>
      <div className={styles.inner}>
        <aside className={styles.sidebar}>
          <h2 className={styles.sideTitle}>FOUR<br />STAGES</h2>
          <p className={styles.sideDesc}>
            From registration to the Grand Finale — every milestone you need to know.
          </p>
          <div className={styles.timelineDeer}>
            <img src="/cyber_deer_front_orange_alpha.png" alt="Cyber Deer Defender" />
          </div>
        </aside>

        <div className={styles.stages}>
          {stages.map((s) => (
            <div key={s.num} className={`${styles.card} ${s.current ? styles.current : ''}`} data-cursor>
              <div className={styles.cardRow}>
                <span className={`${styles.num} ${s.current ? styles.numActive : ''}`}>{s.num}</span>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={`${styles.range} mono`}>{s.range}</span>
                    <span className={`${styles.badge} ${styles[s.statusClass as keyof typeof styles]} mono`}>
                      {s.status}
                    </span>
                  </div>
                  <h3 className={styles.title}>{s.title}</h3>
                  <p className={styles.desc}>{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
