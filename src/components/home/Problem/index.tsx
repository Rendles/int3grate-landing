import { Cpu, ShieldCheck, Workflow } from 'lucide-react';

import styles from './style.module.css';

const FEATURES = [
  {
    icon: Workflow,
    title: 'AI workflows that touch real operations',
    text: 'We map repetitive processes across sales, admin, finance, and operations, then turn them into secure AI-driven workflows with human oversight.'
  },
  {
    icon: ShieldCheck,
    title: 'Controlled automation',
    text: 'Critical actions stay behind approvals. Your team decides what can run automatically and what must be reviewed before execution.'
  },
  {
    icon: Cpu,
    title: 'Built for adoption, not demos',
    text: 'We focus on measurable outcomes: hours saved, faster response times, fewer bottlenecks, and clearer visibility into how agents perform.'
  }
];

export const WhyIntegrate = () => {
  return (
    <section id="why" className={styles.why} aria-labelledby="why-heading">
      <div className={styles.whyInner}>
        <h2 id="why-heading" className="sr-only">
          Why Int3grate
        </h2>
        <div className={styles.whyGrid}>
          {FEATURES.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className={styles.whyCard}>
                <div className={styles.whyCardIconWrap}>
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className={styles.whyCardTitle}>{card.title}</h3>
                <p className={styles.whyCardText}>{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
