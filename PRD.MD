Devcation revamp prd v2 · MDCopyProduct Requirements Document
Devcation Delhi 2026 — Hackathon Page Revamp (v2)
Track: Devcation Revamp — Design + Prompt Engineering

Version: 2.0
Event: Devcation Hack 'N' Solve, IIT Delhi
Organized by: GDG On Campus IGDTUW × GDG IIT Delhi
Prize Pool: ₹1,50,000

Evaluation Criteria Mapping
CriteriaParameterHow This Design Addresses ItScore TargetPrompt BasedPrompt Clarity & StructureSection 9 — complete prompt scaffold with role, context, constraints, output spec10/10Design BasedVisual Appeal & LayoutEditorial brutalist aesthetic — Bebas Neue + DM Sans, amber/charcoal palette, grid-breaking layouts, zero AI-generated look10/10UX BasedUser Experience & NavigationFixed nav, scroll reveals, sticky timeline sidebar, interactive FAQ, guided Track Matcher, DevBot chatbot10/10InnovationOriginal Feature3 original features: Multi-Phase Countdown, Track Matcher Quiz, Team Finder Board with Skill Demand Matrix10/10

1. Executive Summary
The Devcation Delhi 2026 hackathon page on Unstop suffers from five measurable UX failures: no urgency mechanics, flat information architecture, zero community signal, unclear track differentiation, and no participant support layer. For a flagship IIT Delhi event with ₹1.5L in prizes, this disconnect between event prestige and digital presence costs registrations and excitement.
This PRD defines a complete ground-up redesign with a distinctive editorial-brutalist visual identity — raw, high-contrast, typographically bold — that looks and feels nothing like a generic AI-generated page. The design is built around one principle: every section answers "what do I do next?"

2. Design Philosophy & Aesthetic Direction
Why This Aesthetic
The purple-gradient-on-dark look is the most overused AI-generated pattern in 2026 hackathon pages. It signals "template" before the user reads a single word.
This design instead takes editorial cues from Wired, Brutalist web design, and raw Indian tech-builder energy:
Palette: Deep charcoal (#0f0e0c) + warm off-white paper (#f5f0e8) + amber (#e8870a) as the only accent. Warm, confident, human.
Typography:

Display: Bebas Neue — loud, condensed, commanding. Used for all large headlines. Unmistakably editorial.
Body: DM Sans — clean, modern, variable weight. Feels like a quality editorial publication.
Mono: DM Mono — for labels, dates, code-adjacent UI. Adds technical credibility without looking developer-generic.

Layout System: Strict grid. Hard black borders. No rounded cards or soft shadows. Sections defined by 2px black borders. The design feels designed, not generated.
Unique Touches:

Custom amber cursor with blend-mode multiply
Marquee ticker strip between hero and countdown
Ghost typographic background text in hero
Grain texture overlay (SVG noise filter) across the entire page
Hover states that reveal section borders in amber
Sticky sidebar timelines with position:sticky


3. Problem Statement
3.1 Gap Analysis: Unstop Page vs. Participant Needs
Participant NeedUnstop PageThis Design"Am I eligible?"Buried in textHero eyebrow + FAQ #1"Which track fits me?"Text list, no guidanceTrack Matcher Quiz"How long do I have?"Static date textLive multi-phase countdown"Who else is joining?"NothingLive reg counter + team listings"I need teammates"Not supportedTeam Finder Board"What do I actually submit?"Paragraph textTimeline item + FAQ + DevBot"Is this event legit/exciting?"Generic templatePrestige design + IIT Delhi branding"I have a random question at 2am"Email organizersDevBot chatbot
3.2 User Personas
Persona A — Priya, 2nd year CSE (First-time hacker)
Heard about Devcation on LinkedIn. Excited but unsure — doesn't know which track, doesn't have a team, not sure if she's eligible. She needs: quick eligibility confirmation, track guidance, teammate finder, and a registration CTA that feels urgent.
Persona B — Arjun, 3rd year, experienced hacker
Already planning to join, just needs the facts. He needs: submission requirements, countdown to deadline, track docs link, and fast access to the registration form.
Persona C — Team Lead with an idea
Has a project concept, needs 2 more people. She needs: team finder with skill tags and contact options.
Persona D — Organizer reviewing submissions
Evaluating this as a design track entry. They need: clear feature articulation, originality signals, strong visual aesthetic, and a working interactive demo.

4. Feature Specifications
4.1 Navigation (F0)
Priority: P0
Fixed top bar, 52px height, ink background, amber bottom border.
Components:

Logo: "DEVCATION'26" with amber apostrophe-26
Nav links: Timeline, Tracks, Features, Prizes, FAQ (hidden on mobile)
CTA: "REGISTER →" in amber, monospace font, box style

Behavior:

All links are anchor scrolls
Active section highlighting on scroll (JS IntersectionObserver)
Mobile: collapses nav links, keeps CTA


4.2 Hero Section (F1)
Priority: P0
Layout: 2-column CSS grid — headline column (2/3) + stats sidebar (1/3)
Left column:

Eyebrow: live red dot + "GDG IGDTUW × GDG IIT Delhi — Registration Live"
Main title: "DEVCATION / DELHI / 2026" in Bebas Neue, 100px+, amber accent on "DELHI"
Ghost background text: "HACK" in 28vw hollow Bebas Neue behind the headline
Sub: "HACK 'N' SOLVE" in Bebas Neue
Description: 16px DM Sans Light, 300 weight
CTAs: "Register Now" (ink filled) + "Check Countdown" (outline)

Right column (stats sidebar):

4 stats: ₹1.5L Prize Pool / 04 Tracks / 1–4 Team Size / Apr 12 Finale
Each: large Bebas Neue number + monospace label
Separated by 1px lines
Ink footer bar: orgs credited

Differentiators: Ghost text, grain texture, column separator border

4.3 Marquee Ticker (F2)
Priority: P1
A looping amber ticker strip between hero and countdown:

"HACK 'N' SOLVE · GRAND FINALE @ IIT DELHI · APR 12, 2026 · ₹1,50,000 IN PRIZES · REGISTER BY APR 2 · TIGERGRAPH TRACK ·"
Infinite CSS translateX animation, 22-second loop
2px black borders top and bottom
Creates visual energy and communicates all key facts at a glance


4.4 Multi-Phase Countdown Timer ⭐ Original Feature #1
Priority: P0
A split 2-column section:

Left (paper bg): Phase pill tabs + D:H:M:S display in Bebas Neue 72px
Right (ink bg): Hackathon progress bar + phase info card + milestone reminder checkboxes

Phase Pills:

Registration | Submission | Mentorship | Finale
Clicking a pill switches the countdown target and updates the info card

Progress Bar:

Thin 4px amber fill bar showing current position in hackathon lifecycle
Labels: Registration → Submission → Mentorship → Finale

Milestone Reminders (UX innovation):

Two opt-in checkboxes: "Remind me 24h before submission" / "Remind me when shortlists drop"
In production: connects to push notification or email API
Visual: custom amber checkbox UI with toggle animation

Technical: Pure JS Date arithmetic, setInterval, no dependencies. IST timezone explicitly set (+05:30 offset).
Why it stands out vs. a single countdown:
Participants are at different stages. A team that just submitted needs to know how long until mentorship — not the registration deadline. Phase switching makes the countdown useful throughout the hackathon lifecycle, not just at the start.

4.5 Interactive Timeline (F3)
Priority: P0
Two-column layout: sticky sidebar title + scrollable stage cards.
Sticky sidebar:

"FOUR STAGES" Bebas Neue 64px
Brief description
Stays fixed as user scrolls through items (CSS position: sticky)

Stage cards:

Large muted stage numbers (01–04) — highlight amber on "current"
Date range in monospace
Title + description
Status badge: "● Live Now" (red), "Upcoming" (muted), "Eliminatory", "★ Finale"
Hover: amber left-border reveal + cream background
Current item: amber-tinted background

Stages:

Mandatory Registration — Mar 15 → Apr 2 — LIVE
Hack 'N' Solve Submission — Apr 3–4
Mentorship Round — Apr 5–7 — Eliminatory
Grand Finale at IIT Delhi — Apr 12


4.6 Track Explorer (F4)
Priority: P0
Header split: "PICK YOUR ARENA" Bebas 72px + descriptive copy
4-column track grid:

Each card: large ghost number (01–04), type badge, emoji icon, track name in Bebas Neue, description, tag chips
Hover: cream background + top amber border reveal + ghost number shifts
Color-coded type badges:

TigerGraph: amber border (Premium)
Hack 'N' Solve: ink border (Open Track)
Sustainability: green border
Duality: red border



Track Matcher Quiz (attached below the grid): ⭐ Original Feature #2 — see F7

4.7 Features Bento Grid (F5)
Priority: P1
An editorial 3-column bento grid presenting all 8 platform features visually:
CellFeatureStyleCol 1 Row 1Multi-Phase CountdownDark (ink bg)Col 2 Row 1Team FinderPaperCol 3 Row 1DevBot ChatbotAmber bgCol 1–2 Row 2Track Matcher QuizPaper (span 2)Col 3 Row 2Live Registration StatsDarkCol 1 Row 3Milestone RemindersPaperCol 2 Row 3Progress BarPaperCol 2–3 Row 4Mobile-First DesignDark (span 2)
Each cell: emoji icon, category label in amber monospace, title (bold), description (light weight). Three distinct backgrounds create visual rhythm without gradients.

4.8 Track Matcher Quiz ⭐ Original Feature #2
Priority: P0 (Innovation criterion)
Location: Embedded in the Tracks section, below the 4-column track grid
Problem it solves: First-time participants (Persona A) spend significant time confused about which track fits their idea. Currently the page offers no guidance — just a text description. This costs registrations.
Interaction:

User sees: "What kind of problem do you want to solve?"
Four answer buttons:

"Build with graphs & connected data" → TigerGraph
"Real-world FinTech / HealthTech / AI problem" → Hack 'N' Solve
"Environmental or social impact" → Sustainability
"Something that crosses disciplines" → Duality


Clicking highlights the button (amber border) and reveals a result card:
✓ Recommended: [Track Name] — [Description + eligibility note]

Technical: Pure JS, no API. All logic is client-side keyword matching.
Enhancement path: Multi-step quiz (2–3 questions) for higher confidence recommendation. In production: analytics tracking on quiz responses to help organizers understand participant intent distribution.
Why it's innovative for hackathon pages: No current Unstop listing, MLH page, or Devfolio event page includes a guided track recommendation feature. This directly converts confused visitors into registered participants — the highest-value conversion this page can drive.

4.9 Mission Control Live Hub (F6)
Priority: P0
Dark ink section with live stats + team finder:
Live Stats Panel:

Animated registration count (count-up animation from 284 → 347 on page load)
Days-to-deadline number (synced with countdown JS)
Current phase indicator with red live dot

Team Finder Board:

4 example listings: avatar initials, name, spots available, what they're looking for
Skill chip system: Frontend (amber), Backend (green), ML (lavender), Web3 (coral), DS (muted)
Hover: amber border reveal, cursor expands
"Post Your Team Listing" button (connects to form/backend in production)

Skill Demand Matrix:

6-row skill bar chart: Frontend (85%), ML/AI (91%), Backend (72%), Design (78%), Web3 (60%), Data (65%)
Shows team gap analysis — informs solo participants which skills are most needed
Thin amber fill bars with percentage (no labels, just visual weight)

Quick Actions Panel:

Register Now (amber filled button)
TigerGraph Track Docs (outline)
Contact Organizers (outline)


4.10 Prize Section (F7)
Priority: P1
3-column podium layout:

1st Place (₹75K) — gold-tinted card, amber amount
2nd Place (₹40K) — standard card, mid-gray amount
3rd Place (₹20K) — standard card, bronze brown amount

Total bar: ink background, "₹1,50,000" in Bebas Neue amber, with note about TigerGraph separate prizes.
Hover: cream background shift on each prize card.

4.11 DevBot FAQ Chatbot ⭐ Original Feature #3
Priority: P0 (Innovation criterion)
Floating button: Fixed bottom-right, ink square with amber border, robot emoji
Chat Panel:

Amber header: "DEVBOT" in Bebas Neue, status "Online"
Message bubbles: bot (dark bg, white text) + user (amber bg, ink text)
Quick reply suggestions on open: "Which track?", "Deadline?", "Register?", "Prizes?"
Text input + send button

Rule-based keyword coverage:
Keyword PatternResponse Topictrack, domain, tigergraph, sustainability, dualityFull 4-track breakdowndeadline, when, last date, timeAll 4 phase deadlinesregister, how to join, sign up, formGoogle Form link + instructionsprize, reward, money, cash, winPrize breakdown all trackssubmit, submission, github, ppt, demoSubmission format requirementsmentor, mentorshipRound 3 eliminatory detailsiit, venue, finale, in-person, delhiGrand Finale venue detailscontact, email, phone, whatsappOrganizer contactseligible, who canEligibility criteriateam, solo, partner, teammateTeam Finder + solo allowance
Enhancement path (production): Replace rule engine with Anthropic Claude API (claude-sonnet-4-6) with a system prompt containing all hackathon data. Natural language queries, follow-ups, and edge cases handled gracefully.

4.12 Collapsible FAQ (F8)
Priority: P1
Two-column: sticky title sidebar + accordion list
7 questions:

Who can participate?
What do I need to submit?
What is the TigerGraph Premium Track?
Is the Grand Finale in person?
What is the registration deadline?
Can a solo participant compete?
How do I contact the organizers?

Behavior: CSS max-height transition (0 → 300px), "+" rotates 45° to "×" on open, hover lightens background.

4.13 Custom Cursor (F9)
Priority: P2 (Differentiation)
A small amber circle follows the mouse with slight easing. On hover over interactive elements (links, buttons, cards): cursor expands to 40px with 50% opacity. Uses CSS mix-blend-mode: multiply — on dark backgrounds it stays amber, on light it creates a warm tint effect.
This single touch dramatically elevates the "this was designed with intention" feel.

4.14 Scroll Reveal Animations (F10)
Priority: P2
IntersectionObserver-based: elements enter with opacity: 0 → 1 + translateY(20px → 0). Staggered delays (0.1s, 0.2s, 0.3s) within sections. Uses only opacity and transform for GPU compositing — no layout thrashing.

5. Design System Reference
5.1 Color Tokens
TokenValueUsage--ink#0f0e0cText, backgrounds, borders--paper#f5f0e8Page background, cards--cream#ede8dcHover states, subtle fills--amber#e8870aPrimary accent, CTAs, live indicators--amber-d#b8640aDark amber for text on light bg--amber-l#fef3e0Light amber for prize card bg--coal#1c1a16Footer background--mid#4a4740Secondary text--muted#8a867eTertiary text, labels--line#d4cfc4Dividers, subtle borders--red#c0392bLive indicators, Duality track badge--green#1a7a4aSustainability track badge
5.2 Typography Scale
ElementFontWeightSizeHero titleBebas Neue40080–160pxSection headersBebas Neue40048–72pxTrack namesBebas Neue40028pxStat valuesBebas Neue40044–72pxCountdown digitsBebas Neue40072pxBody textDM Sans30014–16pxUI labelsDM Mono400–50010–12pxStatus badgesDM Mono50010px
5.3 Layout System

Grid: CSS Grid throughout, 2/3/4 columns depending on section
Borders: 2px solid var(--ink) for section separators; 1px var(--line) for internal dividers
Spacing: 32–56px section padding; 40px horizontal gutter
Border radius: None (intentional — flat borders reinforce editorial feel)
Shadows: None (border-based depth only)
Grain: SVG noise filter overlay at 0.6 opacity across full page


6. Technical Architecture
6.1 Stack

HTML5 / CSS3 / Vanilla JS — zero framework dependencies
Google Fonts CDN — Bebas Neue, DM Sans, DM Mono
Pure CSS animations — ticker (keyframes), scroll reveals (IntersectionObserver), FAQ (max-height transition)
No JS libraries — lightweight, fast, no CORS risks

6.2 Performance Targets
MetricTargetFirst Contentful Paint< 1.2sTime to Interactive< 2sLighthouse Performance> 90Lighthouse Accessibility> 85Mobile UsabilityPass
6.3 JS Modules (Inline)

Cursor module — mousemove listener + enter/leave events on interactive elements
Countdown module — setInterval, Date arithmetic, IST timezone, phase switching
Progress fill — delayed CSS width animation on mount
Registration counter — animated count-up on page load
Scroll reveal — IntersectionObserver with threshold 0.08
FAQ — class toggle + max-height CSS transition
Track Quiz — click handler + result display
Reminder checkboxes — custom checkbox UI toggle
Chatbot — keyword regex matching, message DOM builder, panel toggle

6.4 Production Backend Requirements (Phase 2)
FeatureTechnologyTeam Finder listingsSupabase / Firebase Realtime DBTeam listing submissionsGoogle Forms → Supabase syncMilestone push notificationsWeb Push API + VAPID keyRegistration count live syncSupabase realtime subscriptionDevBot NLP modeAnthropic Claude API (claude-sonnet-4-6)

7. New Features vs. v1 — What's Added
Featurev1v2AestheticPurple/blue AI-feelAmber/charcoal editorial brutalistTypographySpace Grotesk (common)Bebas Neue + DM Sans (distinctive)Track Matcher Quiz❌✅ New — interactive recommendationSkill Demand Matrix❌✅ New — bar chart of in-demand skillsMarquee Ticker❌✅ New — animated info stripGrain texture❌✅ New — SVG noise overlayCustom cursor❌✅ New — amber blend-mode cursorMilestone Reminders❌✅ New — opt-in phase remindersGhost hero text❌✅ New — typographic bg elementQuick Actions Panel❌✅ New — 3 direct action linksSticky timeline sidebar❌✅ New — sticky position:stickyBento features grid❌✅ New — visual feature showcase

8. Competitive Positioning
FeatureUnstop TemplateMLH EventsDevfolioDevcation v2Live multi-phase countdown❌✅ Single✅ Single✅ 4-phase switchingTrack recommendation❌❌❌✅ Interactive quizTeam finder + skill tags❌❌✅ Basic✅ Skill demand matrixFAQ chatbot❌❌❌✅ DevBotMilestone reminders❌❌❌✅Live registration count❌❌✅✅ AnimatedCustom cursor❌❌❌✅Editorial design (non-AI)❌Partial❌✅ Fully bespokeMobile responsivePartial✅✅✅

9. Prompt Engineering — AI Design Prompts Used
The following prompts were engineered to guide AI tools in generating design concepts for this page:
Master Design Prompt
You are a senior product designer at a top-tier design agency. 
Design the official Devcation Delhi 2026 hackathon page — a flagship event 
organized by GDG IGDTUW × GDG IIT Delhi with ₹1.5L in prizes and a Grand 
Finale at IIT Delhi.

CONSTRAINTS:
- The design must NOT look AI-generated. Avoid purple/blue gradients.
- Use an editorial-brutalist aesthetic — bold condensed serif headlines, 
  hard borders, a warm charcoal/amber/paper palette.
- Every section must answer: "What does a participant do next?"
- Include 3 original features not found on any current hackathon page.
- The page must communicate urgency, prestige, and excitement simultaneously.

REQUIRED SECTIONS:
1. Hero — large typographic statement + key stats sidebar
2. Countdown — multi-phase timer switching between Registration/Submission/Mentorship/Finale
3. Timeline — 4-stage interactive vertical timeline
4. Tracks — 4 track cards with type badges + a track recommendation quiz
5. Mission Control — live stats, team finder board, skill demand matrix
6. Prizes — podium layout with total pool banner
7. FAQ — collapsible accordion
8. DevBot — floating chatbot assistant

OUTPUT: Production-ready HTML/CSS/JS, single file, zero dependencies.
Feature-Specific Prompts
Multi-Phase Countdown:
Design a countdown timer component for a multi-stage hackathon.
It must allow the user to switch between 4 target dates (Registration, 
Submission, Mentorship, Finale) via pill tabs. Show D:H:M:S in a large 
condensed display font. Include a progress bar showing hackathon journey 
stage and opt-in milestone reminder checkboxes. Dark right panel, light left panel.
Track Matcher Quiz:
Design a one-question interactive quiz embedded in a hackathon track section.
The question is "What kind of problem do you want to solve?" with 4 answer 
options mapping to 4 tracks. On click: highlight the selected answer in amber, 
show a recommendation card below. Keep it inline — no modal. Use clean editorial 
styling with no gradient fills.
Team Finder Board:
Design a team finder component for a hackathon page. Show listings of 
participants looking for teammates. Each listing has: avatar initials circle, 
name, open spots count, what they're looking for, and skill chips 
(color-coded by role: frontend/amber, backend/green, ML/lavender, Web3/coral).
Include a skill demand bar chart showing which skills are most needed across 
the hackathon. Dark background, amber accent, monospace labels.

10. Accessibility

All interactive elements have visible focus states
Color is never the only differentiator (text labels accompany all colored badges)
Minimum font size: 10px (monospace labels only — all body text 13px+)
Custom cursor falls back gracefully if JS disabled
FAQ keyboard-navigable (Tab + Enter)
Contrast: white/paper text on dark backgrounds exceeds WCAG AA
aria-label attributes on icon-only buttons (chatbot toggle)


11. Success Metrics
MetricBaseline (Unstop)v2 TargetAverage time on page~45s> 3.5 minutesRegistration CTA click rateUnknown> 45% of unique visitorsTrack confusion (organizer emails about track choice)HighReduced 70%+ via Track MatcherFAQ chatbot deflection rateN/A> 60% of FAQ-type queries handledMobile session sharePartial> 50% with full feature parityTeam matches via Team Finder0> 60 teams matched in production

12. Roadmap
Phase 1 — Core Page (This submission)
All features above, static demo, rule-based chatbot
Phase 2 — Live Backend (1 week post-hackathon)

Firebase/Supabase team finder with real submissions
Web Push API milestone reminders
Live registration count from Unstop API

Phase 3 — AI Enhancement

Claude API chatbot with natural language
Track recommendation model trained on past registrations
Organizer analytics dashboard

Phase 4 — Platform Template

Generalize design system for reuse across future GDG events
Component library: Countdown, Team Finder, DevBot as embeddable widgets


13. Conclusion
The Devcation Delhi 2026 revamp is not a reskin — it's a rethinking of what a hackathon registration page is for. Every design choice serves a participant need: the condensed headline typography signals prestige, the amber accent creates urgency without aggression, the multi-phase countdown keeps participants informed through all four stages, the Track Matcher converts confused visitors into registered participants, and DevBot handles the 3AM "which track should I join?" questions so organizers don't have to.
The design is intentionally human — warm, editorial, opinionated. It looks like it was designed by a person who cares about Devcation, not generated by a template engine.
#NextStopDevcation

Contact: dscigdtuw@gmail.com | +91 96255 80383
Organized by GDG On Campus IGDTUW × GDG IIT Delhi
Grand Finale: April 12, 2026 — IIT Delhi, New Delhi