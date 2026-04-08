import styles from './style.module.css';

const LAYERS = [
  {
    name: 'Experience Layer',
    note: 'Web app, dashboards, admin panel, agent builder, approvals inbox, chat'
  },
  {
    name: 'API Gateway / BFF',
    note: 'Auth, tenant resolution, rate limiting, request validation'
  },
  {
    name: 'Control Plane Services',
    note: 'Agent Registry, Task Service, Approval Service, Memory/Knowledge, Integration, Policy, Analytics/Cost, Audit'
  },
  {
    name: 'Orchestration Layer',
    note: 'Workflow execution, retries, schedule triggers, suspended states, branching'
  },
  {
    name: 'Runtime / Execution Workers',
    note: 'LLM invocation, retrieval, tool calls, validation, formatting'
  },
  {
    name: 'Integration / Tool Layer',
    note: 'Connectors to external systems'
  },
  {
    name: 'Data Layer',
    note: 'Primary database, cache, analytics store, object storage'
  },
  {
    name: 'Cross-Cutting Layers',
    note: 'Security, audit, observability, economics'
  }
];

/**
 * 8-layer architecture diagram per spec §7. HTML/CSS, no vendor logos.
 * Horizontally scrollable on mobile (spec §12.5) — never zoomable.
 */
export const ArchitectureDiagram = () => {
  return (
    <figure
      className={styles.archDiagram}
      role="img"
      aria-label="Eight-layer architecture diagram of the Int3grate control plane: Experience, API Gateway, Control Plane Services, Orchestration, Runtime workers, Integration, Data, and Cross-Cutting layers.">
      <ol className={styles.archLayers}>
        {LAYERS.map((layer, index) => (
          <li key={layer.name} className={styles.archLayer}>
            <span className={styles.archLayerIndex} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className={styles.archLayerText}>
              <span className={styles.archLayerName}>{layer.name}</span>
              <span className={styles.archLayerNote}>{layer.note}</span>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
};
