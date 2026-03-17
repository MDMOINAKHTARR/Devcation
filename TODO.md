# ✅ Devcation Delhi 2026 — Hackathon Page Revamp TODO

> Based on PRD v2 + Design Document (Physics-Editorial Edition)
> Stack: Vanilla HTML / CSS / JS · Matter.js · GSAP

---

## 🗂️ PHASE 0 — Project Setup

- [ ] Create single `index.html` file (zero framework dependencies)
- [ ] Link Google Fonts CDN: `Bebas Neue`, `DM Sans`, `DM Mono`
- [ ] Import `Matter.js` via CDN for physics engine
- [ ] Import `GSAP` (GreenSock) via CDN for scroll animations
- [ ] Define CSS custom properties (design tokens)
  - [ ] Colors: `--ink`, `--paper`, `--cream`, `--amber`, `--amber-d`, `--amber-l`, `--coal`, `--mid`, `--muted`, `--line`, `--red`, `--green`
  - [ ] Typography scale (Bebas Neue sizes for hero, headings, stats; DM Sans body)
  - [ ] Spacing & grid variables (32–56px section padding, 40px gutter)
- [ ] Add SVG grain noise filter and apply as full-page overlay at 0.6 opacity
- [ ] Add CSS reset / base styles (no border-radius, no box-shadow)
- [ ] Verify Lighthouse baseline (performance, accessibility)

---

## 🧭 F0 — Navigation Bar

- [ ] Create fixed top nav bar (52px height, ink background, amber bottom border)
- [ ] Add logo: `DEVCATION'26` with amber-colored `'26` accent
- [ ] Add nav links: `Timeline`, `Tracks`, `Features`, `Prizes`, `FAQ`
  - [ ] Set all links as anchor (`#section-id`) scrolls
  - [ ] Hide nav links on mobile (keep CTA visible)
- [ ] Add `REGISTER →` CTA button (amber, monospace font, box style)
- [ ] Implement active section highlighting on scroll
  - [ ] Use `IntersectionObserver` to detect current section
  - [ ] Add/remove active class on nav links accordingly
- [ ] Test mobile collapse behavior

---

## 🦸 F1 — Hero Section

- [ ] Create 2-column CSS Grid layout (2/3 headline + 1/3 stats sidebar)
- [ ] **Left column**
  - [ ] Add eyebrow: pulsing red dot + `"GDG IGDTUW × GDG IIT Delhi — Registration Live"`
  - [ ] Add ghost background text `"HACK"` in 28vw hollow Bebas Neue behind the headline
  - [ ] Add main title `"DEVCATION / DELHI / 2026"` — Bebas Neue 100px+, amber on `"DELHI"`
  - [ ] Add sub-headline `"HACK 'N' SOLVE"` in Bebas Neue
  - [ ] Add description paragraph (DM Sans Light, 300 weight, 16px)
  - [ ] Add two CTAs: `"Register Now"` (ink-filled) + `"Check Countdown"` (outline)
- [ ] **Right column (stats sidebar)**
  - [ ] Display 4 stats: `₹1.5L Prize Pool`, `04 Tracks`, `1–4 Team Size`, `Apr 12 Finale`
  - [ ] Style each stat: large Bebas Neue number + DM Mono label, separated by 1px lines
  - [ ] Add ink footer bar crediting organizers
- [ ] Add 1px column separator border between columns
- [ ] Apply SVG grain texture to hero background
- [ ] **Physics (Matter.js):** Fragmented Delhi Gate + Deer Mascot shards fall from top on page load
  - [ ] Create low-poly fragment bodies in Matter.js
  - [ ] Set up gravity world and render canvas overlaid on hero
  - [ ] On click, flick fragments — if fragment hits a Track Card or Timeline Node, trigger shake animation on that element
  - [ ] Ensure no two users see the same layout (physics-driven asymmetry)
- [ ] `prefers-reduced-motion`: Fall back to static layout, hide canvas

---

## 📢 F2 — Marquee Ticker Strip

- [ ] Create a full-width ticker strip between Hero and Countdown sections
- [ ] Add 2px black borders (top and bottom)
- [ ] Set amber background with ink text
- [ ] Add ticker content: `"HACK 'N' SOLVE · GRAND FINALE @ IIT DELHI · APR 12, 2026 · ₹1,50,000 IN PRIZES · REGISTER BY APR 2 · TIGERGRAPH TRACK ·"` (duplicate for seamless loop)
- [ ] Implement infinite `translateX` CSS animation (22-second loop)
- [ ] **Physics enhancement:** Vary scroll speed based on scroll velocity

---

## ⏱️ F3 — Multi-Phase Countdown Timer ⭐ Original Feature #1

- [ ] Create 2-column section layout (left: paper bg, right: ink bg)
- [ ] **Left panel — Countdown clock**
  - [ ] Add phase pill tabs: `Registration | Submission | Mentorship | Finale`
    - [ ] Style active pill with amber fill
    - [ ] On click, switch target date and update info card
  - [ ] Display `D : H : M : S` digits in Bebas Neue 72px
  - [ ] **Physics touch:** Each digit is a 3D block — on minute change, old digit "falls" out, new one "drops" in with a heavy thud animation (GSAP or CSS perspective transform)
- [ ] **Right panel — Progress and info**
  - [ ] Add 4px amber fill progress bar showing current hackathon phase position
    - [ ] Labels: `Registration → Submission → Mentorship → Finale`
    - [ ] Animated width fill on page mount
  - [ ] Add phase info card (updates when pill tab is clicked)
    - [ ] Show current phase name, date range, description
  - [ ] Add milestone reminder checkboxes (custom amber UI)
    - [ ] `"Remind me 24h before submission"`
    - [ ] `"Remind me when shortlists drop"`
    - [ ] Toggle animation on check/uncheck
- [ ] Implement JS countdown: `setInterval`, IST timezone (`+05:30` offset), pure Date arithmetic
- [ ] No external library dependency for countdown

---

## 📅 F4 — Interactive Timeline

- [ ] Create 2-column layout: sticky sidebar + scrollable stage cards
- [ ] **Sticky sidebar**
  - [ ] `"FOUR STAGES"` in Bebas Neue 64px, brief description
  - [ ] Apply `position: sticky; top: [nav-height]` so it stays fixed while scrolling
- [ ] **Stage cards** (4 total)
  - [ ] Stage 01: `Mandatory Registration — Mar 15 → Apr 2` — status: `● Live Now` (red)
  - [ ] Stage 02: `Hack 'N' Solve Submission — Apr 3–4` — status: `Upcoming`
  - [ ] Stage 03: `Mentorship Round — Apr 5–7` — status: `Eliminatory`
  - [ ] Stage 04: `Grand Finale at IIT Delhi — Apr 12` — status: `★ Finale`
  - [ ] Each card: large muted stage number (01–04), date range in monospace, title, description, status badge
  - [ ] Current item: amber-tinted background + amber stage number
  - [ ] Hover: amber left-border reveal + cream background shift
- [ ] **Physics enhancement:** Make the timeline a draggable "chain" of low-poly nodes (Matter.js constraints)

---

## 🎯 F5 — Track Explorer

- [ ] Create section header: `"PICK YOUR ARENA"` in Bebas Neue 72px + copy
- [ ] Create 4-column track card grid
  - [ ] **TigerGraph** — amber border badge (`Premium`)
  - [ ] **Hack 'N' Solve** — ink border badge (`Open Track`)
  - [ ] **Sustainability** — green border badge
  - [ ] **Duality** — red border badge
  - [ ] Each card: ghost number (01–04), type badge, emoji icon, track name (Bebas Neue), description, tag chips
  - [ ] Hover: cream background + top amber border reveal + ghost number shift
- [ ] **Physics enhancement:** Cards can be dragged and compared side-by-side (Matter.js drag)
- [ ] Embed Track Matcher Quiz directly below the grid (see F7)

---

## 🗃️ F6 — Features Bento Grid

- [ ] Create 3-column editorial bento grid (8 cells total)
  | Cell | Feature | Background |
  |------|---------|------------|
  | Col 1 Row 1 | Multi-Phase Countdown | Ink (dark) |
  | Col 2 Row 1 | Team Finder | Paper |
  | Col 3 Row 1 | DevBot Chatbot | Amber |
  | Col 1–2 Row 2 | Track Matcher Quiz | Paper (span 2) |
  | Col 3 Row 2 | Live Registration Stats | Dark |
  | Col 1 Row 3 | Milestone Reminders | Paper |
  | Col 2 Row 3 | Progress Bar | Paper |
  | Col 2–3 Row 4 | Mobile-First Design | Dark (span 2) |
- [ ] Each cell: emoji icon, amber monospace category label, bold title, light-weight description
- [ ] Implement CSS Grid `grid-column: span 2` for wide cells
- [ ] Add scroll-reveal animation (GSAP ScrollTrigger or IntersectionObserver) with staggered delays

---

## 🧩 F7 — Track Matcher Quiz ⭐ Original Feature #2

- [ ] Display question: `"What kind of problem do you want to solve?"`
- [ ] Render 4 answer option buttons:
  - [ ] `"Build with graphs & connected data"` → TigerGraph
  - [ ] `"Real-world FinTech / HealthTech / AI problem"` → Hack 'N' Solve
  - [ ] `"Environmental or social impact"` → Sustainability
  - [ ] `"Something that crosses disciplines"` → Duality
- [ ] On click: highlight selected button (amber border), hide others
- [ ] Reveal result card below: `✓ Recommended: [Track Name] — [Description + eligibility note]`
- [ ] Implement with pure JS, no API, all client-side
- [ ] **Physics enhancement:** On track recommendation, magnetically pull nearby low-poly deer fragments toward the result card, "assembling" the deer's head around it (Matter.js forces)
- [ ] Add reset button to allow re-taking the quiz

---

## 🛰️ F8 — Mission Control Live Hub

- [ ] Create dark ink section with 3 sub-panels
- [ ] **Live Stats Panel**
  - [ ] Animated count-up from 284 → 347 (registration count) on page load
  - [ ] Days-to-deadline number (synced with countdown JS)
  - [ ] Current phase indicator with red live dot
- [ ] **Team Finder Board**
  - [ ] Display 4 example listings (avatar initials circle, name, spots available, what they need, skill chips)
  - [ ] Skill chip color system: `Frontend` (amber), `Backend` (green), `ML` (lavender), `Web3` (coral), `DS` (muted)
  - [ ] Hover: amber border reveal, cursor expands
  - [ ] Add `"Post Your Team Listing"` button (links to form placeholder)
- [ ] **Skill Demand Matrix (Ball-Pit — Physics-Enhanced)**
  - [ ] Skills: `Frontend (85%)`, `ML/AI (91%)`, `Backend (72%)`, `Design (78%)`, `Web3 (60%)`, `Data (65%)`
  - [ ] **Design.md enhancement:** Render as a transparent glass container filled with colored physics spheres (Matter.js)
    - [ ] Amber spheres = Frontend, Green = Sustainability/Backend, etc.
    - [ ] User can "shake" container with mouse to see skill weights
  - [ ] Fallback (`prefers-reduced-motion`): standard thin amber fill bar chart
- [ ] **Quick Actions Panel**
  - [ ] `Register Now` (amber filled button)
  - [ ] `TigerGraph Track Docs` (outline button)
  - [ ] `Contact Organizers` (outline button)

---

## 🏆 F9 — Prize Section

- [ ] Create 3-column podium layout
  - [ ] 1st Place (₹75K) — gold-tinted card, amber amount, tallest column
  - [ ] 2nd Place (₹40K) — standard card, mid-gray amount
  - [ ] 3rd Place (₹20K) — standard card, bronze-brown amount
- [ ] Add total bar (ink background, `₹1,50,000` in Bebas Neue amber)
- [ ] Add note about TigerGraph separate prizes
- [ ] Hover: cream background shift on each card
- [ ] **Physics enhancement:** Prize amounts "glow" brighter (CSS text-shadow pulse) as cursor approaches

---

## 🤖 F10 — DevBot FAQ Chatbot ⭐ Original Feature #3

- [ ] Create floating trigger button (fixed bottom-right, ink square, amber border, robot emoji `🤖`)
  - [ ] On hover: cursor expands (see F12)
  - [ ] Add `aria-label="Open DevBot Chat Assistant"` for accessibility
- [ ] Build chat panel (slides up on click)
  - [ ] Amber header bar: `"DEVBOT"` in Bebas Neue + `"● Online"` status
  - [ ] Message area with scroll overflow
  - [ ] Bot messages: dark bg, white text
  - [ ] User messages: amber bg, ink text
  - [ ] Quick reply chips on open: `"Which track?"`, `"Deadline?"`, `"Register?"`, `"Prizes?"`
  - [ ] Text input + Send button
  - [ ] Close / minimize button
- [ ] Implement keyword rule engine (pure JS regex matching):
  - [ ] `track / domain / tigergraph / sustainability / duality` → Full 4-track breakdown
  - [ ] `deadline / when / last date / time` → All 4 phase deadlines
  - [ ] `register / how to join / sign up / form` → Google Form link + instructions
  - [ ] `prize / reward / money / cash / win` → Prize breakdown
  - [ ] `submit / submission / github / ppt / demo` → Submission format requirements
  - [ ] `mentor / mentorship` → Round 3 eliminatory details
  - [ ] `iit / venue / finale / in-person / delhi` → Grand Finale venue details
  - [ ] `contact / email / phone / whatsapp` → Organizer contacts
  - [ ] `eligible / who can` → Eligibility criteria
  - [ ] `team / solo / partner / teammate` → Team Finder + solo allowance
  - [ ] Fallback unknown: friendly "I didn't catch that" response with suggested topics
- [ ] **Design.md enhancement:** DevBot icon = floating deer-head SVG that follows the cursor (CSS `transform` or Matter.js body)
- [ ] Add open/close animation (slide-up panel)

---

## ❓ F11 — Collapsible FAQ Accordion

- [ ] Create 2-column layout: sticky title sidebar + accordion list
- [ ] Sticky sidebar: `"FAQ"` in Bebas Neue + brief intro copy
- [ ] Build 7 accordion items:
  1. Who can participate?
  2. What do I need to submit?
  3. What is the TigerGraph Premium Track?
  4. Is the Grand Finale in person?
  5. What is the registration deadline?
  6. Can a solo participant compete?
  7. How do I contact the organizers?
- [ ] Each item: question row (click to toggle), answer panel
  - [ ] Closed: `max-height: 0; overflow: hidden`
  - [ ] Open: `max-height: 300px` (CSS transition)
  - [ ] `+` icon rotates 45° → `×` on open
  - [ ] Hover: background lightens
- [ ] Keyboard navigable: `Tab` to focus, `Enter` to open/close
- [ ] One item open at a time (close others on open)

---

## 🖱️ F12 — Custom Amber Cursor

- [ ] Create small amber circle element (fixed, pointer-events: none)
- [ ] Track `mousemove` event and update circle position with slight easing lag
- [ ] Apply `mix-blend-mode: multiply` (amber on dark = stays amber; on light = warm tint)
- [ ] On hover over interactive elements (links, buttons, cards): expand to 40px, opacity 50%
- [ ] Restore size on `mouseleave`
- [ ] Hide native cursor on interactive elements with `cursor: none`
- [ ] Graceful fallback: if JS disabled or `prefers-reduced-motion`, show default cursor

---

## ✨ F13 — Scroll Reveal Animations

- [ ] Set all target elements to `opacity: 0; transform: translateY(20px)` initially
- [ ] Set up `IntersectionObserver` with `threshold: 0.08`
- [ ] On element entry: transition to `opacity: 1; transform: translateY(0)`
- [ ] Apply staggered delays within sections: `0.1s`, `0.2s`, `0.3s` per child
- [ ] Use only `opacity` and `transform` (GPU-composited, no layout thrashing)
- [ ] Use GSAP ScrollTrigger for more complex reveal sequences (section headers, bento grid)

---

## 📱 Responsiveness & Mobile

- [ ] Nav: collapse links on mobile, keep `REGISTER →` CTA
- [ ] Hero: stack to 1 column on mobile
- [ ] Countdown: stack panels vertically on mobile
- [ ] Timeline: full-width single column
- [ ] Track grid: 2-column on tablet, 1-column on mobile
- [ ] Bento grid: 1-column stacked on mobile
- [ ] Team Finder: single column listing on mobile
- [ ] Prize podium: 1-column stack on mobile
- [ ] DevBot: adjust panel width for small screens
- [ ] FAQ: full-width accordion (hide sticky sidebar on mobile)
- [ ] Verify Lighthouse Mobile Usability: Pass

---

## ♿ Accessibility

- [ ] All interactive elements have visible `:focus` states
- [ ] Color is never the only differentiator — text labels with all colored badges
- [ ] Minimum font size 13px for body text (10px only for DM Mono labels)
- [ ] `aria-label` on chatbot toggle button (icon-only)
- [ ] FAQ fully keyboard-navigable (`Tab` + `Enter`)
- [ ] WCAG AA contrast: white/paper text on dark backgrounds
- [ ] `prefers-reduced-motion` media query: disable all physics, GSAP animations, transitions
- [ ] Screen reader: static layout fallback when JS is disabled

---

## ⚡ Performance

- [ ] Target FCP < 1.2s
- [ ] Target TTI < 2s
- [ ] Target Lighthouse Performance > 90
- [ ] Target Lighthouse Accessibility > 85
- [ ] Minify/inline critical CSS
- [ ] Load Matter.js and GSAP asynchronously / only after hero paint
- [ ] Avoid layout thrashing in JS — batch DOM reads/writes
- [ ] Test on real mobile device

---

## 🧪 Final QA Checklist

- [ ] All anchor nav links scroll correctly to sections
- [ ] Countdown timer ticks correctly in IST timezone (`+05:30`)
- [ ] Phase pill tabs switch countdown target and update info card
- [ ] Track Matcher reveals correct recommendation per answer
- [ ] DevBot responds to all 10+ keyword categories
- [ ] FAQ accordion opens/closes with animation
- [ ] Custom cursor visible and blend-mode works on both dark and light backgrounds
- [ ] Matter.js physics runs at 60fps without jank (disable on low-end via `navigator.hardwareConcurrency` check)
- [ ] Scroll reveals fire correctly and don't re-trigger
- [ ] Page fully usable with JS disabled (fallback layout)
- [ ] Page fully usable with `prefers-reduced-motion` enabled
- [ ] Lighthouse run: Performance > 90, Accessibility > 85
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge
- [ ] Mobile check: iOS Safari, Android Chrome

---

## 🚀 Phase 2 (Post-Hackathon — Backend)

- [ ] Firebase / Supabase Realtime DB for actual Team Finder listings
- [ ] Google Forms → Supabase sync for team listing submissions
- [ ] Web Push API + VAPID keys for milestone reminders
- [ ] Live registration count from Unstop API → replace static counter
- [ ] Claude API (`claude-sonnet-4-6`) to replace rule-based DevBot with NLP chatbot
