# Int3grate.ai — Landing Page Specification (v3)

**Document type:** Development & design handoff
**Version:** 3 (final, all strategic decisions resolved)
**Scope:** Page structure, content, copy direction, design guidance, build-level notes
**Out of scope:** Header, footer, About section, contact form (handled separately)

---

## Changes from v2 to v3 (all seven open questions resolved)

- **First CRM** → Zoho. Named directly in Sections 3, 6, and 8.
- **First lead source** → LinkedIn Sales Navigator via BYOA (Bring Your Own Account) model. Implementation vendor (Unipile) not named publicly — treated as implementation detail. New framing: customer connects their own LinkedIn account, AI worker acts as that user under control plane scopes.
- **Date language** → "mid-2026" everywhere, attached to public availability (date 3, not internal MVP-ready or first-partner-live). Synchronized across hero, roadmap, MVP section, and design partner section.
- **Cohort size** → No specific number. Terminology locked as "founding design partners." Numerical scarcity replaced with founder-access scarcity ("work directly with the founder, not a partnership manager") and temporal scarcity ("founding terms close at public launch in mid-2026").
- **Founder visibility** → Level 6 chosen. Old Section 8 ("Who's building this") removed entirely. Page goes from 9 sections to 8.
- **"What exists today" content** → Preserved but relocated to Section 5 (Under the Hood) as a new sub-block called "What's built so far."
- **Founder voice paragraph** → Removed (depended on Section 8).

---

## 0. Product positioning

Int3grate is a **control plane for AI workers** inside SMB companies. Not a chatbot platform, not an agent marketplace, not a no-code automation builder. The product treats agents as **declarative, versioned, managed entities** — work happens through finite, orchestrated **runs** that the platform observes, persists, and can suspend for human approval.

The four pillars that define the product:

1. **Managed AI workers** — agents are configurations with scopes, tools, memory layers, policies. Every change creates an immutable version. Runs are tied to a specific version (rollback-ready).
2. **Domain isolation** — departments (Finance, Sales, Marketing, etc.) have separate memory, separate tools, separate budgets, separate approvers. Enforced at the data layer.
3. **Approvals as durable wait states** — workflows suspend cleanly while waiting for human decisions, persisted to the database, no resources held hostage.
4. **Cost ledger built-in** — every model call, every tool call, every step is recorded with tokens in/out and dollar cost, attributable per user, agent, domain, tenant.

C-level formulation for buyer conversations: *"Department-level AI automation without black-box risk."*

---

## 1. Global design & content principles

These apply to every section. Non-negotiable.

### 1.1 Honesty about development stage
The product is being built. Communicate this **visibly**. The honesty is what makes everything else credible. Status badge in the hero area announces both stage and the founding cohort opening.

### 1.2 No fabricated metrics
No invented dashboard numbers, no fake "hours saved," no fake savings percentages, no fake confidence scores, no fake customer logos. Empty space is better than fictional KPIs.

### 1.3 No "trusted by" social proof until it exists
No "trusted by ops teams at companies with 10–500 employees" until there are real named partners.

### 1.4 Conversion path
**One primary CTA:** "Apply to the founding cohort." Two **low-friction** secondary actions: an anchor link to the MVP loop section ("See the workflow ↓"), and an email-notify input ("Notify me when MVP ships"). The email-notify is a passive warm pool, not a second funnel — single email field, no other form fields.

### 1.5 Vocabulary discipline (locked)
- **Primary external term:** "AI workers" / "AI workforce"
- **Technical pass-through:** "agents" — used when explaining the model, e.g., *"AI workers — we call them agents internally"*
- **Retired:** "digital employees" (only allowed inside one C-level positioning sentence, never in headlines)
- **Cohort terminology:** "founding design partners" / "founding cohort" — used consistently across Hero, Section 8, roadmap callouts
- **Other locked terms:** "control plane," "operating layer," "runs," "managed entities," "approval checkpoints," "durable wait states," "connected account"

### 1.6 Roadmap tags on feature mentions
- **Live in MVP** — shipping in the first build
- **Next** — immediately after MVP
- **Later** — data model ready, build follows demand

### 1.7 Soften absolutes
Avoid hostage-to-fortune phrasing:
- "No duplicates ever pushed" → "Designed to prevent duplicate pushes"
- "Architecture you can verify" → "How it's built"
- "Schema already supports everything" → "Data model designed with these in mind"
- "Days of work, not weeks" → "Scoped as small additions, not new products"
- "Always," "never," "every," "guaranteed" → audit on final pass and replace

### 1.8 No tables in section content
Use prose, card grids, and column layouts.

### 1.9 Visual tone
- Type: confident, technical, restrained. Closer to Linear / Supabase / Temporal than to Salesforce.
- Color: restrained palette, one strong accent. No "AI startup gradient soup."
- Icons: line icons or monochrome glyphs. No illustrated mascots.
- Imagery: architectural diagrams over product screenshots. Any product UI shown must be marked "Design preview."
- Whitespace: generous.

---

## 2. Section flow (final order — 8 sections)

1. **Hero**
2. **The Problem**
3. **Inside the MVP**
4. **The Vision**
5. **Under the Hood** (now includes "What's built so far" sub-block)
6. **Roadmap** (Now / Next / Later)
7. **Where Int3grate sits in your AI stack**
8. **Founding design partners**

Flow: *what is this* → *why does it matter* → *what actually works* → *how do they think about it* → *can I trust them technically (and what's already real)* → *what do I get when* → *how does it compare* → *how do I get in*.

---

## 3. Section 1 — Hero

### Purpose
In 5 seconds: positioning as a control plane (not a chatbot), development stage, founding cohort opening, single CTA, two low-friction alternatives.

### Headline (H1)
**"The control plane for your AI workforce."**

### Subheadline
> *"Int3grate gives your team AI workers with real boundaries — separated by department, gated by human approval, and tracked down to the dollar. Built for SMBs that want AI in operations, not just in chat."*

### Status badge (directly under subheadline)
> 🟡 **Building in the open · Public launch mid-2026 · Founding cohort forming now**

On narrow viewports, the badge wraps. The third segment ("Founding cohort forming now") may move below the badge as a separate small line if needed for legibility — never compress to fewer than two visible segments.

### CTAs (in order of visual hierarchy)
1. **Primary button:** "Apply to the founding cohort" → routes to / scrolls to Section 8
2. **Secondary text link:** "See the workflow ↓" → anchor-scrolls to Section 3 (Inside the MVP)
3. **Tertiary email-notify input:** placeholder *"your@work.email"* with small button *"Notify me when MVP ships"* → adds to a passive notify list, no other form fields, success state shows inline confirmation

### Hero visual
A simplified architecture diagram with three horizontal layers:

1. **Experience** (top) — the surfaces users touch
2. **Control plane** (middle, visually emphasized) — agents · policies · approvals · memory · cost
3. **Runtime + tools** (bottom) — model providers, integrations, external systems

The middle layer is highlighted.

### Layout notes
- Single-column on mobile, two-column on desktop (text left, diagram right).
- Status badge: pill shape, muted background, never the same color as the primary CTA.
- Email-notify input: visually distinct from primary CTA, smaller, with helper text *"Or just stay in the loop:"*
- H1 is the largest element on the page. Subheadline is half its size. Badge is small.

---

## 4. Section 2 — The Problem

### Purpose
Reframe AI adoption from generic "SMBs lack resources" to the specific gaps Int3grate exists to fix.

### Section heading
*"Why AI agents don't ship inside real companies."*

### Section intro (one sentence)
> *"AI capability is growing faster than companies can safely adopt it. The blocker isn't awareness — it's that LLM agents don't have the control surfaces a real business needs."*

### Three problem cards

**Card 1 — Black-box risk**
> *"An LLM agent that can send invoices, post to your social channels, or update your CRM is one bad output away from a real-world incident. Without policy boundaries, approval checkpoints, and an audit trail, security says no — and they're right to."*

**Card 2 — Data bleed between teams**
> *"Your finance data shouldn't be reachable by a marketing agent. Most agent frameworks treat memory as one shared bucket. Real companies need department-level isolation from day one — not as a future enterprise upsell."*

**Card 3 — Invisible cost**
> *"Tokens, tool calls, model chains. By the time you notice an AI workflow burned hundreds of dollars last week, the budget is already gone. There's no per-user, per-agent, per-task ledger built into most stacks."*

### Closing line
> *"These three gaps — control, isolation, and cost visibility — are what stop AI from becoming an actual operating layer in real companies."*

### Design notes
- Three cards in a row on desktop, stacked on mobile.
- Monochrome line icons: lock (control), separator (isolation), gauge (cost).
- Card backgrounds subtly differentiated, not boxed-in.

---

## 5. Section 3 — Inside the MVP

### Purpose
**The highest-impact section on the page.** Converts the abstract problem into one concrete, end-to-end thing the team is actually shipping.

### Framing line (place at the very top of the section, above the heading)
> *"This is our first workflow — chosen because it exercises every core primitive of the platform. Int3grate isn't about lead generation. Lead generation is just the first proof."*

### Section heading
*"What we're shipping first, end-to-end."*

### Subheading
> *"This is the loop we're building first. Our founding design partners run it ahead of public launch in mid-2026."*

### Account framing block (immediately under the subheading, before Step 1)
> *"Your team connects a LinkedIn account once. From then on, the AI worker acts as that user — with their access, their visibility, and the control plane's scopes on top. No scraped database. No shared bucket of profiles. Your account, your control."*

This block is critical — it establishes the BYOA model that differentiates Int3grate from Apollo-style competitors and aligns the lead-gen story with the governance positioning.

### The loop — six numbered steps

**Step 1 — Define your ICP in chat**
A salesperson opens Int3grate and talks to a Lead-gen AI worker in plain language: *"Find me CTOs at 50–200 person SaaS companies in the EU that raised Series A in the last 12 months."*

**Step 2 — The agent runs a Sales Navigator search**
Using the team's connected LinkedIn account, the agent runs a Sales Navigator search across the requested filters — title, industry, headcount, geography, funding stage. It fetches matching profiles and pulls available contact details.

**Step 3 — Rule-based ICP scoring**
Each lead receives a 0–100 fit score against the criteria you set. Founders can tune the rules. ML-based scoring is on the roadmap.

**Step 4 — Deduplication against your Zoho CRM**
Existing Zoho contacts are filtered out by LinkedIn URL and email. Designed to prevent duplicate pushes.

**Step 5 — Approval checkpoint**
Before anything touches Zoho, the run **suspends** and a structured approval packet appears in the inbox: who triggered it, which leads will be created, the exact field-by-field preview, the run's cost so far, **and how many of today's safe daily LinkedIn actions this run will consume — so you never accidentally burn through your account's limits.**

**Step 6 — Push to Zoho and full audit**
On approval the workflow resumes, leads land in Zoho as Contacts/Leads, and every step of the run is logged in the timeline — tokens in/out, model used, tool called, dollar cost.

### Closing block
> *"This is the entire loop. It's narrow on purpose — one source, one CRM, one approval step. Everything else on our roadmap reuses this same plumbing: agents, versions, runs, approvals, ledger, audit. A narrow MVP isn't a small vision — it's a properly built foundation."*

### Design notes
- Most vertical real estate on the page. Don't compress.
- Six steps as a visual flow: large numbers, one-line headlines, two- or three-line descriptions. Vertical stack on mobile, horizontal flow with connecting lines on desktop.
- Optional but powerful: a small "approval packet preview" mockup near Step 5, marked **"Design preview."** Show daily LinkedIn limits as a visible meter inside the preview — this is a strong visual differentiator.
- One **"Live in MVP"** pill at the top of the section, applying to the entire loop.

---

## 6. Section 4 — The Vision

### Purpose
Develop the positioning. Explain the agent-as-managed-entity model. This is where a thoughtful technical reader thinks *"oh, they actually understand the problem."*

### Section heading
*"An operating layer for AI workers."*

### Lead paragraph
> *"We treat AI workers the way modern infrastructure treats services: as declarative, versioned, managed entities (we call them agents internally). An agent isn't a daemon that 'lives' somewhere. It's a configuration with scopes, tools, memory layers, and policies. Work happens through runs — finite, orchestrated executions that the platform observes, persists, and can suspend for human approval."*

### Four pillars (2×2 grid on desktop)

**Pillar 1 — AI workers as managed entities**
> *"Every AI worker is a versioned configuration. Each change creates an immutable snapshot. Runs are always tied to a specific version, so you can ship, iterate, and roll back the way you'd ship code."*
Tag: **Live in MVP**

**Pillar 2 — Domain isolation, not theater**
> *"Finance, Sales, and Marketing each get their own memory, their own tools, their own budgets, their own approvers. Isolation is enforced at the data layer — every query is scoped, every tool grant is bounded."*
Tag: **Live in MVP**

**Pillar 3 — Approvals as durable wait states**
> *"When a run hits an approval checkpoint, it doesn't sit in process memory burning resources. The state is serialized to the database. Workflows can wait minutes, hours, or days, then resume from exactly where they paused."*
Tag: **Live in MVP**

**Pillar 4 — Cost ledger built-in**
> *"Every model call, every tool invocation, every step writes a ledger entry. You see cost at the level of step → run → task → user → domain → tenant."*
Tag: **Live in MVP** (deeper analytics in Next)

### Design notes
- Four substantial cards (~60–80 words each), not bullet points.
- Tags appear as small inline pills at the bottom of each card.
- Same color for "Live in MVP" pills throughout the page; different colors for Next and Later.

---

## 7. Section 5 — Under the Hood

### Purpose
Build credibility with technical decision-makers. Quiet but correct. Now also carries the "what's actually working today" trust signal that previously lived in the deleted Section 8.

### Section heading
*"How it's built."*

### Block 1 — Eight layers, separated on purpose

Short paragraph + a visual diagram with eight layers:

1. **Experience Layer** — web app, dashboards, admin panel, agent builder, approvals inbox, chat
2. **API Gateway / BFF** — auth, tenant resolution, rate limiting, request validation
3. **Control Plane Services** — Agent Registry, Task Service, Approval Service, Memory/Knowledge, Integration, Policy, Analytics/Cost, Audit
4. **Orchestration Layer** — workflow execution, retries, schedule triggers, suspended states, branching
5. **Runtime / Execution Workers** — LLM invocation, retrieval, tool calls, validation, formatting
6. **Integration / Tool Layer** — connectors to external systems
7. **Data Layer** — primary database, cache, analytics store, object storage
8. **Cross-Cutting Layers** — security, audit, observability, economics

Tagline below the diagram:
> *"Orchestration, data model, and integrations are kept apart on purpose. We're building a product, not glue code around external systems."*

### Block 2 — The stack
> *"A graph-based workflow engine for run execution. A Go gateway for the control API. Postgres for transactional state. Redis for hot state. An analytics store later for cost dashboards at volume. Adapter pattern for every external system, scoped as small additions rather than new products."*

### Block 3 — What's built so far (NEW — relocated from old Section 8)

A small, honest list of what's actually working right now. Three to five items max.

**Section sub-heading:**
> *"What's built so far."*

**One-line lead:**
> *"We're not pre-product. Here's what already runs in our development environment today."*

**Item list — TO BE PROVIDED BY TEAM.** Placeholder examples to show the format and tone:

- *"Working agent runtime with version snapshots — every change creates a new immutable AgentVersion in Postgres"*
- *"Approval inbox v0 — runs suspend cleanly to the database and resume from exactly where they stopped"*
- *"Lead-gen loop end-to-end against LinkedIn Sales Navigator — search, fetch, score, dedupe, approval-gate"*
- *"Cost ledger writing per step — tokens in/out and dollar cost recorded for every model and tool call"*
- *"Domain-scoped queries enforced at the data layer — `domain_id` filter on every read"*

> ⚠️ **For the team:** every line above must be confirmable on the day the page goes live. If a line isn't true, **delete it** rather than soften it. An honest 2-line list is stronger than a padded 5-line one. Update this block whenever a new piece lands — this is a living trust signal.

### Block 4 — Open with design partners (small callout)
> *"We're an open book with founding partners. Architecture deep-dives, schema walkthroughs, and code reviews are part of the program."*

### Design notes
- High-quality, legible architecture diagram — readers will zoom in.
- Stack names as neutral text, no vendor logos.
- "What's built so far" sub-block visually distinct from the architecture diagram — slightly warmer treatment, maybe a subtle background tint or a different border style. It's a different type of content (status, not structure) and should feel that way.
- Section overall visually quieter than Section 3.

---

## 8. Section 6 — Roadmap (Now / Next / Later)

### Purpose
Honest, transparent feature planning. Trimmed in v2, dates synchronized in v3.

### Section heading
*"Now, next, later."*

### Subheading
> *"We're transparent about what's shipping when. Building toward public launch in mid-2026."*

### Layout
Three vertical columns on desktop, three accordions on mobile. Each column: header, one-line description, short feature list, "Show full roadmap →" link at the bottom.

### Column 1 — NOW (shipping in MVP) — 6 items

Header: **Now** · *Building toward public launch mid-2026. Founding partners run the loop first.*

- **Managed AI workers with versioning** — create agents with instructions, tools, and memory scopes; every change creates an immutable version
- **Domain isolation** — departments separated at the data layer, no cross-domain bleed
- **Chat mode with read tools and gated writes** — talk to your AI worker, write actions held for approval
- **Approval inbox with durable suspend/resume** — runs pause cleanly, resume from exactly where they stopped
- **First end-to-end workflow: lead-gen → Zoho** — full loop including ICP filtering via Sales Navigator, scoring, dedup, approval, push
- **Cost ledger and basic dashboard** — token/dollar tracking per run, spend by user/agent/domain, pending approvals widget

### Column 2 — NEXT (right after MVP) — 5 items

Header: **Next** · *Immediately after the first build*

- **AI-assisted agent builder** — describe what you want in one sentence, system drafts the structured spec
- **Domain memory** — department-wide reference docs every AI worker in that domain can see
- **Task and scheduled modes** — submit a job and walk away; or run on a schedule
- **More CRM adapters and LinkedIn engagement** — Hubspot and Salesforce after Zoho; LinkedIn comments, DMs, and InMail through the same connected account, gated by the same approval flow
- **Multi-step approval chains** — junior initiates, manager approves, head signs off

### Column 3 — LATER (data model ready, build follows demand) — 5 items

Header: **Later** · *Data model is designed with these in mind. Build follows real customer demand.*

- **Hard budget enforcement per user and per domain**
- **Global business memory and agent-level RAG** — company-wide grounding and learned context per agent
- **Custom policy DSL** — write rules like *"no deals over $X without approval"* in plain syntax
- **ROI / human-vs-AI labor analytics** — measurable comparison of AI work against human baseline
- **Replayable run history** — re-execute past runs for debugging and audit

### Closing line
> *"The data model is designed with everything in the Later column in mind. We build it when a real customer asks. That's how founding partners shape what ships first."*

### Design notes
- Three-column desktop, accordion on mobile.
- Distinct accent color per column (e.g., green for Now, blue for Next, neutral gray for Later).
- One-line items for scanning. Detail expansions optional via tooltip or "Show full roadmap →" link.

---

## 9. Section 7 — Where Int3grate sits in your AI stack

### Purpose
Categorical positioning against the four real alternatives. Descriptive ("here's where we sit, here's where they stop"), not defensive.

### Section heading
*"Where Int3grate sits in your AI stack."*

### Section intro (one sentence)
> *"You're already using or considering tools in four nearby categories. Int3grate isn't trying to replace them — it occupies the layer none of them covers."*

### Four cards (2×2 grid)

Each card: **What they're for** / **Where they stop** / **What we add**.

### Card 1 — Consulting firms
> **What they're for:** Strategy, frameworks, advisory hours.
> **Where they stop:** Nothing keeps running after the team leaves. No software footprint.
> **What we add:** We do discovery and workflow mapping too — but it materializes into a platform you operate yourself.

### Card 2 — Copilots (ChatGPT, Claude, Microsoft Copilot)
> **What they're for:** Powerful individual tools for individual users.
> **Where they stop:** They don't own a workflow. No domain isolation, no per-team cost tracking, no approval checkpoints, no audit.
> **What we add:** We use them as the model layer inside runs — and build the control plane on top.

### Card 3 — Vertical SaaS
> **What they're for:** Deep, sticky products in a single niche.
> **Where they stop:** Limited cross-system reach. Each new system is a new vendor.
> **What we add:** Cross-system by design. The adapter pattern means new connectors are scoped as additions, not new products.

### Card 4 — Automation shops & no-code tools
> **What they're for:** Fast wiring of triggers and actions.
> **Where they stop:** No managed AI workers, no durable approval flow, no multi-stage model chains, no spend ledger.
> **What we add:** We use low-code connectors where they earn their keep — but never as the product's core.

### Closing line
> *"Implementation, orchestration, visibility, and recurring operating value — in one layer."*

### Design notes
- 2×2 grid on desktop, single column on mobile.
- Small monochrome icon per category.
- Closing line set apart, slightly larger, centered.

---

## 10. Section 8 — Founding design partners

### Purpose
The single conversion section. Replaces what would normally be a pricing teaser. Reframed in v3 from "we're picking a cohort" to "founding design partner status."

### Section heading
*"Founding design partners."*

### Subheading
> *"A small group working directly with the founder to shape what Int3grate becomes."*

### Lead paragraph
> *"Not customers in the traditional sense. You work directly with the founder, shape what ships, and get lifetime founding-partner terms when the product reaches general availability."*

### Block 1 — Who fits
- **Sales-led SMBs (10–200 people)** with a real lead-generation pain — outbound SDRs, founder-led sales, agencies acquiring clients. The first MVP loop is built for you literally first.
- **Ops-minded founders or fractional COOs** who want to instrument AI work the way they instrument the rest of the business — with budgets, audits, and approvals.
- **Teams already on Zoho CRM** — that's our first adapter. Hubspot, Salesforce, and others are next, but founding partners on Zoho move fastest.
- **At least one team member with an active LinkedIn account** — Sales Navigator strongly preferred for the full search experience. Without Sales Navigator the loop still works, but on the more limited Classic search filters.

Closing line of the block:
> *"We're selective on purpose. At this stage we work closely with a few teams — the ones where we can make real impact together."*

### Block 2 — What you get
> *"Weekly working sessions with the founder — not a partnership manager. Direct influence on what ships and in what order. Priority access to every new module as it lands. Lifetime founding-partner terms when the product reaches general availability. Architecture deep-dives and code walkthroughs whenever you want them."*

### Block 3 — What we ask in return
> *"A few hours of discovery time in the first week. Access to one real workflow we can build the loop around. Honest feedback after each iteration. That's it. No payment during the founding-partner phase."*

### Block 4 — Time-bounded scarcity (replaces numerical scarcity)
> *"The founding cohort closes when Int3grate goes public in mid-2026. After that, the door is still open — but founding-partner terms are not."*

### Primary CTA
**Button:** "Apply to the founding cohort"

This is the only primary CTA on the page besides the hero. Every other secondary CTA routes here.

### Fallback CTA (bottom of section)
A small repeat of the email-notify input from the hero, for visitors who reached the bottom but aren't ready to apply:

> *"Not ready yet? Get notified when MVP ships."* + email input + small button

### Design notes
- This section is slightly more "personal" than the rest. Less infrastructure-grade, more human.
- No founder photos, no team strip — that decision is locked at the page level.
- Primary CTA button uses the same style as the hero CTA for path consistency.
- "What we ask in return" block visually de-emphasized vs "What you get" — the gives should outweigh the asks visually as well as substantively.

---

## 11. Tone reference (for copywriters)

The voice is **technical, confident, restrained, slightly dry**. It avoids:

- AI hype language ("revolutionize," "transform," "unleash," "supercharge")
- Vague capability claims ("intelligent," "powerful," "seamless")
- Manufactured urgency ("don't miss out," "limited time")
- Stock B2B marketing rhythm ("In today's fast-paced world...")
- Absolute claims ("never," "always," "every," "guaranteed")

It favors:

- Concrete nouns (run, agent version, approval packet, ledger entry, domain, connected account)
- Honest qualifiers (in MVP, post-MVP, designed for, scoped as)
- Direct address ("you ship," "you operate," "you see")
- Mechanical verbs (suspend, resume, attribute, scope, isolate, persist)

Test: *"would Linear, Supabase, or Temporal write this sentence?"* If no, rewrite.

---

## 12. Build-level handoff notes

### 12.1 CTA behavior

**Primary CTA — "Apply to the founding cohort"**
- On click: scrolls to or routes to the application flow
- Application flow: a focused, single-page form (out of scope for this spec)
- Same button style across all instances on the page (hero and Section 8)
- Hover: subtle elevation + accent color shift
- Active: pressed state
- Disabled state not used (button is always actionable)

**Secondary text link — "See the workflow ↓"**
- Anchor scroll to Section 3 (Inside the MVP) with smooth-scroll behavior
- No new page navigation
- Underline on hover

**Tertiary email-notify input**
- Single email field, single submit button
- Inline validation: invalid email shows error below the field
- Success state: input replaced with confirmation text *"Thanks — we'll let you know."*
- Error state: error message below field, input retains value, allows retry
- Loading state: button shows spinner, input disabled
- Backend: submits to a notify list (separate from the founding cohort application pipeline)
- No double-opt-in required for MVP launch; add confirmation email later if needed
- Appears in two places: Hero (tertiary) and Section 8 (fallback)

### 12.2 Component inventory (rough)

- **StatusBadge** (pill with optional icon, multi-segment) — used in hero
- **RoadmapTag** (small inline pill: Live in MVP / Next / Later) — three color variants
- **PrimaryButton** — used twice (hero, Section 8)
- **SecondaryLink** — text link with arrow
- **EmailNotifyInput** — composite (input + button + state machine), used twice
- **ProblemCard / FeatureCard / DiffCard** — used in Sections 2, 4, 7 — same shell, different content
- **StepCard** — numbered, used in Section 3
- **ArchitectureDiagram** — illustration component, two variants (3-layer hero version, 8-layer Section 5 version)
- **RoadmapColumn** — accordion on mobile, column on desktop
- **BuiltSoFarItem** — bullet-style list item used in Section 5 Block 3, distinct visual treatment from technical content

### 12.3 Sticky / nav behavior

- Header (out of scope) should sticky on scroll with reduced height
- The primary CTA from the header should remain visible on all sections after Section 1
- No floating "Apply" button on mobile — too aggressive for early stage; rely on in-page CTAs

### 12.4 Responsive breakpoints

- **Desktop (1280px+):** full multi-column layouts as specified
- **Tablet (768–1279px):** two-column grids collapse to single column where specified; three-card rows become 2+1
- **Mobile (<768px):** single column throughout, accordions for roadmap, vertical step flow for MVP loop

### 12.5 Long-section responsive notes

- **Section 3 (MVP loop)** is the longest section on mobile. Steps should each fit one viewport height with a clear visual continuation indicator (arrow / line)
- **Section 6 (Roadmap)** uses accordions on mobile, all closed by default; "Now" expanded by default
- **Section 5 (Architecture diagram)** should be horizontally scrollable on mobile if it doesn't compress cleanly, **not** zoomable — zoom UX is fragile

### 12.6 Motion / interaction notes

- Subtle scroll-triggered reveals on cards (fade + 8px translate-up) — keep under 300ms
- No parallax
- No autoplay video
- No animated background gradients
- Hover micro-interactions on cards: subtle border or shadow shift
- Reduced motion preference (`prefers-reduced-motion: reduce`) disables all reveal animations

### 12.7 Accessibility

- All interactive elements keyboard-navigable in document order
- Focus states visible and distinct from hover
- Color contrast minimum WCAG AA on body text, AAA on CTAs
- Architecture diagrams need text alternatives — either inline figcaption or `aria-describedby` pointing to a hidden description
- Email-notify inputs (both instances) have visible label or accessible label via `aria-label`
- Status badge and roadmap tags must not rely on color alone — text inside them carries the meaning

### 12.8 Performance

- Hero diagram: SVG, inline, <20kb
- No web fonts beyond two faces (one display, one body) — subset where possible
- Architecture diagram in Section 5: SVG preferred, lazy-loaded if below the fold
- No blocking third-party scripts

---

## 13. What the team must provide before publication

Two artifacts that I cannot generate from the outside, because they depend on the real state of the code and on a corporate-terminology check.

### 13.1 The "What's built so far" item list (Section 5, Block 3)

Three to five lines, each describing one component that is **really working today**. Each line must be confirmable on the day the page goes live. Format examples are in the spec — match the tone (concrete nouns, mechanical verbs, no marketing language).

If a candidate line cannot be confirmed truthfully, **omit it** rather than soften it. The honesty of this block is its entire value. Plan to update it whenever a new piece lands — treat it as a living trust signal, not a one-time copy task.

### 13.2 Terminology check on "founding"

The page uses "founding design partners" and "founding cohort" extensively. Before publication, run a one-line sanity check with whoever handles the corporate documents: does the marketing use of "founding" create any ambiguity with the legal use of "founding" in your founder agreements (founder shares, founding equity, founder vesting)?

In 95% of cases this is fine — the contexts don't overlap. In rare cases there's a conflict that's worth knowing about before the page is public.

---

## 14. Optional enhancement (not required, but recommended if real)

### 14.1 "Built in the open" signal

Because Section 8 was removed, the page leans entirely on technical credibility for trust. One additional low-cost amplifier the team can add — **only if it's real or planned to be real before launch** — is a "built in the open" signal: a public changelog, public roadmap, weekly product notes, or a public Slack/Discord. One or two of these together can substitute for a meaningful share of the warmth that a founder strip would have provided.

Suggested location: as a small line at the end of Section 5 (Under the Hood), or in the footer (out of scope for this spec but worth flagging to whoever owns the footer).

Suggested copy:
> *"Built in the open. Public changelog and weekly product notes."*

> ⚠️ **For the team:** do not add this line unless at least one of these artifacts actually exists or is committed to existing by launch. An empty promise here is worse than no promise at all.

### 14.2 Future founder-visibility upgrade path

Section 8 ("Who's building this") was removed in this version. If founder comfort with public visibility grows after the founding cohort is in place — for example, after a few partners are happy and willing to be quoted — the team can revisit adding either a Founder Voice paragraph (Level 4 from the discussion) or a partial founder strip (Level 3) without restructuring the rest of the page. The natural insertion point would be between Section 7 and Section 8, as the warm bridge into the application CTA.

This is not a v3 deliverable. It's a marker for a future version.

---

## 15. Resolved decisions log (for reference)

This section exists so the team can trace why each piece of copy is the way it is, without re-reading the strategy discussion.

1. **Why "control plane" in the H1** — Selected because it's the one technical term that simultaneously communicates the product's category (infrastructure layer, not chatbot) and intrigues non-technical readers. Subheadline simplified to compensate for jargon density at the top.

2. **Why "AI workers" instead of "agents"** — "Agents" is overloaded across the industry. "AI workers" is unique-sounding, more concrete, and describes the operating-layer framing better. "Agents" survives as the technical pass-through term.

3. **Why Zoho is named directly** — Naming the first CRM removes self-quals confusion ("am I a fit?") and sharpens the design partner pool. Generic "your CRM" was tested and rejected as too soft.

4. **Why LinkedIn Sales Navigator instead of Apollo** — The BYOA model (customer's own connected LinkedIn account) aligns perfectly with the control-plane positioning. Each search happens "as the user" under the platform's scopes, which is fundamentally different from selling access to a scraped database. This strengthens the governance story rather than complicating it.

5. **Why Unipile is not named on the page** — Implementation detail. Naming it would create vendor lock-in in perception and require copy rewrites if Unipile pricing/policies change. Customers don't need to know the implementation vendor.

6. **Why "mid-2026" instead of "Q2/Q3 2026"** — "Q2/Q3" reads as internal planning language and signals uncertainty. "Mid-2026" is the same timeframe in customer-facing language.

7. **Why no cohort number** — A 1–2 person team running weekly working sessions sustainably handles ~3 partners. Naming "3" creates pressure to overcommit; not naming a number lets the team adjust in real time. Founder-access scarcity ("work directly with the founder") and temporal scarcity ("founding terms close at public launch") replace the numerical signal.

8. **Why Section 8 was removed** — Founder visibility decision (Level 6). The credibility load shifts to architecture, MVP loop, roadmap honesty, and the relocated "What's built so far" block in Section 5.

---

*End of specification — v3 (final).*
