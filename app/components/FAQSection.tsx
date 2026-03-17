'use client';
import { useState } from 'react';
import styles from './FAQSection.module.css';

const faqs = [
  { q: 'Who can participate?', a: 'Any student currently enrolled in a college or university in India. Both undergraduate and postgraduate students are eligible. International students at Indian institutions may also participate.' },
  { q: 'What do I need to submit?', a: 'A working GitHub repository with your code, a 10-slide PPT (problem, solution, tech stack, demo), and a 3-minute demo video uploaded to YouTube or Google Drive.' },
  { q: 'What is the TigerGraph Premium Track?', a: 'A sponsored track where you must build a solution using TigerGraph\'s graph database cloud platform. Separate prize pool applies. Required: use TigerGraph Cloud and include a graph schema diagram in your submission.' },
  { q: 'Is the Grand Finale in person?', a: 'Yes — the Grand Finale on April 12, 2026 is an in-person event at IIT Delhi. Shortlisted teams from the Mentorship Round will be required to present live. Travel/accommodation is not covered.' },
  { q: 'What is the registration deadline?', a: 'Registration closes on April 2, 2026 at 11:59 PM IST. Late registrations will not be accepted. Register early — the countdown timer on this page shows exactly how much time remains.' },
  { q: 'Can a solo participant compete?', a: 'Yes, solo participants are allowed across all tracks. However, teams of 2–4 members are encouraged, especially for tracks requiring full-stack implementation. Use the Team Finder Board to find teammates.' },
  { q: 'How do I contact the organizers?', a: 'Email: dscigdtuw@gmail.com | WhatsApp: +91 96255 80383 | Instagram: @gdscigdtuw and @gdsc.iitd. Response time is typically within 24 hours on weekdays.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <aside className={styles.sidebar}>
          <h2 className={styles.sideTitle}>FREQUENTLY<br />ASKED</h2>
          <p className={styles.sideDesc}>Everything you need to know before you register.</p>
          <div className={styles.faqDeer}>
            <img src="/cyber_deer_side_alpha.png" alt="Cyber Deer Guide" />
          </div>
        </aside>

        <div className={styles.accordion}>
          {faqs.map((f, i) => {
            const panelId = `faq-panel-${i}`;
            const triggerId = `faq-trigger-${i}`;
            return (
              <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
                <button
                  id={triggerId}
                  className={styles.trigger}
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={panelId}
                  data-cursor
                >
                  <span className={styles.q}>{f.q}</span>
                  <span className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}>+</span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`${styles.answer} ${open === i ? styles.answerOpen : ''}`}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
