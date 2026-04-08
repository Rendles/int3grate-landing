import styles from './style.module.css';

import { Tag } from '@/shared';

const STEPS = [
  {
    title: 'Define your ICP in chat',
    body: `A salesperson opens Int3grate and talks to a Lead-gen AI worker in plain language: "Find me CTOs at 50–200
    person SaaS companies in the EU that raised Series A in the last 12 months."`
  },
  {
    title: 'The agent runs a Sales Navigator search',
    body: `Using the team's connected LinkedIn account, the agent runs a Sales Navigator search across the requested
    filters — title, industry, headcount, geography, funding stage. It fetches matching profiles and pulls available
    contact details.`
  },
  {
    title: 'Rule-based ICP scoring',
    body: `Each lead receives a 0–100 fit score against the criteria you set. Founders can tune the rules. ML-based
    scoring is on the roadmap.`
  },
  {
    title: 'Deduplication against your Zoho CRM',
    body: `Existing Zoho contacts are filtered out by LinkedIn URL and email. Designed to prevent duplicate pushes.`
  },
  {
    title: 'Approval checkpoint',
    body: `Before anything touches Zoho, the run suspends and a structured approval packet appears in the inbox: who
    triggered it, which leads will be created, the exact field-by-field preview, the run's cost so far, and how many
    of today's safe daily LinkedIn actions this run will consume — so you never accidentally burn through your
    account's limits.`,
    showApprovalPreview: true
  },
  {
    title: 'Push to Zoho and full audit',
    body: `On approval the workflow resumes, leads land in Zoho as Contacts/Leads, and every step of the run is logged
    in the timeline — tokens in/out, model used, tool called, dollar cost.`
  }
];

const ApprovalPreview = () => (
  <aside className={styles.approvalPreview} aria-label="Design preview">
    <div className={styles.approvalPreviewHeader}>
      <span className={styles.approvalPreviewTitle}>Approval packet</span>
      <span className={styles.approvalPreviewBadge}>Design preview</span>
    </div>
    <dl className={styles.approvalPreviewList}>
      <div className={styles.approvalPreviewRow}>
        <dt>Triggered by</dt>
        <dd>—</dd>
      </div>
      <div className={styles.approvalPreviewRow}>
        <dt>Leads to create</dt>
        <dd>—</dd>
      </div>
      <div className={styles.approvalPreviewRow}>
        <dt>Run cost so far</dt>
        <dd>—</dd>
      </div>
    </dl>
    <div className={styles.approvalPreviewMeter}>
      <div className={styles.approvalPreviewMeterHeader}>
        <span>{`Today's safe LinkedIn actions`}</span>
        <span>—</span>
      </div>
      <div className={styles.approvalPreviewMeterTrack} aria-hidden="true">
        <div className={styles.approvalPreviewMeterFill} />
      </div>
    </div>
  </aside>
);

export const MvpLoop = () => {
  return (
    <section id="workflow" className={styles.mvp} aria-labelledby="mvp-heading">
      <div className={styles.mvpInner}>
        <Tag variant="live" className={styles.mvpTag} />

        <p className={styles.mvpFraming}>
          {`This is our first workflow — chosen because it exercises every core primitive of the platform. Int3grate
          isn't about lead generation. Lead generation is just the first proof.`}
        </p>

        <header className={styles.mvpHeader}>
          <h2 id="mvp-heading" className={styles.mvpHeading}>
            What we&apos;re shipping first, end-to-end.
          </h2>
          <p className={styles.mvpSubheading}>
            {`This is the loop we're building first. Our founding design partners run it ahead of public launch in
            mid-2026.`}
          </p>
        </header>

        <div className={styles.mvpFraming2}>
          <p>
            {`Your team connects a LinkedIn account once. From then on, the AI worker acts as that user — with their
            access, their visibility, and the control plane's scopes on top. No scraped database. No shared bucket of
            profiles. Your account, your control.`}
          </p>
        </div>

        <ol className={styles.mvpSteps}>
          {STEPS.map((step, index) => (
            <li key={step.title} className={styles.mvpStep}>
              <div className={styles.mvpStepNumber} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className={styles.mvpStepContent}>
                <h3 className={styles.mvpStepTitle}>{step.title}</h3>
                <p className={styles.mvpStepBody}>{step.body}</p>
                {step.showApprovalPreview && <ApprovalPreview />}
              </div>
            </li>
          ))}
        </ol>

        <p className={styles.mvpClosing}>
          {`This is the entire loop. It's narrow on purpose — one source, one CRM, one approval step. Everything else
          on our roadmap reuses this same plumbing: agents, versions, runs, approvals, ledger, audit. A narrow MVP
          isn't a small vision — it's a properly built foundation.`}
        </p>
      </div>
    </section>
  );
};
