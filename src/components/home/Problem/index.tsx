import styles from './style.module.css';

const PROBLEM_CARDS = [
  {
    title: 'Black-box risk',
    body: `An LLM agent that can send invoices, post to your social channels, or update your CRM is one bad output away
    from a real-world incident. Without policy boundaries, approval checkpoints, and an audit trail, security says no —
    and they're right to.`
  },
  {
    title: 'Data bleed between teams',
    body: `Your finance data shouldn't be reachable by a marketing agent. Most agent frameworks treat memory as one
    shared bucket. Real companies need department-level isolation from day one — not as a future enterprise upsell.`
  },
  {
    title: 'Invisible cost',
    body: `Tokens, tool calls, model chains. By the time you notice an AI workflow burned hundreds of dollars last
    week, the budget is already gone. There's no per-user, per-agent, per-task ledger built into most stacks.`
  }
];

export const Problem = () => {
  return (
    <section className={styles.problem} aria-labelledby="problem-heading">
      <div className={styles.problemInner}>
        <header className={styles.problemHeader}>
          <h2 id="problem-heading" className={styles.problemHeading}>
            {`Why AI agents don't ship inside real companies.`}
          </h2>
          <p className={styles.problemIntro}>
            {`AI capability is growing faster than companies can safely adopt it. The blocker isn't awareness — it's
            that LLM agents don't have the control surfaces a real business needs.`}
          </p>
        </header>

        <div className={styles.problemGrid}>
          {PROBLEM_CARDS.map((card) => (
            <article key={card.title} className={styles.problemCard}>
              <h3 className={styles.problemCardTitle}>{card.title}</h3>
              <p className={styles.problemCardBody}>{card.body}</p>
            </article>
          ))}
        </div>

        <p className={styles.problemClosing}>
          {`These three gaps — control, isolation, and cost visibility — are what stop AI from becoming an actual
          operating layer in real companies.`}
        </p>
      </div>
    </section>
  );
};
