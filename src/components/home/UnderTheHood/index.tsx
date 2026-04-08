import { ArchitectureDiagram } from './ArchitectureDiagram';

import styles from './style.module.css';

/*
 * "What's built so far" placeholder list — spec §5 Block 3 / §13.1.
 *
 * The team must replace these lines before publication. Each line must be
 * confirmable on the day the page goes live. If a candidate line cannot be
 * confirmed truthfully, omit it rather than soften it. The honesty of this
 * block is its entire value.
 *
 * The placeholders below are taken verbatim from the spec's example list and
 * are clearly marked as TODO via the `placeholder` flag — they render with a
 * visible "TODO — confirm with team" indicator until the team approves them.
 */
const BUILT_SO_FAR_PLACEHOLDERS = [
  {
    text: `Working agent runtime with version snapshots — every change creates a new immutable AgentVersion in
    Postgres`,
    placeholder: true
  },
  {
    text: `Approval inbox v0 — runs suspend cleanly to the database and resume from exactly where they stopped`,
    placeholder: true
  },
  {
    text: `Lead-gen loop end-to-end against LinkedIn Sales Navigator — search, fetch, score, dedupe, approval-gate`,
    placeholder: true
  },
  {
    text: `Cost ledger writing per step — tokens in/out and dollar cost recorded for every model and tool call`,
    placeholder: true
  },
  {
    text: `Domain-scoped queries enforced at the data layer — \`domain_id\` filter on every read`,
    placeholder: true
  }
];

export const UnderTheHood = () => {
  return (
    <section className={styles.uth} aria-labelledby="uth-heading">
      <div className={styles.uthInner}>
        <header className={styles.uthHeader}>
          <h2 id="uth-heading" className={styles.uthHeading}>
            How it&apos;s built.
          </h2>
        </header>

        <div className={styles.uthBlock}>
          <p className={styles.uthBlockLead}>
            {`Eight layers, separated on purpose. The control plane lives in the middle and never collapses into the
            runtime or the data layer.`}
          </p>

          <ArchitectureDiagram />

          <p className={styles.uthBlockTagline}>
            {`Orchestration, data model, and integrations are kept apart on purpose. We're building a product, not
            glue code around external systems.`}
          </p>
        </div>

        <div className={styles.uthBlock}>
          <h3 className={styles.uthBlockHeading}>The stack</h3>
          <p className={styles.uthBlockBody}>
            {`A graph-based workflow engine for run execution. A Go gateway for the control API. Postgres for
            transactional state. Redis for hot state. An analytics store later for cost dashboards at volume. Adapter
            pattern for every external system, scoped as small additions rather than new products.`}
          </p>
        </div>

        <div className={`${styles.uthBlock} ${styles.uthBuilt}`}>
          <h3 className={styles.uthBlockHeading}>What&apos;s built so far.</h3>
          <p className={styles.uthBlockLead}>
            {`We're not pre-product. Here's what already runs in our development environment today.`}
          </p>

          <ul className={styles.uthBuiltList}>
            {BUILT_SO_FAR_PLACEHOLDERS.map((item) => (
              <li key={item.text} className={styles.uthBuiltItem}>
                <span className={styles.uthBuiltDot} aria-hidden="true" />
                <span className={styles.uthBuiltText}>{item.text}</span>
                {item.placeholder && (
                  <span className={styles.uthBuiltTodo} title="Awaiting confirmation from the team">
                    TODO — confirm
                  </span>
                )}
              </li>
            ))}
          </ul>

          <p className={styles.uthBuiltNote}>
            {`Placeholder list — every line must be confirmed by the team and provably true on launch day. Lines that
            can't be confirmed should be removed, not softened.`}
          </p>
        </div>

        <aside className={styles.uthCallout}>
          <p>
            {`We're an open book with founding partners. Architecture deep-dives, schema walkthroughs, and code
            reviews are part of the program.`}
          </p>
        </aside>
      </div>
    </section>
  );
};
