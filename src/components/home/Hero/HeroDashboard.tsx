'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

import styles from './style.module.css';

import { Badge } from '@/shared';

const AGENTS = [
  { name: 'Sales Agent', task: 'Lead follow-up and pipeline prep', status: 'Healthy', tone: 'success' as const },
  { name: 'Admin Agent', task: 'Inbox triage and scheduling', status: 'Healthy', tone: 'success' as const },
  {
    name: 'Marketing Agent',
    task: 'Content ops and campaign QA',
    status: 'Needs review',
    tone: 'warning' as const
  },
  {
    name: 'Finance Agent',
    task: 'Reporting and expense checks',
    status: 'Approval required',
    tone: 'info' as const
  }
];

const STATUS_DOT_CLASS: Record<string, string> = {
  success: styles.statusDotSuccess,
  warning: styles.statusDotWarning,
  info: styles.statusDotInfo
};

function useCountUp(target: number, inView: boolean, reducedMotion: boolean | null, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setValue(target);
      return;
    }

    let start: number | null = null;
    let raf: number;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, reducedMotion]);

  return value;
}

export const HeroDashboard = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reducedMotion = useReducedMotion();

  const hoursSaved = useCountUp(186, inView, reducedMotion);
  const approvalsPending = useCountUp(4, inView, reducedMotion, 800);

  const animate = !reducedMotion;

  return (
    <motion.figure
      ref={ref}
      className={`${styles.dashboard} ${animate ? styles.dashboardAnimated : ''}`}
      role="img"
      aria-label="Control Center dashboard mockup showing active AI agents, hours saved, and pending approvals."
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {animate && <div className={styles.dashboardSweep} aria-hidden="true" />}

      <div className={styles.dashboardHeader}>
        <div>
          <span className={styles.dashboardHeaderLabel}>CONTROL CENTER</span>
          <span className={styles.dashboardHeaderSub}>Automation overview</span>
        </div>
        <Badge tone="success" className={styles.liveBadge}>
          <span className={`${styles.statusDot} ${animate ? styles.statusDotSuccess : ''}`} aria-hidden="true" />
          Live systems
        </Badge>
      </div>

      <div className={styles.dashboardKpis}>
        <motion.div
          className={styles.dashboardKpi}
          initial={animate ? { opacity: 0, y: 16 } : undefined}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, delay: 0.15 }}>
          <span className={styles.dashboardKpiLabel}>Estimated hours saved</span>
          <span className={styles.dashboardKpiValue}>{hoursSaved}</span>
          <span className={styles.dashboardKpiNote}>
            <span className={styles.dashboardKpiCheck} aria-hidden="true">
              &#10003;
            </span>
            Measurable weekly impact
          </span>
        </motion.div>
        <motion.div
          className={styles.dashboardKpi}
          initial={animate ? { opacity: 0, y: 16 } : undefined}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, delay: 0.25 }}>
          <span className={styles.dashboardKpiLabel}>Approvals pending</span>
          <span className={styles.dashboardKpiValue}>{approvalsPending}</span>
          <span className={styles.dashboardKpiCaption}>Critical actions held for human review</span>
        </motion.div>
      </div>

      <div className={styles.dashboardAgents}>
        <div className={styles.dashboardAgentsHeader}>
          <div>
            <span className={styles.dashboardAgentsTitle}>Active agents</span>
            <span className={styles.dashboardAgentsSub}>Business workflow stack</span>
          </div>
          <span className={styles.dashboardAgentsUpdated}>Updated in real time</span>
        </div>

        <div className={styles.dashboardAgentsList}>
          {AGENTS.map((agent, idx) => (
            <motion.div
              key={agent.name}
              className={styles.dashboardAgentRow}
              initial={animate ? { opacity: 0, x: -12 } : undefined}
              animate={inView ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 0.4, delay: 0.35 + idx * 0.08 }}>
              <div className={styles.dashboardAgentInfo}>
                <span className={styles.dashboardAgentName}>{agent.name}</span>
                <span className={styles.dashboardAgentTask}>{agent.task}</span>
              </div>
              <Badge tone={agent.tone}>
                <span
                  className={`${styles.statusDot} ${animate ? STATUS_DOT_CLASS[agent.tone] || '' : ''}`}
                  aria-hidden="true"
                />
                {agent.status}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.figure>
  );
};
