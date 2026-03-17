'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './CountdownSection.module.css';

const phases = [
  { label: 'Registration', date: new Date('2026-04-02T23:59:59+05:30'), info: 'Open to all college students. Register on Unstop before midnight, Apr 2.', range: 'Mar 15 → Apr 2' },
  { label: 'Submission', date: new Date('2026-04-04T23:59:59+05:30'), info: 'Submit your GitHub repo, PPT, and demo video by Apr 4.', range: 'Apr 3 → Apr 4' },
  { label: 'Mentorship', date: new Date('2026-04-07T18:00:00+05:30'), info: 'Eliminatory round — top teams get mentor sessions. Apr 5–7.', range: 'Apr 5 → Apr 7' },
  { label: 'Finale', date: new Date('2026-04-12T10:00:00+05:30'), info: 'Grand Finale at IIT Delhi. In-person event. Top teams present live.', range: 'Apr 12, 2026' },
];

function pad(n: number) { return String(n).padStart(2, '0'); }

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

const phaseProgress = [0, 33, 66, 100];

export default function CountdownSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [time, setTime] = useState(getTimeLeft(phases[0].date));
  const [remind1, setRemind1] = useState(false);
  const [remind2, setRemind2] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const prevS = useRef(-1);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setTime(getTimeLeft(phases[activePhase].date));
    prevS.current = -1;
  }, [activePhase]);

  useEffect(() => {
    const id = setInterval(() => {
      const t = getTimeLeft(phases[activePhase].date);
      setTime(t);
      prevS.current = t.s;
    }, 1000);
    return () => clearInterval(id);
  }, [activePhase]);

  const barWidth = 18 + ((phaseProgress[activePhase]) / 100) * 64; // 18% → 82%

  return (
    <section id="countdown" className={styles.section}>
      <div className={styles.grid}>
        {/* Left — Paper countdown */}
        <div className={styles.left}>
          <div className={styles.pills}>
            {phases.map((p, i) => (
              <button
                key={p.label}
                className={`${styles.pill} ${activePhase === i ? styles.pillActive : ''} mono`}
                onClick={() => setActivePhase(i)}
                data-cursor
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className={styles.digits} aria-live="polite" aria-label="Countdown timer">
            <div className={styles.digitGroup}>
              <span className={styles.digit}>{isMounted ? pad(time.d) : '00'}</span>
              <span className={styles.digitLabel}>DAYS</span>
            </div>
            <span className={styles.sep}>:</span>
            <div className={styles.digitGroup}>
              <span className={styles.digit}>{isMounted ? pad(time.h) : '00'}</span>
              <span className={styles.digitLabel}>HRS</span>
            </div>
            <span className={styles.sep}>:</span>
            <div className={styles.digitGroup}>
              <span className={styles.digit}>{isMounted ? pad(time.m) : '00'}</span>
              <span className={styles.digitLabel}>MIN</span>
            </div>
            <span className={styles.sep}>:</span>
            <div className={styles.digitGroup}>
              <span className={styles.digit}>{isMounted ? pad(time.s) : '00'}</span>
              <span className={styles.digitLabel}>SEC</span>
            </div>
          </div>

          <p className={`${styles.phaseRange} mono`}>{phases[activePhase].range}</p>
        </div>

        {/* Right — Ink progress panel */}
        <div className={styles.right}>
          <p className={`${styles.rightLabel} mono`}>HACKATHON PROGRESS</p>

          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${barWidth}%` }} />
          </div>
          <div className={styles.progressLabels}>
            {phases.map((p, i) => (
              <span key={i} className={`${styles.progressLbl} mono ${activePhase === i ? styles.progressLblActive : ''}`}>
                {p.label.toUpperCase()}
              </span>
            ))}
          </div>

          <div className={styles.infoCard}>
            <p className={`${styles.infoPhase} mono`}>{phases[activePhase].label.toUpperCase()}</p>
            <p className={styles.infoText}>{phases[activePhase].info}</p>
          </div>

          <div className={styles.reminders}>
            <p className={`${styles.remindersTitle} mono`}>MILESTONE REMINDERS</p>
            <label className={styles.checkRow} data-cursor>
              <span className={`${styles.checkbox} ${remind1 ? styles.checked : ''}`} onClick={() => setRemind1(!remind1)} />
              <span>Remind me 24h before submission</span>
            </label>
            <label className={styles.checkRow} data-cursor>
              <span className={`${styles.checkbox} ${remind2 ? styles.checked : ''}`} onClick={() => setRemind2(!remind2)} />
              <span>Remind me when shortlists drop</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
