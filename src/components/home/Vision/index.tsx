import styles from './style.module.css';

import { Tag } from '@/shared';

const PILLARS = [
  {
    title: 'AI workers as managed entities',
    body: `Every AI worker is a versioned configuration. Each change creates an immutable snapshot. Runs are always
    tied to a specific version, so you can ship, iterate, and roll back the way you'd ship code.`,
    tag: <Tag variant="live" />
  },
  {
    title: 'Domain isolation, not theater',
    body: `Finance, Sales, and Marketing each get their own memory, their own tools, their own budgets, their own
    approvers. Isolation is enforced at the data layer — every query is scoped, every tool grant is bounded.`,
    tag: <Tag variant="live" />
  },
  {
    title: 'Approvals as durable wait states',
    body: `When a run hits an approval checkpoint, it doesn't sit in process memory burning resources. The state is
    serialized to the database. Workflows can wait minutes, hours, or days, then resume from exactly where they paused.`,
    tag: <Tag variant="live" />
  },
  {
    title: 'Cost ledger built-in',
    body: `Every model call, every tool invocation, every step writes a ledger entry. You see cost at the level of
    step → run → task → user → domain → tenant.`,
    tag: (
      <span className={styles.pillarTagGroup}>
        <Tag variant="live" />
        <span className={styles.pillarTagNote}>deeper analytics in Next</span>
      </span>
    )
  }
];

export const Vision = () => {
  return (
    <section className={styles.vision} aria-labelledby="vision-heading">
      <div className={styles.visionInner}>
        <header className={styles.visionHeader}>
          <h2 id="vision-heading" className={styles.visionHeading}>
            An operating layer for AI workers.
          </h2>
          <p className={styles.visionLead}>
            {`We treat AI workers the way modern infrastructure treats services: as declarative, versioned, managed
            entities (we call them agents internally). An agent isn't a daemon that "lives" somewhere. It's a
            configuration with scopes, tools, memory layers, and policies. Work happens through runs — finite,
            orchestrated executions that the platform observes, persists, and can suspend for human approval.`}
          </p>
        </header>

        <div className={styles.visionGrid}>
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className={styles.pillarCard}>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarBody}>{pillar.body}</p>
              <div className={styles.pillarTagWrap}>{pillar.tag}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
