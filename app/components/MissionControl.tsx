'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './MissionControl.module.css';

/* ── Types ─────────────────────────────────── */
interface TeamListing {
  id: string;
  initials: string;
  name: string;
  spots: number;
  need: string;
  skills: string[];
  contact: string;
  ts: number;
}

/* ── Seed data ─────────────────────────────── */
const SEED_LISTINGS: TeamListing[] = [
  { id: 'seed-1', initials: 'AK', name: 'Arjun Kumar', spots: 2, need: 'Looking for a Designer + ML Engineer', skills: ['Backend', 'Web3'], contact: 'arjun@example.com', ts: Date.now() - 3600000 },
  { id: 'seed-2', initials: 'PS', name: 'Priya Sharma', spots: 3, need: 'All roles open — join a full team!', skills: ['Frontend', 'ML'], contact: 'priya@example.com', ts: Date.now() - 7200000 },
  { id: 'seed-3', initials: 'RN', name: 'Rahul Nair', spots: 1, need: 'Need a Frontend Developer', skills: ['Backend', 'DS'], contact: 'rahul@example.com', ts: Date.now() - 14400000 },
  { id: 'seed-4', initials: 'SG', name: 'Sneha Gupta', spots: 2, need: 'Looking for Backend + Design skills', skills: ['Frontend', 'ML'], contact: 'sneha@example.com', ts: Date.now() - 18000000 },
];

const SKILL_LABELS = ['ML / AI', 'Frontend', 'Design', 'Backend', 'Data', 'Web3', 'DS', 'Blockchain', 'DevOps'];

/* ── Helpers ───────────────────────────────── */
function getPhase() {
  const now = Date.now();
  if (now < new Date('2026-04-02T23:59:59+05:30').getTime()) return 'REGISTRATION — LIVE NOW';
  if (now < new Date('2026-04-04T23:59:59+05:30').getTime()) return 'SUBMISSION — LIVE NOW';
  if (now < new Date('2026-04-07T18:00:00+05:30').getTime()) return 'MENTORSHIP ROUND — LIVE';
  return 'GRAND FINALE';
}

function computeSkillDemand(listings: TeamListing[]) {
  const counts: Record<string, number> = {};
  listings.forEach(l => l.skills.forEach(s => { counts[s] = (counts[s] || 0) + 1; }));
  const max = Math.max(1, ...Object.values(counts));
  return SKILL_LABELS.map(label => {
    const raw = Object.entries(counts).find(([k]) => k.toLowerCase().includes(label.toLowerCase().split(' /')[0]))?.[1] ?? 0;
    return { label, pct: Math.round(50 + (raw / max) * 50) };
  }).sort((a, b) => b.pct - a.pct).slice(0, 6);
}

const STORAGE_KEY = 'devcation_team_listings';

/* ── Component ─────────────────────────────── */
export default function MissionControl() {
  const countRef = useRef<HTMLSpanElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [registered, setRegistered] = useState(347);
  const [phase, setPhase] = useState('REGISTRATION — LIVE NOW');
  const [listings, setListings] = useState<TeamListing[]>([]);
  const [skills, setSkills] = useState(computeSkillDemand(SEED_LISTINGS));
  const [showModal, setShowModal] = useState(false);

  // Form state
  const [formName, setFormName] = useState('');
  const [formSpots, setFormSpots] = useState('2');
  const [formNeed, setFormNeed] = useState('');
  const [formSkills, setFormSkills] = useState('');
  const [formContact, setFormContact] = useState('');
  const [formError, setFormError] = useState('');

  /* Load listings from localStorage */
  const loadListings = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: TeamListing[] = JSON.parse(stored);
        setListings(parsed);
        setSkills(computeSkillDemand(parsed));
      } else {
        setListings(SEED_LISTINGS);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_LISTINGS));
        setSkills(computeSkillDemand(SEED_LISTINGS));
      }
    } catch {
      setListings(SEED_LISTINGS);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
    loadListings();

    // Days to finale
    const diff = new Date('2026-04-12T00:00:00+05:30').getTime() - Date.now();
    setDaysLeft(Math.max(0, Math.floor(diff / 86400000)));
    setPhase(getPhase());

    // Slowly increment registered count (simulate real-time)
    let reg = 347;
    const ticker = setInterval(() => {
      if (Math.random() < 0.3) {
        reg += 1;
        setRegistered(reg);
      }
    }, 8000);

    return () => clearInterval(ticker);
  }, [loadListings]);

  // Count-up animation for registered
  useEffect(() => {
    if (!isMounted) return;
    const el = countRef.current;
    if (!el) return;
    const target = registered;
    const start = Math.max(284, target - 20);
    const duration = 1400;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      el.textContent = String(Math.round(start + (target - start) * progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { requestAnimationFrame(step); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [isMounted, registered]);

  /* Submit new listing */
  const handlePost = () => {
    if (!formName.trim()) { setFormError('Name is required.'); return; }
    if (!formNeed.trim()) { setFormError('Describe what you need.'); return; }
    if (!formContact.trim()) { setFormError('Contact info is required.'); return; }
    const skillArr = formSkills.split(',').map(s => s.trim()).filter(Boolean);
    if (skillArr.length === 0) { setFormError('Add at least one skill tag.'); return; }

    const initials = formName.trim().split(' ').slice(0, 2).map(w => w[0].toUpperCase()).join('');
    const newListing: TeamListing = {
      id: `user-${Date.now()}`,
      initials,
      name: formName.trim(),
      spots: Math.max(1, Math.min(4, parseInt(formSpots) || 2)),
      need: formNeed.trim(),
      skills: skillArr,
      contact: formContact.trim(),
      ts: Date.now(),
    };

    const updated = [newListing, ...listings];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setListings(updated);
    setSkills(computeSkillDemand(updated));
    setShowModal(false);
    setFormName(''); setFormSpots('2'); setFormNeed(''); setFormSkills(''); setFormContact(''); setFormError('');
  };

  const removeListing = (id: string) => {
    const updated = listings.filter(l => l.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setListings(updated);
    setSkills(computeSkillDemand(updated));
  };

  return (
    <>
      {/* Post Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={e => e.target === e.currentTarget && setShowModal(false)}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>POST YOUR LISTING</span>
              <button className={styles.modalClose} onClick={() => setShowModal(false)}>×</button>
            </div>
            <div className={styles.modalBody}>
              {formError && <p className={styles.formError}>{formError}</p>}
              <label className={styles.formField}>
                <span className={`${styles.formLabel} mono`}>YOUR NAME *</span>
                <input className={styles.formInput} value={formName} placeholder="e.g. Alex Kumar" onChange={e => setFormName(e.target.value)} />
              </label>
              <label className={styles.formField}>
                <span className={`${styles.formLabel} mono`}>SPOTS AVAILABLE *</span>
                <select className={styles.formInput} value={formSpots} onChange={e => setFormSpots(e.target.value)}>
                  <option value="1">1 Spot</option>
                  <option value="2">2 Spots</option>
                  <option value="3">3 Spots</option>
                  <option value="4">4 Spots (Full team)</option>
                </select>
              </label>
              <label className={styles.formField}>
                <span className={`${styles.formLabel} mono`}>WHAT YOU NEED *</span>
                <textarea className={styles.formTextarea} value={formNeed} placeholder="e.g. Looking for a full-stack dev and a ML engineer" onChange={e => setFormNeed(e.target.value)} rows={2} />
              </label>
              <label className={styles.formField}>
                <span className={`${styles.formLabel} mono`}>SKILL TAGS * (comma-separated)</span>
                <input className={styles.formInput} value={formSkills} placeholder="e.g. Backend, ML, Design" onChange={e => setFormSkills(e.target.value)} />
              </label>
              <label className={styles.formField}>
                <span className={`${styles.formLabel} mono`}>CONTACT (email/WhatsApp) *</span>
                <input className={styles.formInput} value={formContact} placeholder="email or +91 XXXXX XXXXX" onChange={e => setFormContact(e.target.value)} />
              </label>
              <button className={styles.submitBtn} onClick={handlePost} data-cursor>POST LISTING →</button>
            </div>
          </div>
        </div>
      )}

      <section id="features" className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>MISSION<br />CONTROL</h2>
          <p className={styles.subtitle}>Live stats, team listings, and real-time demand signals from the Devcation community.</p>
        </div>

        <div className={styles.grid}>
          {/* Live Stats */}
          <div className={styles.stats}>
            <p className={`${styles.panelLabel} mono`}>LIVE STATS</p>
            <div className={styles.statRow}>
              <div className={styles.bigStat}>
                <span ref={countRef} className={styles.bigNum}>{isMounted ? registered : 347}</span>
                <span className={`${styles.bigLabel} mono`}>REGISTERED</span>
                <span className="live-dot" style={{ marginTop: 4 }} />
              </div>
              <div className={styles.bigStat}>
                <span className={styles.bigNum}>{isMounted ? daysLeft : '--'}</span>
                <span className={`${styles.bigLabel} mono`}>DAYS TO FINALE</span>
              </div>
              <div className={styles.bigStat}>
                <span className={styles.bigNum}>{isMounted ? listings.length : 4}</span>
                <span className={`${styles.bigLabel} mono`}>TEAMS SEEKING MEMBERS</span>
                <span className="live-dot" style={{ marginTop: 4 }} />
              </div>
            </div>
            <div className={styles.phase}>
              <span className="live-dot" />
              <span className={`${styles.phaseLabel} mono`}>PHASE: {isMounted ? phase : 'REGISTRATION — LIVE NOW'}</span>
            </div>
          </div>

          {/* Team Finder */}
          <div className={styles.teamFinder}>
            <div className={styles.teamFinderHeader}>
              <p className={`${styles.panelLabel} mono`} style={{ marginBottom: 0 }}>TEAM FINDER BOARD</p>
              <span className={`${styles.liveCount} mono`}>{isMounted ? listings.length : 4} ACTIVE</span>
            </div>
            <div className={styles.listings}>
              {listings.map((t) => (
                <div key={t.id} className={styles.listing}>
                  <div className={styles.avatar}>{t.initials}</div>
                  <div className={styles.listingBody}>
                    <div className={styles.listingTop}>
                      <span className={styles.listingName}>{t.name}</span>
                      <span className={`${styles.spotsLabel} mono`}>{t.spots} {t.spots === 1 ? 'spot' : 'spots'} open</span>
                    </div>
                    <p className={styles.listingNeed}>{t.need}</p>
                    <div className={styles.skillChips}>
                      {t.skills.map(s => (
                        <span key={s} className={`${styles.skillChip} mono`}>{s}</span>
                      ))}
                    </div>
                    <div className={styles.listingActions}>
                      <a href={t.contact.includes('@') ? `mailto:${t.contact}` : `https://wa.me/${t.contact.replace(/\D/g,'')}`} className={styles.contactBtn} data-cursor target="_blank" rel="noopener">Contact →</a>
                      {t.id.startsWith('user-') && (
                        <button className={styles.removeBtn} onClick={() => removeListing(t.id)} data-cursor>Remove</button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.postBtn} onClick={() => setShowModal(true)} data-cursor>
              + POST YOUR TEAM LISTING
            </button>
          </div>

          {/* Skill Demand Matrix */}
          <div className={styles.skillMatrix}>
            <p className={`${styles.panelLabel} mono`}>SKILL DEMAND MATRIX</p>
            <p className={styles.matrixSub}>Which skills are most needed across Devcation teams right now.</p>
            <div className={styles.bars}>
              {skills.map(s => (
                <div key={s.label} className={styles.barRow}>
                  <span className={`${styles.barLabel} mono`}>{s.label}</span>
                  <div className={styles.barBg}>
                    <div className={styles.barFill} style={{ width: `${s.pct}%` }} />
                  </div>
                  <span className={`${styles.barPct} mono`}>{s.pct}%</span>
                </div>
              ))}
            </div>

            <div className={styles.quickActions}>
              <p className={`${styles.panelLabel} mono`} style={{ marginBottom: 12 }}>QUICK ACTIONS</p>
              <a href="https://unstop.com/hackathons/devcation-hack-n-solve-iit-delhi-1659241" target="_blank" rel="noopener" className={`${styles.actionBtn} ${styles.actionBtnPrimary}`} data-cursor>REGISTER NOW</a>
              <a href="https://tigergraph.com" target="_blank" rel="noopener" className={styles.actionBtn} data-cursor>TIGERGRAPH TRACK DOCS</a>
              <a href="mailto:dscigdtuw@gmail.com" className={styles.actionBtn} data-cursor>CONTACT ORGANIZERS</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
