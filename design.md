To maximize your score in the **Innovation** and **UX** categories (10/10), your design must translate the "playful physics" of the Mr. Panda portfolio into the "prestige editorial" requirements of your PRD.

The core takeaway from that portfolio is **Spatial Navigation**: the user doesn't just read information; they *interact* with it in a 2D space. Below is the formal Design Document for your submission.

---

# Design Document: Devcation Revamp (Physics-Editorial Edition)

## 1. Vision & Aesthetic

The design creates a "Digital Construction Site" where the user "assembles" the hackathon experience.

* **Aesthetic:** **Editorial Brutalist.** High-contrast, heavy typography, and hard 2px borders.
* **Vibe:** Professional yet physically interactive. It feels like a premium physical magazine that has been broken into interactive shards.
* **Palette:** Charcoal (#0f0e0c), Warm Paper (#f5f0e8), and Amber (#e8870a).

## 2. Technical Architecture

To handle the physics and real-time features, the stack is optimized for performance and asset management.

* **Framework:** **Next.js 15 (App Router).** Chosen for optimized asset loading and built-in API routes for the **DevBot**.
* **Physics Engine:** **Matter.js.** Used to create a 2D physics world where UI elements have mass, friction, and bounce.
* **Styling:** **Tailwind CSS.** For rapid implementation of the strict editorial grid and custom color tokens.
* **Animation:** **Framer Motion.** To transition elements between their "loose" physics state and their "fixed" layout state.

## 3. Interaction Design (Inspired by Mr. Panda)

### A. The "Debris Field" Hero

On entry, the **Bebas Neue** headline ("DEVCATION") is intact, but the **Low-Poly Deer** and **Delhi Gate** assets are scattered fragments at the bottom of the screen.

* **Interaction:** The user can "flick" deer fragments.
* **UX Goal:** Instant engagement. It transforms a passive landing page into an active playground.

### B. Gravity-Aware Track Cards (F4)

Instead of a static grid, the 4 track cards (TigerGraph, Hack 'N' Solve, etc.) are "physics bodies" contained within a 2px bordered box.

* **Interaction:** Users can drag the cards. If you drag the TigerGraph card over the Duality card, they collide and bounce.
* **The "Magnet" Effect:** When the user starts the **Track Matcher Quiz**, the "Correct" track card becomes magnetic, pulling the stray deer fragments toward it to form the mascot's head around the card.

### C. The Timeline "Tether" (F3)

The 4-stage timeline is represented as a physical "rope" or chain made of low-poly shards.

* **Interaction:** The user can grab the "Finale" shard and pull it. The entire timeline follows with a realistic "string" physics animation.
* **UX Goal:** It makes the "Hackathon Journey" feel like a tangible path you are pulling yourself through.

## 4. Advanced "Innovation" Features

| Feature | Physics/Logic Implementation | UX Purpose |
| --- | --- | --- |
| **Skill Ball-Pit** | A glass-box container filled with colored spheres (Amber = Frontend, Green = ML). | Visualizes "Skill Demand" through volume/gravity rather than a boring bar chart. |
| **DevBot Mascot** | A floating, "buoyant" deer head that follows the cursor with a slight delay/easing. | Provides a "psychologically safe" and friendly guide through complex rules. |
| **Multi-Phase Switcher** | When switching the countdown phase, the old digits "shatter" into physics debris. | Reinforces the theme of "breaking old ideas to build new ones." |

## 5. Implementation Roadmap for Submission

1. **Phase 1: The Canvas.** Set up a Next.js environment with a full-screen `Matter.js` canvas overlaying the Tailwind grid.
2. **Phase 2: The UI-Physics Bridge.** Bind React components (Track Cards, Buttons) to Matter.js bodies so that they move in sync.
3. **Phase 3: The Editorial Layer.** Apply the **Bebas Neue** and **DM Sans** typography and the grain texture overlay.
4. **Phase 4: Optimization.** Ensure the physics engine pauses when the user scrolls past a section to save CPU/Battery (important for mobile UX).

---

### Why this wins:

By combining the **Next.js** backend power with **Matter.js** spatial physics, you aren't just redesigning a website; you are building an **Interactive Brand Experience**. This addresses every pillar of the evaluation criteria:

* **Prompt Based:** It shows advanced orchestration of complex tools.
* **Design/UX:** It’s visually striking and fun to use.
* **Innovation:** It introduces "Spatial UI" to the hackathon domain, which is currently non-existent on platforms like Unstop.