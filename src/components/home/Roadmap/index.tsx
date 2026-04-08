'use client';

import { useEffect, useRef } from 'react';

import styles from './style.module.css';

const NOW_ITEMS = [
  {
    title: 'Managed AI workers with versioning',
    body: 'Create agents with instructions, tools, and memory scopes; every change creates an immutable version'
  },
  {
    title: 'Domain isolation',
    body: 'Departments separated at the data layer, no cross-domain bleed'
  },
  {
    title: 'Chat mode with read tools and gated writes',
    body: 'Talk to your AI worker, write actions held for approval'
  },
  {
    title: 'Approval inbox with durable suspend/resume',
    body: 'Runs pause cleanly, resume from exactly where they stopped'
  },
  {
    title: 'First end-to-end workflow: lead-gen → Zoho',
    body: 'Full loop including ICP filtering via Sales Navigator, scoring, dedup, approval, push'
  },
  {
    title: 'Cost ledger and basic dashboard',
    body: 'Token/dollar tracking per run, spend by user/agent/domain, pending approvals widget'
  }
];

const NEXT_ITEMS = [
  {
    title: 'AI-assisted agent builder',
    body: 'Describe what you want in one sentence, system drafts the structured spec'
  },
  {
    title: 'Domain memory',
    body: 'Department-wide reference docs every AI worker in that domain can see'
  },
  {
    title: 'Task and scheduled modes',
    body: 'Submit a job and walk away; or run on a schedule'
  },
  {
    title: 'More CRM adapters and LinkedIn engagement',
    body: 'Hubspot and Salesforce after Zoho; LinkedIn comments, DMs, and InMail through the same connected account, gated by the same approval flow'
  },
  {
    title: 'Multi-step approval chains',
    body: 'Junior initiates, manager approves, head signs off'
  }
];

const LATER_ITEMS = [
  {
    title: 'Hard budget enforcement per user and per domain',
    body: ''
  },
  {
    title: 'Global business memory and agent-level RAG',
    body: 'Company-wide grounding and learned context per agent'
  },
  {
    title: 'Custom policy DSL',
    body: 'Write rules like "no deals over $X without approval" in plain syntax'
  },
  {
    title: 'ROI / human-vs-AI labor analytics',
    body: 'Measurable comparison of AI work against human baseline'
  },
  {
    title: 'Replayable run history',
    body: 'Re-execute past runs for debugging and audit'
  }
];

interface RoadmapColumnProps {
  variant: 'now' | 'next' | 'later';
  label: string;
  description: string;
  items: { title: string; body: string }[];
  defaultOpen?: boolean;
}

const RoadmapColumn = ({ variant, label, description, items, defaultOpen = false }: RoadmapColumnProps) => {
  return (
    <details className={`${styles.column} ${styles[variant]}`} open={defaultOpen}>
      <summary className={styles.columnSummary}>
        <div className={styles.columnHeader}>
          <span className={`${styles.columnLabel} ${styles[`${variant}Label`]}`}>{label}</span>
          <span className={styles.columnChevron} aria-hidden="true">
            ↓
          </span>
        </div>
        <p className={styles.columnDescription}>{description}</p>
      </summary>

      <ul className={styles.columnList}>
        {items.map((item) => (
          <li key={item.title} className={styles.columnItem}>
            <span className={styles.columnItemTitle}>{item.title}</span>
            {item.body && <span className={styles.columnItemBody}> — {item.body}</span>}
          </li>
        ))}
      </ul>
    </details>
  );
};

export const Roadmap = () => {
  const columnsRef = useRef<HTMLDivElement>(null);

  /*
   * Desktop layout: all three columns are always expanded.
   * Mobile layout (≤1024px): native <details> accordion, "Now" open by default.
   *
   * <details> visibility is controlled by the `open` attribute, not CSS, so
   * we keep the open attribute in sync with the active breakpoint via a
   * matchMedia listener. No layout-shift on first paint because the JSX
   * defaults already match the mobile state.
   */
  useEffect(() => {
    const root = columnsRef.current;
    if (!root) return;

    const desktop = window.matchMedia('(min-width: 1025px)');
    const apply = (isDesktop: boolean) => {
      const detailsList = root.querySelectorAll<HTMLDetailsElement>('details');
      detailsList.forEach((el, index) => {
        if (isDesktop) {
          el.open = true;
        } else {
          // Mobile default: only the first column ("Now") is open.
          el.open = index === 0;
        }
      });
    };

    apply(desktop.matches);
    const handler = (event: MediaQueryListEvent) => apply(event.matches);
    desktop.addEventListener('change', handler);
    return () => desktop.removeEventListener('change', handler);
  }, []);

  return (
    <section className={styles.roadmap} aria-labelledby="roadmap-heading">
      <div className={styles.roadmapInner}>
        <header className={styles.roadmapHeader}>
          <h2 id="roadmap-heading" className={styles.roadmapHeading}>
            Now, next, later.
          </h2>
          <p className={styles.roadmapSubheading}>
            {`We're transparent about what's shipping when. Building toward public launch in mid-2026.`}
          </p>
        </header>

        <div className={styles.roadmapColumns} ref={columnsRef}>
          <RoadmapColumn
            variant="now"
            label="Now"
            description="Building toward public launch mid-2026. Founding partners run the loop first."
            items={NOW_ITEMS}
            defaultOpen
          />
          <RoadmapColumn
            variant="next"
            label="Next"
            description="Immediately after the first build."
            items={NEXT_ITEMS}
          />
          <RoadmapColumn
            variant="later"
            label="Later"
            description="Data model is designed with these in mind. Build follows real customer demand."
            items={LATER_ITEMS}
          />
        </div>

        <p className={styles.roadmapClosing}>
          {`The data model is designed with everything in the Later column in mind. We build it when a real customer
          asks. That's how founding partners shape what ships first.`}
        </p>
      </div>
    </section>
  );
};
