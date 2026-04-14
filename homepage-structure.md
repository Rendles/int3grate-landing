# Int3grate.ai — Homepage Structure

> Full structural map of the main landing page.
> Every section listed in page order, all text verbatim, layout described briefly.

---

## Page metadata

- **Title:** Int3grate.ai — Agentic AI integration for real business operations
- **Description:** Int3grate.ai designs and deploys practical AI workflows for growing companies. Automate execution across sales, admin, and operations while keeping humans in control.
- **Structured data:** FAQPage JSON-LD (schema.org) with all 7 FAQ questions/answers injected via `next/script`.

---

## Navbar (sticky header, all pages)

**Logo (left):** Int3grate.ai

**Nav links (center):**

| #   | Label         | Anchor           |
| --- | ------------- | ---------------- |
| 1   | Why Int3grate | `#why`           |
| 2   | What We Build | `#solutions`     |
| 3   | Control Panel | `#control-panel` |
| 4   | Process       | `#process`       |
| 5   | FAQ           | `#faq`           |
| 6   | Work With Us  | `#work-with-us`  |
| 7   | Contact       | `#contact`       |

**CTA button (right):** `Talk to our team` → `#contact`

Mobile: links and CTA hidden, replaced by hamburger menu (Toolbar) with the same content.

---

## Section 1 — Hero

Two-column layout: content left, dashboard mockup right. On mobile — stacked, content first.

### Left column

**Eyebrow chip (pill badge, Sparkles icon):**

> Agentic AI integration for real business operations

**H1:**

> Turn repetitive work into AI-driven systems your team can actually trust.

**Subheading:**

> Int3grate.ai designs and deploys practical AI workflows for growing companies. We help your business automate execution across sales, admin, and operations while keeping humans in control where it matters most.

**Two CTA buttons side by side:**

- Primary (accent): `Request a consultation` → `#contact` (arrow icon)
- Secondary (outline): `Explore solutions` → `#solutions`

**Metric strip — 3 small cards in a row:**

| Value         | Label                    |
| ------------- | ------------------------ |
| 24/7          | Agent availability       |
| Human-in-loop | Approval controls        |
| Fast rollout  | Practical implementation |

### Right column — "Control Center" dashboard mockup

Card-style container with nested elements:

**Top bar:**

- Left: `CONTROL CENTER` (uppercase label) + `Automation overview`
- Right: green badge `Live systems`

**Two KPI cards (2-column grid):**

| KPI                   | Value | Note                                   |
| --------------------- | ----- | -------------------------------------- |
| Estimated hours saved | 186   | ✓ Measurable weekly impact             |
| Approvals pending     | 4     | Critical actions held for human review |

**Active agents panel (full width below KPIs):**

- Header: `Active agents` / `Business workflow stack` — right: `Updated in real time`
- 4 agent rows:

| Agent           | Task                             | Status            | Color |
| --------------- | -------------------------------- | ----------------- | ----- |
| Sales Agent     | Lead follow-up and pipeline prep | Healthy           | Green |
| Admin Agent     | Inbox triage and scheduling      | Healthy           | Green |
| Marketing Agent | Content ops and campaign QA      | Needs review      | Amber |
| Finance Agent   | Reporting and expense checks     | Approval required | Blue  |

---

## Section 2 — Why Int3grate (`#why`)

Three equal feature cards in a row (1 column on mobile). Each card: icon in accent-tinted tile, title, description.

### Card 1 — Workflow icon

**Title:** AI workflows that touch real operations
**Text:** We map repetitive processes across sales, admin, finance, and operations, then turn them into secure AI-driven workflows with human oversight.

### Card 2 — ShieldCheck icon

**Title:** Controlled automation
**Text:** Critical actions stay behind approvals. Your team decides what can run automatically and what must be reviewed before execution.

### Card 3 — Cpu icon

**Title:** Built for adoption, not demos
**Text:** We focus on measurable outcomes: hours saved, faster response times, fewer bottlenecks, and clearer visibility into how agents perform.

---

## Section 3 — Solutions (`#solutions`)

Two-column layout: intro text left, use-case cards right. Stacks on mobile.

### Left column

**Pill label (Clock icon):** What we build

**H2:**

> We design systems that reduce busywork and create operational leverage.

**Paragraph:**

> Whether you need a first automation layer or a broader AI operating model, Int3grate.ai helps you move from scattered tools to integrated execution.

### Right column — 3 cards stacked vertically

Each card: icon in accent tile + title + detail text.

#### Card 1 — Briefcase icon

**Title:** Sales Enablement
**Detail:** Lead qualification, follow-up drafting, CRM hygiene, pipeline summaries, and proposal workflows.

#### Card 2 — Bot icon

**Title:** Admin Automation
**Detail:** Inbox triage, scheduling, document collection, approvals, onboarding, and recurring task coordination.

#### Card 3 — CircleDollarSign icon

**Title:** Financial Visibility
**Detail:** Agent cost tracking, time saved, margin impact, and recommendations for where automation should expand next.

---

## Section 4 — Control Panel (`#control-panel`)

Product-preview section. Animated on scroll (fade-up). Dark glass frame containing a 2x2 card grid.

### Header block

**Eyebrow (accent color):** INSIDE THE PLATFORM

**H2:**

> Your company, from above.

**Paragraph:**

> View your organization from above. Group agents by department, track what each function is focused on, and understand where performance is compounding or slowing down.

### Preview frame (dark panel)

**Frame header row:**

- Left: `Department Groups` (H3) + `A high-level view of each operational cluster and its agents.`
- Right: `Live Structure` badge with pulsing dot

**Grid — 4 department cards (2 columns desktop, 1 column mobile):**

Each card structure:

1. Department name + `Lead Group: {name}` + status pill
2. `CURRENT FOCUS` label + focus text
3. 2x2 metrics grid (Agents, Active Tasks, Efficiency, Risk Level)
4. `OUTCOME SIGNAL` row (accent background)

#### Card 1 — Sales

- **Status:** On Track (green)
- **Lead Group:** Revenue Ops
- **Focus:** Pipeline expansion, outbound conversion, enterprise follow-ups
- **Metrics:** Agents `6` / Active Tasks `21` / Efficiency `87%` / Risk Level `Low`
- **Outcome Signal:** +14 qualified meetings

#### Card 2 — Marketing

- **Status:** Accelerating (blue)
- **Lead Group:** Growth
- **Focus:** Campaign launches, content production, lead nurturing
- **Metrics:** Agents `5` / Active Tasks `18` / Efficiency `81%` / Risk Level `Medium`
- **Outcome Signal:** +31% campaign reach

#### Card 3 — Accounting

- **Status:** Stable (neutral)
- **Lead Group:** Finance
- **Focus:** Expense reconciliation, invoicing, cash flow monitoring
- **Metrics:** Agents `4` / Active Tasks `12` / Efficiency `92%` / Risk Level `Low`
- **Outcome Signal:** -18% reconciliation time

#### Card 4 — R&D

- **Status:** Exploring (amber)
- **Lead Group:** Product Lab
- **Focus:** Workflow testing, prototype validation, knowledge expansion
- **Metrics:** Agents `7` / Active Tasks `26` / Efficiency `76%` / Risk Level `Medium`
- **Outcome Signal:** +9 prototypes shipped

### Bottom (under the frame)

**Caption:**

> This is how Int3grate renders your organization — every department grouped, every agent accounted for, every outcome visible. What you see above is a live structural view, not a static dashboard.

**CTA button (outline):** `See how it would map to your company` → `#contact`

---

## Section 5 — Process (`#process`)

One large framed panel. Two-column layout inside (stacks on mobile).

### Left column

**Label (uppercase):** OUR PROCESS

**H2:**

> From workflow audit to live deployment.

**Paragraph:**

> We work with your team to identify what should be automated first, what needs oversight, and how success should be measured from day one.

### Right column — 3 numbered steps

Rounded rows, each with a circular accent number badge.

| #   | Step                                                                   |
| --- | ---------------------------------------------------------------------- |
| 01  | Audit your current workflows and identify high-friction tasks.         |
| 02  | Design agents, approval layers, and success metrics around your team.  |
| 03  | Deploy in phases with visibility into savings, usage, and performance. |

---

## Section 6 — FAQ (`#faq`)

Animated on scroll (fade-up). Dark glass framed panel containing an accordion list. One item open at a time; click toggles. FAQPage JSON-LD structured data is injected into the page `<head>`.

### Header block

**Pill label (HelpCircle icon):** Common questions

**H2:**

> Everything you need to know before automating.

**Paragraph:**

> Answers to the questions we hear most from operators exploring AI workflows for the first time.

### Accordion panel (framed, dark background)

7 collapsible rows. Each row: question text on the left, +/x toggle icon (accent circle) on the right. Open state shows answer below the question with no additional background — just body text.

| #   | Question                                                                             | Answer                                                                                                                                                                                                                                                                                                                                                                     |
| --- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | What is agentic AI and how is it different from regular automation?                  | Regular automation follows fixed rules — if X happens, do Y. Agentic AI goes further: agents can reason about tasks, make decisions across multiple steps, and adapt when conditions change. Instead of hard-coded scripts, you get workflows that understand context. Int3grate deploys agents that act on your behalf while staying inside boundaries your team defines. |
| 2   | How is agentic AI different from RPA (robotic process automation)?                   | RPA is brittle — it breaks when a UI changes or an edge case appears. Agentic AI handles variation, interprets unstructured inputs like emails or documents, and can escalate to a human when something is outside its scope. RPA automates clicks; agents automate decisions.                                                                                             |
| 3   | Is AI automation safe to use in finance, HR, or client-facing operations?            | Yes — when it is designed with approval layers from day one. Int3grate builds human-in-the-loop checkpoints into every critical workflow. No financial action, client communication, or sensitive task runs without the right person signing off. Safety is not a constraint we add later; it is part of the architecture.                                                 |
| 4   | Will AI agents replace our employees?                                                | No. Agents handle the repetitive, low-judgment work that slows teams down — inbox triage, data entry, follow-up sequencing, report generation. Your team handles what requires experience, relationships, and judgment. The outcome is more output per person, not fewer people.                                                                                           |
| 5   | How long does it take to go from audit to live deployment?                           | It depends on workflow complexity, but most initial deployments follow a phased approach: audit and scoping in week one, agent design and approval layer setup in weeks two and three, phased rollout with monitoring from week four onward. You see measurable results before the full system is live.                                                                    |
| 6   | What does Int3grate actually integrate with — what tools and systems do you support? | We design workflows around the tools your team already uses — CRMs, email platforms, project management tools, financial systems, and document workflows. Integration scope is defined during the audit phase so the agents connect to your real stack, not a generic demo environment.                                                                                    |
| 7   | How do we measure ROI from AI workflow automation?                                   | We track hours saved per workflow, error rates before and after, cycle time reduction, and approval volume versus exception rate. From day one we agree on what success looks like for your team — so performance is visible, not assumed. Agent cost tracking and margin impact are built into the platform.                                                              |

### Accessibility

Each accordion item uses `aria-expanded`, `aria-controls`, and `role="region"` attributes.

---

## Section 7 — Work With Us (`#work-with-us`)

Centered intro above a dark card. Stacks on mobile.

### Intro block (centered)

**Eyebrow pill:** The Int3grate operating layer

**Paragraph:**

> Int3grate gives businesses a top-down view of how their organization runs, with the ability to deploy AI across departments through one unified control layer. It turns scattered workflows into a visible, scalable operating system — helping companies move faster, cut inefficiency, and build a lasting edge.

### Main card (dark background, two-column layout)

#### Left column of card

**Label (accent):** WORK WITH US

**H2:**

> Run your company on Int3grate

**Paragraph:**

> Int3grate is built for operators who want more than disconnected automations. It gives companies one system to structure departments, coordinate AI agents, and manage execution across sales, operations, finance, support, and growth. We'll help you achieve more growth, at lower costs.

**CTA button (accent, arrow icon):** `Integrate with Int3grate` → `#contact`

#### Right column of card

**Label:** WHAT YOU GET

**4 checklist rows (CheckCircle2 icon each):**

1. Full visibility across departments
2. AI execution tied to real business outcomes
3. Less operational drag, more output
4. A platform built around your company, not generic workflows

---

## Section 8 — Blog Preview (`#blog`)

Three blog post cards in a row (1 column on mobile). Currently uses mock data; will switch to Strapi (`api.getBlogPostsPopulated`) when the backend is connected. Data source is a prop — the component itself won't change.

### Header block

**Eyebrow (accent color):** FROM THE BLOG

**H2:**

> Ideas on AI, automation, and operations.

**Paragraph:**

> Practical thinking on how growing companies adopt AI workflows — without losing control.

### Card grid — 3 posts (3 columns desktop, 1 column mobile)

Each card: optional image (16:9), tags (accent pills), title (link to `/blog/{slug}`), description (clamped to 3 lines), meta row (author, read time, date).

#### Post 1

- **Title:** Why most AI automation pilots fail — and what to do instead
- **Description:** Companies rush to adopt AI agents without mapping the workflows those agents are supposed to improve. The result: demos that impress, rollouts that stall, and teams that lose trust in automation before it delivers anything. We break down the three most common failure modes and explain how a workflow-first approach changes the outcome.
- **Author:** Int3grate Team
- **Read time:** 6 min
- **Date:** Apr 10, 2026
- **Tags:** AI Strategy, Workflows
- **Slug:** `why-ai-automation-pilots-fail`

#### Post 2

- **Title:** Human-in-the-loop is not a limitation — it is the product
- **Description:** Approval checkpoints are often treated as a concession to cautious leadership. In practice, they are the feature that makes AI safe enough to deploy across finance, HR, and client-facing operations. This post explains how durable approval layers turn risky automations into trusted business processes.
- **Author:** Int3grate Team
- **Read time:** 5 min
- **Date:** Apr 3, 2026
- **Tags:** Approvals, Operations
- **Slug:** `human-in-the-loop-is-the-product`

#### Post 3

- **Title:** Measuring AI ROI beyond "hours saved"
- **Description:** Hours saved is the most common metric teams track when deploying AI workflows — and the least useful on its own. Real ROI includes reduced error rates, faster cycle times, lower context-switching costs, and the compound effect of consistent execution. Here is a framework for measuring what actually matters.
- **Author:** Int3grate Team
- **Read time:** 7 min
- **Date:** Mar 27, 2026
- **Tags:** ROI, AI Strategy
- **Slug:** `measuring-ai-roi-beyond-hours-saved`

### Bottom CTA

**Button (outline, arrow icon):** `View all posts` → `/blog`

---

## Section 9 — Contact (`#contact`)

Two-column layout: dark info panel left, form card right. Stacks on mobile.

### Left panel (dark card)

**Logo:** Int3grate.ai

**H2:**

> Let's design your AI operating layer.

**Paragraph:**

> Tell us about your workflows, bottlenecks, or automation goals. Someone from our team will reach out to discuss where Int3grate.ai can create the most leverage.

**3 info rows (icon + text each):**

| Icon        | Text                                            |
| ----------- | ----------------------------------------------- |
| Mail        | Response tailored to your workflow needs        |
| Phone       | Discovery call with implementation perspective  |
| ShieldCheck | Automation with approval and governance in mind |

### Right panel (form card)

**Label:** CONTACT FORM
**H3:** Have our team reach out

**Form fields:**

| Field                                    | Type     | Placeholder                                       | Required |
| ---------------------------------------- | -------- | ------------------------------------------------- | -------- |
| Full name                                | text     | Your name                                         | Yes      |
| Company                                  | text     | Company name                                      | Yes      |
| Email                                    | email    | you@company.com                                   | Yes      |
| Phone                                    | text     | Optional                                          | No       |
| What would you like to automate?         | text     | Sales, admin, operations, reporting, approvals... | No       |
| Tell us about your workflow or challenge | textarea | Describe your team, tools, bottlenecks, or goals  | No       |

- Name + Company are side by side (2 columns); Email + Phone are side by side; the last two fields are full width.

**Submit button (accent, arrow icon):** `Submit request`

**Helper text (next to button):**

- Default: `We'll follow up with a tailored conversation.`
- After submit: `Thanks — your request has been captured for follow-up.`

---

## Footer (all pages)

Single-row layout: logo left, nav links right. Below — copyright line.

**Logo:** Int3grate.ai

**Nav links (horizontal, right-aligned):**

| Label         | Anchor           |
| ------------- | ---------------- |
| Why Int3grate | `#why`           |
| Solutions     | `#solutions`     |
| Control Panel | `#control-panel` |
| FAQ           | `#faq`           |
| Work With Us  | `#work-with-us`  |
| Contact       | `#contact`       |

**Copyright:**

> &copy; 2026 Int3grate.ai. Intelligent workflow integration.
