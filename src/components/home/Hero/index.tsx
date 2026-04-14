'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

import { HeroDashboard } from './HeroDashboard';

import styles from './style.module.css';

import { Button, Link } from '@/shared';

const METRICS = [
  { value: '24/7', label: 'Agent availability' },
  { value: 'Human-in-loop', label: 'Approval controls' },
  { value: 'Fast rollout', label: 'Practical implementation' }
];

export const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge} role="status">
            <Sparkles size={14} className={styles.heroBadgeIcon} aria-hidden="true" />
            <span className={styles.heroBadgeText}>Agentic AI integration for real business operations</span>
          </div>

          <h1 id="hero-heading" className={styles.heroHeadline}>
            Turn repetitive work into AI-driven systems your team can actually trust.
          </h1>

          <p className={styles.heroSubheadline}>
            {`Int3grate.ai designs and deploys practical AI workflows for growing companies. We help your business automate execution across sales, admin, and operations while keeping humans in control where it matters most.`}
          </p>

          <div className={styles.heroCtas}>
            <Link href="#contact">
              <Button color="green" size="lg">
                Request a consultation
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </Link>

            <Link href="#solutions">
              <Button color="white" size="lg">
                Explore solutions
              </Button>
            </Link>
          </div>

          <div className={styles.heroMetrics}>
            {METRICS.map((m) => (
              <div key={m.label} className={styles.heroMetricCard}>
                <span className={styles.heroMetricValue}>{m.value}</span>
                <span className={styles.heroMetricLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroVisual}>
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
};
