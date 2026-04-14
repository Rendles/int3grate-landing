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

export const HeroDashboard = () => {
  return (
    <figure
      className={styles.dashboard}
      role="img"
      aria-label="Control Center dashboard mockup showing active AI agents, hours saved, and pending approvals.">
      <div className={styles.dashboardHeader}>
        <div>
          <span className={styles.dashboardHeaderLabel}>CONTROL CENTER</span>
          <span className={styles.dashboardHeaderSub}>Automation overview</span>
        </div>
        <Badge tone="success">Live systems</Badge>
      </div>

      <div className={styles.dashboardKpis}>
        <div className={styles.dashboardKpi}>
          <span className={styles.dashboardKpiLabel}>Estimated hours saved</span>
          <span className={styles.dashboardKpiValue}>186</span>
          <span className={styles.dashboardKpiNote}>
            <span className={styles.dashboardKpiCheck} aria-hidden="true">
              &#10003;
            </span>
            Measurable weekly impact
          </span>
        </div>
        <div className={styles.dashboardKpi}>
          <span className={styles.dashboardKpiLabel}>Approvals pending</span>
          <span className={styles.dashboardKpiValue}>4</span>
          <span className={styles.dashboardKpiCaption}>Critical actions held for human review</span>
        </div>
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
          {AGENTS.map((agent) => (
            <div key={agent.name} className={styles.dashboardAgentRow}>
              <div className={styles.dashboardAgentInfo}>
                <span className={styles.dashboardAgentName}>{agent.name}</span>
                <span className={styles.dashboardAgentTask}>{agent.task}</span>
              </div>
              <Badge tone={agent.tone}>{agent.status}</Badge>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
};
