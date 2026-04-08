import styles from './style.module.css';

const CARDS = [
  {
    title: 'Consulting firms',
    forUse: 'Strategy, frameworks, advisory hours.',
    stops: 'Nothing keeps running after the team leaves. No software footprint.',
    add: `We do discovery and workflow mapping too — but it materializes into a platform you operate yourself.`
  },
  {
    title: 'Copilots (ChatGPT, Claude, Microsoft Copilot)',
    forUse: 'Powerful individual tools for individual users.',
    stops: `They don't own a workflow. No domain isolation, no per-team cost tracking, no approval checkpoints, no audit.`,
    add: 'We use them as the model layer inside runs — and build the control plane on top.'
  },
  {
    title: 'Vertical SaaS',
    forUse: 'Deep, sticky products in a single niche.',
    stops: 'Limited cross-system reach. Each new system is a new vendor.',
    add: 'Cross-system by design. The adapter pattern means new connectors are scoped as additions, not new products.'
  },
  {
    title: 'Automation shops & no-code tools',
    forUse: 'Fast wiring of triggers and actions.',
    stops: 'No managed AI workers, no durable approval flow, no multi-stage model chains, no spend ledger.',
    add: `We use low-code connectors where they earn their keep — but never as the product's core.`
  }
];

export const StackPosition = () => {
  return (
    <section className={styles.stack} aria-labelledby="stack-heading">
      <div className={styles.stackInner}>
        <header className={styles.stackHeader}>
          <h2 id="stack-heading" className={styles.stackHeading}>
            Where Int3grate sits in your AI stack.
          </h2>
          <p className={styles.stackIntro}>
            {`You're already using or considering tools in four nearby categories. Int3grate isn't trying to replace
            them — it occupies the layer none of them covers.`}
          </p>
        </header>

        <div className={styles.stackGrid}>
          {CARDS.map((card) => (
            <article key={card.title} className={styles.stackCard}>
              <h3 className={styles.stackCardTitle}>{card.title}</h3>

              <dl className={styles.stackCardList}>
                <div className={styles.stackCardRow}>
                  <dt className={styles.stackCardLabel}>{`What they're for`}</dt>
                  <dd className={styles.stackCardValue}>{card.forUse}</dd>
                </div>
                <div className={styles.stackCardRow}>
                  <dt className={styles.stackCardLabel}>Where they stop</dt>
                  <dd className={styles.stackCardValue}>{card.stops}</dd>
                </div>
                <div className={styles.stackCardRow}>
                  <dt className={`${styles.stackCardLabel} ${styles.stackCardLabelAdd}`}>What we add</dt>
                  <dd className={styles.stackCardValue}>{card.add}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p className={styles.stackClosing}>
          Implementation, orchestration, visibility, and recurring operating value — in one layer.
        </p>
      </div>
    </section>
  );
};
