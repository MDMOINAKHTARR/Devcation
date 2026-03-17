'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './DevBot.module.css';

interface Message { role: 'bot' | 'user'; text: string; }

const rules: [RegExp, string][] = [
  [/track|domain|tigergraph|sustainability|duality/i,
    '🔗 We have 4 tracks:\n1. TigerGraph — Graph DB & connected data (Premium)\n2. Hack \'N\' Solve — FinTech / HealthTech / AI (Open)\n3. Sustainability — Environmental & social impact\n4. Duality — Cross-discipline, experimental builds\n\nNot sure which fits you? Use the Track Matcher Quiz above ↑'],
  [/deadline|when|last date|time|close/i,
    '📅 Key deadlines (all IST):\n• Registration: Apr 2, 2026 — 11:59 PM\n• Submission: Apr 4, 2026 — 11:59 PM\n• Mentorship Round: Apr 5–7\n• Grand Finale: Apr 12, 2026 @ IIT Delhi'],
  [/register|how to join|sign up|form|enroll/i,
    '✅ Register on Unstop — search "Devcation Hack \'N\' Solve". Registration is free! Deadline is Apr 2, 2026.\n\nunstop.com → Search "Devcation 2026"'],
  [/prize|reward|money|cash|win|₹/i,
    '🏆 Prize breakdown:\n• 1st Place: ₹75,000\n• 2nd Place: ₹40,000\n• 3rd Place: ₹20,000\n• Total pool: ₹1,50,000\n\nTigerGraph Premium Track has a separate prize pool announced separately.'],
  [/submit|submission|github|ppt|demo|project/i,
    '📦 Submission requirements:\n• GitHub repository (code must be public)\n• 10-slide PPT (problem, solution, tech stack, demo)\n• 3-minute demo video (YouTube/GDrive link)\n\nSubmit on Unstop by Apr 4, 11:59 PM IST.'],
  [/mentor|mentorship/i,
    '👩‍💻 Mentorship Round (Apr 5–7) is an eliminatory round. Shortlisted teams get 30-min sessions with industry mentors. Only teams that pass advance to the Grand Finale.'],
  [/iit|venue|finale|in.person|delhi|location/i,
    '📍 Grand Finale: April 12, 2026\nVenue: IIT Delhi Campus, New Delhi\nIn-person event. Travel/accommodation is on participants. Shortlisted teams will receive venue details by email.'],
  [/contact|email|phone|whatsapp|organizer|help/i,
    '📬 Reach the organizers:\n• Email: dscigdtuw@gmail.com\n• WhatsApp: +91 96255 80383\n• Instagram: @gdscigdtuw | @gdsc.iitd\n\nWe typically respond within 24 hours on weekdays.'],
  [/eligible|who can|qualify|criteria|allow/i,
    '✅ Eligibility:\n• Any college/university student in India\n• Both UG & PG students welcome\n• International students at Indian colleges may participate\n• Solo & team participation (1–4 members) allowed'],
  [/team|solo|partner|teammate|find|group/i,
    '👥 You can participate solo or as a team of up to 4 members. Use the Team Finder Board on this page to find teammates. Skill chips help you find the right match for your project.'],
];

const quickReplies = ["Which track?", "Deadline?", "Register?", "Prizes?", "Eligible?"];

function getResponse(input: string): string {
  for (const [pattern, response] of rules) {
    if (pattern.test(input)) return response;
  }
  return "Hmm, I didn't quite catch that 🤔 Try asking about: tracks, deadlines, registration, prizes, submission, eligibility, or team finder!";
}

export default function DevBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi! I'm DevBot 🤖 Ask me anything about Devcation Delhi 2026 — tracks, deadlines, prizes, registration, or team finding!" }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = (text: string) => {
    const userMsg = text.trim();
    if (!userMsg) return;
    setMessages(m => [...m, { role: 'user', text: userMsg }]);
    setTimeout(() => {
      setMessages(m => [...m, { role: 'bot', text: getResponse(userMsg) }]);
    }, 400);
    setInput('');
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') send(input);
  };

  return (
    <>
      {/* Floating trigger */}
      <button
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Open DevBot Chat Assistant"
        data-cursor
      >
        {open ? '×' : '🤖'}
      </button>

      {/* Chat panel */}
      <div className={`${styles.panel} ${open ? styles.panelOpen : ''}`} role="dialog" aria-modal="true" aria-label="DevBot Chat">
        <div className={styles.panelHeader}>
          <span className={styles.botName}>DEVBOT</span>
          <span className={styles.status}>
            <span className={styles.liveDot} style={{ width: 8, height: 8 }} /> Online
          </span>
        </div>

        <div className={styles.messages} aria-live="polite">
          {messages.map((m, i) => (
            <div key={i} className={`${styles.msg} ${m.role === 'user' ? styles.msgUser : styles.msgBot}`}>
              <pre className={styles.msgText}>{m.text}</pre>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick replies - show only at start */}
        {messages.length <= 1 && (
          <div className={styles.quickReplies}>
            {quickReplies.map(q => (
              <button key={q} className={styles.qr} onClick={() => send(q)} data-cursor>{q}</button>
            ))}
          </div>
        )}

        <div className={styles.inputRow}>
          <input
            className={styles.input}
            type="text"
            placeholder="Ask anything..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKey}
            aria-label="Chat input"
          />
          <button className={styles.sendBtn} onClick={() => send(input)} data-cursor aria-label="Send message">→</button>
        </div>
      </div>
    </>
  );
}
