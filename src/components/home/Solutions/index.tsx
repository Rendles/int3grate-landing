import { Bot, Briefcase, CircleDollarSign, Clock } from 'lucide-react';

import styles from './style.module.css';

const SOLUTIONS = [
  {
    icon: Briefcase,
    title: 'Sales Enablement',
    detail: 'Lead qualification, follow-up drafting, CRM hygiene, pipeline summaries, and proposal workflows.'
  },
  {
    icon: Bot,
    title: 'Admin Automation',
    detail: 'Inbox triage, scheduling, document collection, approvals, onboarding, and recurring task coordination.'
  },
  {
    icon: CircleDollarSign,
    title: 'Financial Visibility',
    detail:
      'Agent cost tracking, time saved, margin impact, and recommendations for where automation should expand next.'
  }
];

export const Solutions = () => {
  return (
    <section id="solutions" className={styles.solutions} aria-labelledby="solutions-heading">
      <div className={styles.solutionsInner}>
        <div className={styles.solutionsLeft}>
          <div className={styles.solutionsPill}>
            <Clock size={14} aria-hidden="true" />
            <span>What we build</span>
          </div>

          <h2 id="solutions-heading" className={styles.solutionsHeading}>
            We design systems that reduce busywork and create operational leverage.
          </h2>

          <p className={styles.solutionsBody}>
            {`Whether you need a first automation layer or a broader AI operating model, Int3grate.ai helps you move from scattered tools to integrated execution.`}
          </p>
        </div>

        <div className={styles.solutionsRight}>
          {SOLUTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.title} className={styles.solutionCard}>
                <div className={styles.solutionCardIconWrap}>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div className={styles.solutionCardContent}>
                  <h3 className={styles.solutionCardTitle}>{s.title}</h3>
                  <p className={styles.solutionCardDetail}>{s.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
