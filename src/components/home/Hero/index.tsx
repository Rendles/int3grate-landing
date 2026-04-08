import { HeroDiagram } from './HeroDiagram';

import styles from './style.module.css';

import { Button, EmailNotifyInput, Link } from '@/shared';

export const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <h1 id="hero-heading" className={styles.heroHeadline}>
            The control plane for your AI workforce.
          </h1>

          <p className={styles.heroSubheadline}>
            {`Int3grate gives your team AI workers with real boundaries — separated by department, gated by human
            approval, and tracked down to the dollar. Built for SMBs that want AI in operations, not just in chat.`}
          </p>

          <div className={styles.heroBadge} role="status">
            <span className={styles.heroBadgeDot} aria-hidden="true" />
            <span className={styles.heroBadgeSegment}>Building in the open</span>
            <span className={styles.heroBadgeSeparator} aria-hidden="true">
              ·
            </span>
            <span className={styles.heroBadgeSegment}>Public launch mid-2026</span>
            <span className={styles.heroBadgeSeparator} aria-hidden="true">
              ·
            </span>
            <span className={styles.heroBadgeSegment}>Founding cohort forming now</span>
          </div>

          <div className={styles.heroCtas}>
            <Link href="/#apply">
              <Button color="green" size="lg">
                Apply to the founding cohort
              </Button>
            </Link>

            <a href="#workflow" className={styles.heroSecondaryLink}>
              See the workflow ↓
            </a>
          </div>

          <div className={styles.heroNotify}>
            <EmailNotifyInput id="hero-email-notify" helperText="Or just stay in the loop:" />
          </div>
        </div>

        <div className={styles.heroVisual}>
          <HeroDiagram />
        </div>
      </div>
    </section>
  );
};
