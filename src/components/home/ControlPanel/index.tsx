'use client';

import { useEffect, useRef, useState } from 'react';
import { LayoutGrid, TrendingDown, TrendingUp } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';

import styles from './style.module.css';

import { Badge, Button, Link } from '@/shared';

type StatusTone = 'success' | 'info' | 'warning' | 'neutral';

interface Department {
  name: string;
  status: string;
  statusTone: StatusTone;
  leadGroup: string;
  focus: string;
  agents: number;
  activeTasks: number;
  efficiency: number;
  riskLevel: string;
  outcomeSignal: string;
  outcomeTrend: 'up' | 'down';
}

const DEPARTMENTS: Department[] = [
  {
    name: 'Sales',
    status: 'On Track',
    statusTone: 'success',
    leadGroup: 'Revenue Ops',
    focus: 'Pipeline expansion, outbound conversion, enterprise follow-ups',
    agents: 6,
    activeTasks: 21,
    efficiency: 87,
    riskLevel: 'Low',
    outcomeSignal: '+14 qualified meetings',
    outcomeTrend: 'up'
  },
  {
    name: 'Marketing',
    status: 'Accelerating',
    statusTone: 'info',
    leadGroup: 'Growth',
    focus: 'Campaign launches, content production, lead nurturing',
    agents: 5,
    activeTasks: 18,
    efficiency: 81,
    riskLevel: 'Medium',
    outcomeSignal: '+31% campaign reach',
    outcomeTrend: 'up'
  },
  {
    name: 'Accounting',
    status: 'Stable',
    statusTone: 'neutral',
    leadGroup: 'Finance',
    focus: 'Expense reconciliation, invoicing, cash flow monitoring',
    agents: 4,
    activeTasks: 12,
    efficiency: 92,
    riskLevel: 'Low',
    outcomeSignal: '-18% reconciliation time',
    outcomeTrend: 'down'
  },
  {
    name: 'R&D',
    status: 'Exploring',
    statusTone: 'warning',
    leadGroup: 'Product Lab',
    focus: 'Workflow testing, prototype validation, knowledge expansion',
    agents: 7,
    activeTasks: 26,
    efficiency: 76,
    riskLevel: 'Medium',
    outcomeSignal: '+9 prototypes shipped',
    outcomeTrend: 'up'
  }
];

function useCountUp(target: number, active: boolean, skip: boolean, duration = 1000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (skip) {
      setValue(target);
      return;
    }
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, skip]);
  return value;
}

const RISK_DOT: Record<string, string> = {
  Low: styles.riskDotLow,
  Medium: styles.riskDotMedium
};

const MetricCell = ({
  label,
  rawValue,
  dept,
  inView,
  skip
}: {
  label: string;
  rawValue: number | string;
  dept: Department;
  inView: boolean;
  skip: boolean;
}) => {
  const isNumber = typeof rawValue === 'number';
  const counted = useCountUp(isNumber ? rawValue : 0, inView, skip);

  if (label === 'Efficiency') {
    const pct = isNumber ? counted : parseInt(rawValue as string);
    return (
      <div className={styles.metricCell}>
        <span className={styles.metricLabel}>{label}</span>
        <span className={styles.metricValue}>{pct}%</span>
        <div className={styles.efficiencyBar} aria-hidden="true">
          <div className={styles.efficiencyFill} style={{ width: inView ? `${dept.efficiency}%` : '0%' }} />
        </div>
      </div>
    );
  }

  if (label === 'Risk Level') {
    return (
      <div className={styles.metricCell}>
        <span className={styles.metricLabel}>{label}</span>
        <span className={styles.metricValue}>
          <span className={`${styles.riskDot} ${RISK_DOT[rawValue as string] || ''}`} aria-hidden="true" />
          {rawValue}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.metricCell}>
      <span className={styles.metricLabel}>{label}</span>
      <span className={styles.metricValue}>{isNumber ? counted : rawValue}</span>
    </div>
  );
};

const getMetricRaw = (dept: Department, label: string): number | string => {
  switch (label) {
    case 'Agents':
      return dept.agents;
    case 'Active Tasks':
      return dept.activeTasks;
    case 'Efficiency':
      return dept.efficiency;
    case 'Risk Level':
      return dept.riskLevel;
    default:
      return '';
  }
};

const METRICS_LABELS = ['Agents', 'Active Tasks', 'Efficiency', 'Risk Level'] as const;

export const ControlPanel = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const inView = useInView(frameRef, { once: true, amount: 0.15 });
  const reducedMotion = useReducedMotion();
  const animate = !reducedMotion;

  return (
    <motion.section
      id="control-panel"
      className={styles.section}
      aria-labelledby="cp-heading"
      initial={animate ? { opacity: 0, y: 24 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}>
      <div className={styles.sectionInner}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <LayoutGrid size={14} aria-hidden="true" />
            <span>Inside the platform</span>
          </div>
          <h2 id="cp-heading" className={styles.heading}>
            Your company, from above.
          </h2>
          <p className={styles.subheading}>
            {`View your organization from above. Group agents by department, track what each function is focused on, and understand where performance is compounding or slowing down.`}
          </p>
        </header>

        <div ref={frameRef} className={styles.frame}>
          {/* Decorative background layers */}
          <div className={styles.frameBgGrid} aria-hidden="true" />
          <div className={styles.frameBgGlow} aria-hidden="true" />
          {animate && <div className={styles.frameBgScan} aria-hidden="true" />}

          <div className={styles.frameHeader}>
            <div className={styles.frameHeaderLeft}>
              <h3 className={styles.frameTitle}>Department Groups</h3>
              <span className={styles.frameCaption}>A high-level view of each operational cluster and its agents.</span>
            </div>
            <div className={styles.frameBadge}>
              <span className={animate ? styles.frameBadgeDot : styles.frameBadgeDotStatic} aria-hidden="true" />
              <span>Live Structure</span>
            </div>
          </div>

          <div className={styles.cardGrid}>
            {DEPARTMENTS.map((dept, idx) => (
              <motion.article
                key={dept.name}
                className={styles.card}
                initial={animate ? { opacity: 0, y: 24 } : undefined}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}>
                <div className={styles.cardHeader}>
                  <div>
                    <h4 className={styles.cardName}>{dept.name}</h4>
                    <span className={styles.cardLead}>Lead Group: {dept.leadGroup}</span>
                  </div>
                  <Badge tone={dept.statusTone}>{dept.status}</Badge>
                </div>

                <div className={styles.cardFocus}>
                  <span className={styles.cardFocusLabel}>CURRENT FOCUS</span>
                  <p className={styles.cardFocusText}>{dept.focus}</p>
                </div>

                <div className={styles.metricsGrid}>
                  {METRICS_LABELS.map((label) => (
                    <MetricCell
                      key={label}
                      label={label}
                      rawValue={getMetricRaw(dept, label)}
                      dept={dept}
                      inView={inView}
                      skip={!!reducedMotion}
                    />
                  ))}
                </div>

                <div className={`${styles.outcomeRow} ${animate ? styles.outcomeRowAnimated : ''}`}>
                  <span className={styles.outcomeLabel}>OUTCOME SIGNAL</span>
                  <span className={styles.outcomeValue}>
                    {dept.outcomeTrend === 'up' ? (
                      <TrendingUp size={14} className={styles.outcomeIcon} aria-hidden="true" />
                    ) : (
                      <TrendingDown size={14} className={styles.outcomeIcon} aria-hidden="true" />
                    )}
                    {dept.outcomeSignal}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.bottomCaption}>
            {`This is how Int3grate renders your organization — every department grouped, every agent accounted for, every outcome visible. What you see above is a live structural view, not a static dashboard.`}
          </p>
          <Link href="#contact">
            <Button color="white" size="md">
              See how it would map to your company
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
