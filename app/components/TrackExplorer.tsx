'use client';
import { useState } from 'react';
import styles from './TrackExplorer.module.css';

const tracks = [
  {
    num: '01', icon: '🔗', name: 'TigerGraph', type: 'Premium', typeClass: 'amber',
    desc: 'Build scalable graph-powered applications — fraud detection, recommendation engines, knowledge graphs, and more using TigerGraph cloud.',
    tags: ['Graph DB', 'Connected Data', 'Analytics'],
    quizAnswer: 0,
  },
  {
    num: '02', icon: '⚡', name: "Hack 'N' Solve", type: 'Open Track', typeClass: 'dark',
    desc: 'Tackle real-world problems in FinTech, HealthTech, or AI. Build anything that creates measurable impact.',
    tags: ['FinTech', 'HealthTech', 'AI'],
    quizAnswer: 1,
  },
  {
    num: '03', icon: '🌱', name: 'Sustainability', type: 'Impact', typeClass: 'green',
    desc: 'Build solutions that address environmental or social impact — climate tech, circular economy, accessibility, and beyond.',
    tags: ['ClimaTech', 'Social Impact', 'Green'],
    quizAnswer: 2,
  },
  {
    num: '04', icon: '⚔️', name: 'Duality', type: 'Wild Card', typeClass: 'orange',
    desc: 'Your idea crosses multiple disciplines? Duality is for projects that defy a single category — bold, boundary-breaking builds.',
    tags: ['Cross-Domain', 'Experimental'],
    quizAnswer: 3,
  },
];

const quizOptions = [
  'Build with graphs & connected data',
  'Real-world FinTech / HealthTech / AI problem',
  'Environmental or social impact',
  'Something that crosses disciplines',
];

export default function TrackExplorer() {
  const [selected, setSelected] = useState<number | null>(null);

  const result = selected !== null ? tracks[selected] : null;

  return (
    <section id="tracks" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>PICK YOUR<br />ARENA</h2>
        <p className={styles.subtitle}>
          Four tracks. Four problem spaces. One event. See which track fits your idea — or use the matcher below.
        </p>
      </div>

      <div className={styles.grid}>
        {tracks.map((t, i) => (
          <div key={i} className={`${styles.card} ${styles[t.typeClass]}`} data-cursor>
            <span className={styles.ghost}>{t.num}</span>
            <div className={`${styles.badge} mono`}>{t.type}</div>
            <span className={styles.icon}>{t.icon}</span>
            <h3 className={styles.trackName}>{t.name}</h3>
            <p className={styles.desc}>{t.desc}</p>
            <div className={styles.tags}>
              {t.tags.map(tag => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Track Matcher Quiz */}
      <div className={styles.quizArea}>
        {/* Joyful Deer Decorative Element */}
        <div className={`${styles.joyfulDeer} ${selected !== null ? styles.deerActive : ''}`}>
          <img src="/cyber_deer_joyful_alpha.png" alt="Joyful Cyber Deer" />
        </div>

        <div className={styles.quiz}>
          <div className={styles.quizInner}>
            <p className={`${styles.quizLabel} mono`}>TRACK MATCHER QUIZ</p>
          <h3 className={styles.quizQ}>What kind of problem do you want to solve?</h3>
          <div className={styles.quizOptions}>
            {quizOptions.map((opt, i) => (
              <button
                key={i}
                className={`${styles.quizBtn} ${selected === i ? styles.quizBtnActive : ''}`}
                onClick={() => setSelected(i)}
                data-cursor
              >
                {opt}
              </button>
            ))}
          </div>

          {result && (
            <div className={styles.result}>
              <span className={`${styles.resultCheck} mono`}>✓ RECOMMENDED TRACK</span>
              <h4 className={styles.resultName}>{result.icon} {result.name}</h4>
              <p className={styles.resultDesc}>{result.desc}</p>
              <button className={styles.resetBtn} onClick={() => setSelected(null)} data-cursor>
                ← Retake
              </button>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
