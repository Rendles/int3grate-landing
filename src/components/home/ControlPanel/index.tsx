'use client';

import { LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';

import styles from './style.module.css';

import { Badge, Button, Link } from '@/shared';

type StatusTone = 'success' | 'info' | 'warning' | 'neutral';

interface Department {
  name: string;
  status: string;
  statusTone: StatusTone;
  leadGroup: string;
  focus: string;
  agents: string;
  activeTasks: string;
  efficiency: string;
  riskLevel: string;
  outcomeSignal: string;
}

const DEPARTMENTS: Department[] = [
  {
    name: 'Sales',
    status: 'On Track',
    statusTone: 'success',
    leadGroup: 'Revenue Ops',
    focus: 'Pipeline expansion, outbound conversion, enterprise follow-ups',
    agents: '6',
    activeTasks: '21',
    efficiency: '87%',
    riskLevel: 'Low',
    outcomeSignal: '+14 qualified meetings'
  },
  {
    name: 'Marketing',
    status: 'Accelerating',
    statusTone: 'info',
    leadGroup: 'Growth',
    focus: 'Campaign launches, content production, lead nurturing',
    agents: '5',
    activeTasks: '18',
    efficiency: '81%',
    riskLevel: 'Medium',
    outcomeSignal: '+31% campaign reach'
  },
  {
    name: 'Accounting',
    status: 'Stable',
    statusTone: 'neutral',
    leadGroup: 'Finance',
    focus: 'Expense reconciliation, invoicing, cash flow monitoring',
    agents: '4',
    activeTasks: '12',
    efficiency: '92%',
    riskLevel: 'Low',
    outcomeSignal: '-18% reconciliation time'
  },
  {
    name: 'R&D',
    status: 'Exploring',
    statusTone: 'warning',
    leadGroup: 'Product Lab',
    focus: 'Workflow testing, prototype validation, knowledge expansion',
    agents: '7',
    activeTasks: '26',
    efficiency: '76%',
    riskLevel: 'Medium',
    outcomeSignal: '+9 prototypes shipped'
  }
];

const METRICS_LABELS = ['Agents', 'Active Tasks', 'Efficiency', 'Risk Level'] as const;

const getMetricValue = (dept: Department, label: string) => {
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

export const ControlPanel = () => {
  return (
    <motion.section
      id="control-panel"
      className={styles.section}
      aria-labelledby="cp-heading"
      initial={{ opacity: 0, y: 24 }}
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

        <div className={styles.frame}>
          <div className={styles.frameHeader}>
            <div className={styles.frameHeaderLeft}>
              <h3 className={styles.frameTitle}>Department Groups</h3>
              <span className={styles.frameCaption}>A high-level view of each operational cluster and its agents.</span>
            </div>
            <div className={styles.frameBadge}>
              <span className={styles.frameBadgeDot} aria-hidden="true" />
              <span>Live Structure</span>
            </div>
          </div>

          <div className={styles.cardGrid}>
            {DEPARTMENTS.map((dept, idx) => (
              <motion.article
                key={dept.name}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
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
                    <div key={label} className={styles.metricCell}>
                      <span className={styles.metricLabel}>{label}</span>
                      <span className={styles.metricValue}>{getMetricValue(dept, label)}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.outcomeRow}>
                  <span className={styles.outcomeLabel}>OUTCOME SIGNAL</span>
                  <span className={styles.outcomeValue}>{dept.outcomeSignal}</span>
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
